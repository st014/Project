using EventPlannerSampleTest.Data;
using EventPlannerSampleTest.Models;
using Microsoft.EntityFrameworkCore.Query.Internal;

namespace EventPlannerSampleTest.Service
{
    public class UserRegistration : IUserRegistration
    {

        private readonly projectContext _projectContext;
        public UserRegistration()
        {
            _projectContext = new projectContext();
        }

        //public int AddUserClients(ClientsData _clients) 
        //{
        //    clients cs = new clients { cname = _clients.cname, city = _clients.city, email_id = _clients.email_id, contact = _clients.contact, password = _clients.password };
        //    user us = new user ();
        //    us.email_id = _clients.email_id;
        //    us.password = _clients.password;
            
        //    _projectContext.user.Add(us);
        //    _projectContext.clients.Add(cs);
        //    _projectContext.SaveChanges();

        //    return 0;
        //}

        public int AddUserClients(ClientsData _clients, string pass)
        {
            throw new NotImplementedException();
        }

        //public int AddUserVendor(vendorData _vendorData)
        //{
        //    vendor vs = new vendor { vname = _vendorData.vname, city = _vendorData.city, email_id = _vendorData.email_id, contact = _vendorData.contact, password = _vendorData.password };
        //    user us = new user();
        //    us.email_id = _vendorData.email_id;
        //    us.password = _vendorData.password;

        //    _projectContext.user.Add(us);
        //    _projectContext.vendor.Add(vs);
        //    _projectContext.SaveChanges();

        //    return 0;
        //}

        public int AddUserVendor(vendorData _vendorData, string pass)
        {
            throw new NotImplementedException();
        }

        int IUserRegistration.AddUserClients(ClientsData clients)
        {
            clients us = new clients { cname = clients.cname, city = clients.city, email_id = clients.email_id, contact = clients.contact };
            user cs = new user { password = clients.password, email_id = clients.email_id };
            //us.email_id = clients.email_id;
            //cs.password = clients.password;
            _projectContext.user.Add(cs);
            _projectContext.clients.Add(us);
            _projectContext.SaveChanges();
            return 0;
        }
        int IUserRegistration.AddUserVendor(vendorData vendorData)
        {
            vendor vs = new vendor { vname = vendorData.vname, city = vendorData.city, email_id = vendorData.email_id, contact = vendorData.contact };
            user us = new user { password = vendorData.password, email_id=vendorData.email_id };
            //us.email_id = vendorData.email_id;
            //us.password = vendorData.password;

            _projectContext.user.Add(us);
            _projectContext.vendor.Add(vs);
            _projectContext.SaveChanges();

            return 0;
        }
    }

        
    }
