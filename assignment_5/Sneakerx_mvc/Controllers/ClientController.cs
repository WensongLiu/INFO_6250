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
        public IActionResult LoginPage()
        {
            return View("LoginPage");
        }

        //Crash function is uesd to test whether website can keep data safely.
        [HttpGet]
        public IActionResult Crash()
        {
            return View("Crash");
        }

        //MySQL's localhost address
        String urlString = "https://localhost:6001/";

        //-----------------------------------------------------------------------Login-------------------------------------------------------------------
        [HttpPost]
        public async Task<IActionResult> LoginAsync(String emailAddress, String password)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            LoginInfo loginInfo = new LoginInfo(emailAddress, password);
            User user = await serverClient.LoginAsync(loginInfo);
            String pwd = user.pwd;
            String userName = (await serverClient.LoginAsync(loginInfo)).userName;

            if (pwd.Equals("noExist")) return RegisterPage();
            else if (pwd.Equals("wrong")) return WrongPwd();
            else return await AfterLoginAsync(user);
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

        //------------------------------------------------- After login website displays all items automatically -----------------------------------------------
        [Route("Client/LoginAsync/Homepage/")]
        //[ActionName("AfterLogin")]
        public async Task<IActionResult> AfterLoginAsync(User user)
        {
            return await getAllItems(user);
        }


        [HttpPost]
        [Route("Client/getAllItems/")]
        public async Task<IActionResult> getAllItems(User user)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            List<Item>list = await serverClient.GetItemsAsync();
            //User user = new User(registerInfo.userName, registerInfo.emailAddress, registerInfo.pwd, 8, registerInfo.balance, registerInfo.shippingAddress, registerInfo.phoneNo, registerInfo.zipCode, registerInfo.country);
            //String test = user.emailAddress;
            String userName = user.userName;
            int userID = user.userID;
            Double balance = user.balance;
            ViewBag.LinkableId = userID;
            ViewBag.Message = userName;
            ViewBag.Double = balance;
            //ViewBag.
            return View("Homepage", list);
        }

        //----------------------------------------------------------------- Add item to cart one by one ----------------------------------------------------------
        [HttpPost]
        [Route("Client/AddToCart/")]
        public async Task<IActionResult> AddToCartAsync(double balance, string userName,int userID, int itemID, string itemName, string itemSize, double price, string picLink, string addItemToCart)
        {
            int add;
            if (addItemToCart.Equals("Add To Cart")) add = 1;
            else add = -1;
            CartInfo ci = new CartInfo(userID, itemID, itemName, itemSize, add, price, picLink);
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            serverClient.AddToItemAsync(ci);
            ViewBag.Message = userName;
            ViewBag.LinkableId = userID;
            ViewBag.Double = balance;
            List<CartInfo> cartlist = await serverClient.GetMyCartAsync(userID);
            List<Item> list = await serverClient.GetItemsAsync();
            if (addItemToCart.Equals("Remove")) return View("Cart", cartlist);
            else return View("Homepage", list);
            //ViewData["Integer"] = userID;
            //return  View("Success");
        }

        //----------------------------------------------------------------- Show user's current cart ----------------------------------------------------------
        [HttpPost]
        [Route("Client/GetMyCartAsync/")]
        public async Task<IActionResult> GetMyCartAsync(int userID, string userName)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            List<CartInfo> cartlist = await serverClient.GetMyCartAsync(userID);
            ViewBag.LinkableId = userID;
            ViewBag.Message = userName;
            return  View("Cart", cartlist);
        }

        //----------------------------------------------------------- Check out then go back to homepage ---------------------------------------------------
        [HttpPost]
        [Route("Client/CheckOutAsync/")]
        public async Task<IActionResult> CheckOutAsync(int userID, string userName)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            double balance = await serverClient.CheckOutAsync(userID);
            List<Item> list = await serverClient.GetItemsAsync();
            ViewBag.Double = balance;
            ViewBag.LinkableId = userID;
            ViewBag.Message = userName;
            return View("Homepage", list);
        }
    }
}
