//autom.dodaj vrednosti==> button
function izmeni() {
    $("#izmeniBtn").click(function () {
        $("#divIzmena").removeClass("sakriveno");
    });
    document.getElementById("id").value = idKlik;
    document.getElementById("ime").value = imeKlik;
    document.getElementById("pr").value = prezimeKlik;
    document.getElementById("br").value = brojKlik;
};