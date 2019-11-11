using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors; 
using Newtonsoft.Json;
using System.Threading.Tasks;
using trouceApi.Models;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System;

namespace trouceApi.Controllers
{
    [Route("api/login")]
    [ApiController]
    [EnableCors("*","*","*")]

    public class LoginController : Controller
    {   
        private readonly trouceContext _context;

        public LoginController(trouceContext context)
        {
            _context = context;
        }

       

        public async Task<ActionResult> Login(string credentials)
        {   
            System.Diagnostics.Debug.WriteLine(credentials);
            dynamic data  = JsonConvert.DeserializeObject(credentials);
            string userEmail = data["email"];
            string userPassword = data["password"];
            if (data == null)
        {
            return BadRequest("Invalid client request");
        }
            System.Diagnostics.Debug.WriteLine("-----------------DO QUERY----------------");
            var query =  await _context.Users
                .FirstOrDefaultAsync(t => t.Email == userEmail && t.Password == userPassword);
     

        
        System.Diagnostics.Debug.WriteLine("--------------------------------------QUERY---------------------------------------");

        if (query!= null) {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("trouce.services123@"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
 
            var tokeOptions = new JwtSecurityToken(
                issuer: "http://trouce.company:5000",
                audience: "http://trouce.company:5000",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );
            var userid = query.Id;
            var usertype = query.Usertype;
            query.Password = " ";
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new {
                Token = tokenString ,
                id = userid, 
                type = usertype, 
                userInfo = query
            });
        }
        else
        {
            return Unauthorized();
        }
        }

    

    }
}