using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors; 

using Newtonsoft.Json;
using System.Threading.Tasks;
using trouceApi.Models;
using System;
using System.Web.Http;

namespace trouceApi.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/services")]
    [ApiController]
    [EnableCors("*","*","*")]

    public class ServicesController : Controller
    {   
        private readonly trouceContext _context;

        public ServicesController(trouceContext context)
        {
            _context = context;
        }

        // GET: api/categories
        [Microsoft.AspNetCore.Mvc.HttpGet("getservices"), Authorize]
        public async Task<ActionResult<IEnumerable<Services>>> GetServices(int id)
        {   
            try
            {
               var userServices = await _context.Services.Where(t => t.Userid == id).ToListAsync();
               return Json(new {success = true, services = userServices});
            }
            catch (Exception e)
            {

                  System.Diagnostics.Debug.WriteLine(e);
                  return Json(new {success = false, message = e});
            }
        }

         [Microsoft.AspNetCore.Mvc.HttpGet("newservice"), Authorize]
        public async Task<ActionResult<IEnumerable<Services>>> AddService(string form)
        {   
            try
            {
                dynamic serviceForm = JsonConvert.DeserializeObject(form);
                Services newService = new Services();
                newService.Name = serviceForm["name"];
                newService.Userid = (int)serviceForm["userid"];
                newService.Description = serviceForm["description"];
                newService.Price = serviceForm["price"];
                newService.Notes = serviceForm["notes"];
                newService.Categories = serviceForm["categories"];
                _context.Services.Add(newService);
                await _context.SaveChangesAsync();
                return Json(new {success = true, message = "Service added correctly"});
            }
            catch (Exception e)
            {

                  System.Diagnostics.Debug.WriteLine(e);
                  return Json(new {success = false, message = e});
            }
        }

        [Microsoft.AspNetCore.Mvc.HttpGet("updateservice"), Authorize]
        public async Task<ActionResult<IEnumerable<Services>>> UpdateService(string form)
        {   
            try
            {
                dynamic serviceForm = JsonConvert.DeserializeObject(form);
                int id = serviceForm["id"];
                var query = await _context.Services.FirstOrDefaultAsync(t=> t.Id == id);
                if (query != null){
                query.Name = serviceForm["name"];
                query.Description = serviceForm["description"];
                query.Price = serviceForm["price"];
                query.Notes = serviceForm["notes"];
                query.Categories = serviceForm["categories"];
                await _context.SaveChangesAsync();
                return Json(
                    new {success = true,
                         message = "Service edited correctly"});
                }
                  return Json(
                    new {success = false,
                         message = "Service could not be found"});
            }
            catch (Exception e)
            {

                  System.Diagnostics.Debug.WriteLine(e);
                  return Json(new {success = false, message = e});
            }
        }

        [Microsoft.AspNetCore.Mvc.HttpGet("deleteservice"), Authorize]
        public async Task<ActionResult<IEnumerable<Services>>> DeleteService(string form)
        {   
            try
            {
                dynamic serviceForm = JsonConvert.DeserializeObject(form);
                int id = serviceForm["id"];
                int userid = serviceForm["userid"];
                var query = await _context.Services
                .FirstOrDefaultAsync(t => t.Id == id && t.Userid == userid);
                if (query != null){
                _context.Services.Remove(query);
                await _context.SaveChangesAsync();
                return Json(
                    new {success = true,
                         message = "Service removed correctly"});
                }
                  return Json(
                    new {success = false,
                         message = "Service could not be found and removed"});
            }
            catch (Exception e)
            {

                  System.Diagnostics.Debug.WriteLine(e);
                  return Json(new {success = false, message = e});
            }
        }


    }
}