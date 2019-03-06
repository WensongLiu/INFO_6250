using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sneakerx_mvc.Models;

namespace Sneakerx_mvc.Controllers
{
    public class ClientController : Controller
    {
        static User login_user = null;
        static List<OrderInfo> orderlist;
        static List<CartInfo> cartlist;

        public IActionResult LoginPage()
        {
            login_user = null;
            orderlist = null;
            cartlist = null;
            return View("LoginPage");
        }

        //Crash function is uesd to test whether website can keep data safely.
        [HttpGet]
        public IActionResult Crash()
        {
            return View("Crash");
        }

        //MySQL's localhost address
        //local api for test
        //String urlString = "https://localhost:6001/";
        //azure api's url
        String urlString = "xxxxxxx";

        //-----------------------------------------------------------------------Login-------------------------------------------------------------------
        [HttpPost]
        public async Task<IActionResult> LoginAsync(String emailAddress, String password)
        {
            if(emailAddress == null || password == null)
            {
                ViewBag.Message = "All fields are required, please try again!";
                return View("LoginPage");
            }
            else 
            {
                var baseUri = new Uri(urlString);
                var serverClient = new ServerClient(urlString);
                LoginInfo loginInfo = new LoginInfo(emailAddress, password);
                login_user = await serverClient.LoginAsync(loginInfo);
                String pwd = login_user.pwd;
                String userName = login_user.userName;
                int userID = login_user.userID;
                double balance = login_user.balance;

                if (pwd.Equals("noExist")) return RegisterPage();
                else if (pwd.Equals("wrong")) return WrongPwd();
                else 
                {
                    String record_login = "User log in successfully!";
                    Log log_login = new Log(login_user.userID, record_login);
                    await serverClient.RecordLog(log_login);
                    return await AfterLoginAsync();
                }

            }
        }

        [Route("Client/LoginAsync/RegisterPage/")]
        //[ActionName("RegisterPage")]
        public IActionResult RegisterPage()
        {
            return View("RegisterPage");
        }

        [Route("Client/LoginAsync/WrongPwd/")]
        //[ActionName("")]
        public IActionResult WrongPwd()
        {
            return View("WrongPwd");
        }

        //---------------------------------------------------------------------- Register ----------------------------------------------------------------
        [HttpPost]
        [Route("Client/RegisterAsync/")]
        public async Task<IActionResult> RegisterAsync(String userName, String emailAddress, String pwd, String balance, String shippingAddress, String phoneNo, String zipCode, String country)
        {
            if(userName == null || emailAddress == null || pwd == null || balance == null || shippingAddress == null || phoneNo == null || zipCode == null || country == null) 
            {
                ViewBag.Message = "All fields are required, please try again!";
                return View("RegisterPage");
            }
            else 
            {
                var baseUri = new Uri(urlString);
                var serverClient = new ServerClient(urlString);
                Double bal = Convert.ToDouble(balance);
                RegisterInfo registerInfo = new RegisterInfo(userName, emailAddress, pwd, bal, shippingAddress, phoneNo, zipCode, country);
                //User user = ;
                String emailStatus = (await serverClient.RegisterAsync(registerInfo)).emailAddress;
                //User user = new User(registerInfo.userName, registerInfo.emailAddress, registerInfo.pwd, 8, registerInfo.balance, registerInfo.shippingAddress, registerInfo.phoneNo, registerInfo.zipCode, registerInfo.country);
                //String test = user.emailAddress;

                if (emailStatus.Equals("exist")) return View("AccountExists");
                else return View("RegisterSuccessfully");
            }
        }

        //------------------------------------------------- After login website displays all items automatically -----------------------------------------------
        [Route("Client/LoginAsync/Homepage/")]
        //[ActionName("AfterLogin")]
        public async Task<IActionResult> AfterLoginAsync()
        {
            return await getAllItems();
        }


