using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace midterm_imgpuzzle.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class PicInfo
    {
        public string picLink { set; get; }
        public string picTittle { set; get; }

        public PicInfo(string picLink, string picTittle)
        {
            this.picLink = picLink;
            this.picTittle = picTittle;
        }

        public PicInfo()
        {
        }
    }
}
