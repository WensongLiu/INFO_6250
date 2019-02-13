using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;

namespace Sneakerx_api.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class UsersManager
    {
        List<User> _users;

        public UsersManager()
        {
            _users = new List<User>()
            {
                new User("Wensong Liu", "lws.19940712@gmail.com", "lws1994", 000001, 3000.00, "Huazhong University of Science and Technology, Yunyuan 114, Wuhan", "13260595829", "430074", "China"),
                new User("Dino Konstantopoulos", "dino.k@northeastern.edu", "ProfDino6250", 000002, 10000.00, "Northeastern University, Snell Library 115, Boston", "8570000000", "02115", "America"),
                new User("Meven Edwin DCunha", "dcunha.m@husky.neu.edu", "Meven6250TA", 000003, 5000.00, "Don Bosco Institute of Technology, Electronics and Communications Engineering, Mumbai", "62506250", "400070", "India")
            };


            //****************************************  Try 1  *****************************************************
            //var dbCon = DatabaseConnection.Instance();
            //dbCon.DatabaseName = "HW_5";
            //if (dbCon.IsConnect())
            //{
            //    string query = "SELECT * FROM users";
            //    var cmd = new MySqlCommand(query, dbCon.Connection);
            //    using (var reader = cmd.ExecuteReader())
            //    {
            //        while (reader.Read())
            //        {
            //            _users.Add(new User()
            //            {
            //                userName = reader["userName"].ToString(),
            //                emailAddress = reader["emailAddress"].ToString(),
            //                password = reader["password"].ToString(),
            //                userID = Convert.ToInt32(reader["userID"]),
            //                balance = Convert.ToDouble(reader["balance"]),
            //                shippingAddress = reader["shippingAddress"].ToString(),
            //                phoneNo = reader["phoneNo"].ToString(),
            //                zipCode = reader["zipCode"].ToString(),
            //                country = reader["country"].ToString()
            //            });
            //        }
            //    }
            //    dbCon.Close();
            //}

            //****************************************  Try 2  *****************************************************
            //string connString = "SERVER=localhost" + ";" +
            //                    "DATABASE=HW_5;" +
            //                    "UID=root;" +
            //                    "PASSWORD=712918Lwslbs;";

            //MySqlConnection cnMySQL = new MySqlConnection(connString);

            //MySqlCommand cmdMySQL = cnMySQL.CreateCommand();

            //MySqlDataReader reader;

            //cmdMySQL.CommandText = "select * from users";

            //cnMySQL.Open();

            //reader = cmdMySQL.ExecuteReader();

            //DataTable dt = new DataTable();
            //dt.Load(reader);


            //cnMySQL.Close();


            //_users = (from DataRow row in dt.Rows

            //select new User
            //{
            //    _FirstName = row["FirstName"].ToString(),
            //    _LastName = row["Last_Name"].ToString()

            //}).ToList();

        }

        //to see whether DB works
        public IEnumerable<User> GetAll { get { return _users; } }

        public IEnumerable<User> Login(string emailAddress, string password)
        {
            if (_users.Any(o => (o.emailAddress.Equals(emailAddress) && o.password.Equals(password))))
                return _users.Where(o => o.emailAddress.Equals(emailAddress)).ToList();
            else return null;
        }
    }
}
