using EventPlannerSampleTest.Data;
using System.Collections;

namespace EventPlannerSampleTest.Service
{
    public interface IVendorService
    {
        int AcceptRequest(BookingsData bd, int id);
        int AddVendorService(ServicesData servicesData);
        int RejectRequest( int id);
        int UpdateVendorProfileService(vendorData vendorData, int id);
        IList ViewAllRequest(int id);

        //  int UpdateVendorService(ServicesData servicesData);
        public vendorData ViewProfileVendor(int id);
        public IList ViewVendorHistory(int id);
        public bool VerifyVendor(string userName, string pass);
        public vendorData ViewProfile(string userName);
    }
}
