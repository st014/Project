using EventPlannerSampleTest.Data;
using EventPlannerSampleTest.Models;
using EventPlannerSampleTest.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Collections;

namespace EventPlannerSampleTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        
        IUserRegistration userRegistration;
        IClientsService clientsService;

        public LoginController ()
        {
            
            userRegistration = new UserRegistration ();
        }

        [HttpPost("RegisterClients")]
        public int RegistrationClients( string password,int client_id,string name, int contact, string mail, string city) 
        {
            ClientsData clients= new ClientsData
            {
                cname= name,
                contact= contact,
                email_id   = mail,
                city= city,
                password= password,
                client_id= client_id
            };
            userRegistration.AddUserClients(clients);

            return 0;        
        }

        [HttpPost("RegisterVendor")]
        public int RegistrationVendor(vendorData vendorData)
        {
            userRegistration.AddUserVendor(vendorData);

            return 1;
        }
       

    }
}
