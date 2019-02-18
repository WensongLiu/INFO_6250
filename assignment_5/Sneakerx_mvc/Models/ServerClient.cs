using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace Sneakerx_mvc.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class ServerClient
    {
        HttpClient client;
        string _hostUri;
        public ServerClient(string hostUri)
        {
            _hostUri = hostUri;
        }

        //public HttpClient CreateClient()
        //{
        //    client = new HttpClient();
        //    client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/");
        //    return client;
        //}

        //public HttpClient CreateActionClient(string action)
        //{
        //    client = new HttpClient();
        //    client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + action);
        //    return client;
        //}

        //public async Task<System.Net.HttpStatusCode> UpdateStudentAsync(Student student)
        //{
        //    using (var client = CreateActionClient("Post01"))
        //    {
        //        HttpResponseMessage response;
        //        //response = client.PutAsJsonAsync(client.BaseAddress, company).Result; 
        //        var output = JsonConvert.SerializeObject(student);
        //        HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
        //        response = await client.PostAsync(client.BaseAddress, contentPost);
        //        return response.StatusCode;
        //    }
        //}

        public async Task<User> LoginAsync(LoginInfo loginInfo)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "PostLogin");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(loginInfo);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
                var avail = await response.Content.ReadAsStringAsync()
                        .ContinueWith<User>(postTask =>
                        {
                            return JsonConvert.DeserializeObject<User>(postTask.Result);
                        });
                return avail;
            }
        }

        public async Task<User> RegisterAsync(RegisterInfo registerInfo)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "PostRegister");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(registerInfo);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
                var avail = await response.Content.ReadAsStringAsync()
                        .ContinueWith<User>(postTask =>
                        {
                            return JsonConvert.DeserializeObject<User>(postTask.Result);
                        });
                return avail;
                //HttpResponseMessage response;
                ////try
                ////{
                ////response = client.PostAsJsonAsync(client.BaseAddress, company).Result; 
                //var output = JsonConvert.SerializeObject(registerInfo);
                //HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                //response = client.PostAsync(client.BaseAddress, contentPost).Result;
                ////var avail = await response.Content.ReadAsStringAsync()
                ////        .ContinueWith<System.Net.HttpStatusCode>(postTask =>
                ////        {
                ////            return JsonConvert.DeserializeObject<System.Net.HttpStatusCode>(postTask.Result);
                ////        });
                ////return avail;
                //return response.StatusCode;
            }
        }
    }
}
