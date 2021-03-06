﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Sneakerx_mvc.Models
{
    // This class is used for registeration.
    public class RegisterInfo
    {
        public string userName { set; get; }

        [Required]
        [EmailAddress]
        public string emailAddress { set; get; }
        public string pwd { set; get; }
        public Double balance { set; get; }
        public string shippingAddress { set; get; }
        public string phoneNo { set; get; }
        public string zipCode { set; get; }
        public string country { set; get; }

        public RegisterInfo(String userName, String emailAddress, String pwd, Double balance, String shippingAddress, String phoneNo, String zipCode, String country)
        {
            this.userName = userName;
            this.emailAddress = emailAddress;
            this.pwd = pwd;
            this.balance = balance;
            this.shippingAddress = shippingAddress;
            this.phoneNo = phoneNo;
            this.zipCode = zipCode;
            this.country = country;
        }
    }
}
