function ubaci() {
    var id = $('#Id').val();
    var ime = $('#Ime').val();
    var pr = $('#Prezime').val();
    var br = parseInt($('#BrojTelefona').val());

    var p = { Ime: ime, Prezime: pr, BrojTelefona: br }
    var zahtev = $.ajax({
        type: "POST",
        url: "api/PhoneBook",
        data: p,
        dataContent: "application/json",
        dataType: "html"

    })
    zahtev.done({
        function(rez) {
            if (rez == 1) {
                location.assign("Index.html")
            }
            else { alert("greska") }
        }
    })
    $('#span1').html("<br/>Uspesno dodat kontakt!<br/><a href='Index.html'>ovde klikni za nazad</a>");

}