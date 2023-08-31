$(document).ready(
    function () {
        $('#register').click((event) => {
            event.preventDefault();
            const name = $("#name").val();
            const contact = $("#contact").val();
            const city = $("#city").val();
            const mail = $("#mail").val();
            const pass = $("#password").val();

            if ($('input[name="flexRadioDefault"]:checked').val() === "client") {
                
                

                $.post(`https://localhost:7225/api/Login/RegisterClients?password=${pass}&client_id=0&name=${name}&contact=${contact}&mail=${mail}&city=${city}`, 
                
                  (data) => {
                     alert("Client Registration Successful");
                     window.location.href="login.html"
                 })




            } else {

                $.ajax({
                    url: `https://localhost:7225/api/Login/RegisterVendor`,
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        "vname": name,
                        "contact": contact,
                        "email_id": mail,
                        "city": city,
                        "password": pass
                    }),
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        alert("Vendor Registration Successful.");
                        window.location.href = "login.html";
                    },
                    error: function (error) {
                        console.log(error);
                        alert("Vendor Registration failed.");
                    }
                });
            }
        })


    }
)




//client
// $.post(`https://localhost:7225/api/Login/RegisterClients?pass=${pass}`, {
                //     "client_id": 0,
                //     "cname": name,
                //     "contact": contact,
                //     "email_id": mail,
                //     "city": city,

                // }, (data) => {
                //     alert("Client Registration Successful");
                //     console.log(data);
                // })


// $.ajax({
                //     url: `https://localhost:7225/api/Login/RegisterClients`,
                //     method: 'POST',
                //     contentType: 'application/json',
                //     data: JSON.stringify({
                //         "client_id": 0,
                //         "cname": name,
                //         "contact": contact,
                //         "email_id": mail,
                //         "city": city,
                //         "password":pass
                //     }),
                //     //dataType: 'json',
                //     success: function (data) {
                //         console.log(data);
                //         alert("Client Registration Successful.");
                //         window.location.href = "login.html";
                //     },
                //     error: function (error) {
                //         console.log(error);
                //         alert("Client Registration failed.");
                //     }
                // });







//vendor
// $.post(`https://localhost:7225/api/Login/RegisterVendor?pass=${pass}`, {
                //     "vname": name,
                //     "contact": contact,
                //     "email_id": mail,
                //     "city": city,

                // }, (data) => {
                //     alert("Vendor Registration Successful");
                //     console.log(data);
                //     window.location.href = "login.html";
                // })