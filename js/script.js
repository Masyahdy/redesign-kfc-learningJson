function tampilkanSemuaMenu() {
  $("#daftar-menu").html("");

  $.getJSON("data/kfc.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-menu").append('</div><div class="col-3 card text-center"><img src="img/menu/' + data.gambar + '" alt="" /><p style="font-weight: bold;">' + data.nama + "</p></div>");
    });
  });
}

tampilkanSemuaMenu();

$(".menu-link").on("click", function () {
  $(".menu-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    tampilkanSemuaMenu();
    return;
  }

  $.getJSON("data/kfc.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += '<div class="col-3 card text-center"><img src="img/menu/' + data.gambar + '" alt="" /><p>' + data.nama + "</p></div>";
      }
    });

    $("#daftar-menu").html(content);
  });
});
