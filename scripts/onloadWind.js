//onload ...
$(document).ready(function () {
    var zahtev = $.getJSON("api/PhoneBook");
    zahtev.done(function (datas) {

        $.each(datas, function (ind, phb) {
            var tabela = $("<tr>" +
                            "<td hidden>" + phb.Id + "</td>" +
                            "<td>" + phb.Ime + "</td>" +
                            "<td>" + phb.Prezime + "</td>"
                            + "<td>0" + phb.BrojTelefona + "</td>"
                            + "</tr>");

            $("#respns").append(tabela);
        })
    })
    zahtev.fail(function (er) { alert(er.statusText) });
    klikNaRed();
});