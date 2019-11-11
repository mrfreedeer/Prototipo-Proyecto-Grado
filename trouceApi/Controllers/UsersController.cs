using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors; 
using Newtonsoft.Json;
using System.Threading.Tasks;
using trouceApi.Models;
using trouceApi.Business;
using System;


namespace TodoApi.Controllers
{
    [Route("api/users")]
    [ApiController]
    [EnableCors("*","*","*")]

    public class UsersController : Controller
    {   
        
        private readonly trouceContext _context;

        public UsersController(trouceContext context)
        {
            _context = context;
        }

         // GET: api/providers
        [HttpGet("clients")]
        public async Task<ActionResult<IEnumerable<Users>>> GetClients()
        {
        
            return await _context.Users
            .Where(t => t.Usertype == 0).ToListAsync();        
        }

        [HttpGet("providers")]
        public async Task<ActionResult<IEnumerable<Users>>> GetServiceProviders()
        {
             return await _context.Users
            .Where(t => t.Usertype == 1).ToListAsync();       
        }

        // GET: api/users/register?form  
        [HttpGet("register")]
        public async Task<ActionResult<Users>> RegisterUser(string form)
        {   System.Diagnostics.Debug.WriteLine("WORKING");
            System.Diagnostics.Debug.WriteLine(form);
            dynamic data  = JsonConvert.DeserializeObject(form);
            Users newUser = new Users();
            newUser.Name = data["name"];
            newUser.Lastname = data["lastname"];
            newUser.Email = data["email"];
            newUser.Address = data["address"];
            newUser.Phone = data["phone"];
            newUser.Password = data["password"];
            newUser.Usertype = (data["usertype"]==1) ? 1:0;
            if(data["usertype"]==1){
            newUser.Businessname = data["businessname"];
            newUser.Categories = data["servicecategories"];
            newUser.Businessdescription = data["businessdescription"];
            }
            try
            {
              _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
            return Json(new {success = true}) ; 
            }
            catch (System.Exception e)
            {
                System.Diagnostics.Debug.Write(e);
                return Json(new {success = false,
                message = "Could not add user to the Data Base"});
            }
            
        }

         [HttpGet("updateinfo")]
        public async Task<ActionResult<Users>> UpdateInfo(string form)
        {   System.Diagnostics.Debug.WriteLine("WORKING");
            System.Diagnostics.Debug.WriteLine(form);
            dynamic data  = JsonConvert.DeserializeObject(form);
            int userid = (int)data["id"];
            var query = await _context.Users.
                FirstOrDefaultAsync(t => t.Id == userid);
            query.Name = data["name"];
            query.Lastname = data["lastname"];
            query.Address = data["address"];
            query.Phone = data["phone"];
            if(data["usertype"]== 1){
            query.Businessname = data["businessname"];
            query.Businessdescription = data["businessdescription"];
            }
            if(data["password"] != "notchanged"){
                query.Password = data["password"];
            }

            try
            {
                await _context.SaveChangesAsync();
                return Json(new {
                    success = true,
                    id = userid, 
                    userInfo = query
                });
            }
            catch (System.Exception e)
            {
                
                System.Diagnostics.Debug.Write(e);
                 return Json(new {success = false,
                message = "Could not modify user's information"});
            }

        }

        [HttpGet("getinfo")]
        public async Task<ActionResult<Users> > GetUserInfo(int id)
        {   
            var query = await _context.Users
                .FirstOrDefaultAsync(t => t.Id == id);
            return Json(new {userinfo = query}) ;
        
        }
        [HttpGet("search")]
        public async Task<ActionResult<Users>> SearchService(string searchFilter)
        {
            var result = Json( new {
                success = false
            });
            try {
                dynamic data  = JsonConvert.DeserializeObject(searchFilter);
                SearchFilter filter = new SearchFilter {
                    SearchString = data["SearchString"],
                    Category = data["Category"]
                }; 
                using (var business = new SearchBusiness(_context)) {             
                    var searchResults = business.search(filter);
                    return Json(new {
                            data = searchResults,
                            success = true
                        }) ;
                }
            } catch (Exception e) {
                System.Diagnostics.Debug.WriteLine(e);
                return result;
            }
        }

        [HttpGet("searchCategory")]
        public async Task<ActionResult<Users>> SearchServiceByCategory(string service)
        {  
            var query = await _context.Users
                .Where(t => t.Categories.Trim().Contains(service))
                .ToListAsync();

            return Json(new {
                    data = query,
                    success = true
                }) ;
        }
    
    }
}