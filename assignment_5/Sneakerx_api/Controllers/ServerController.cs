using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Sneakerx_api.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sneakerx_api.Controllers
{
    public class ServerController : Controller
    {
        static UserManager um = new UserManager();
        static Cart cart = new Cart();

        [HttpGet]
        [Route("api/[controller]/All")]
        public IEnumerable<User> Get()
        {
            return um.GetAll;
        }

        [HttpGet]
        [Route("api/[controller]/GetItem")]
        public List<Item> GetItem()
        {
            List<Item> itemlist = new List<Item>();
            var dbCon = DatabaseConnection.Instance();
            dbCon.DatabaseName = "HW_5";
            if (dbCon.IsConnect())
            {
                string query = "SELECT * FROM items";
                var cmd = new MySqlCommand(query, dbCon.Connection);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        itemlist.Add(new Item()
                        {
                            //this.itemID = itemID;
                            //this.itemName = itemName;
                            //this.itemAmount = itemAmount;
                            //this.price = price;
                            //this.description = description;
                            //this.picLink = picLink;
                            itemID = Convert.ToInt32(reader["itemID"]),
                            itemName = reader["itemName"].ToString(),
                            itemSize = reader["itemSize"].ToString(),
                            itemAmount = Convert.ToInt32(reader["itemAmount"]),
                            price = Convert.ToDouble(reader["price"]),
                            description = reader["description"].ToString(),
                            picLink = reader["picLink"].ToString()
                        });
                    }
                }
                //dbCon.Close();
            }
            return itemlist;
        }

        // POST api/values
        [HttpPost]
        [Route("api/[controller]/PostLogin")]
        public async Task<User> PostLogin([FromBody]LoginInfo loginInfo)
        {
            string logEmailAddress = loginInfo.emailAddress;
            string logPwd = loginInfo.pwd;
            User loginUser = um.Login(logEmailAddress, logPwd);
            return loginUser;
        }

        [HttpPost]
        [Route("api/[controller]/PostRegister")]
        public async Task<User> PostRegister([FromBody]RegisterInfo registerInfo)
        {
            String userName = registerInfo.userName;
            String email = registerInfo.emailAddress;
            String pwd = registerInfo.pwd;
            double balance = registerInfo.balance;
            String shippingAddress = registerInfo.shippingAddress;
            string phone = registerInfo.phoneNo;
            string zip = registerInfo.zipCode;
            string country = registerInfo.country;
            User user = um.RegisterUser(userName, email, pwd, balance, shippingAddress, phone, zip, country);
            return user;
        }

        [HttpPost]
        [Route("api/[controller]/PostAddToCart")]
        public async Task PostAddToCart([FromBody]CartInfo cartInfo)
        {
            cart.Update(cartInfo);
            cart.CartUpdate();
        }

        [HttpPost]
        [Route("api/[controller]/GetCartAsync")]
        public List<CartInfo> GetCartAsync([FromBody]int userID)
        {
            cart.CartUpdate();
            return cart.GetUserCart(userID);
        }

        [HttpPost]
        [Route("api/[controller]/CheckOutAsync")]
        public Double CheckOutAsync([FromBody]int userID)
        {
            List<CartInfo> itemBought = new List<CartInfo>();
            itemBought = cart.GetUserCart(userID);
            Double moneySpent = 0.0;
            string connString = "SERVER=localhost" + ";" +
                                "DATABASE=HW_5;" +
                                "UID=root;" +
                                "PASSWORD=712918Lwslbs;";
            //cmdMySQL.Parameters.Add("@pwd", MySqlDbType.VarChar).Value = pwd;
            //cmdMySQL.Parameters.Add("@userID", MySqlDbType.Int64).Value = nextID;
            //cmdMySQL.Parameters.Add("@balance", MySqlDbType.Double).Value = balance;
            MySqlConnection cnMySQL = new MySqlConnection(connString);
            cnMySQL.Open();

            MySqlCommand cmdMySQL_cart = cnMySQL.CreateCommand();
            foreach (CartInfo ci in itemBought)
            {
                MySqlCommand cmdMySQL_users = cnMySQL.CreateCommand();
                MySqlCommand cmdMySQL_items = cnMySQL.CreateCommand();
                cmdMySQL_items.CommandText = "update items set itemAmount = itemAmount-@itemInCartAmount where items.itemID=@ci.itemID;";
                cmdMySQL_items.Parameters.Add("@ci.itemID", MySqlDbType.Int32).Value = ci.itemID;
                cmdMySQL_items.Parameters.Add("@itemInCartAmount", MySqlDbType.Int32).Value = ci.itemInCartAmount;
                moneySpent = ci.price * ci.itemInCartAmount;
                cmdMySQL_users.CommandText = "update users set balance = balance-@moneySpent where users.userID=@userID;";
                cmdMySQL_users.Parameters.Add("@userID", MySqlDbType.Int32).Value = userID;
                cmdMySQL_users.Parameters.Add("@moneySpent", MySqlDbType.Double).Value = moneySpent;
                cmdMySQL_users.ExecuteNonQuery();
                cmdMySQL_items.ExecuteNonQuery();
            }
            cmdMySQL_cart.CommandText = "delete FROM cart WHERE cart.userID=@userID;";
            cmdMySQL_cart.Parameters.Add("@userID", MySqlDbType.Int32).Value = userID;
            cmdMySQL_cart.ExecuteNonQuery();
            um.UmUpdate();
            return um.GetBalance(userID);
        }

    }
}
