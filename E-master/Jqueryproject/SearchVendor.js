$(document).ready(
    function () {

        $("#vsearch").click(
            function (event) {
                event.preventDefault();
                const bd = parseInt($("#Event").val());
                console.log(bd);

                $.get(`https://localhost:7225/api/Clients/SearchVendor?eid=${bd}`, (data2) => {

                    console.log(bd);

                    const thead = $("#sthd");
                    const hrow = $("<tr></tr>");
                    const Sr = $("<th></th>").text("#");
                    const EventId = $("<th></th>").text("Event Id");
                    const EventName = $("<th></th>").text("Event Name");
                    const VendorId = $("<th></th>").text("Vendor Id");
                    const VendorName = $("<th></th>").text("Vendor Name");
                    const amount = $("<th></th>").text("Amount");
                    const ServiceId = $("<th></th>").text("Service Id");
                    const Act = $("<th></th>").text("Action");

                    hrow.append(Sr);
                    hrow.append(EventId);
                    hrow.append(EventName);
                    hrow.append(VendorId);
                    hrow.append(VendorName);
                    hrow.append(amount);
                    hrow.append(ServiceId);
                    hrow.append(Act);

                    thead.append(hrow)
                    const tbody = $("#stbd");

                    var count = 1;
                    $.each(data2, function (index, obj) {
                        console.log("row intialize");
                        // Create a new row element
                        const row = $("<tr class='srd'></tr>");

                        // Add cell elements to the row element, populating them with data from the object
                        const srCell = $("<td></td>").text(count);
                        const eventIdCell = $("<td></td>").text(obj.event_id);
                        const eventCell = $("<td></td>").text(obj.event_name);
                        const vendorIdCell = $("<td></td>").text(obj.vendor_id);
                        const vendorCell = $("<td></td>").text(obj.vname);
                        const amountCell = $("<td></td>").text(obj.amount);
                        const serviceIdCell = $("<td></td>").text(obj.service_id);
                        const actCell = $("<button class='srdClick'></button>").text("Book");
                        // Append the cell elements to the row element
                        row.append(srCell);
                        row.append(eventIdCell);
                        row.append(eventCell);
                        row.append(vendorIdCell);
                        row.append(vendorCell);
                        row.append(amountCell);
                        row.append(serviceIdCell);
                        row.append(actCell);

                        // Append the row element to the table body
                        tbody.append(row);
                        count++;
                    });
                    $(".srdClick").click(function () {

                        console.log(bd);

                        var curow = $(this).closest("tr");
                        var srCell = curow.find("td:eq(0)").text();
                        var eventIdCell = curow.find("td:eq(1)").text();
                        var eventCell = curow.find("td:eq(2)").text();
                        var vendorIdCell = curow.find("td:eq(3)").text();
                        var vendorCell = curow.find("td:eq(4)").text();
                        var amountCell = curow.find("td:eq(5)").text();
                        var serviceIdCell = curow.find("td:eq(6)").text();

                        const cid1 = window.localStorage.getItem("cid");

                        console.log(srCell);
                        console.log(eventIdCell);
                        console.log(eventCell);
                        console.log(vendorIdCell);
                        console.log(vendorCell);
                        console.log(amountCell);
                        console.log(serviceIdCell);
                        console.log(cid1);

                        $.ajax({
                            url: `https://localhost:7225/api/Clients/SendRequest`,
                            method: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify({
                                "clients_id": cid1,
                                "vendor_id": vendorIdCell,
                                "service_id": serviceIdCell,
                                "response": 0
                            }),
                            dataType: 'json',
                            success: function (data) {
                                console.log(data);
                                alert("Request Sent Successfully");
                               
                            },
                            error: function (error) {
                                console.log(error);
                                alert("Request Sent Failed.");
                            }
                        });
                    });
                }

                )
            }
        )


        // $("#srdClick").click(function () {

        //     console.log(bd);

        //     var curow = $(this).closest("tr");
        //     var srCell = curow.find("td:eq(0)").text();
        //     var eventIdCell = curow.find("td:eq(1)").text();
        //     var eventCell = curow.find("td:eq(2)").text();
        //     var vendorIdCell = curow.find("td:eq(3)").text();
        //     var vendorCell = curow.find("td:eq(4)").text();
        //     var amountCell = curow.find("td:eq(5)").text();
        //     var serviceIdCell = curow.find("td:eq(6)").text();


        //     console.log(srCell);
        //     console.log(eventIdCell);
        //     console.log(eventCell);
        //     console.log(vendorIdCell);
        //     console.log(vendorCell);
        //     console.log(amountCell);
        //     console.log(serviceIdCell);
        // }); 


    }
)