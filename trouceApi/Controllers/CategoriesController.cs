using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors; 

using Newtonsoft.Json;
using System.Threading.Tasks;
using trouceApi.Models;


namespace trouceApi.Controllers
{
    [Route("api/categories")]
    [ApiController]
    [EnableCors("*","*","*")]

    public class CategoriesController : Controller
    {   
        private readonly trouceContext _context;

        public CategoriesController(trouceContext context)
        {
            _context = context;
        }

        // GET: api/categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categories>>> GetCategories()
        {
            return Json(new {success = true, categories = await _context.Categories.ToListAsync()});          ;
        }

       

    }
}