using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Google.Cloud.Translation.V2;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace assignment_3.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class WordsCounting : PageModel
    {
        [BindProperty]
        public string text { set; get; } = "default";
        public ArrayList en { private set; get; }
        public ArrayList cn { private set; get; }
        public ArrayList hi { private set; get; }

        public WordsCounting(string inputtext)
        {
            this.text = inputtext;
            this.en = new ArrayList();
            this.cn = new ArrayList();
            this.hi = new ArrayList();
        }
        //-------------Method 1---------------
        //public static string DetectLanguage(string singleWord)
        //{
        //     TranslationClient client = TranslationClient.Create();
        //     var detection = client.DetectLanguage(singleWord);
        //    //Console.WriteLine(
        //    //    $"{detection.Language}\tConfidence: {detection.Confidence}");
        //    return detection.Language;
        //}

        //public static bool IsCN(string inputtext)
        //{
        //    var isCN = DetectLanguage(inputtext).Equals("zh-CN");
        //    return isCN;
        //}

        //public static bool IsEN(string inputtext)
        //{
        //    var isEN = DetectLanguage(inputtext).Equals("en");
        //    return isEN;
        //}

        //public static bool IsHI(string inputtext)
        //{
        //    var isHI = DetectLanguage(inputtext).Equals("hi");
        //    return isHI;
        //}

        //-------------Method 2---------------
        public static bool IsCN(string inputtext)
        {
            var isCn = Regex.IsMatch(inputtext, @"[\u4E00-\u9FFF]");
            return isCn;
        }

        public static bool IsEN(string inputtext)
        {
            var isEn = Regex.IsMatch(inputtext, @"[\u0061-\u007a]");
            return isEn;
        }

        public static bool IsHI(string inputtext)
        {
            var isHi = Regex.IsMatch(inputtext, @"[/0900-/097F]");
            return isHi;
        }

        public void Divide(string inputtext)
        {
            inputtext = inputtext.Replace(",", "");
            inputtext = inputtext.Replace(".", "");
            inputtext = inputtext.Replace("\"", "");
            inputtext = inputtext.Replace("'", "");
            inputtext = inputtext.Replace("!", "");
            inputtext = inputtext.Replace("?", "");
            inputtext = inputtext.Replace("，", "");
            inputtext = inputtext.Replace("。", "");
            inputtext = inputtext.Replace("“", "");
            inputtext = inputtext.Replace("”", "");
            inputtext = inputtext.Replace("！", "");
            inputtext = inputtext.Replace("？", "");
            string[] textarray = inputtext.Split(" ");
            foreach(string t in textarray)
            {
                if (IsCN(t))
                {
                    cn.Add(t);
                }
                else if (IsEN(t))
                {
                    en.Add(t);
                }
                else hi.Add(t);
            }
        }

        public Hashtable CountCn()
        {
            Divide(text);
            string allCurrentCnWord = "";
            Hashtable table = new Hashtable();
            foreach(string cnWord in cn)
            {
                allCurrentCnWord += cnWord;

            }
            char[] chararray = allCurrentCnWord.ToCharArray();
            foreach (var c in chararray)
            {
                if (table[c] == null)
                    table[c] = 1;
                else
                {
                    int n = (int)table[c];
                    table[c] = n + 1;
                }
            }
            return table;
        }

        public Hashtable CountEn()
        {
            Divide(text);
            Hashtable table = new Hashtable();
            foreach (var e in en)
            {
                if (table[e] == null)
                    table[e] = 1;
                else
                {
                    int n = (int)table[e];
                    table[e] = n + 1;
                }
            }
            return table;
        }

        public Hashtable CountHi()
        {
            Divide(text);
            Hashtable table = new Hashtable();
            foreach (var h in hi)
            {
                if (table[h] == null)
                    table[h] = 1;
                else
                {
                    int n = (int)table[h];
                    table[h] = n + 1;
                }
            }
            return table;
        }
    }

}
