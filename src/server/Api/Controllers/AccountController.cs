using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Starter.Api.Models;

namespace Starter.Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginModel model)
        {
            Console.WriteLine(model);
            return Ok(model);
        }
    }
}
