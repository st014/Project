using EventPlannerSampleTest.Data;
using EventPlannerSampleTest.Models;
using System.Collections;
using System.Linq;
using System.Net.Sockets;

namespace EventPlannerSampleTest.Service
{
    public class VendorService : IVendorService
    {
        private readonly projectContext _projectContext;
        public VendorService()
        {
            _projectContext = new projectContext();
        }


        public int AcceptRequest(BookingsData bd, int id)
        {
            requestresponse vr = _projectContext.requestresponse.Find(id);
            vr.response = 1;
            _projectContext.SaveChanges();

            bookings br = new bookings { client_id= bd.client_id, vendor_id = bd.vendor_id, event_id = bd.event_id, 
                                            service_id = bd.service_id, amount = bd.amount, request_id = bd.request_id};
            _projectContext.bookings.Add(br);
            _projectContext.SaveChanges();
            return 0;
        }

        public int AddVendorService(ServicesData servicesData)
        {
            services vs = new services { vendor_id = servicesData.vendor_id, event_id = servicesData.event_id, amount = servicesData.amount};

            _projectContext.services.Add(vs);
            _projectContext.SaveChanges();
            return 0;
        }

        public int RejectRequest(int id)
        {
            requestresponse vr = _projectContext.requestresponse.Find(id);
            vr.response = -1;
            _projectContext.SaveChanges();
            return 0;
        }

        public int UpdateVendorProfileService(vendorData vendorData, int id)
        {
            vendor vr = _projectContext.vendor.Find(id);

            vr.vname = vendorData.vname;
            vr.contact = vendorData.contact;
            vr.city = vendorData.city;
            _projectContext.SaveChanges();

            return 0;
        }

        public IList ViewAllRequest(int id)
        {
            var vr = _projectContext.requestresponse;
            var er = _projectContext.events;
            var sr = _projectContext.services;
            var cr = _projectContext.clients;

            var resu = from r in vr
                       join c in cr on r.clients_id equals c.client_id
                       join s in sr on r.service_id equals s.service_id
                       join e in er on s.event_id equals e.event_id
                       where r.vendor_id == id && r.response == 0
                       select new
                       {
                           cname = c.cname,
                           event_name = e.event_name,
                           contact = c.contact,
                           service_id = s.service_id,
                           request_id = r.request_id,
                           amount = s.amount,
                           event_id = e.event_id,
                           vendor_id = id,
                           clients_id = c.client_id

                       };
                IList rs = resu.ToList();
            return rs;
        }

        public vendorData ViewProfileVendor(int id)
        {
            vendor vd = _projectContext.vendor.Find(id);
            
            vendorData vs = new vendorData { vname = vd.vname, city = vd.city, email_id = vd.email_id, contact = vd.contact};

            return vs ;
        }

        public IList ViewVendorHistory(int id) 
        {
            var vr = _projectContext.vendor;
            var er = _projectContext.events;
            var sr = _projectContext.services;
            var cr = _projectContext.clients;
            var br = _projectContext.bookings;

            var query = from c in cr
                        join b in br on c.client_id equals b.client_id
                        join v in vr on b.vendor_id equals v.vendor_id
                        join s in sr on b.service_id equals s.service_id
                        join e in er on b.event_id equals e.event_id
                        where v.vendor_id == id
                        select new
                        {
                            cname = c.cname,
                            vname = v.vname,
                            ename = e.event_name,
                            sname = s.amount
                        };
            var result = query.ToList();
            return result;
        }

        public bool VerifyVendor(string userName, string pass)
        {
            bool bl = false;

            user us = _projectContext.user.FirstOrDefault(p => p.email_id == userName && p.password == pass);

            if (us != null)
            {
                bl = true;
            }

            return bl;
        }

        public vendorData ViewProfile(string userName)
        {
            vendorData cd = new vendorData { vendor_id = 0, vname = "not found", city = "not found", contact = 0, email_id = "not found" };
            try
            {
                vendor cr = _projectContext.vendor.FirstOrDefault(p => p.email_id == userName);

                cd = new vendorData { vendor_id = cr.vendor_id, vname = cr.vname, city = cr.city, email_id = cr.email_id, contact = cr.contact };
            }
            catch (Exception ex)
            {
                
            }
            return cd;
        }
    }
}
