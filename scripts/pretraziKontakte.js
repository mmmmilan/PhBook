//pretraga po broju tel ili prezimenu
function proveri() {
    $("#divIzmena").addClass("sakriveno");
    var str = document.getElementById("inp1").value;
    var zahtev = $.getJSON("api/PhoneBook/Jedan/" + str);
    zahtev.done(function (datas) {
        $("#respns").append("<tr><td style='background-color:#b6ff00'>rezultat(i) pretrage: </td></tr>");
        $.each(datas, function (ind, phb) {
            var tabela = $("<tr>" +
                            "<td hidden>" + phb.Id + "</td>" +
                            "<td>" + phb.Ime + "</td>" +
                            "<td>" + phb.Prezime + "</td>"
                            + "<td>" + phb.BrojTelefona + "</td>"
                            + "</tr>");
            $("#respns").append(tabela);
        })
    })
    zahtev.fail(function (er) { alert(er.statusText); alert("err") });
}