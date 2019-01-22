using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Diagnostics.Contracts;

namespace assignment.Pages
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public string text { get; set; }
        public static Hashtable countresult { get; private set; }

        public void OnGet()
        {
            countresult = new Hashtable();
            countresult["no result"] = "no result";
        }

        public void OnPost([FromBody]string text)
        {
            this.countWord();
        }

        public void countWord()
        {
            text = text.Replace(",", "");
            text = text.Replace(".", "");
            string[] textarray = text.Split(" ");
            Hashtable table = new Hashtable();
            foreach (string word in textarray)
            {
                if (table[word] == null)
                {
                    table[word] = 1;
                }
                else
                {
                    int n = (int)table[word];
                    table[word] = n + 1;
                }
            }
            if (table.ContainsKey(""))
                table.Remove("");
            countresult = table;
        }
    }
}
