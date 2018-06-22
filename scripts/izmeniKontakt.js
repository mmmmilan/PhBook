function izmeniDatas() {

    var id = document.getElementById("id").value;
    var ime = document.getElementById("ime").value;
    var pr = document.getElementById("pr").value;
    var br = document.getElementById("br").value;
    var p = { Id: id, Ime: ime, Prezime: pr, BrojTelefona: br }

    //alert("Saljes izmene serveru: id... " + id + "," + ime + "," + pr + "," + br);
    var zahtev = $.ajax({
        type: "PUT",
        url: "api/PhoneBook",
        data: p,
        dataContent: "application/json",
        dataType: "html"

    })
    $("#divIzmena").addClass("sakriveno");
    zahtev.done({

        function(rez) {
            if (rez == "DA") {
                location.reload();
                $('#span1').text("Uspesna izmena podataka!");
            }
            else { alert("greska") }
        }

    })

}