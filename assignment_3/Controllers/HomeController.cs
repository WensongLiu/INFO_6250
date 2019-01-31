using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using assignment_3.Models;
using System.IO;

namespace assignment_3.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string inputtext, string submitbtn)
        {
            if (submitbtn.Equals("Count English Words"))
                return EN(inputtext);
            else if (submitbtn.Equals("Count Chinese Words"))
                return CN(inputtext);
            else if (submitbtn.Equals("Count Hindi Words"))
                return HI(inputtext);
            else if(submitbtn.Equals("Chinese"))
                return allCN();
            else if (submitbtn.Equals("Hindi"))
                return allHI();
            else if (submitbtn.Equals("English"))
                return allEN();
            else return Saved(inputtext);
        }

        [Route("Home/Saved/{inputtext?}")]
        public IActionResult Saved(string inputtext)
        {
            System.IO.File.AppendAllText("./AllWords.txt", " "+inputtext);
            return View("Saved");
        }

        [Route("Home/CN/{inputtext?}")]
        public IActionResult CN(string inputtext)
        {
            return View("CN", new WordsCounting(inputtext));
        }

        [Route("Home/EN/{inputtext?}")]
        public IActionResult EN(string inputtext)
        {
            return View("EN", new WordsCounting(inputtext));
        }

        [Route("Home/HI/{inputtext?}")]
        public IActionResult HI(string inputtext)
        {
            //String intext = "你好，新年快乐。 हैलो, नया साल मुबारक।. Hello, happy new year. 祝你新学期一切顺利！ I wish you all the best in the new semester! मैं नए सेमेस्टर में आपको शुभकामनाएं देता हूं!";
            return View("HI", new WordsCounting(inputtext));
        }

        [Route("Home/allCN/{inputtext?}")]
        public IActionResult allCN()
        {
            string all = System.IO.File.ReadAllText("./AllWords.txt");
            return View("allCN", new WordsCounting(all));
        }

        [Route("Home/allEN/{inputtext?}")]
        public IActionResult allEN()
        {
            string all = System.IO.File.ReadAllText("./AllWords.txt");
            return View("allEN", new WordsCounting(all));
        }

        [Route("Home/allHI/{inputtext?}")]
        public IActionResult allHI()
        {
            string all = System.IO.File.ReadAllText("./AllWords.txt");
            return View("allHI", new WordsCounting(all));
        }

    }   
}
