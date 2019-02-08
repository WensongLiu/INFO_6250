using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI_Lab1.Models;

namespace WebAPI_Lab1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        static StudentManager sm = new StudentManager();

        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return sm.GetAll;
        }

        [HttpGet("{id}")]
        //[Route("{id}")]
        public async Task<IEnumerable<Student>> Get(int id)
        {
            return await GetAsync(id);
        }
        private Task<IEnumerable<Student>> GetAsync(int gpa)
        {
            return Task.FromResult(sm.GetStudentsByGPA(gpa));
        }

        // add new or edit 
        // POST api/students 
        [HttpPost]
        [Route("[action]")]
        [ActionName("Post01")]
        public async Task<StatusCodeResult> Post01([FromBody] Student s)
        {
            if (s == null)
            {
                return new Microsoft.AspNetCore.Mvc.BadRequestResult();
            }
            if (await PostAsyncPartOne(s))
            {
                return await PostAsyncPartTwo(s);
            }
            else
            {
                sm.AddStudent(s);
                return new StatusCodeResult(201); //created
            }
        }
        private Task<bool> PostAsyncPartOne(Student s)
        {
            return Task.FromResult(sm.GetAll.Any(o => o.Id.Equals(s.Id)));
        }
        private Task<StatusCodeResult> PostAsyncPartTwo(Student s)
        {
            if (sm.EditStudent(s))
            {
                return Task.FromResult(new StatusCodeResult(200)); //success
            }
            else
            {
                return Task.FromResult(new StatusCodeResult(404)); //not found }
            }
        }

        // add new or edit 
        [HttpPut]
        [Route("[action]")]
        [ActionName("Put01")]
        public async Task<StatusCodeResult> Put01([FromBody] Student s)
        {
            if (s == null)
            {
                return new Microsoft.AspNetCore.Mvc.BadRequestResult();
            }
            if (await PostAsyncPartOne(s))
            {
                return await PostAsyncPartTwo(s);
            }
            else
            {
                sm.AddStudent(s);
                //dbContext.Companies.Add(company); 
                //await dbContext.SaveChangesAsync(); 
                return new StatusCodeResult(201); //created
            }
        }

        // delete 
        // DELETE api/values/5 
        [HttpDelete("{id}")]
        //Why this route cannot work???
        //[Route("api/[controller]/{id}")]
        public async Task<StatusCodeResult> Delete(int id) {
            return await DeleteAsync(id);
        }
        private Task<StatusCodeResult> DeleteAsync(int id)
        {
            if (sm.DeleteStudent(id))
                return Task.FromResult(new StatusCodeResult(200));
            else
                return Task.FromResult(new StatusCodeResult(404));
        }
    }
}