using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sneakerx_api.Models;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sneakerx_api.Controllers
{

    public class ApiController : ControllerBase
    {
        static UsersManager um = new UsersManager();

        // GET: api/values
        //Just to test whether DB can work normally
        [HttpGet]
        [Route("api/[controller]/All")]
        public IEnumerable<User> Get()
        {
            return um.GetAll;
        }

        [HttpGet]
        [Route("api/[controller]/Login")]
        public IEnumerable<User> Login()
        {
            return um.Login("lws.19940712@gmail.com", "lws1994");
            //return um.Login("lws.19940712@gmail.com", "wrongPWD");
        }
    }
}
