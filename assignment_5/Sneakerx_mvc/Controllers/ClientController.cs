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

        String urlString = "https://localhost:6001/";

        [HttpPost]
        public async Task<IActionResult> LoginAsync(String emailAddress, String password)
        {
            var baseUri = new Uri(urlString);
            var serverClient = new ServerClient(urlString);
            LoginInfo loginInfo = new LoginInfo(emailAddress, password);
            String pwd = (await serverClient.LoginAsync(loginInfo)).pwd;
            String userName = (await serverClient.LoginAsync(loginInfo)).userName;

            if (pwd.Equals("noExist")) return RegisterPage();
            else if (pwd.Equals("wrong")) return WrongPwd();
            else return AfterLogin();
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

        [Route("Client/LoginAsync/Homepage/")]
        //[ActionName("AfterLogin")]
        public IActionResult AfterLogin()
        {
            return View("Homepage");
        }

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
    }
}
