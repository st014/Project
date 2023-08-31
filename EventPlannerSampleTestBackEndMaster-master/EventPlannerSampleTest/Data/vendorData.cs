using System.ComponentModel.DataAnnotations;

namespace EventPlannerSampleTest.Data
{
    public class vendorData
    {      
        public string vname { get; set; }
        public int? contact { get; set; }
        
        public string email_id { get; set; }
       
        public string city { get; set; }

        public string password { get; set; }

        public int vendor_id { get; set; }
    }
}
