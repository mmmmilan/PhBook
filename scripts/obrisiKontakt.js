function obrisi() {
    alert("Brisanje! Obrisacete kontakt:   Id:" + idKlik);
    var zahtev = $.ajax({
        type: "DELETE",
        url: "api/PhoneBook/" + idKlik,
        dataType: "html"
    })
    zahtev.done(
        function (rez) {
            if (rez != -1) {
                alert("obrisano!")
            }
        })
};