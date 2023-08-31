$(document).ready(
    function () {
        const cuname = window.localStorage.getItem("cname");
        const cuid = window.localStorage.getItem("cid");
        const cucon = window.localStorage.getItem("ccon");
        const cucity = window.localStorage.getItem("cct");
        const cuemail = window.localStorage.getItem("cemail");

        $("#uname").val(cuname);
        $("#uphone").val(cucon);
        $("#ucity").val(cucity);
        $("#uemail").val(cuemail);
        $("#uid").val(cuid);
        //console.log(uid);


//         $('#updateform').submit(
//             function (event) {
//                 event.preventDefault();
//                 //console.log("asdasdasd");

//                 const uname = $("#uname").val();
//                 const uphone = $("#uphone").val();
//                 const ucity = $("#ucity").val();

//                 $.ajax(`https://localhost:7225/api/Clients/ClientUpdateProfile?id=${cuid}`, {
//                     "client_id": cuid,
//                     "cname": uname,
//                     "contact": uphone,
//                     "email_id": cuemail,
//                     "city": ucity
//                 }, (data) => {
//                     //alert("profile updated successful");
//                     console.write(data);
//                     // if (data.rs == 0) {
//                     //     window.location.href = "UserProfile.html";
//                     //     alert("profile updated successful");
//                     // }
//                     // else {
//                     //     alert("profile update failed");
//                     // }
//                 })
//             })
//     }
// ) 


$('#updateform').submit(function (event) {
    event.preventDefault();
    console.log("hdh1");
    const uname = $("#uname").val();
    const uphone = $("#uphone").val();
    const ucity = $("#ucity").val();
    const cuid = $("#uid").val();
    const cuemail = $("#uemail").val();

    console.log("hdh2");
    $.ajax({
        url: `https://localhost:7225/api/Clients/ClientUpdateProfile?id=${cuid}`,
        method: 'PUT',
        contentType: 'application/json',
        data:JSON.stringify( {
            "client_id": cuid,
            "cname": uname,
            "contact": uphone,
            "email_id": cuemail,
            "city": ucity,
            "password":"Null"
        }),
        success: function(data) {
            console.log(data);
            alert("Profile updated successfully.");
            window.location.href = "UserProfile.html"; 
        },
        error: function(error) {
            console.log(error);
            alert("Profile update failed.");
        }
    });
});
    })
