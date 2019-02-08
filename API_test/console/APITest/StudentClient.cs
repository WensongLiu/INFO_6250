﻿using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace APITest
{
    public class StudentClient
    {

        HttpClient client;
        string _hostUri;
        public StudentClient(string hostUri)
        {
            _hostUri = hostUri;
        }
        public HttpClient CreateClient()
        {
            client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/student/");
            return client;
        }
        public HttpClient CreateActionClient(string action)
        {
            client = new HttpClient();
            client.BaseAddress = new Uri(new Uri(_hostUri), "api/student/" + action);
            return client;
        }

        public async Task<IEnumerable<Student>> GetStudentsAsync()
        {
            using (var client = CreateClient())
            {
                HttpResponseMessage response;
                response = client.GetAsync(client.BaseAddress).Result;

                //var result = response.Content.ReadAsAsync<IEnumerable<Student>>().Result; 
                if (response.IsSuccessStatusCode)
                {
                    var avail = await response.Content.ReadAsStringAsync()
                        .ContinueWith<IEnumerable<Student>>(postTask =>
                        {
                            return JsonConvert.DeserializeObject<IEnumerable<Student>>(postTask.Result);
                        });
                    return avail;
                }
                else
                {
                    return null;
                }
            }
            //return result;
        }

        public async Task<IEnumerable<Student>> GetStudentsAsync(int gpa)
        {
            using (var client = CreateClient())
            {
                HttpResponseMessage response;
                response = client.GetAsync(new Uri(client.BaseAddress, gpa.ToString())).Result;

                if (response.IsSuccessStatusCode)
                {
                    var avail = await response.Content.ReadAsStringAsync()
                        .ContinueWith<IEnumerable<Student>>(postTask =>
                        {
                            return JsonConvert.DeserializeObject<IEnumerable<Student>>(postTask.Result);
                        });
                    return avail;
                }
                else
                {
                    return null;
                }
            }
        }

        public System.Net.HttpStatusCode AddStudent(Student student)
        {
            using (var client = CreateActionClient("Post01"))
            {
                HttpResponseMessage response = null;
                try
                {
                    //response = client.PostAsJsonAsync(client.BaseAddress, company).Result; 
                    var output = JsonConvert.SerializeObject(student);
                    HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                    response = client.PostAsync(client.BaseAddress, contentPost).Result;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                return response.StatusCode;
            }
        }

        public System.Net.HttpStatusCode UpdateStudent(Student student)
        {
            using (var client = CreateActionClient("Put01"))
            {
                HttpResponseMessage response;
                //response = client.PutAsJsonAsync(client.BaseAddress, company).Result; 
                var output = JsonConvert.SerializeObject(student);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = client.PostAsync(client.BaseAddress, contentPost).Result;
                return response.StatusCode;
            }
        }

        public async Task<System.Net.HttpStatusCode> UpdateStudentAsync(Student student)
        {
            using (var client = CreateActionClient("Post01"))
            {
                HttpResponseMessage response;
                //response = client.PutAsJsonAsync(client.BaseAddress, company).Result; 
                var output = JsonConvert.SerializeObject(student);
                HttpContent contentPost = new StringContent(output, System.Text.Encoding.UTF8, "application/json");
                response = await client.PostAsync(client.BaseAddress, contentPost);
                return response.StatusCode;
            }
        }

        public System.Net.HttpStatusCode DeleteStudent(int id)
        {
            using (var client = CreateClient())
            {
                HttpResponseMessage response;
                response = client.DeleteAsync(new Uri(client.BaseAddress, id.ToString())).Result;
                response = client.DeleteAsync(new Uri(client.BaseAddress, id.ToString())).Result;
                return response.StatusCode;
            }
        }
    }
}