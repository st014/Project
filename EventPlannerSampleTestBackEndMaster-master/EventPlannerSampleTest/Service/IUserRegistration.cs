using EventPlannerSampleTest.Data;
using EventPlannerSampleTest.Models;

namespace EventPlannerSampleTest.Service
{
    public interface IUserRegistration
    {
        public int AddUserClients(ClientsData _clients1);
        //void AddUserClients(ClientsData clients1);
        //int AddUserClients(ClientsData clients);
        public int AddUserVendor(vendorData _vendorData);
        //void AddUserVendor(vendorData vendorData);
    }
}
