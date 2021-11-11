var namaKamu;
var waifuKamu;
var tempatKawin;
var alamatKawin;
var tanggalKawin;
var jamKawin;

var validation = "isi dulu semuanya";
var undangan;

function generateKawin() {
  namaKamu = document.getElementById("yourname").value;
  waifuKamu = document.getElementById("waifuname").value;
  tempatKawin = document.getElementById("tempatkawin").value;
  alamatKawin = document.getElementById("alamatkawin").value;
  tanggalKawin = document.getElementById("tanggalkawin").value;
  jamKawin = document.getElementById("timestart").value;

  if (namaKamu === "") {
    alert(validation);
  } else if (waifuKamu === "") {
    alert(validation);
  } else if (tempatKawin === "") {
    alert(validation);
  } else if (alamatKawin === "") {
    alert(validation);
  } else if (tanggalKawin === "") {
    alert(validation);
  } else if (jamKawin === "") {
    alert(validation);
  } else {
    undangan =
      "Assalamualaikum warahmatullah wabarakatuh.<br><br>Minta doanya ya teman-teman Saya " +
      namaKamu +
      "<br>" +
      "Insyaallah bulan ini bermaksud akan melaksanakan<br>" +
      "kewajiban (menyempurnakan agama) bersama seorang<br>" +
      "wanita pilihan saya yaitu " +
      waifuKamu +
      " dengan<br>" +
      "tujuan agar terhindar dari segala bentuk perzinahan.<br><br>" +
      "Akan tetapi, dilaksanakan akad terlebih dahulu,<br>" +
      "sedangkan resepsi akan menyusul. Saya harap semua<br>" +
      "bisa datang meskipun baru akad. Jikalau memang<br>" +
      "berhalangan hadir saya berharap tetap dilimpahkan<br>" +
      "Doa-doa dari saudara-saudari sekalian.<br><br>" +
      "Untuk akadnya dilaksanakan di " +
      tempatKawin +
      "<br>" +
      "Tanggal : " +
      tanggalKawin +
      "<br>" +
      "Pukul : " +
      jamKawin +
      " WIB s.d Selesai<br>" +
      "Alamat : " +
      alamatKawin +
      "<br><br>" +
      "Doakan ya semoga dilancarkan<br>" +
      "Jangan lupa datang bagi yang berkesempatan datang.<br>" +
      "Maaf informasi nya mendadak.<br>" +
      "Wassalamualaikum warahmatullahi wabarakatuh";

    document.getElementById("undangan").innerHTML = undangan;
    // document.getElementById("copyBtn").disabled = false;
  }
}

function copyUndangan() {
  navigator.clipboard.writeText(undangan);
}
