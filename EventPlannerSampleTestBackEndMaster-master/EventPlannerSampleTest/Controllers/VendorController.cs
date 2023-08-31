using EventPlannerSampleTest.Data;
using EventPlannerSampleTest.Models;
using EventPlannerSampleTest.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace EventPlannerSampleTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        IVendorService vendorService;
        public VendorController()
        {
            vendorService = new VendorService();
        }

        [HttpPost("addServices")]
        public int AddServicePost(ServicesData servicesData) 
        {
            int results = vendorService.AddVendorService(servicesData);
            return 0;
        }
     

        [HttpPut("updateProfile")]
        public int UpdateVendorProfilePut(vendorData vendorData, int id) 
        {
            int rs = vendorService.UpdateVendorProfileService(vendorData, id);
            return 0;
        }

        [HttpGet("ViewVendorProfile")]
        public vendorData VendorGet(int id)
        {
            vendorData results = vendorService.ViewProfileVendor(id);
            return results;
        }

        [HttpGet("VendorHistory")]
        public IList ShowHistoryGet(int id) 
        {
            var result = vendorService.ViewVendorHistory(id);
            return result;
        }

        [HttpGet("viewRequest")]
        public IList ViewRequest(int id) 
        {
            IList vr = vendorService.ViewAllRequest(id);
            return vr;
        }

        [HttpPost("AcceptRequest")]
        public int RespondAccept(BookingsData bd, int id) 
        {
            int vr = vendorService.AcceptRequest(bd, id);
            return 0;
        }

        [HttpGet("RejectRequest")]
        public int RespondReject(int id)
        {
            int vr = vendorService.RejectRequest(id);
            return 0;
        }

        [HttpGet("LogInVendor")]
        public vendorData LoginVendor(string userName, string pass)
        {
            vendorData cd = new vendorData { vendor_id = 0, vname = "not found", city = "not found", contact = 0, email_id = "not found" };

            bool t = vendorService.VerifyVendor(userName, pass);
            if (t)
            {
                cd = vendorService.ViewProfile(userName);
            }
            return cd;
        }


    }
}
