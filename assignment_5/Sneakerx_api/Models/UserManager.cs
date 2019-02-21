using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;

namespace Sneakerx_api.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class UserManager
    {
        List<User> _users;

        public UserManager()
        {
            _users = new List<User>();

            //{
            //    new User("Wensong Liu", "lws.19940712@gmail.com", "lws1994", 000001, 3000.00, "Huazhong University of Science and Technology, Yunyuan 114, Wuhan", "13260595829", "430074", "China"),
            //    new User("Dino Konstantopoulos", "dino.k@northeastern.edu", "ProfDino6250", 000002, 10000.00, "Northeastern University, Snell Library 115, Boston", "8570000000", "02115", "America"),
            //    new User("Meven Edwin DCunha", "dcunha.m@husky.neu.edu", "Meven6250TA", 000003, 5000.00, "Don Bosco Institute of Technology, Electronics and Communications Engineering, Mumbai", "62506250", "400070", "India")
            //};


            //****************************************  Try 1  *****************************************************
            var dbCon = DatabaseConnection.Instance();
            dbCon.DatabaseName = "HW_5";
            if (dbCon.IsConnect())
            {
                string query = "SELECT * FROM users";
                var cmd = new MySqlCommand(query, dbCon.Connection);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        _users.Add(new User()
                        {
                            userName = reader["userName"].ToString(),
                            emailAddress = reader["emailAddress"].ToString(),
                            pwd = reader["pwd"].ToString(),
                            userID = Convert.ToInt32(reader["userID"]),
                            balance = Convert.ToDouble(reader["balance"]),
                            shippingAddress = reader["shippingAddress"].ToString(),
                            phoneNo = reader["phoneNo"].ToString(),
                            zipCode = reader["zipCode"].ToString(),
                            country = reader["country"].ToString()
                        });
                    }
                }
                //dbCon.Close();
            }

            //****************************************  Try 2  *****************************************************
            //string connString = "SERVER=localhost" + ";" +
            //                    "DATABASE=HW_5;" +
            //                    "UID=root;" +
            //                    "PASSWORD=712918Lwslbs;";

            //MySqlConnection cnMySQL = new MySqlConnection(connString);

            //MySqlCommand cmdMySQL = cnMySQL.CreateCommand();

            //MySqlDataReader reader;

            //cmdMySQL.CommandText = "select * from users";

            //cnMySQL.Open();

            //reader = cmdMySQL.ExecuteReader();

            //DataTable dt = new DataTable();
            //dt.Load(reader);


            //cnMySQL.Close();


            //_users = (from DataRow row in dt.Rows

            //select new User
            //{
            //    _FirstName = row["FirstName"].ToString(),
            //    _LastName = row["Last_Name"].ToString()

            //}).ToList();

        }

        //to see whether DB works
        public IEnumerable<User> GetAll { get { return _users; } }

        public User Login(string emailAddress, string password)
        {
            if (_users.Any(o => (o.emailAddress.Equals(emailAddress) && o.pwd.Equals(password))))
                return _users.Where(o => o.emailAddress.Equals(emailAddress)).ToList()[0];
            else if (_users.Any(o => (o.emailAddress.Equals(emailAddress) && (!o.pwd.Equals(password)))))
                return _users[2];
            else return _users[0];
        }

        public User RegisterUser_test(String userName, String emailAddress, String pwd, Double balance, String shippingAddress, String phoneNo, String zipCode, String country)
        {
            return _users[1];
            //int nextID = (from u in _users select u.userID).Max() + 1;
            //User user = new User(userName, emailAddress, pwd, nextID, balance, shippingAddress, phoneNo, zipCode, country);
            //if (_users.Any(o => (o.emailAddress.Equals(user.emailAddress))))
            //{
            //    return _users[1];
            //}
            //else
            //{
            //    _users.Add(user);
            //    //return _users.Where(o => o.emailAddress.Equals(user.emailAddress)).ToList()[0];
            //    return user;
            //}
        }

        public User RegisterUser(String userName, String emailAddress, String pwd, Double balance, String shippingAddress, String phoneNo, String zipCode, String country)
        {
            int nextID = (from u in _users select u.userID).Max() + 1;
            User user = new User(userName, emailAddress, pwd, nextID, balance, shippingAddress, phoneNo, zipCode, country);
            if (_users.Any(o => (o.emailAddress.Equals(user.emailAddress))))
            {
                return _users[1];
            }
            else
            {
                //local test for register function;
                _users.Add(user);

                //var dbCon = DatabaseConnection.Instance();
                //dbCon.DatabaseName = "HW_5";
                //bool yes = dbCon.IsConnect();
                //if (yes)
                //{
                //string query = "SELECT * FROM users";
                string connString = "SERVER=localhost" + ";" +
                                    "DATABASE=HW_5;" +
                                    "UID=root;" +
                                    "PASSWORD=712918Lwslbs;";

                MySqlConnection cnMySQL = new MySqlConnection(connString);
                cnMySQL.Open();
                MySqlCommand cmdMySQL = cnMySQL.CreateCommand();
                //var cmd = new MySqlCommand();
                //cmdMySQL.Connection = cnMySQL.Connection;
                cmdMySQL.CommandText = "INSERT INTO users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country) VALUES(@userName, @emailAddress, @pwd, @userID, @balance, @shippingAddress, @phoneNo, @zipCode, @country);";
                cmdMySQL.Parameters.Add("@userName", MySqlDbType.VarChar).Value = userName;
                cmdMySQL.Parameters.Add("@emailAddress", MySqlDbType.VarChar).Value = emailAddress;
                cmdMySQL.Parameters.Add("@pwd", MySqlDbType.VarChar).Value = pwd;
                cmdMySQL.Parameters.Add("@userID", MySqlDbType.Int64).Value = nextID;
                cmdMySQL.Parameters.Add("@balance", MySqlDbType.Double).Value = balance;
                cmdMySQL.Parameters.Add("@shippingAddress", MySqlDbType.VarChar).Value = shippingAddress;
                cmdMySQL.Parameters.Add("@phoneNo", MySqlDbType.VarChar).Value = phoneNo;
                cmdMySQL.Parameters.Add("@zipCode", MySqlDbType.VarChar).Value = zipCode;
                cmdMySQL.Parameters.Add("@country", MySqlDbType.VarChar).Value = country;
                cmdMySQL.ExecuteNonQuery();
                //cnMySQL.Close();
                //}

                //return _users.Where(o => o.emailAddress.Equals(user.emailAddress)).ToList()[0];
                return user;
            }


            //var dbCon = DatabaseConnection.Instance();
            //dbCon.DatabaseName = "HW_5";
            //if (dbCon.IsConnect())
            //{
            //    //string query = "SELECT * FROM users";
            //    MySqlCommand cmd = new MySqlCommand();
            //    cmd.CommandText = "INSERT INTO users(userName, emailAddress, pwd, userID, balance, shippingAddress, phoneNo, zipCode, country) VALUES(@userName, @emailAddress, @pwd, @userID, @balance, @shippingAddress, @phoneNo, @zipCode, @country);";
            //    cmd.Parameters.AddWithValue("@userName", registerInfo.userName);
            //    cmd.Parameters.AddWithValue("@emailAddress", registerInfo.emailAddress);
            //    cmd.Parameters.AddWithValue("@pwd", registerInfo.pwd);
            //    cmd.Parameters.AddWithValue("@userID", IDnum);
            //    cmd.Parameters.AddWithValue("@balance", registerInfo.balance);
            //    cmd.Parameters.AddWithValue("@shippingAddress", registerInfo.shippingAddress);
            //    cmd.Parameters.AddWithValue("@phoneNo", registerInfo.phoneNo);
            //    cmd.Parameters.AddWithValue("@zipCode", registerInfo.zipCode);
            //    cmd.Parameters.AddWithValue("@country", registerInfo.country);
            //    cmd.ExecuteNonQuery();
            //    dbCon.Close();
            //}
        }

        public Double GetBalance(int userID)
        {
            return _users.Where(o => o.userID == userID).ToList()[0].balance;
        }

        public void UmUpdate()
        {
            _users = new List<User>();
            var dbCon = DatabaseConnection.Instance();
            dbCon.DatabaseName = "HW_5";
            if (dbCon.IsConnect())
            {
                string query = "SELECT * FROM users";
                var cmd = new MySqlCommand(query, dbCon.Connection);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        _users.Add(new User()
                        {
                            userName = reader["userName"].ToString(),
                            emailAddress = reader["emailAddress"].ToString(),
                            pwd = reader["pwd"].ToString(),
                            userID = Convert.ToInt32(reader["userID"]),
                            balance = Convert.ToDouble(reader["balance"]),
                            shippingAddress = reader["shippingAddress"].ToString(),
                            phoneNo = reader["phoneNo"].ToString(),
                            zipCode = reader["zipCode"].ToString(),
                            country = reader["country"].ToString()
                        });
                    }
                }
            }
        }
    }
}
