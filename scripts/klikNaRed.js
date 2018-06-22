//zum zum
function klikNaRed() {
    $("#divIzmena").addClass("sakriveno");
    $("#tab1").on("click", "tbody tr", function () {
        $("#tab1 tbody tr").removeClass("select");
        $(this).addClass("select");
        idKlik = $(this).find("td:eq(0)").text();
        imeKlik = $(this).find("td:eq(1)").text();
        prezimeKlik = $(this).find("td:eq(2)").text();
        brojKlik = $(this).find("td:eq(3)").text();
        datumKlik = $(this).find("td:eq(4)").text();

        var kliknuto = "<h3 >Edituj ili obrisi</h3>"
                        + "<ul><li> Id: " + idKlik + "</li>"
                        + "<li> Ime: " + imeKlik + "</li>"
                        + "<li> Prezime: " + prezimeKlik + "</li>"
                        + "<li> Broj tel.: " + brojKlik + "</li>"
                        + "<li> Datum kreiranja: " + datumKlik + "</li></ul>"
                        + "<button onclick='izmeni()' style='margin-left:20px' id='izmeniBtn'>izmeni</button>"
        + "<button onclick='obrisi()' style='margin-right:20px;float:right' id='obrisiBtn'>obrisi</button>"
        $("#child1").empty();
        $("#child1").append(kliknuto)

    })
}