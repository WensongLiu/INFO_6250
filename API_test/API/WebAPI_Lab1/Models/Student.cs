using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_Lab1.Models
{
    public class Student
    {
        public int Id;
        public int GPA;
        public string Firstname;
        public string Lastname;
        public string Email;
        public string MobileNo;
        public string Password;
        public DateTime BirthDate;
        public bool IsPartTime;
        public string Notes;
        public string Title;
        public IEnumerable<string> Interests;
        public Gender Gender;

        public Student(int id, int gpa, string firstname, string lastname, string email, 
          string mobileNo, string password, DateTime birthDate, bool isPartTime, string notes, 
          string title, IEnumerable<string> interests, Gender gender) {
            this.Id = id;
            this.GPA = gpa;
            this.Firstname = firstname;
            this.Lastname = lastname;
            this.Email = email;
            this.MobileNo = mobileNo;
            this.Password = password;
            this.BirthDate = birthDate;
            this.IsPartTime = isPartTime;
            this.Notes = notes;
            this.Title = title;
            this.Interests = interests;
            this.Gender = gender;
        }
    }

    public enum Gender { Male, Female }
}
