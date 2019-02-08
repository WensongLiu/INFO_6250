using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APITest
{
    class Program
    {
        static void Main(string[] args)
        {
            // Wait for the async stuff to run... 
            Run().Wait();
            // Then Write Done... 
            Console.WriteLine("");
            Console.WriteLine("Done! Press any key to Exit...");
            Console.ReadLine();
            return;
        }

        static async Task Run()
        {
            Console.WriteLine("Student client operations..");
            try
            {
                // Create a company client instance: 
                var urlString = "http://webapi-001898693.azurewebsites.net/";
                var baseUri = new Uri(urlString);
                var studentClient = new StudentClient(urlString);

                // Read initial student list: 
                Console.WriteLine("Reading all students...");
                var students = await studentClient.GetStudentsAsync();
                WriteStudentsList(students);
                // Read good students: s
                Console.WriteLine("Reading all students with a GPA of 4...");
                var goodstudents = await studentClient.GetStudentsAsync(4);
                WriteStudentsList(goodstudents);

                Console.WriteLine("Adding a new student...");
                int nextId = (from c in students select c.Id).Max() + 1;
                var xingyao = new Student(nextId, 4, "Wu", "Xingyao", "wu.x@husky.neu.edu", 
                    "800 555 1212", "mypassword", new System.DateTime(1980, 1, 1), false, 
                    "bó xué zhī，shěn wèn zhī，shèn sīzhī，míng biàn zhī，du xíng zhī", "Mr", 
                    new List<string> { "gaming", "coding" }, Gender.Male);
                var result = studentClient.AddStudent(xingyao);
                WriteStatusCodeResult(result);

                Console.WriteLine("Updating a student...");
                var updateMe = await studentClient.GetStudentsAsync(3);
                updateMe.First().GPA = 1;
                result = await studentClient.UpdateStudentAsync(updateMe.First()); 
                WriteStatusCodeResult(result);

                Console.WriteLine("Updated student List after Add:");
                students = await studentClient.GetStudentsAsync();
                WriteStudentsList(students);

                Console.WriteLine("Deleting a student..."); 
                result = studentClient.DeleteStudent(3); 
                WriteStatusCodeResult(result);

                Console.WriteLine("Updated student List after Delete:"); 
                students = await studentClient.GetStudentsAsync(); 
                WriteStudentsList(students);
            }
            catch (Exception e)
            {
                Console.Write(e.StackTrace);
            }
        }

        static void WriteStudentsList(IEnumerable<Student> students)
        {
            foreach (Student student in students)
            {
                var output = JsonConvert.SerializeObject(student);
                Console.WriteLine(output);
            }
            Console.WriteLine("");
        }
        static void WriteStatusCodeResult(System.Net.HttpStatusCode statusCode)
        {
            if (statusCode == System.Net.HttpStatusCode.OK)
            {
                Console.WriteLine("Opreation Succeeded - status code {0}", statusCode);
            }
            else
            {
                Console.WriteLine("Opreation Failed - status code {0}", statusCode);
            }
            Console.WriteLine("");
        }


    }
}
