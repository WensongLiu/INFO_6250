using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Sneakerx_mvc.Models
{
    // This class is used for login.
    public class LoginInfo
    {
        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string emailAddress { set; get; }
        [Required(ErrorMessage = "The email address is required")]
        public string pwd { private set; get; }

        public LoginInfo(String emailAddress, string pwd)
        {

            this.emailAddress = emailAddress;
            this.pwd = pwd;
        }
    }
}
