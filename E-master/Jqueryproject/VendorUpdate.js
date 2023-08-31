$(document).ready(
    function () {
        console.log("a1")
        const cvname = window.localStorage.getItem("vname");
        const cvid = window.localStorage.getItem("vid");
        const cvcon = window.localStorage.getItem("vcon");
        const cvcity = window.localStorage.getItem("vct");
        const cvemail = window.localStorage.getItem("vemail");

        $("#vname").val(cvname);
        $("#vphone").val(cvcon);
        $("#vcity").val(cvcity);
        $("#vemail").val(cvemail);
        $("#vid").val(cvid);
        //console.log(vid);


        $('#updateform1').click(function (event) {
            event.preventDefault();
            console.log("a2")
            const vname = $("#vname").val();
            const vphone = $("#vphone").val();
            const vcity = $("#vcity").val();
            const cvid = $("#vid").val();
            const cvemail = $("#vemail").val();

            console.log("hdh");
            $.ajax({
                url: `https://localhost:7225/api/Vendor/updateProfile?id=${cvid}`,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({
                    "vendor_id": cvid,
                    "vname": vname,
                    "contact": vphone,
                    "email_id": cvemail,
                    "city": vcity,
                    "password": "Null"
                }),
                success: function (data) {
                    console.log(data);
                    alert("Profile updated successfully.");
                    window.location.href = "VendorProfile.html";
                },
                error: function (error) {
                    console.log(error);
                    alert("Profile update failed.");
                }
            });

            
        });
    })
