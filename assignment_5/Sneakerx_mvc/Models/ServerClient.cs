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

        public async Task<List<Item>> GetItemsAsync()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "GetItem");
            using (client)
            {
                HttpResponseMessage response;
                response = await client.GetAsync(client.BaseAddress);

                //var result = response.Content.ReadAsAsync<IEnumerable<Student>>().Result; 
                //if (response.IsSuccessStatusCode)
                //{
                var avail = await response.Content.ReadAsStringAsync()
                    .ContinueWith<List<Item>>(postTask =>
                    {
                        return JsonConvert.DeserializeObject<List<Item>>(postTask.Result);
                    });
                return avail;
                //}
                //else
                //{
                //    return null;
                //}
            }
        }

        public async Task<List<CartInfo>> GetMyCartAsync(int userID)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "GetCartAsync");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(userID);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);

                var avail = await response.Content.ReadAsStringAsync()
                    .ContinueWith<List<CartInfo>>(postTask =>
                    {
                        return JsonConvert.DeserializeObject<List<CartInfo>>(postTask.Result);
                    });
                return avail;
            }
        }

        public async Task AddToItemAsync(CartInfo cartInfo)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "PostAddToCart");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(cartInfo);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
            }
        }

        public async Task<Double> CheckOutAsync(int userID)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "CheckOutAsync");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(userID);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
                var avail = await response.Content.ReadAsStringAsync()
                    .ContinueWith<Double>(postTask =>
                    {
                        return JsonConvert.DeserializeObject<Double>(postTask.Result);
                    });
                return avail;
            }
        }

        public async Task<System.Net.HttpStatusCode> UpdatePWDAsync(User user)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "PasswordResetting");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(user);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
                return response.StatusCode;
            }
        }

        public async Task<System.Net.HttpStatusCode> ChargeAsync(CardInfo cardInfo)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "Charge");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(cardInfo);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
                return response.StatusCode;
            }
        }

        public async Task UpdateBalance(User user)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "BalanceUpdate");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(user);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
            }
        }

        public async Task<List<OrderInfo>> GetMyOrderAsync(int userID)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/Server/" + "MyOrder");
            using (client)
            {
                HttpResponseMessage response;
                var output = JsonConvert.SerializeObject(userID);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);

                var avail = await response.Content.ReadAsStringAsync()
                    .ContinueWith<List<OrderInfo>>(postTask =>
                    {
                        return JsonConvert.DeserializeObject<List<OrderInfo>>(postTask.Result);
                    });
                return avail;
            }
        }


    }
}
