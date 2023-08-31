
$(document).ready(() => {
    $('#loginaa').click(
        function (event) {
            var cid ;
            event.preventDefault();
            var name = $("#eid").val()
            console.log(name)
            var pass = $("#pid").val()
            console.log(pass)
            if ($('input[name="flexRadioDefault"]:checked').val() === "client1") {
                console.log("clientapi hit");
                $.get(`https://localhost:7225/api/Clients/LogInUser?userName=${name}&pass=${pass}`, (data) => {
                console.log(data);
                console.log(data.client_id);
             
                if (data.client_id!=0) {
                    window.location.href = "UserProfile.html"
                }
                else {
                    alert("Login Failed")
                }
                window.localStorage.setItem('cid', data.client_id);
                window.localStorage.setItem('cname', data.cname);
                window.localStorage.setItem('ccon', data.contact);
                window.localStorage.setItem('cct', data.city);
                window.localStorage.setItem('cemail', data.email_id);
                
                
            })

            }
            else{
                console.log("vendor api hit");
                $.get(`https://localhost:7225/api/Vendor/LogInVendor?userName=${name}&pass=${pass}`, (data) => {
                console.log(data);
                //console.log(data.client_id);
                
                if (data.vendor_id != 0) {
                    window.location.href="VendorProfile.html"

                }
                else {
                    alert("Login Failed")
                }
                window.localStorage.setItem('vid', data.vendor_id);
                window.localStorage.setItem('vname', data.vname);
                window.localStorage.setItem('vcon', data.contact);
                window.localStorage.setItem('vct', data.city);
                window.localStorage.setItem('vemail', data.email_id);
                console.log("djbdksjd")
                
            })
            }
            
        }
    )
}
)