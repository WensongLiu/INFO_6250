using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sneakerx_api.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sneakerx_api.Controllers
{
    public class ServerController : Controller
    {
        static UserManager um = new UserManager();

        [HttpGet]
        [Route("api/[controller]/All")]
        public IEnumerable<User> Get()
        {
            return um.GetAll;
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

            //User user = new User(registerInfo.userName, registerInfo.emailAddress, registerInfo.pwd, nextID, registerInfo.balance, registerInfo.shippingAddress, registerInfo.phoneNo, registerInfo.zipCode, registerInfo.country);

            //User registerUser = new User(userName, email, pwd, 999, balance, shippingAddress, phone, zip, country);
            User user = um.RegisterUser(userName, email, pwd, balance, shippingAddress, phone, zip, country);
            return user;
        }
    }
}
