using EventPlannerSampleTest.Data;
using EventPlannerSampleTest.Models;
using System.Collections;
using System.Linq;

namespace EventPlannerSampleTest.Service
{
    public class ClientsService : IClientsService
    {
        private readonly projectContext _projectContext;

        public ClientsService() 
        {
            _projectContext = new projectContext();
        }

        public ClientsData LogInClients(string userName, string pass)
        {
            throw new NotImplementedException();
        }

        //public ClientsData LogInClients(string userName, string pass)
        //{
        //    var cr = _projectContext.clients;
        //    var ur = _projectContext.user;

        //    var 
        //}

        public int ReqSendToVendor(ReqResData reqResData)
        {
            requestresponse rr = new requestresponse { response = reqResData.response, clients_id = reqResData.clients_id, vendor_id = reqResData.vendor_id, service_id = reqResData.service_id };
            _projectContext.requestresponse.Add(rr);
            _projectContext.SaveChanges();

            return 0;
        }

        public IList Search(int id)  
        {
            var vn = _projectContext.vendor;
            var en = _projectContext.events;
            var sr = _projectContext.services;

            var query = from v in vn
                        join a in sr
                        on v.vendor_id equals a.vendor_id
                        join e in en
                        on a.event_id equals e.event_id
                        where e.event_id == id
                        select new
                        {
                            vname = v.vname,
                            event_name = e.event_name,
                            amount = a.amount,
                            vendor_id = v.vendor_id,
                            event_id = e.event_id,
                            service_id = a.service_id
                        };
            var result = query.ToList();
            return result;
        }


        public int UpdateClientprofile(ClientsData clientsData, int id)
        {
            clients cr = _projectContext.clients.Find(id);

            cr.cname = clientsData.cname;
            cr.contact = clientsData.contact;
            cr.city = clientsData.city;
            _projectContext.SaveChanges();

            return 0;
        }  

        public IList ViewClientsHistory(int id)
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
                        where c.client_id == id
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

       

        public ClientsData ViewProfile(string userName)
        {
            //    var vr = from c in _projectContext.clients
            //             where c.email_id == userName
            //            select new
            //        {
            //            client_id = c.client_id,
            //            cname = c.cname,
            //            contact =c.contact,
            //            city=c.city,
            //            email_id= c.email_id
            //        };

            //    var rs = vr.ToList();
            //    var vs = rs.GetEnumerator();
            //    ClientsData cd = new ClientsData { client_id=rs.client_id, city = vr.city, email_id = vr.email_id, contact = vr.contact };
            //    return
            ClientsData cd = new ClientsData { client_id = 0, cname = "not found", city = "not found", contact = 0, email_id = "not found" };
            try { 
            clients cr = _projectContext.clients.FirstOrDefault(p => p.email_id==userName );
            
             cd = new ClientsData { client_id=cr.client_id,cname=cr.cname, city = cr.city, email_id = cr.email_id, contact = cr.contact };
            }catch( Exception ex ) 
            {

            }
            return cd;
        }
        public bool VerifyUser(string userName, string pass)
        {
            bool bl = false;

            user us = _projectContext.user.FirstOrDefault(p=>p.email_id==userName && p.password == pass);
            
            if (us != null) 
            {
                bl = true;
            }

            return bl;

        }


        public  ClientsData ViewProfileClients(int id)
        {
            ClientsData vs = new ClientsData { client_id = 0, cname = "not found", city = "not found", contact = 0, email_id = "not found" };

            try { 
            clients vr = _projectContext.clients.Find(id);

            vs = new ClientsData { client_id= id,  cname = vr.cname, city = vr.city, email_id = vr.email_id, contact = vr.contact };
            }catch( Exception ex ) { }
            return vs;
        }

        public IList BookingStatus(int id)
        {
            var cr = _projectContext.clients;
            var vr = _projectContext.vendor;
            var er = _projectContext.events; 
            var sr = _projectContext.services;
            var rs = _projectContext.requestresponse;

            var query = from r in rs
                        join c in cr on r.clients_id equals c.client_id
                        join v in vr on r.vendor_id equals v.vendor_id
                        join s in sr on r.service_id equals s.service_id
                        join e in er on s.event_id equals e.event_id
                        where r.clients_id == id
                        select new
                        {
                            cname = c.cname,
                            vname = v.vname,
                            ename = e.event_name,
                            sname = s.amount,
                            response = r.response
                        };

            var result = query.ToList();
            return result;
        }
    }
}
