using EventPlannerSampleTest.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EventPlannerSampleTest.Data
{
    public class ClientsData
    {


        public int client_id { get; set; }
        public string cname { get; set; }
        public int? contact { get; set; }
       
        public string email_id { get; set; }
        public string city { get; set; }

        public string password { get; set; }

       

     
    }
}