        [HttpPost]
        [Route("Client/getAllItems/")]
        public async Task<IActionResult> getAllItems()
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);//
            List<Item> list = await serverClient.GetItemsAsync();
            //User user = new User(registerInfo.userName, registerInfo.emailAddress, registerInfo.pwd, 8, registerInfo.balance, registerInfo.shippingAddress, registerInfo.phoneNo, registerInfo.zipCode, registerInfo.country);
            //String test = user.emailAddress;
            //String name = userName;
            //int ID = userID;
            //Double bal = balance;
            ViewBag.User = login_user;
            //ViewBag.LinkableId = userID;
            //ViewBag.Message = userName;
            //ViewBag.Double = balance;
            //ViewBag.
            return View("Homepage", list);
        }

        //----------------------------------------------------------------- Add item to cart one by one ----------------------------------------------------------
        [HttpPost]
        [Route("Client/AddToCart/")]
        public async Task<IActionResult> AddToCartAsync(int userID, int itemID, string itemName, string itemSize, double price, string picLink, string addItemToCart)
        {
            int add;
            if (addItemToCart.Equals("Add To Cart"))
            {
                add = 1;
                ViewBag.Message = "Add To Cart Successfully!";
            }
            else {
                add = -1;
                ViewBag.Message = "Remove From Cart Successfully!";
            }

            CartInfo ci = new CartInfo(userID, itemID, itemName, itemSize, add, price, picLink);
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            await serverClient.AddToItemAsync(ci);
            List<CartInfo> cartlist = await serverClient.GetMyCartAsync(userID);
            List<Item> list = await serverClient.GetItemsAsync();
            ViewBag.User = login_user;
            //ViewBag.LinkableId = userID;
            //ViewBag.Double = balance;
            if (addItemToCart.Equals("Remove"))
            {
                String removeMessage ="Item "+ itemID + " has been removed from user's cart successfully!";
                Log log_itemAdd = new Log(userID, removeMessage);
                await serverClient.RecordLog(log_itemAdd);
                return View("Cart", cartlist);
            }
            else
            {
                String addMessage = "Item "+itemID + " has added to user's cart successfully!";
                Log log_itemAdd = new Log(userID, addMessage);
                await serverClient.RecordLog(log_itemAdd);
                return View("Homepage", list);
            } 
            //ViewData["Integer"] = userID;
            //return  View("Success");
        }

        //----------------------------------------------------------------- Show user's current cart ----------------------------------------------------------
        [HttpPost]
        [Route("Client/GetMyCartAsync/")]
        public async Task<IActionResult> GetMyCartAsync(int userID)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            cartlist = await serverClient.GetMyCartAsync(userID);
            ViewBag.User = login_user;
            return View("Cart", cartlist);
        }

        //----------------------------------------------------------- Check out then go back to homepage ---------------------------------------------------
        [HttpPost]
        [Route("Client/CheckOutAsync/")]
        public async Task<IActionResult> CheckOutAsync(int userID)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            double totalCost = 0.0;
            //To check balance
            foreach (CartInfo ci in cartlist)
            {
                totalCost += ci.price * ci.itemInCartAmount;
            }
            if(totalCost > login_user.balance)
            {
                ViewBag.User = login_user;
                ViewBag.Message = "Sorry, please add some balance first!";
                Log log_checkout = new Log(login_user.userID, "Check out failed. No enough balance.");
                await serverClient.RecordLog(log_checkout);
                return View("Cart", cartlist);
            }
            else
            {
                double balance = await serverClient.CheckOutAsync(userID);
                List<Item> list = await serverClient.GetItemsAsync();
                login_user.balance = balance;
                ViewBag.User = login_user;
                Log log_checkout = new Log(login_user.userID, "Check out succeeded.");
                await serverClient.RecordLog(log_checkout);
                ViewBag.Message = "Congratulations, your order has been placed!";
                return View("Homepage", list);
            }
        }

        //----------------------------------------------------------- To update user's info ---------------------------------------------------
        [HttpPost]
        [Route("Client/UserInfo/")]
        public IActionResult ViewUserInfoAsync()
        {
            ViewBag.User = login_user;
            return View("UpdateUserInfo");
        }

        //----------------------------------------------------------- Password reset ---------------------------------------------------
        [HttpPost]
        [Route("Client/PasswordResetting/")]
        public async Task<IActionResult> UpdatePWDAsync(string pwd_1, string pwd_2)
        {
            if (!pwd_1.Equals(pwd_2) || pwd_1 == null || pwd_2 == null)
            {
                ViewBag.Message = "Password is not equal, please try again!";
                ViewBag.User = login_user;
                return View("UpdateUserInfo");
            }
            else
            {
                var baseUri = new Uri(urlString);
                var serverClient = new ServerClient(urlString);
                string formerPwd = login_user.pwd;
                login_user.pwd = pwd_1;
                System.Net.HttpStatusCode result = await serverClient.UpdatePWDAsync(login_user);
                if (result == System.Net.HttpStatusCode.OK)
                {
                    ViewBag.User = login_user;
                    ViewBag.Message = "Opreation Succeeded - status code 200!";
                    return View("UpdateUserInfo");
                }
                else
                {
                    login_user.pwd = formerPwd;
                    ViewBag.User = login_user;
                    ViewBag.Message = "Opreation Failed - status code" + result + "!";
                    return View("UpdateUserInfo");
                }
            }
        }

        //----------------------------------------------------------- Add balance to account ---------------------------------------------------
        [HttpPost]
        [Route("Client/Charge/")]
        public async Task<IActionResult> ChargeAsync(string cardNo, string cardPwd, string cardName, double chargeAmount, int cardMonth, int cardYear, string cardCvc)
        {
            CardInfo cardInfo = new CardInfo(cardNo, cardPwd, cardName, chargeAmount, cardMonth, cardYear, cardCvc);
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            double formerBalance = login_user.balance;
            login_user.balance = formerBalance + chargeAmount;
            System.Net.HttpStatusCode result = await serverClient.ChargeAsync(cardInfo);
            if (result == System.Net.HttpStatusCode.OK)
            {
                ViewBag.User = login_user;
                string charge_record = chargeAmount + " has been added to user's account successfully!";
                Log log_charge = new Log(login_user.userID, charge_record);
                await serverClient.UpdateBalance(login_user);
                await serverClient.RecordLog(log_charge);
                ViewBag.Message = "Add Balance Succeeded! - status code 200!";

                return View("UpdateUserInfo");
            }
            else
            {
                login_user.balance = formerBalance;
                ViewBag.User = login_user;
                string charge_record = "Something wrong here, balance isn't added to user's account successfully!";
                Log log_charge = new Log(login_user.userID, charge_record);
                await serverClient.RecordLog(log_charge);
                ViewBag.Message = "Charge Failed, Please Check Card Info! - status code" + result + "!";
                return View("UpdateUserInfo");
            }
        }

        //----------------------------------------------------------- View all order list ---------------------------------------------------
        [HttpPost]
        [Route("Client/OrderHistory/")]
        public async Task<IActionResult> OrderHistoryAsync(int userID)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            orderlist = await serverClient.GetMyOrderAsync(userID);
            List<OrderInfo> viewlist = new List<OrderInfo>();
            foreach(OrderInfo orderInfo in orderlist)
            {
                if(!(viewlist.Any(o => o.orderID == orderInfo.orderID)))
                {
                    viewlist.Add(orderInfo);
                }
            }
            ViewBag.User = login_user;
            ViewBag.List = orderlist;
            if (orderlist.Count == 0)
            {
                ViewBag.Message = "Oh, you haven't bought something here yet!";
                return View("OrderHistory", viewlist);
            }
            else
            {
                ViewBag.Message = "Here is your order history!";
                return View("OrderHistory", viewlist);
            }
        }

        //----------------------------------------------------------- View specific order ---------------------------------------------------
        [HttpPost]
        [Route("Client/SpecificOrder")]
        public IActionResult ViewSpecificOrder(int orderID)
        {
            ViewBag.User = login_user;
            ViewBag.Message = orderID;
            List<OrderInfo> specificOrder = new List<OrderInfo>();
            foreach(OrderInfo orderInfo in orderlist)
            {
                if (orderInfo.orderID == orderID) specificOrder.Add(orderInfo);
            }
            return View("ThisOrder", specificOrder);
        }
    }
}
