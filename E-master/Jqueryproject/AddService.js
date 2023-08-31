$(document).ready(

    function () {

        $("#addevt").click(
            function (event) {
                event.preventDefault();
                const bd = parseInt($("#Event").val());
                const vid2 = window.localStorage.getItem("vid");
                const xxx = parseInt($("#amount").val());

                console.log(bd);
                console.log(vid2);
                console.log(xxx);

                $.ajax({
                    url: `https://localhost:7225/api/Vendor/addServices`,
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        "vendor_id": vid2,
                        "event_id": bd,
                        "amount": xxx
                    }),
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        alert("event added Successfully.");
                    
                    },
                    error: function (error) {
                        console.log(error);
                        alert("Event not added.");
                    }
                });
            }

        )

    })




