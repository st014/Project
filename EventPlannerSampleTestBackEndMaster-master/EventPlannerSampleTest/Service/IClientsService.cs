using EventPlannerSampleTest.Data;
using System.Collections;

namespace EventPlannerSampleTest.Service
{
    public interface IClientsService
    {
        IList BookingStatus(int id);
        ClientsData LogInClients(string userName, string pass);
        int ReqSendToVendor(ReqResData reqResData);
        IList Search(int id);
        int UpdateClientprofile(ClientsData clientsData, int id);
        bool VerifyUser(string userName, string pass);
        IList ViewClientsHistory(int id);
        ClientsData ViewProfile(string userName);
        ClientsData ViewProfileClients(int id);
    }
}
