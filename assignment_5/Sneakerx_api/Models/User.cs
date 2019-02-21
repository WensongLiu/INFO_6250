using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Sneakerx_api.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class User
    {
        public String userName { get; set; }
        public String emailAddress { get; set; }
        public String pwd { get; set; }
        public int userID { get; set; }
        public Double balance { get; set; }
        public String shippingAddress { get; set; }
        public String phoneNo { get; set; }
        public String zipCode { get; set; }
        public String country { get; set; }

        public User(String userName, String emailAddress, String pwd, int userID, Double balance, String shippingAddress, String phoneNo, String zipCode, String country)
        {
            this.userName = userName;
            this.emailAddress = emailAddress;
            this.pwd = pwd;
            this.userID = userID;
            this.balance = balance;
            this.shippingAddress = shippingAddress;
            this.phoneNo = phoneNo;
            this.zipCode = zipCode;
            this.country = country;
        }

        public User()
        {
        }
    }
}
