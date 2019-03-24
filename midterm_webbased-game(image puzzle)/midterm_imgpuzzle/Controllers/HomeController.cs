using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using midterm_imgpuzzle.Models;
using MySql.Data.MySqlClient;

namespace midterm_imgpuzzle.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            List<PicInfo> list = new List<PicInfo>();
            //read all pics from mysql
            var dbCon = DatabaseConnection.Instance();
            dbCon.DatabaseName = "midterm";
            if (dbCon.IsConnect())
            {
                string query = "SELECT * FROM picInfo";
                var cmd = new MySqlCommand(query, dbCon.Connection);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new PicInfo()
                        {
                            picLink = reader["picLink"].ToString(),
                            picTittle = reader["picTittle"].ToString()
                        });
                    }
                }
            }
            ViewBag.PicInfo_1 = list[0];
            ViewBag.PicInfo_2 = list[1];
            ViewBag.PicInfo_3 = list[2];
            ViewBag.PicInfo_4 = list[3];
            ViewBag.PicInfo_5 = list[4];
            ViewBag.PicInfo_6 = list[5];
            ViewBag.PicInfo_7 = list[6];
            ViewBag.PicInfo_8 = list[7];
            ViewBag.PicInfo_9 = list[8];
            ViewBag.PicInfo_10 = list[9];
            ViewBag.PicInfo_11= list[10];
            ViewBag.PicInfo_12 = list[11];
            ViewBag.PicInfo_13 = list[12];
            ViewBag.PicInfo_14 = list[13];
            ViewBag.PicInfo_15 = list[14];

            return View("Index");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
