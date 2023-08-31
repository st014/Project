using EventPlannerSampleTest.Data;
using EventPlannerSampleTest.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Security.Cryptography;
using System.Text.RegularExpressions;

namespace EventPlannerSampleTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        IClientsService clientsService;
        public ClientsController() 
        {
            clientsService = new ClientsService();
        }

        [HttpPut("ClientUpdateProfile")]
        public int UpdateVendorProfilePut(ClientsData clientsData, int id)
        {
            int rs = clientsService.UpdateClientprofile(clientsData, id);
            return 0;
        }
        [HttpGet("ViewClientsProfile")]
        public ClientsData ClientsGet(int id)
        {
            ClientsData results = clientsService.ViewProfileClients(id);
            return results;
        }

        [HttpGet("ClientsHistory")]
        public IList ShowHistoryGet(int id)
        {
            var result = clientsService.ViewClientsHistory(id);
            return result;
        }

        [HttpGet("SearchVendor")]
        public IList GetAllSearch(int eid)
        {
            var results = clientsService.Search(eid);
            return results;
        }

        [HttpPost("SendRequest")]
        public int SendRequest(ReqResData reqResData) 
        {
            var result = clientsService.ReqSendToVendor(reqResData);
            return 0;
        }

        [HttpGet("LogInUser")]
        public ClientsData LoginUser(string userName, string pass)
        {
            ClientsData cd = new ClientsData { client_id = 0, cname = "not found", city = "not found", contact = 0, email_id = "not found", password="not found" };

            bool t = clientsService.VerifyUser(userName, pass);
            if (t)
            {
                cd = clientsService.ViewProfile(userName);
            }
            return cd;
        }

        [HttpGet("ShowStatus")]
        public IList ShowStatus(int id)
        {
            var results = clientsService.BookingStatus(id);
            return results;
        }

    }
}
