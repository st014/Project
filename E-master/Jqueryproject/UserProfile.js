$(document).ready(
    function () {
        //    alert(localStorage.getItem('aa'))
        console.log(window.localStorage.getItem('cid'))

        const cid1 = window.localStorage.getItem("cid");
        console.log(cid1)
        $.get(`https://localhost:7225/api/Clients/ViewClientsProfile?id=${cid1}`, (data) => {
            console.log(data)

            $("#cname").append(data.cname)
            $("#contact").append(data.contact)
            $("#city").append(data.city)
            $("#email").append(data.email_id)
        })
        $('#HistoryClient').click(

            function () {
                const cid1 = window.localStorage.getItem("cid");
                console.log(cid1);
                $.get(`https://localhost:7225/api/Clients/ClientsHistory?id=${cid1}`, (data1) => {
                    console.log(data1);

                    const thead = $("#cthd");
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
                    const tbody = $("#ctbd");

                    var count = 1;
                    $.each(data1, function (index, obj) {
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

        $("#StatusClient").click(
            function () {
                $.get(`https://localhost:7225/api/Clients/ShowStatus?id=${cid1}`, (data3) => {

                    console.log(data3);

                    const thead = $("#csthd");
                    const hrow = $("<tr></tr>");
                    const ClientSr = $("<th></th>").text("#");
                    const ClientName = $("<th></th>").text("Client Name");
                    const VendorName = $("<th></th>").text("Vendor Name");
                    const EventName = $("<th></th>").text("Event");
                    const amount = $("<th></th>").text("Amount");
                    const res = $("<th></th>").text("Response");

                    hrow.append(ClientSr);
                    hrow.append(ClientName);
                    hrow.append(VendorName);
                    hrow.append(EventName);
                    hrow.append(amount);
                    hrow.append(res);

                    thead.append(hrow)
                    const tbody = $("#cstbd");
                    var resp = "..";
                    var count = 1;
                    $.each(data3, function (index, obj) {
                        console.log("row intialize");
                        // Create a new row element
                        const row = $("<tr></tr>");

                        // Add cell elements to the row element, populating them with data from the object
                        const srCell = $("<td></td>").text(count);
                        const clientCell = $("<td></td>").text(obj.cname);
                        const vendorCell = $("<td></td>").text(obj.vname);
                        const eventCell = $("<td></td>").text(obj.ename);
                        const amountCell = $("<td></td>").text(obj.sname);
                        var rs = parseInt(obj.response);
                        if (rs == 0) {
                            resp = "pending";
                        } else if (rs == 1) {
                            resp = "request accepted";
                        } else {
                            resp = "request rejected";
                        }
                        const resCell = $("<td></td>").text(resp);
                        // Append the cell elements to the row element
                        row.append(srCell);
                        row.append(clientCell);
                        row.append(vendorCell);
                        row.append(eventCell);
                        row.append(amountCell);
                        row.append(resCell);

                        // Append the row element to the table body
                        tbody.append(row);
                        count++;
                    })
                }
                )
            }
        )
    }
)





