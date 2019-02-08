using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_Lab1.Models
{
    public class StudentManager
    {
        List<Student> _students;
        public StudentManager()
        {
            _students = new List<Student>()
            {
                new Student(1, 3, "Dino", "Konstantopoulos", "dino.k@northeastern.edu", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "I don't like to write a lot of code!", "Dr", new List<string> {"gaming", "coding" }, Gender.Male),
                new Student(2, 4, "Bill", "Gates", "bill@microsoft.com", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "A PC on every desk", "Mr", new List<string> {"coding" }, Gender.Male),
                new Student(3, 4, "Elon", "Musk", "elon@tesla.com", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "Human colonies on Mars, now!", "Mr", new List<string> {"Movies" }, Gender.Male),
                new Student(4, 2, "Donald", "Trump", "donald@whitehouse.gov", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "Mexicans will pay for the Wall", "Mr", new List<string> {"Movies" }, Gender.Male),
                new Student(5, 4, "Vladimir", "Putin", "vladimir@kgb.ru", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "I had nothing to do with the last US election", "Mr", new List<string> {"Coding" }, Gender.Male),
                new Student(6, 4, "Emmanuel", "Macron", "emmanuel@orsay.fr", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "Vive la France", "Mr", new List<string> {"coding" }, Gender.Male),
                new Student(7, 4, "Barack", "Obama", "barack@retired.gov", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "I don't know, ask Michelle", "Mr", new List<string> {"Movies" }, Gender.Male),
                new Student(8, 3, "Alexis", "Tsipras", "alexis@maximou.gr", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "I love Che Guevarra", "Mr", new List<string> {"Movies" }, Gender.Male),
                new Student(9, 4, "jinping", "Xi", "jinping@zhengfu.cn", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "Yīxiē dùzi baoman de wàiguó rén, méiyou shé me bi zhè gèng haodele", "Mr", new List<string> {"Badminton", "PingPong" }, Gender.Male),
                new Student(10, 4, "Narendra", "Modi", "narendra@sarakaar.in", "800 555 1212", "mypassword", new System.DateTime(1980,1,1), false, "main ek gareeb parivaar se aaya hoon, mainne gareebee dekhee haigareebon ko sammaan kee aavashyakata hai, aur yah svachchhata ke saath shuruaat hai", "Mr",new List<string> {"Cricket", "Squash" }, Gender.Male)
            };
        }

        public IEnumerable<Student> GetAll { get { return _students; } }
        public IEnumerable<Student> GetStudentsByGPA(int gpa)
        {
            //return _students.Where(o => o.GPA.Equals(gpa)).ToList(); 
            return _students.Where(o => o.GPA.Equals(gpa)).ToList();
        }
        public void AddStudent(Student s)
        {
            _students.Add(s);
        }
        public bool DeleteStudent(int id)
        {
            if (!_students.Any(o => o.Id.Equals(id)))
                return false;
            _students.RemoveAll(o => o.Id.Equals(id));
            return true;
        }
        public bool EditStudent(Student s)
        {
            var _s = _students.FirstOrDefault(o => o.Id.Equals(s.Id));
            if (_s == null)
                return false;
            _s.GPA = s.GPA;
            _s.Firstname = s.Firstname;
            _s.Lastname = s.Lastname;
            _s.Email = s.Email;
            _s.MobileNo = s.MobileNo;
            _s.Password = s.Password;
            _s.BirthDate = s.BirthDate;
            _s.IsPartTime = s.IsPartTime;
            _s.Notes = s.Notes;
            _s.Title = s.Title;
            _s.Interests = s.Interests;
            _s.Gender = s.Gender;
            return true;
        }
    }
}
