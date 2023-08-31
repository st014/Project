$(document).ready(
    function () {
        //    alert(localStorage.getItem('aa'))
        console.log(window.localStorage.getItem('vid'))
        console.log("a1")
        const vid1 = window.localStorage.getItem("vid");
        console.log(vid1)
        $.get(`https://localhost:7225/api/Vendor/ViewVendorProfile?id=${vid1}`, (data) => {
            console.log(data)

            $("#vname").append(data.vname)
            $("#contact").append(data.contact)
            $("#city").append(data.city)
            $("#email").append(data.email_id)
        })

        $('#HistoryVendor').click(

            function () {

                console.log(vid1);
                $.get(`https://localhost:7225/api/Vendor/VendorHistory?id=${vid1}`, (data4) => {
                    console.log(data4);

                    const thead = $("#vthd");
                    const hrow = $("<tr></tr>");
                    const ClientSr = $("<th></th>").text("#");
                    const ClientName = $("<th></th>").text("Client Name");
                    const VendorName = $("<th></th>").text("Vendor Name");
                    const EventName = $("<th></th>").text("Event");
                    const amount = $("<th></th>").text("Amount");

                    hrow.append(ClientSr);
                    hrow.append(ClientName);
                    hrow.append(VendorName);
                    hrow.append(EventName);
                    hrow.append(amount);

                    thead.append(hrow)
                    const tbody = $("#vtbd");

                    var count = 1;
                    $.each(data4, function (index, obj) {
                        console.log("row intialize");
                        // Create a new row element
                        const row = $("<tr></tr>");

                        // Add cell elements to the row element, populating them with data from the object
                        const srCell = $("<td></td>").text(count);
                        const clientCell = $("<td></td>").text(obj.cname);
                        const vendorCell = $("<td></td>").text(obj.vname);
                        const eventCell = $("<td></td>").text(obj.ename);
                        const amountCell = $("<td></td>").text(obj.sname);
                        // Append the cell elements to the row element
                        row.append(srCell);
                        row.append(clientCell);
                        row.append(vendorCell);
                        row.append(eventCell);
                        row.append(amountCell);

                        // Append the row element to the table body
                        tbody.append(row);
                        count++;
                    });

                })

            }
        )

        $("#StatusVendor").click(
            function () {
                $.get(`https://localhost:7225/api/Vendor/viewRequest?id=${vid1}`, (data3) => {

                    //  console.log(data3);

                    const thead = $("#vsthd");
                    const hrow = $("<tr></tr>");
                    const ClientSr = $("<th></th>").text("#");
                    const ReqId = $("<th></th>").text("Request Id");
                    const ClientId = $("<th></th>").text("Client Id");
                    const ClientName = $("<th></th>").text("Client Name");
                    const VServiceId = $("<th></th>").text("Service Id");
                    const Vendor = $("<th></th>").text("vendorId");
                    const EventId = $("<th></th>").text("EventId");
                    const EventName = $("<th></th>").text("Event");
                    const amount = $("<th></th>").text("Amount");
                    const conct = $("<th></th>").text("contact");
                    const res1 = $("<th></th>").text("Accept");
                    const res2 = $("<th></th>").text("Reject");

                    hrow.append(ClientSr);
                    hrow.append(ReqId);
                    hrow.append(ClientId);
                    hrow.append(ClientName);
                    hrow.append(VServiceId);
                    hrow.append(Vendor);
                    hrow.append(EventId);
                    hrow.append(EventName);
                    hrow.append(amount);
                    hrow.append(conct);
                    hrow.append(res1);
                    hrow.append(res2);


                    thead.append(hrow)
                    const tbody = $("#vstbd");

                    var count = 1;
                    $.each(data3, function (index, obj) {
                        console.log("row intialize");
                        // Create a new row element
                        const row = $("<tr></tr>");

                        // Add cell elements to the row element, populating them with data from the object
                        const srCell = $("<td></td>").text(count);
                        const reqIdCell = $("<td></td>").text(obj.request_id);
                        const clientCell = $("<td></td>").text(obj.clients_id);
                        const ClientName = $("<td></td>").text(obj.cname);
                        const serviceCell = $("<td></td>").text(obj.service_id);
                        const Vendor = $("<td></td>").text(obj.vendor_id);
                        const EventId = $("<td></td>").text(obj.event_id);
                        const EventName = $("<td></td>").text(obj.event_name);
                        const amount = $("<td></td>").text(obj.amount);
                        const conct = $("<td></td>").text(obj.contact);
                        const acceptCell = $("<button class='acceptreq'></button>").text("Accept");
                        const rejectCell = $("<button class='rejectreq'></button>").text("Reject");

                        // Append the cell elements to the row element
                        row.append(srCell);
                        row.append(reqIdCell);
                        row.append(clientCell);
                        row.append(ClientName);
                        row.append(serviceCell);
                        row.append(Vendor);
                        row.append(EventId);
                        row.append(EventName);
                        row.append(amount);
                        row.append(conct);
                        row.append(acceptCell);
                        row.append(rejectCell);

                        // Append the row element to the table body
                        tbody.append(row);
                        count++;
                    })
                    $(".acceptreq").click(function () {

                        console.log(" accept click done")
                        var curow = $(this).closest("tr");
                        var srCell = curow.find("td:eq(0)").text();
                        var reqIdCell = curow.find("td:eq(1)").text();
                        var clientCell = curow.find("td:eq(2)").text();
                        var ClientName = curow.find("td:eq(3)").text();
                        var serviceCell = curow.find("td:eq(4)").text();
                        var VendorId = curow.find("td:eq(5)").text();
                        var EventId = curow.find("td:eq(6)").text();
                        var EventName = curow.find("td:eq(7)").text();
                        var amount = curow.find("td:eq(8)").text();
                        var conct = curow.find("td:eq(9)").text();

                        console.log(srCell);
                        console.log(reqIdCell);
                        console.log(clientCell);
                        console.log(ClientName);
                        console.log(serviceCell);
                        console.log(VendorId);
                        console.log(EventId);
                        console.log(EventName);
                        console.log(amount);
                        console.log(conct);

                        $.ajax({
                            url: `https://localhost:7225/api/Vendor/AcceptRequest?id=${reqIdCell}`,
                            method: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify({
                                "client_id": clientCell,
                                "vendor_id": VendorId,
                                "event_id": EventId,
                                "amount": amount,
                                "service_id": serviceCell,
                                "request_id": reqIdCell
                            }),
                            dataType: 'json',
                            success: function (data) {
                                console.log(data);
                                alert("request Accept successfull");

                            },
                            error: function (error) {
                                console.log(error);
                                alert("fail..!!");
                            }
                        });

                    })
                    $(".rejectreq").click
                        (function () {
                            console.log(" reject click done")
                            var curow = $(this).closest("tr");
                            var reqIdCell = curow.find("td:eq(1)").text();

                            $.get(`https://localhost:7225/api/Vendor/RejectRequest?id=${reqIdCell}`, (data4) => {

                            })

                        })


                });


            }
        )

    }
)






