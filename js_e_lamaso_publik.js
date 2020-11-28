var script_url = "https://script.google.com/macros/s/AKfycbwoyfJfDungZUUoAaXas4gJsgVOpOQQDKxR3JFMTDmEIMtQkNM/exec";
//https://script.google.com/macros/s/AKfycbwoyfJfDungZUUoAaXas4gJsgVOpOQQDKxR3JFMTDmEIMtQkNM/exec
//https://script.google.com/macros/s/AKfycbwirOaKVnW7gjsOORkS9DM1WLcs8BO8FAhTqRZdNTQb5eJnVn8z/exec
//var nowasekolah ="+6281324358952";
//var namarombel =["1A","1B","2A","2B","2C","3A","3B","3C","4A","4B","5A","5B","6A","6B"];
var logosekolah = "https://3.bp.blogspot.com/-vncSgnlPc3Y/XxES3PwEFuI/AAAAAAAASC4/vjkSSyzXCqMNTCyWNOryFOJGJRGSLaFngCLcBGAsYHQ/s1600/png2-blog.png";
var namasekolahku = "SDN Ratujaya 1";
var namakotaku = "Kota Depok";
var urlsekolah = "www.sdnratujaya1.net";
//var urlspreadsheet ="https://docs.google.com/spreadsheets/d/1Vnu2eCyJrcb_8Fwb1Rzj_V_kr3nRYzoZ_VBiviYRmxQ/edit#gid=0";


//JIKA DARI LOGO DISIMPAN DI GOOGLE DRIVE PAKE PREFIKNYA DIGANTI INI:
//https://drive.google.com/uc?export=view&id=KODE ID DI GOOGLE DRIV
//https://drive.google.com/uc?export=view&id=1wKmDWzY4OQZsC1cxCjxcBXX_BYAKN7vF
//document.getElementById("lamanlogin").innerHTML = "<i class='fa fa-spin fa-spinner'></i>"

//var timerAnjangsana; // = setInterval(AnjangsanaUpdateterus, 1000)
var timerAnjangsana;
/// script JQuery
$(document).ready(function () {
    //timerAnjangsana = setInterval(AnjangsanaUpdateterus, 5000)

    var hcpt = document.getElementById("hakcipta");
    if (hcpt == null) {
        var hcpt = document.createElement("div");
        2
        hcpt.setAttribute("id", "hakcipta");
        hcpt.setAttribute("class", "w3-main");
        hcpt.setAttribute("style", "margin-left:300px;margin-bottom:140px;margin-top:220px;text-align:center;font-size:10px")
        var thcpt = document.createTextNode("@2020 Created By. Ade Andriansyah Kunjungi ");
        hcpt.appendChild(thcpt)
        var an = document.createElement("a");
        an.setAttribute("href", "https://syahandrianeda.blogspot.com");
        an.setAttribute("target", "_blank");
        an.innerHTML = "Blog Pribadi";
        hcpt.appendChild(an);
        hcpt.innerHTML += " atau ";
        var an = document.createElement("a");
        an.setAttribute("href", "https://www.sdnratujaya1.net/");
        an.setAttribute("target", "_blank");
        an.innerHTML = "Web Sekolah";
        hcpt.appendChild(an);

        //\r\n Kunjungi blog: <a href='https://syahandrianeda.blogspot.com' target='_blank'>Blog Pribadi</a> atau <a href='https://www.sdnratujaya1.net/' target='_blank'> Web Sekolah</a> ");
        document.body.appendChild(hcpt);
        document.body.appendChild(hcpt)
    }

    // Panggil data sekolah
    var namasekolah, namakota, tekstapel, tapel
    var logo = document.getElementById("logosekolahmenu");
    logo.setAttribute("src", "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png");

    namasekolah = document.getElementById("namasekolah");
    namakota = document.getElementById("namakota");
    tapel = document.getElementById("tapel");

    var d = new Date();
    var blnsekarang = d.getMonth();
    var tahunsekarang = d.getFullYear();
    if (blnsekarang > 6) {
        tekstapel = tahunsekarang + "/" + (tahunsekarang + 1);
    } else {
        tekstapel = (tahunsekarang - 1) + "/" + tahunsekarang;
    }

    namasekolah.innerHTML = "e- LAMASO";
    namakota.innerHTML = "Guru";
    tapel.innerHTML = tekstapel;

    var logo2 = document.getElementById("frmlogo");
    logo2.setAttribute("class", "w3-circle");
    logo2.setAttribute("style", "width:90px;height:90px;border:2px dotted blue");
    logo2.setAttribute("src", "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png");

    var logo3 = document.getElementById("logo3");
    logo3.setAttribute("class", "w3-circle");
    logo3.setAttribute("style", "width:90px;height:90px;border:2px dotted blue");
    logo3.setAttribute("src", "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png");

    document.getElementById("modallogin").style.display = "block";
    loaderform.innerHTML = "<i class='fa fa-spin fa-spinner' style='font-size:36px'></i> Prosess ..."
    datalogin.innerHTML = "";
    var link = script_url + "?action=datauser"
    $.getJSON(link, function (json) {
        var ut = document.createElement("table");
        ut.setAttribute("class", "versi-table");
        ut.setAttribute("id", "id_tabel_user");
        var tr = ut.insertRow(-1);
        var namaheader = Object.keys(json.records[0])
        for (var i = 0; i < namaheader.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = namaheader[i]
            tr.appendChild(th)
        }

        for (var j = 0; j < json.records.length; j++) {
            var trb = ut.insertRow(-1);
            for (k in json.records[0]) {
                var cell = trb.insertCell(-1);
                //kon
                if (k == "password") {
                    cell.innerHTML = window.btoa(json.records[j][k])
                } else {
                    cell.innerHTML = json.records[j][k]
                }
            }

        }
        datalogin.appendChild(ut)
        loaderform.innerHTML = "Form login sudah Siap";
        loginpertama.style.display = "block";

        //console.log(json);
        // var banyakkolom = Object.keys(json.records[0]); //.length;
        // var banyakbaris = Object.keys(json.records).length;

        // console.log(banyakkolom);
        // console.log(banyakbaris);
    })
    $("#previewlogohp").hide();
    $("#previewloginsiswa").hide();

    // Timer
    (function ($) {
        $.extend({
            APP: {
                formatTimer: function (a) {
                    if (a < 10) {
                        a = '0' + a;
                    }
                    return a;
                },
                startTimer: function (dir) {
                    var a;
                    // save type
                    $.APP.dir = dir;
                    // get current date
                    $.APP.d1 = new Date();
                    switch ($.APP.state) {
                        case 'pause':
                            // resume timer
                            // get current timestamp (for calculations) and
                            // substract time difference between pause and now
                            $.APP.t1 = $.APP.d1.getTime() - $.APP.td;
                            break;
                        default:
                            // get current timestamp (for calculations)
                            $.APP.t1 = $.APP.d1.getTime();
                            // if countdown add ms based on seconds in textfield
                            if ($.APP.dir === 'cd') {
                                $.APP.t1 += parseInt($('#cd_seconds').val()) * 60000;
                            }
                            break;
                    }
                    // reset state
                    $.APP.state = 'alive';
                    $('#' + $.APP.dir + '_status').html('Durasi Waktu Masih Berjalan');
                    // start loop
                    $.APP.loopTimer();
                },
                pauseTimer: function () {
                    // save timestamp of pause
                    $.APP.dp = new Date();
                    $.APP.tp = $.APP.dp.getTime();
                    // save elapsed time (until pause)
                    $.APP.td = $.APP.tp - $.APP.t1;
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Berhenti dari Jeda');
                    // set state
                    $.APP.state = 'pause';
                    $('#' + $.APP.dir + '_status').html('Jeda');
                },
                stopTimer: function () {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'stop';
                    $('#' + $.APP.dir + '_status').html('Selesai');
                },
                resetTimer: function () {
                    // reset display
                    $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi!');
                    // set state
                    $.APP.state = 'reset';
                    $('#' + $.APP.dir + '_status').html('Setel ulang waktu untuk mengerjakan');
                },
                endTimer: function (callback) {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'end';
                    // invoke callback
                    if (typeof callback === 'function') {
                        callback();
                        //$("#nilaiku").show();
                        // tambahan
                        hasilakhirelamaso();
                    }
                },
                loopTimer: function () {
                    var td;
                    var d2, t2;
                    var ms = 0;
                    var s = 0;
                    var m = 0;
                    var h = 0;
                    if ($.APP.state === 'alive') {
                        // get current date and convert it into 
                        // timestamp for calculations
                        d2 = new Date();
                        t2 = d2.getTime();
                        // calculate time difference between
                        // initial and current timestamp
                        if ($.APP.dir === 'sw') {
                            td = t2 - $.APP.t1;
                            // reversed if countdown
                        } else {
                            td = $.APP.t1 - t2;
                            if (td <= 0) {
                                // if time difference is 0 end countdown
                                $.APP.endTimer(function () {
                                    $.APP.resetTimer();
                                    $('#' + $.APP.dir + '_status').html('Ulangi Latihan');
                                });
                            }
                        }
                        // calculate milliseconds
                        ms = td % 1000;
                        if (ms < 1) {
                            ms = 0;
                        } else {
                            // calculate seconds
                            s = (td - ms) / 1000;
                            if (s < 1) {
                                s = 0;
                            } else {
                                // calculate minutes   
                                var m = (s - (s % 60)) / 60;
                                if (m < 1) {
                                    m = 0;
                                } else {
                                    // calculate hours
                                    var h = (m - (m % 60)) / 60;
                                    if (h < 1) {
                                        h = 0;
                                    }
                                }
                            }
                        }
                        // substract elapsed minutes & hours
                        ms = Math.round(ms / 100);
                        s = s - (m * 60);
                        m = m - (h * 60);
                        // update display
                        $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                        $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                        $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
                        $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));
                        // loop
                        $.APP.t = setTimeout($.APP.loopTimer, 1);
                    } else {
                        // kill loop
                        clearTimeout($.APP.t);
                        return true;

                    }

                }

            }

        });


        // $('#cd_start').live('click', function() { //LAMASO ASLI
        $('#cd_start').click(function () { //LAMASO ASLI
            $.APP.startTimer('cd');
        });
        //$('#timermulai').live('click', function() { //LAMASO ASLI
        $('#timermulai').click(function () { //LAMASO ASLI
            $.APP.startTimer('cd');
        });
        //$('#cd_stop').live('click', function() { //LAMASO ASLI
        $('#cd_stop').click(function () { //LAMASO ASLI
            //$.APP.stopTimer();
            $.APP.resetTimer();
        });

        //$('#cd_reset').live('click', function() {
        $('#cd_reset').click(function () { //LAMASO ASLI
            $.APP.resetTimer();
        });

        //$('#cd_pause').live('click', function() {
        $('#cd_pause').click(function () { //LAMASO ASLI
            $.APP.pauseTimer();
        });

    })(jQuery);



    //update tiap 5 menit (60 * 1000);

})



/////////////////// SCRIPT UNTUK GURU UMUM YANG TIDAK PUNYA HAK AKSES SAMA JUGA SCRIPT UNTUK SISWA ///////////////////
var modal = document.getElementById('id01'); // Get the modal
var mySidebar = document.getElementById("mySidebar"); // Get the Sidebar
var overlayBg = document.getElementById("myOverlay"); // Get the DIV with overlay effect
function w3_open() { // Toggle between showing and hiding the sidebar, and add overlay effect
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

function w3_close() { // Close the sidebar with the close button
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

function loginelamaso() {
    document.getElementById("modallogin").style.display = "block";
    document.getElementById("tombolregistrasi").style.display = "none";
    w3_close();
    //loaderform.innerHTML = "<i class='fa fa-spin fa-spinner' style='font-size:36px'></i> Prosess ..."

}

function gurulogin() { // saat user mengisi user dan password
    var tabel = document.getElementById("id_tabel_user").rows;
    var usernamevalue = document.frmlogin.namauser; //getElementById("username ");
    var passwordvalue = document.frmlogin.passwordlogin; //getElementById("password");

    for (i = 0; i < tabel.length; i++) {
        var passcode = window.atob(tabel[i].cells[2].innerHTML);
        //if (tabel[i].cells[1].innerHTML == usernamevalue.value && tabel[i].cells[2].innerHTML == passwordvalue.value && tabel[i].cells[4].innerHTML == "terverifikasi") {
        if (tabel[i].cells[1].innerHTML == usernamevalue.value && passcode == passwordvalue.value && tabel[i].cells[4].innerHTML == "terverifikasi") {
            loaderform.innerHTML = "Selamat, akun yang Anda isi sudah benar";
            var id = i
            guruloginasal(id)
            break; //kalo udah ketemu berhenti dulu loopingnya.
            //} else if (tabel[i].cells[1].innerHTML == usernamevalue.value && tabel[i].cells[2].innerHTML == passwordvalue.value && tabel[i].cells[4].innerHTML == "") {

        } else if (tabel[i].cells[1].innerHTML == usernamevalue.value && passcode == passwordvalue.value && tabel[i].cells[4].innerHTML == "") {
            loaderform.innerHTML = "Akun Anda sudah terdaftar, sayangnya .... Anda belum memverifikasi email Anda. Mohon cek inbox dari kami untuk memverifikasi registrasi.";
            break;
        } else {
            document.getElementById("tombolregistrasi").style.display = "block";
            loaderform.innerHTML = "Maaf, Username dan/atau Password tidak dikenal. Pastikan semua terisi sesuai data saat mendaftar. Jika belum memiliki akun, silakan registrasi pada tombol registrasi.<br/>";
            // frmlogin.reset();
            //            usernamevalue.value = "";
            //           passwordvalue.value = "";

        }
    }
    //buat tes aja dulu:


}

function guruloginasal(id) { // fungsi lama, adaptasi. 
    var sumbertabel = document.getElementById("id_tabel_user");
    document.getElementById("kelassayapilih").innerHTML = sumbertabel.rows[id].cells[6].innerHTML; //document.frmlogin.kelasguru.value;


    // var teksnamaguru = document.frmlogin.namaguru.value
    // var arrnamaguru = teksnamaguru.split("|");
    // var usernama = arrnamaguru[0];
    // var userkelas = document.frmlogin.kelasguru.value;;
    // var userjabatan = arrnamaguru[2];
    // var usernip = arrnamaguru[3];
    // // menampilkan logo guru:
    // var link = arrnamaguru[4];

    // var linksplit = link.replace("https://drive.google.com/file/d/", "");
    // var linksplitt = linksplit.replace("/view?usp=drivesdk", "");
    var linksplitt = sumbertabel.rows[id].cells[13].innerHTML;
    var logo = document.getElementById("logosekolahmenu");
    logo.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + linksplitt);
    logo.setAttribute("alt", "Poto Guru");
    logo.setAttribute("style", "width:90px; height:90px");



    document.getElementById("namagurux").innerHTML = sumbertabel.rows[id].cells[8].innerHTML;
    document.getElementById("nipgurux").innerHTML = sumbertabel.rows[id].cells[9].innerHTML;
    document.getElementById("tblguru").innerHTML = sumbertabel.rows[id].cells[7].innerHTML;
    document.getElementById("keyemail").innerHTML = sumbertabel.rows[id].cells[3].innerHTML

    var namasekolah, namakota, tekstapel, tapel
    namasekolah = sumbertabel.rows[id].cells[5].innerHTML;
    namakota = ""; //document.getElementById("namakota");   
    document.getElementById("namasekolah").innerHTML = sumbertabel.rows[id].cells[8].innerHTML; //; //sumbertabel.rows[id].cells[8].innerHTML;; //usernama;
    document.getElementById("namakota").innerHTML = sumbertabel.rows[id].cells[7].innerHTML + " " + sumbertabel.rows[id].cells[6].innerHTML;

    tapel = document.getElementById("tapel");
    var d = new Date();
    var blnsekarang = d.getMonth();
    var tahunsekarang = d.getFullYear();
    if (blnsekarang > 6) {
        tekstapel = tahunsekarang + "/" + (tahunsekarang + 1);
    } else {
        tekstapel = (tahunsekarang - 1) + "/" + tahunsekarang;
    }
    tapel.innerHTML = tekstapel;

    //control hide dan show
    //------------menu yang ditammpilkan saat guru login 
    document.getElementById("modallogin").style.display = "none"; // ini modal login 
    document.getElementById("loginpertama").style.display = "none"; // tombol login pada modal login 
    // menu navigasi
    document.getElementById("bargurukelas").style.display = "block";
    document.getElementById("barlogin").style.display = "none";
    w3_close(); // jika User menekan navigasi, setelah klik lalu tutup


    var idmateri = sumbertabel.rows[id].cells[17].innerHTML
    tomboltabeldatakelassaya.setAttribute("onclick", "tabeldatakelassaya('" + idmateri + "')");
    barloginelamaso.setAttribute("onclick", "tabeldatakelassaya('" + idmateri + "')");
    namakepsek.innerHTML = sumbertabel.rows[id].cells[10].innerHTML;
    nipkepsek.innerHTML = sumbertabel.rows[id].cells[11].innerHTML;

    tabeldatakelassaya(idmateri); // 

    // panggil data untuk melihat nama-nama rombel kelas di spreadsheet google drive.
    var opsidipreviewhp = document.getElementById("previewpilihkelas");
    opsidipreviewhp.innerHTML = ""
    var opsi = document.createElement("option");
    opsi.setAttribute("value", sumbertabel.rows[id].cells[6].innerHTML);
    var teksopsi = document.createTextNode(sumbertabel.rows[id].cells[6].innerHTML);
    opsi.appendChild(teksopsi);
    opsidipreviewhp.appendChild(opsi); // buat opsi di priviewhp
    document.getElementById("keyidsekolah").innerHTML = sumbertabel.rows[id].cells[5].innerHTML;
    document.getElementById("keyidpendaftar").innerHTML = (id * 1) + 1;
}

function tabeldatakelassaya(id) { //menampilkan tabel data kelas
    //matiin timer: 
    clearInterval(timerAnjangsana);
    w3_close();
    //div laman
    document.getElementById("mainmenulamaso").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("mainlogin").style.display = "none"; // data kelas ditampilkan 
    document.getElementById("mainAnjangsana").style.display = "none"; // data kelas ditampilkan 
    // div tempat kerja guru kelas
    document.getElementById("datakelassaya").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("divdaftarnilai").style.display = "none"; // KBM 
    document.getElementById("divpembelajaran").style.display = "none"; // KBM 

    document.getElementById("batasaksesguru").scrollIntoView();

    var loadingkelassaya = document.getElementById("loadkelassaya");
    loadingkelassaya.innerHTML = "<i class='fa fa-spinner fa-spin w3-xxxlarge'></i>";

    var kelasguru = document.getElementById("kelassayapilih").innerHTML;

    var tempattabel = document.getElementById("tabeltempatdaftarkelassaya");
    tempattabel.innerHTML = "";
    tempattabel.innerHTML = "<h3>Daftar Siswa Kelas " + document.getElementById("kelassayapilih").innerHTML + "</div>";

    document.getElementById("cetakdatasiswa").removeAttribute("onclick");
    document.getElementById("cetakdatasiswa").setAttribute("onclick", "alert('Edit data siswa melalui Edit Profil Anda')");


    var tb = document.createElement("table")
    tb.setAttribute("class", "versi-table");
    tb.setAttribute("id", "myTable");

    var tr = tb.insertRow(0);
    var td1 = document.createElement("th");
    td1.innerHTML = "Edit";
    tr.appendChild(td1);
    var td2 = document.createElement("th");
    td2.innerHTML = "No.Urut";
    tr.appendChild(td2);
    var td3 = document.createElement("th");
    td3.innerHTML = "ID Siswa";
    tr.appendChild(td3);
    var td4 = document.createElement("th");
    td4.innerHTML = "No Induk Sekolah";
    tr.appendChild(td4);
    var td7 = document.createElement("th");
    td7.innerHTML = "N I S N";
    tr.appendChild(td7);
    var td5 = document.createElement("th");
    td5.setAttribute("style", "width:260px");
    td5.innerHTML = "Nama Siswa";

    tr.appendChild(td5);
    var td6 = document.createElement("th");
    td6.innerHTML = "Jenis Kelamin";
    tr.appendChild(td6);
    var td8 = document.createElement("th");
    td8.innerHTML = "Tempat Lahir";
    tr.appendChild(td8);
    var td9 = document.createElement("th");
    td9.innerHTML = "Tanggal Lahir";
    tr.appendChild(td9);
    var td10 = document.createElement("th");
    td10.innerHTML = "Agama";
    tr.appendChild(td10);
    var td11 = document.createElement("th");
    td11.innerHTML = "Nama Ayah";
    tr.appendChild(td11);
    var td12 = document.createElement("th");
    td12.innerHTML = "Nama Ibu";
    tr.appendChild(td12);
    var td13 = document.createElement("th");
    td13.innerHTML = "Kelas";
    tr.appendChild(td13);
    var td14 = document.createElement("th");
    td14.innerHTML = "No HP";
    tr.appendChild(td14);



    var a = 0;
    var b = 0; //Islam
    var c = 0; //Kristen
    var d = 0; //Katholik
    var e = 0; //Hindu
    var f = 0; //Budha
    var g = 0; //Khonghucu
    var l = 0; //laki=laki
    var p = 0; //perempuan

    var opsinamadipreviewhp = document.getElementById("previewpilihnama");
    opsinamadipreviewhp.innerHTML = "";
    var idnp_dataanak = encodeURIComponent("idnp_datasiswa") + "=" + encodeURIComponent(id);
    var url = script_url + "?action=notepadkehtml&" + idnp_dataanak;
    $.getJSON(url, function (json) {

        var teksjson = json.split("\r\n")
        for (i = 0; i < teksjson.length; i++) {
            a += 1;
            tr = tb.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            //		var tmboledit = document.createElement("button");
            //			tmboledit.setAttribute("onclick","editsiswa('"+i+"')");
            //			tmboledit.innerHTML="Edit";
            //		var tmbolhapus=document.createElement("button");
            //			tmbolhapus.setAttribute("onclick","hapussiswa('"+i+"')");
            //			tmbolhapus.innerHTML="Hapus";
            //		tabcell.appendChild(tmboledit);
            var btnn = document.createElement("button");
            btnn.setAttribute("onclick", "alert('Maaf, fitur ini untuk versi selanjutnya')");
            btnn.innerHTML = "Edit";
            var btnnn = document.createElement("button");
            btnnn.setAttribute("onclick", "alert('Maaf, fitur ini untuk versi selanjutnya')");
            btnnn.innerHTML = "Hapus";
            tabCell.appendChild(btnn);
            tabCell.appendChild(btnnn);

            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = a;
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='idsiswa" + i + "'>" + i + "</span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='nissiswa" + i + "'>" + "" + "</span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='nisnsiswa" + i + "'>" + "" + "</span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span class='koleksinamakelas" + kelasguru + "' id='namasiswa" + i + "'>" + teksjson[i].toUpperCase() + "</span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='jksiswa" + i + "'>" + " - " + "</span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='tempatlahirsiswa" + i + "'></span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='tanggallahirsiswa" + i + "'></span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='agamasiswa" + i + "'></span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='namaayahsiswa" + i + "'></span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='namaibusiswa" + i + "'></span>";
            tabCell = tr.insertCell(-1);
            tabCell.innerHTML = "<span id='kelassiswa" + i + "'></span>";
            tabCell = tr.insertCell(-1);
            //            var nohpreplace = json.records[i].hp;

            tabCell.innerHTML = "<span id='hpsiswa_" + encodeURIComponent(teksjson[i]) + "'></span>";

            //untuk membuat koleksi opsi nama pada beberapa form
            // --- 01 form pada preview HP di element select id = previewpilihnama
            var bikinopsinama = document.createElement("option");
            var namakapital = teksjson[i].toUpperCase();
            bikinopsinama.setAttribute("value", namakapital); //teksjson[i]);
            var teksopsinama = document.createTextNode(namakapital); //teksjson[i]);
            bikinopsinama.appendChild(teksopsinama);

            opsinamadipreviewhp.appendChild(bikinopsinama);
        }
        var aa = a;
        var bb = b;
        var cc = c;
        var dd = d;
        var ee = e;
        var ff = f;
        var pp = p;
        var ll = l;
        document.getElementById("tbljumlahsiswa").innerHTML = aa; // +" Siswa.";
        //document.getElementById("tbljumlahlakilaki").innerHTML = ll + " Siswa."; document.getElementById("tbljumlahperempuan").innerHTML = pp + " Siswa."; document.getElementById("tblberagamaislam").innerHTML = bb + " Siswa."; document.getElementById("tblberagamakristen").innerHTML = cc + " Siswa."; document.getElementById("tblberagamakatholik").innerHTML = dd + " Siswa."; document.getElementById("tblberagamahindu").innerHTML = ee + " Siswa."; document.getElementById("tblberagamakhonghucu").innerHTML = ff + " Siswa."

        loadingkelassaya.innerHTML = "";
    })

    tempattabel.appendChild(tb);
    var btnx = document.createElement("h3");
    btnx.innerHTML = "Klik di sini untuk menambah siswa saya:";
    var btnv = document.createElement("button");
    btnv.setAttribute("onclick", "alert('Maaf, fitur ini untuk versi premium selanjutnya')");
    btnv.innerHTML = "TAMBAH SISWA SAYA";
    tempattabel.appendChild(btnx);
    tempattabel.appendChild(btnv);







}

function tambahuser() { //fungsi untuk memanggil form registrasi (daftar)
    document.getElementById("modallogin").style.display = "none";
    modaltambahuser.style.display = "block";
    w3_close();
}

function daftarelamaso() { //fungsi tombol untuk mengirimkan data ke server
    //sembunyikan dulu form-nya;
    if (validation()) {
        document.getElementById("formtambahuser").style.display = "none";
        document.getElementById("registrasikan").style.display = "none"; // menghindari user mengeklik beberapa kali
        document.getElementById("prosesloadingdaftar").innerHTML = "<i class='fa fa-spin fa-spinner' style='font-size:36px;color:blue'></i> Sedang Proses ...."
        var dataku = $('#formtambahuser').serialize();
        var link = script_url + "?action=inputdaftar";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", link, true)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4 && xhr.status === 200) {

                prosesloadingdaftar.innerHTML = "Terima kasih, telah mendaftar. Mohon cek email Anda dan verifikasikan bahwa ini benar-benar Anda. Hal ini bertujuan untuk mengirimkan file ke Google Drive Anda. ";
                document.getElementById("tutupeksekusitambahuser").removeAttribute("onclick");
                document.getElementById("tutupeksekusitambahuser").setAttribute("onclick", "reloaddatauser()");

            }
        };
        // url encode form data for sending as post data

        xhr.send(dataku);


    }
}

function reloaddatauser() { //setelah user mendaftar, data user diupdate
    //loaderform.innerHTML = "<i class='fa fa-spin fa-spinner' style='font-size:36px'></i> Prosess ..."
    modaltambahuser.style.display = "none";
    document.getElementById("modallogin").style.display = "block";
    datalogin.innerHTML = "";
    var link = script_url + "?action=datauser"
    $.getJSON(link, function (json) {
        var ut = document.createElement("table");
        ut.setAttribute("class", "versi-table");
        ut.setAttribute("id", "id_tabel_user");
        var tr = ut.insertRow(-1);
        var namaheader = Object.keys(json.records[0])
        for (var i = 0; i < namaheader.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = namaheader[i]
            tr.appendChild(th)
        }

        for (var j = 0; j < json.records.length; j++) {
            var trb = ut.insertRow(-1);
            for (k in json.records[0]) {
                var cell = trb.insertCell(-1);
                cell.innerHTML = json.records[j][k]
            }

        }
        datalogin.appendChild(ut)
        loaderform.innerHTML = "Form login sudah Siap";
        loginpertama.style.display = "block";

        //console.log(json);
        // var banyakkolom = Object.keys(json.records[0]); //.length;
        // var banyakbaris = Object.keys(json.records).length;

        // console.log(banyakkolom);
        // console.log(banyakbaris);
    })
}

function fn2lihatpassword() { // fungsi untuk melihat input password (dalam simbol atau teks biasa)
    var x = document.getElementById("passwordlogin");
    var label = document.getElementById("lihatpassword2");
    if (x.type === "password") {
        x.type = "text";
        label.innerHTML = "<i class='fa fa-eye-slash'></i> Sembunyikan Password"
    } else {
        x.type = "password";
        label.innerHTML = "<i class='fa fa-eye'></i> Lihat Password"
    }

}

function fnlihatpassword() { // fungsi untuk melihat input password (dalam simbol atau teks biasa)
    var x = document.getElementById("password");
    var label = document.getElementById("lihatpassword");
    if (x.type === "password") {
        x.type = "text";
        label.innerHTML = "<i class='fa fa-eye-slash'></i> Sembunyikan Password"
    } else {
        x.type = "password";
        label.innerHTML = "<i class='fa fa-eye'></i> Lihat Password"
    }

}

function fnlihatpasswordedit() { // fungsi untuk melihat input password (dalam simbol atau teks biasa)
    var x = document.getElementById("passwordedit");
    var label = document.getElementById("lihatpasswordedit");
    if (x.type === "password") {
        x.type = "text";
        label.innerHTML = "<i class='fa fa-eye-slash'></i> Sembunyikan Password"
    } else {
        x.type = "password";
        label.innerHTML = "<i class='fa fa-eye'></i> Lihat Password"
    }

}

function ungg_np_datasiswa() { // fungsi untuk mengupload file Notepad yng dijadikan base64 dan preview
    var item = document.getElementById("upnp_datasiswa").files[0]
    var oFReader = new FileReader();
    oFReader.readAsDataURL(item);

    oFReader.onload = function (oFREvent) {
        // document.getElementById("idnp_dataanak").value = oFREvent.target.result;

        // //document.getElementById("idpoto_potoguru").value = srcEncode; //oFREvent.target.result;
        var tempatidpotoguru = document.getElementById("idnp_dataanak")
        tempatidpotoguru.innerHTML = "";
        // buat generate input
        var inputbase64 = document.createElement("input");
        inputbase64.setAttribute("name", "data");
        inputbase64.value = oFREvent.target.result.replace(/^.*,/, '');
        var inputfilename = document.createElement("input");
        inputfilename.setAttribute("name", "filename");
        inputfilename.value = "idnp_dataanak"; //+ guru_namalengkap.innerHTML.toUpperCase().replace(/\s+/, "_");
        var inputmimetype = document.createElement("input");
        inputmimetype.setAttribute("name", "mimeType")
        inputmimetype.value = oFREvent.target.result.match(/^.*(?=;)/)[0];
        //sekarang kita taroh di sini:
        tempatidpotoguru.appendChild(inputbase64);
        tempatidpotoguru.appendChild(inputfilename);
        tempatidpotoguru.appendChild(inputmimetype);

    };
    // reader untuk menampilkan preview
    var tempatselek = document.getElementById("prev_upload_datasiswa");
    tempatselek.innerHTML = "";
    var opsiawal = document.createElement("option");
    opsiawal.setAttribute("value", "Belum Pilih Nama")
    opsiawal.innerHTML = "Pilih Nama Siswa"
    tempatselek.appendChild(opsiawal);
    var ofprev = new FileReader();
    ofprev.onload = function () {
        var data = ofprev.result
        var arrdata = data.split("\r\n")
        for (i = 0; i < arrdata.length; i++) {
            var opsi = document.createElement("option");
            opsi.setAttribute("value", arrdata[i])
            opsi.innerHTML = arrdata[i].toUpperCase()
            tempatselek.appendChild(opsi)
        }
    }
    ofprev.readAsText(item)

}

function KoleksiFormSiswa(form) { // fungsi umum untuk mencari array koleksi element di form
    //--------- mendefinisikan beberapa element
    var koleksielement = form.elements;
    //--------- element yang digunakan untuk element spam
    var koleksispam;


    var bidangdata = Object.keys(koleksielement).filter(function (k) {
        if (koleksielement[k].name === "koleksispam") {
            koleksispam = koleksielement[k].value;
            return false;
        }
        return true;
    }).map(function (k) {
        if (koleksielement[k].name !== undefined) {
            return koleksielement[k].name;
        } else if (koleksielement[k].length > 0) {
            return koleksielement[k].item(0).name; //

        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var Dataform = {};
    bidangdata.forEach(function (name) {
        var element = koleksielement[name];
        // jika datanya memiliki satu nilai (value), biasanya berupa teks dalam value.
        Dataform[name] = element.value;

        // ketika data value-nya bukan teks, seperti value pada tag input type radio, atau tag select, maka dibuatkan array lagi dengan fungsi tambah array [.push('new Array')
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            Dataform[name] = data.join(', ');
        }
    });

    Dataform.formDataNameOrder = JSON.stringify(bidangdata);
    //Dataform.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    //Dataform.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return {
        data: Dataform
    };
}

function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function (k) {
        if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
        }
        return true;
    }).map(function (k) {
        if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function (name) {
        var element = elements[name];


        // when our element has multiple items, get their values
        if (element.length > 0) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            formData[name] = data.join(', ');
        }
        // singular form elements just have one value
        formData[name] = element.value;
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return {
        data: formData,
        honeypot: honeypot
    };
}


function maudaftarelamaso() { // untuk yang baru mau mendaftar, menampilkan form regitrAI
    tambahuser();
}

function ungg_avatar() {
    var item = document.getElementById("upl_avatar").files[0]
    var oFReader = new FileReader();
    oFReader.readAsDataURL(item);

    oFReader.onload = function (oFREvent) {
        document.getElementById("avatarku").src = oFREvent.target.result;
        //tapi kita ingin mengecilkan ukurannya menjadi width = 150 px;
        var img = new Image();
        img.src = oFREvent.target.result; //result is base64-encoded Data URI
        //img.name = oFREvent.target.name; //set name (optional)
        img.size = oFREvent.target.size; //set size (optional)

        img.onload = function (el) {
            var canv = document.createElement("canvas");
            var pembagi = 150 / el.target.width;
            canv.width = 150;
            canv.height = el.target.height * pembagi;
            var ctx = canv.getContext("2d");
            ctx.drawImage(el.target, 0, 0, canv.width, canv.height);
            var srcEncode = ctx.canvas.toDataURL(el.target, "image/jpg", 0);
            //document.getElementById("idpoto_potoguru").value = srcEncode; //oFREvent.target.result;
            var tempatidpotoguru = document.getElementById("idpoto_potoguru")
            tempatidpotoguru.innerHTML = "";
            // buat generate input
            var inputbase64 = document.createElement("input");
            inputbase64.setAttribute("name", "data");
            inputbase64.value = srcEncode.replace(/^.*,/, '');
            var inputfilename = document.createElement("input");
            inputfilename.setAttribute("name", "filename");
            inputfilename.value = "avatar_" + guru_namalengkap.value.toUpperCase().replace(/\s+/, "_");
            var inputmimetype = document.createElement("input");
            inputmimetype.setAttribute("name", "mimeType")
            inputmimetype.value = "data:image/jpg"; //e.target.result.match(/^.*(?=;)/)[0]
            //sekarang kita taroh di sini:
            tempatidpotoguru.appendChild(inputbase64);
            tempatidpotoguru.appendChild(inputfilename);
            tempatidpotoguru.appendChild(inputmimetype);


        }

    }
}

function pembelajaran() {
    //matiin timer;
    clearInterval(timerAnjangsana);
    w3_close();
    // menu navigasi
    //document.getElementById("bargurukelas").style.display ="block";
    //document.getElementById("barlogin").style.display ="none";
    w3_close(); // jika User menekan navigasi, setelah klik lalu tutup
    //div laman
    document.getElementById("mainmenulamaso").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("mainlogin").style.display = "none"; // data kelas ditampilkan 
    document.getElementById("mainAnjangsana").style.display = "none"; // data kelas ditampilkan 
    // div tempat kerja guru kelas
    document.getElementById("divpembelajaran").style.display = "block"; // KBM 
    document.getElementById("divdaftarnilai").style.display = "none"; // KBM 
    document.getElementById("datakelassaya").style.display = "none"; // data kelas ditampilkan 
    document.getElementById("batasaksesguru").scrollIntoView();
    //////////
    var opsisekolah = document.getElementById("previewpilihsekolah");
    opsisekolah.innerHTML = ""
    var opsinama = document.createElement("option");
    opsinama.setAttribute("value", document.getElementById("keyidsekolah").innerHTML);
    opsinama.innerHTML = document.getElementById("keyidsekolah").innerHTML;
    opsisekolah.appendChild(opsinama);


    document.formuploadmateri.idkelas.value = document.getElementById("kelassayapilih").innerHTML;
    /// memastikan opsi yang dipilih adalah kelas guru saat ini
    document.getElementById("previewpilihkelas").value = document.getElementById("kelassayapilih").innerHTML;
    /// memastikan idSekolah
    document.getElementById("idpendaftar").value = document.getElementById("keyidpendaftar").innerHTML;
    document.getElementById("idSekolah").value = document.getElementById("keyidsekolah").innerHTML;

    // bersihkan riwayat ceklis
    document.getElementById("resultlink").innerHTML = "";
    var ceklis = document.getElementById("sayasetuju").checked = false;
    sayasetuju();
    // update riwayat materi	
    riwayatmateri();
}

function fnjangandobel() {
    var sumbertabel = document.getElementById("id_tabel_user");
    var yangdiketik = document.getElementById("username").value;
    for (i = 0; i < sumbertabel.rows.length; i++) {
        var kolomusername = sumbertabel.rows[i].cells[1].innerHTML;
        if (kolomusername == yangdiketik) {
            document.getElementById("jangandobel").innerHTML = "Maaf, nama ini sudah pernah mendaftar. silakan gunakan username lain.";
            document.getElementById("username").value = "ganti nama akunnya ya ...";
        } else {
            document.getElementById("jangandobel").innerHTML = ""
        }
    }
}

function myfunction() {
    if (validation()) // Calling Validation Function
    {
        // Serializing Form Data And Displaying It In <p id="wrapper"></p>
        document.getElementById("wrapper").innerHTML = serialize(document.forms[0]); // Serialize Form Data
        document.getElementById("form").reset(); // Reset Form Fields
    }
}

// Name And Email Validation Function
function validation() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var sekolah = document.getElementById("sekolah").value;
    var kelas = document.getElementById("kelas").value;
    // var datain = document.getElementById("data");
    var dividpoto_potoguru = document.getElementById("idpoto_potoguru").innerHTML;
    var diidnp_datasiswa = document.getElementById("idnp_dataanak").innerHTML;
    var emailReg = email.indexOf("@gmail.com"); ///^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '' || sekolah === '' || diidnp_datasiswa === '' || dividpoto_potoguru === '' || kelas === '') {
        alert("Mohon lengkapi formulir ini dengan lengkap! \r\n Terutama: email, Nama Pengguna, Nama Sekolah, Kelas, dan unggahan daftar kelas Anda (Notepad)");
        return false;
    } else if (emailReg < 0) {
        alert("Format email Anda salah. Mohon gunakan akun Gmail ya ...");
        return false;
    } else {
        return true;
    }
}

function formatemail() {
    var inpemail = document.getElementById("email")
    inpemail.value = inpemail.value.replace(/\s+/g, "").toLowerCase();
}

function petunjukuploadmateri() {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Petunjuk Upload Materi";
    document.getElementById("isipetunjuk").innerHTML = document.getElementById("petunjukuploadmateri").outerHTML;
}

function caramembuatfilemateri() {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Cara Membuat Materi Lamaso";
    var teksnama = document.getElementById("petunjukpembuatanmateri").outerHTML;
    var gantii = teksnama.replace(/"contoh/g, "modal");
    //var ganti =	gantii.replace(/opsi/g,"opsik");
    document.getElementById("isipetunjuk").innerHTML = gantii; //document.getElementById("petunjukpembuatanmateri").outerHTML;
}

function unggahmateri() { // upload offline atau ambil file dari drive PC/root HP
    var isimapel = document.formuploadmateri.idmapel.value;
    var isitanggal = document.formuploadmateri.idtgl.value;
    var isidurasi = document.formuploadmateri.iddurasi.value;
    var isiakses = document.formuploadmateri.idaksessiswa.value;
    if (isimapel == "" || isitanggal == "" || isidurasi == "") { // Beri kondisi jika isian tidak lengkap maka ditolak
        alert("Isian tidak lengkap, Mohon lengkapi isian data di atas");

        document.getElementById("uploadmateri").value = "";
    } else {
        var item = "";
        document.getElementById("kirimmaterikeserver").removeAttribute("onclick");
        document.getElementById("kirimmaterikeserver").setAttribute("onclick", "persiapanuploadkonten()");
        document.getElementById("kirimmaterikeserver").innerHTML = "Publikasikan";
        document.getElementById("kirimmaterikeserver").style.display = "block";
        document.getElementById("resultlink").innerHTML = "";
        document.getElementById("hasiltoken").innerHTML = document.formuploadmateri.idmapel.value;
        document.getElementById("divceklis").style.display = "block";
        document.getElementById("divsayasetuju").style.display = "block";
        document.getElementById("sayasetuju").checked = false;
        sayasetuju();
        item = "";
        item = document.getElementById("uploadmateri").files[0];

        var fr = new FileReader();
        fr.onload = function () {

            var tes = brkline(fr.result);
            //document.getElementById("output").textContent = tes ;//fr.result;
            document.getElementById("output").innerHTML = ""; //fr.result;
            document.getElementById("output").innerHTML = tes; //fr.result;

            document.getElementById("materiimport").innerHTML = ""; //kosongkan dulu;

            //document.getElementById("materiimport").innerHTML+="<div style='border:1px solid red;padding:5px;border-radius:5px;overflow-x:auto'>" ;
            var tabelpreview = document.createElement("table");
            tabelpreview.setAttribute("class", "versi-table");
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Sekolah";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "prevhp_sekolah");
            cel1.innerHTML = document.getElementById("keyidsekolah").innerHTML; //namasekolahku;
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Nama Siswa";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "prevhp_Nama_Siswa");
            cel1.innerHTML = "[Nama Siswa login]";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Kelas";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "prevhp_Kelas_Siswa");
            cel1.innerHTML = "[Kelas Siswa Login]";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Mata Pelajaran/Tema";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "previewhp_mapeltoken_Siswa");
            cel1.innerHTML = "[Mapel/Tema]";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Tanggal Bisa Akses";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "previewhp_tgltoken_Siswa");
            cel1.innerHTML = "[tgal] akses";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.innerHTML = "Durasi Waktu";
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "previewhp_durasitoken_Siswa");
            cel1.innerHTML = "[durasi] akses";
            var tr = tabelpreview.insertRow(-1);
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "timer");
            cel1.innerHTML = "Timer: ";
            var cdtimer = document.createElement("input")
            cdtimer.setAttribute("id", "cd_seconds");
            cdtimer.setAttribute("disabled", "true");
            cdtimer.setAttribute("value", "120");
            cdtimer.setAttribute("style", "width:50px")
            cel1.appendChild(cdtimer);
            cel1.innerHTML += " Menit."
            var cel1 = tr.insertCell(-1);
            cel1.setAttribute("id", "tempatdurasi");
            var cdstatus = document.createElement("b");
            cdstatus.setAttribute("id", "cd_status");
            var tekscdstatus = document.createTextNode("Durasi Penyelesaian:");
            cdstatus.appendChild(tekscdstatus);
            var cdjam = document.createElement("span");
            cdjam.setAttribute("id", "cd_h");
            var tekscdjam = document.createTextNode("00:");
            cdjam.appendChild(tekscdjam);
            var cdmenit = document.createElement("span");
            cdmenit.setAttribute("id", "cd_m");
            var tekscdmenit = document.createTextNode("00:");
            cdmenit.appendChild(tekscdmenit);
            var cddetik = document.createElement("span");
            cddetik.setAttribute("id", "cd_s");
            var tekscddetik = document.createTextNode("00");
            cddetik.appendChild(tekscddetik);
            var cdpause = document.createElement("input")
            cdpause.setAttribute("type", "button");
            cdpause.setAttribute("id", "cd_pause");
            cdpause.setAttribute("value", "Jeda");
            var cdpstop = document.createElement("input")
            cdpstop.setAttribute("type", "button");
            cdpstop.setAttribute("id", "cd_stop");
            cdpstop.setAttribute("value", "Selesai");
            var gntibaris = document.createElement("br");
            var controltimer = document.createElement("b")
            var tekscontroltimer = document.createTextNode("Control Timer:");
            controltimer.appendChild(tekscontroltimer);
            var controlstart = document.createElement("input");
            controlstart.setAttribute("type", "button");
            controlstart.setAttribute("id", "cd_start");
            controlstart.setAttribute("value", "Mulai Mengerjakan");
            var controlreset = document.createElement("input");
            controlreset.setAttribute("type", "button");
            controlreset.setAttribute("id", "cd_reset");
            controlreset.setAttribute("value", "Reset Timer");
            var titikdua = document.createElement("b");
            var tekstitikdua = document.createTextNode(":");
            titikdua.appendChild(tekstitikdua);

            cel1.appendChild(controltimer);
            cel1.innerHTML += "<br/>";
            cel1.appendChild(controlstart);
            //cel1.appendChild(controlreset);
            //cel1.appendChild(cdpause);
            cel1.appendChild(cdpstop);
            cel1.appendChild(gntibaris);
            cel1.appendChild(cdstatus);
            cel1.innerHTML += ":<br/>";
            cel1.appendChild(cdjam);
            cel1.innerHTML += ":";
            cel1.appendChild(cdmenit);
            cel1.appendChild(titikdua)
            cel1.appendChild(cddetik);


            //document.getElementById("materiimport").innerHTML+="</div>";					
            document.getElementById("materiimport").appendChild(tabelpreview);
            document.getElementById("materiimport").innerHTML += tes; //fr.result;
            document.getElementById("namafileupload").innerHTML = item.name + " (" + (item.size / 1000).toFixed(2) + " Kb)";
            $("#previewlogohp").hide();
            $("#previewloginsiswa").hide();
            $("#materiimport").hide();
            $("#layardepan").show();
            //console.log(tes)

        }
        fr.readAsText(item);
        // ini untuk menguload ke Drive
        var oFReader = new FileReader();
        oFReader.readAsDataURL(item);

        oFReader.onload = function (oFREvent) {
            document.getElementById("basetxt").value = oFREvent.target.result;

        };

    }
}

function lentanggal(id) {
    //var teks = id;
    var tglsplit, blnsplit, thnsplit;
    if (id != 0) {
        if (id.length == 7) {
            tglsplit = addZero(id.slice(0, 1));
            blnsplit = id.slice(1, 3);
            thnsplit = id.slice(3, 7);
        } else {
            tglsplit = id.slice(0, 2);
            blnsplit = id.slice(2, 4);
            thnsplit = id.slice(4, 8);
        }
    }
    id = tglsplit + "/" + blnsplit + "/" + thnsplit;
    return id
}

function uploadpotoessay(id) {
    var item = document.getElementById("iduploadpotoessay" + id).files[0];
    var tempat = document.getElementById("filejawaban" + id);
    tempat.innerHTML = ""
    var ofReader = new FileReader();
    ofReader.readAsDataURL(item);
    var resize_width = "150"
    ofReader.onload = function (e) {
        // --- convert image ====
        ofReader.size = item.size; //get the image's size


        var src = e.target.result;
        document.getElementById("filejawaban" + id).innerHTML = src;
        var base64 = e.target.result.replace(/^.*,/, '');
        var typeasal = e.target.result.match(/^.*(?=;)/)[0];
        var typenyaaja = typeasal.replace("data:", "");
        if (typenyaaja.indexOf("image") > -1) {
            tempat.innerHTML = "<img id='image" + id + "' src='" + src + "' style='width:500px; border:1px solid blue; padding:5px; border-radius:10px'/><br/>tipe gambar: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("video") > -1) {
            tempat.innerHTML = "<video id='myvideo" + id + "' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("audio") > -1) {
            tempat.innerHTML = "<video id='myaudio" + id + "' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video/audio tidak mendukung</video>";
        } else if (typenyaaja.indexOf("wordprocessingml") > -1) {
            tempat.innerHTML = "<i id='taktersedia_" + id + "' class='fa fa-file-word-o w3-xxxlarge' style='font-size:72px'></i><br/> Pratinjau tidak terrsedia ";
            //var idac = id +" "+ src;
            //panci(idac);

        } else if (typenyaaja.indexOf("text") > -1) {
            tempat.innerHTML = "<iframe id='myiframe" + id + "' src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe><br/>tipe file: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("pdf") > -1) {
            tempat.innerHTML = "<iframe id='pdfke" + id + "' src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe><br/>tipe file: " + typenyaaja.split("/")[1];
        } else {
            tempat.innerHTML = "<i id='takdikenal_" + id + "'  class='fa fa-file-o w3-xxxlarge' style='font-size:72px'></i><br/> File Tidak dikenal <br/>tipe file: " + typenyaaja.split("/")[1];;
        }
    }

}

function uploadpototugas(id) {
    var item = document.getElementById("iduploadpototugas" + id).files[0];
    var tempat = document.getElementById("mediapreview" + id);
    tempat.innerHTML = ""
    var ofReader = new FileReader();
    ofReader.readAsDataURL(item);
    var resize_width = "150"
    ofReader.onload = function (e) {
        // --- convert image ====
        ofReader.size = item.size; //get the image's size


        var src = e.target.result;
        document.getElementById("filejawaban" + id).innerHTML = src;
        var base64 = e.target.result.replace(/^.*,/, '');
        var typeasal = e.target.result.match(/^.*(?=;)/)[0];
        var typenyaaja = typeasal.replace("data:", "");
        if (typenyaaja.indexOf("image") > -1) {
            tempat.innerHTML = "<img src='" + src + "' style='width:98%; border:1px solid blue; padding:5px; border-radius:10px'/><br/>tipe gambar: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("video") > -1) {
            tempat.innerHTML = "<video id='myvideo' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("audio") > -1) {
            tempat.innerHTML = "<video id='myvideo' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("wordprocessingml") > -1) {
            tempat.innerHTML = "<i class='fa fa-file-word-o w3-xxxlarge' style='font-size:72px'></i><br/> Pratinjau tidak terrsedia ";
            //var idac = id +" "+ src;
            //panci(idac);

        } else if (typenyaaja.indexOf("text") > -1) {
            tempat.innerHTML = "<iframe src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe>";
        } else if (typenyaaja.indexOf("pdf") > -1) {
            tempat.innerHTML = "<iframe src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe>";
        } else {
            tempat.innerHTML = "<i class='fa fa-file-o w3-xxxlarge' style='font-size:72px'></i><br/> File Tidak dikenal ";;
        }
    }

}

function tombolketikjawaban(id) {
    //alert("Tombol ketik Jawbaan No " + id)
    var tempatnya = document.getElementById("tomboljawaban" + id)
    tempatnya.innerHTML = "";
    var teksarea = document.createElement("textarea");
    teksarea.setAttribute("class", "filejawaban");
    teksarea.setAttribute("id", "filejawaban" + id);
    teksarea.setAttribute("cols", "30");
    teksarea.setAttribute("rows", "10");
    teksarea.setAttribute("placeholder", "Silakan ketik jawaban essay untuk No. Soal " + id);
    tempatnya.appendChild(teksarea);
    tempatnya.innerHTML += "<br/>Ganti dengan mengupload media:";
    var tombollain = document.createElement("button")
    tombollain.setAttribute("onclick", "tomboluploadjawaban('" + id + "')");
    tombollain.innerHTML = "Upload Jawaban No " + id
    tempatnya.appendChild(tombollain);
    tempatnya.innerHTML += "<sub> dengan memilih cara lain, jawaban yang sudah diketik akan hilang dan diganti dengan jawaban berupa gambar/media yang diunggah</sub>"


}

function tomboluploadjawaban(id) {
    //alert("Tombol Upload Jawbaan No " + id)
    var tempatnya = document.getElementById("tomboljawaban" + id);
    var katajadi = "";
    tempatnya.innerHTML = "";
    //	var divbackground = document.createElement("div");
    //		divbackground.setAttribute("style","background-color:#ffcdc9;padding:10px");
    //		divbackground.innerHTML = "Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban essay No " + id + " dengan menguploadnya di sini: <br/><br/>";
    //			var labelupload = document.createElement("label");
    //				labelupload.setAttribute("style", "border:1px solid black;background-color:#eee;padding:5px;border-radius:5px");
    //				labelupload.setAttribute("for",

    katajadi += "<div style='background-color:#ffcdc9;padding:10px'>Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban essay No";
    katajadi += " " + id + " dengan menguploadnya di sini: <br/><br/>";
    katajadi += "<label style='border:1px solid black;background-color:#eee;padding:5px;border-radius:5px' for='iduploadpotoessay" + id + "' id='label" + id + "'><i class='fa fa-camera'></i> Upload Jawaban</label><br/><br/>";
    katajadi += "<div id='filejawaban" + id + "' class='filejawaban' style='overflow-x:auto'>";
    katajadi += "<img src='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png'  style='width:145px;margin:auto;border:1px solid blue'/>";
    katajadi += "</div>";

    katajadi += "<input type='file' id='iduploadpotoessay" + id + "' onchange='uploadpotoessay(" + id + ")' style='display:none'/>"; //<div  id='filejawaban"+indexpotojawaban+"' class='jawabanfile' style='display:none' ></div>"
    katajadi += "</div>";
    //-----------------------------
    katajadi += "<br/>Ganti dengan mengetik jawaban:";
    katajadi += "<button onclick='tombolketikjawaban(" + id + ")'>Ketik Jawaban No. " + id + "</button>";
    katajadi += "<sub> dengan memilih cara lain, jawaban yang sudah  diupload akan hilang dan diganti dengan jawaban berupa ketikan/tulisan</sub>"
    //-----------------------------
    tempatnya.innerHTML = katajadi;
}

function brkline(teks) { //coba
    var tek = teks.split("\r\n"); //cari sKetiap ganti baris;
    var inn = "";
    var indexpotojawaban = 0;
    var kodeganti = ["_JUDUL_", "_PECAHAN BIASA_"];

    var keypg = document.getElementById("keypg");
    if (keypg == null) {
        var scrippg = document.createElement("script");
        scrippg.setAttribute("id", "keypg");
        scrippg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";

        document.body.appendChild(scrippg);

    } else {
        keypg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";
    }

    for (x = 0; x < tek.length; x++) {
        var asal = tek[x]; // dalam satu baris ini, misal baris pertama:
        var cJudul = jumlahdobel(asal, "_JUDUL_");
        var cGambar = jumlahdobel(asal, "_GAMBAR_");
        var cPecBiasa = jumlahdobel(asal, "_PECAHAN-BIASA_");
        var cPecCamp = jumlahdobel(asal, "_PECAHAN-CAMPURAN_");


        //inn += "ke-"+ x +" = " + asal + "<hr style='border-bottom:1px solid red'/>";
        //inn += "ke-"+ x + " = JUDUL = " + cJudul +", GAMBAR = " + cGambar +", Pecahan Biasa = " + cPecBiasa +", Pecahan Campuran = " + cPecCamp + "<hr style='border-bottom:1px solid blue'/>";
        var katajadi = "";

        if (asal.indexOf("_JUDUL_") > -1) {
            var hJudul;
            var arjud = asal.split("_JUDUL_");
            var katakonversi;
            for (jd in arjud) {
                if (jd > 0) {
                    katakonversi = katajadireplace(arjud[jd]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + katakonversi + "</h4>";
                    //katajadi += hJudul ;
                    katajadi += hJudul + "<br/>";
                }
            }
        } else if (asal.indexOf("_ESSAY-NO_") > -1) {
            var esayno = asal.split("_ESSAY-NO_")[0];
            var tekspisah = asal.replace("_ESSAY-NO_", "").split(" ");
            katajadi += "<ol style='list-style-type:decimal' start='" + tekspisah[0] + "'><li id='essay" + tekspisah[0] + "' class='soalessay' style='border-bottom:1px solid blue'><div id='pertanyaanessay_" + tekspisah[0] + "'>";
            for (es in tekspisah) {
                if (es > 0) {
                    katajadi += katajadireplace(tekspisah[es]);
                }
            }


            katajadi += "</div><div id='tomboljawaban" + tekspisah[0] + "'><hr/></div>"
            katajadi += "<br/></li></ol>"
        } else if (asal.indexOf("_START-TABEL_") > -1) {
            katajadi += asal.replace("_START-TABEL_", "<div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("_START-TABEL-OPSI_") > -1) {
            katajadi += asal.replace("_START-TABEL-OPSI_", "<hr style='border-top:1px solid olive'/><div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("<|HEADER|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|HEADER|>");
            var katakonversi;
            for (th in tekarray) {
                katakonversi = katajadireplace(tekarray[th]);
                //katajadi +="<th>" + tekarray[th] +"</th>";
                katajadi += "<th>" + katakonversi + "</th>";
            }
            katajadi += "</tr>"
        } else if (asal.indexOf("<|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|>");
            var katakonversi;
            for (td in tekarray) {
                katakonversi = katajadireplace(tekarray[td]);
                katajadi += "<td>" + katakonversi + "</td>"
            }
            katajadi += "</tr>"
            //inn +=  "<table class='versi-table'>";
        } else if (asal.indexOf("_SELESAI-TABEL_") > -1) {
            katajadi += "</table></div><br/>";
            //katajadi +=  "</table><br/>";

        } else if (asal.indexOf("_SELESAI-TABEL-OPSI_") > -1) {
            //katajadi +=  "</table></div><br/>";
            katajadi += "</table><br/></li></ol>";

        } else if (asal.indexOf("_PG_") > -1) {
            var Q_PG = "";
            var teks = asal.replace("_PG_", ""); // return = 1 teks pertanyaaan bla bla bla
            var arrTeks = teks.split(" ");
            nosoal = arrTeks[0];
            Q_PG += "<ol style='list-style-type:decimal;margin:5px 5px 0px 30px;padding:0' start='" + nosoal + "'><li id='soalke-" + nosoal + "' class='calcnosoal' style='border-top:1px double blue'>";
            var katakonversi;
            for (ss in arrTeks) {
                if (ss > 0) {
                    katakonversi = katajadireplace(arrTeks[ss]);
                    Q_PG += katakonversi;
                }
            }
            //katajadi = Q_PG + "<hr style='border-top:1px solid olive'/>";
            katajadi = Q_PG

        } else if (asal.indexOf("_OPSI-PG_") > -1) {
            var opsipg = "";
            var arpgg = asal.replace("_OPSI-PG_", ""); // hasilnya: 1A teks pertanyaan bla bla bla
            var arpg = arpgg.split(" "); //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
            var idopsi = arpg[0]; // hasilnya: 1A
            //var abjad = idopsi.slice(1, 2); // hasilnya A
            //var nosoal = idopsi.slice(0, 1); // hasilnya 1
            var nosoal = parseInt(idopsi);
            var abjad = idopsi.replace(nosoal, "");

            if (abjad === "A") {
                opsipg += "<hr style='border-top:1px solid olive'/>";
                opsipg += "<ol style='list-style-type:upper-alpha;margin:5px 5px 0px 20px;padding:0' ><li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // Khusus opsi A, ada elemen OL lalu dilanjut teksnya
            } else {
                opsipg += "<li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // selain opsi A, dilanjut.  Tapi tanpa element OL
            }
            var katakonversi;
            for (tt in arpg) { //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
                if (tt > 0) { // hindari array 0=1A
                    katakonversi = katajadireplace(arpg[tt]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    opsipg += katakonversi
                }
            }
            if (abjad === "D") {
                opsipg += "</label></li></ol></li></ol>";
            } else {
                opsipg += "</label></li>";
            }


            katajadi += opsipg;

        } else if (asal.indexOf("_POTO-JAWABAN-TUGAS_") > -1) {
            var tekssplit = asal.replace("_POTO-JAWABAN-TUGAS_", "").split(" ")[0]; // return: 1/2/3
            var mediaessay = "";
            var bnyk = tekssplit.split("/");
            for (de in bnyk) {
                mediaessay += bnyk[de] + ", ";
            }
            katajadi += "<div style='background-color:#ffcdc9;padding:10px'>Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban Tugas No";
            katajadi += " " + mediaessay + " dengan menguploadnya di sini: <br/><br/>";
            katajadi += "<label style='border:1px solid black;background-color:#eee;padding:5px;border-radius:5px' for='iduploadpototugas" + indexpotojawaban + "' id='label" + indexpotojawaban + "'><i class='fa fa-camera'></i> Upload Jawaban</label><br/><br/>";
            katajadi += "<div class='potoessay' id='" + tekssplit + "' style='overflow-x:auto'><div id='mediapreview" + indexpotojawaban + "'>";
            katajadi += "<img src='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png'  style='width:145px;margin:auto;border:1px solid blue'/>";
            katajadi += "</div></div>";

            katajadi += "<input type='file' id='iduploadpototugas" + indexpotojawaban + "' onchange='uploadpototugas(" + indexpotojawaban + ")' style='display:none'/><div  id='filejawaban" + indexpotojawaban + "' class='jawabanfile' style='display:none' ></div>"


            katajadi += "</div>";

            indexpotojawaban += 1;


        } else if (asal.indexOf("_KUNCI-PG_") > -1) {
            //REPLACE DULU = misal: _KUNCI-PG_1A, 2B, 3C<kalo adaspasi>
            var tekskunci = asal.replace("_KUNCI-PG_", "").replace(/\s+/g, "").split(","); // hasilnya: 1A,2B,3C
            var arrkunci = [];
            for (o = 0; o < tekskunci.length; o++) {
                arrkunci.push(tekskunci[o])
            }
            basekunci = window.btoa(arrkunci);
            //basekunci = arrkunci;//window.btoa(arrkunci);
            var keypg = document.getElementById("keypg");

            //var teksscript = document.createTextNode("var keybase='"+basekunci+"'");
            //	keypg.appendChild(teksscript);
            keypg.innerHTML = "var keybase='" + basekunci + "'";
            tttkeybase.innerHTML = basekunci;
        } else {
            var katakonversi = katajadireplace(asal);
            katajadi += katakonversi + "<br/>";

        }
        inn += katajadi; //+ "&lt;br/&gt;" ;
    }


    return inn
}

function katajadireplace(asal) {
    var splitTeks = asal.split(" ");
    var ccJudul = 1;
    var brsTabel = 0;
    var katajadi = "";
    for (i = 0; i < splitTeks.length; i++) {
        //jika judul:
        if (splitTeks[i].indexOf("_GAMBAR_") > -1) {
            katajadi += "<img src='" + splitTeks[i].replace("_GAMBAR_", "") + "' style='width:50%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode'/>";
        } else if (splitTeks[i].indexOf("_GAMBAR-DRIVE_") > -1) {
            var hilangkankode = splitTeks[i].replace("_GAMBAR-DRIVE_", "");
            var hilangkanprefik = hilangkankode.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=view&id=");
            var hilangkansufik = hilangkanprefik.replace("/view", "");
            var hilangkansufike = hilangkansufik.replace("?usp=drivesdk", "");

            katajadi += "<img src='" + hilangkansufike + "' style='width:50%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode, contoh link:https://drive.google.com/file/d/1J0NUwTrxFBZ0JZBCzVTlsDFeXbn3mIci/view'/> ";
        } else if (splitTeks[i].indexOf("_PECAHAN-BIASA_") > -1) {
            var a = splitTeks[i].replace("_PECAHAN-BIASA_", "").split("/")[0];
            var b = splitTeks[i].replace("_PECAHAN-BIASA_", "").split("/")[1];
            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Cfrac%7B" + a + "%7D%7B" + b + "%7D%20&chf=bg%2Cs%2CFFFFFF100&chco=000000' />"


        } else if (splitTeks[i].indexOf("_PECAHAN-CAMPURAN_") > -1) {
            var a = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[0];
            var b = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[1];
            var c = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[2];
            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=" + a + "%5Cfrac%7B" + b + "%7D%7B" + c + "%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"


        } else if (splitTeks[i].indexOf("_AKAR-KUADRAT_") > -1) {
            var a = splitTeks[i].replace("_AKAR-KUADRAT_", "");

            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%7B%20" + a + "%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"


        } else if (splitTeks[i].indexOf("_AKAR-TIGA_") > -1) {
            var a = splitTeks[i].replace("_AKAR-TIGA_", "");
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%5B3%5D%7B%20" + a + "%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_PANGKAT_") > -1) {
            var a = splitTeks[i].replace("_PANGKAT_", "").split("/")[0];
            var b = splitTeks[i].replace("_PANGKAT_", "").split("/")[1];
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5C" + a + "^" + b + "%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_EQUATION-LAINNYA_") > -1) {
            var a = splitTeks[i].replace("_EQUATION-LAINNYA_", "");
            var b = decodeURIComponent(a);
            //var c = decodeURIComponent(b);
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=" + b + "%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_YOUTUBE_") > -1) {
            var linkyoutube, konv, konv2, konv3;
            konv = splitTeks[i].replace("_YOUTUBE_", "<br/><iframe width='95%' height='215' src='")
            konv2 = konv.replace("https://youtu.be/", "https://www.youtube.com/embed/"); // kalo link awalnya https://youtu.be/ 
            konv3 = konv2.replace("watch?v=", "embed/"); // jika diambil dari https://www.youtube.com/
            linkyoutube = konv3 + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>";

            katajadi += linkyoutube;

        } else if (splitTeks[i].indexOf("_OPSI-SEL_") > -1) {
            var splitteks = splitTeks[i].replace("_OPSI-SEL_", "").split(" ");
            var id = splitteks[0]; //4A

            var abjad = id.substring(id.length - 1, id.length)// id.slice(1, 2); //B
            var nosoal = id.match(/(\d+)/)[0];//id.slice(0, 1); //nosoal 4
            var innteks = "<input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + id + "'/><label class='opsi' for='" + id + "'>" + abjad + "</label>"

            katajadi += innteks;
        } else {
            katajadi += splitTeks[i] + " ";

        }
    }

    return katajadi

}

function fn_map(s) {

    var paragrafsiap = "";
    if (s.indexOf("_JUDUL_") > -1) {
        paragrafsiap += "<h2 style='background-color:black;color:white;padding:1px'>" + s.replace("_JUDUL_", "") + "</h2>"
    } else {
        paragrafsiap += s
    }
    return paragrafsiap
}

function jumlahdobel(arrTeks, txt) {
    var count = 0;
    var crtArr = arrTeks.split(" ");
    for (i in crtArr) {
        if (crtArr[i].indexOf(txt) > -1) {
            count += 1
        }
    }

    return count
}

function gantiapaaja(teks, cariapa, gantiawal, gantiakhir) {
    var split = teks.split(cariapa);
    var teksganti = "";
    //for (x in split){
    for (x = 1; x < split.length; x++) {
        if (split[x].length > 0) {
            teksganti += gantiawal + split[x] + gantiakhir;
        }; //.split(" ")[0] +"</h3>";

    }
    return teksganti
}

function konverttgl() {
    var intgl = document.getElementById("idtgl").value.toLocaleString();
    var valcrttokn = document.formuploadmateri.crtToken;
    var tekstgl = lentanggal(intgl);
    if (intgl.indexOf("-") > 0) {
        var splittekstgl = intgl.split("-");
    } else {
        var splittekstgl = intgl.split("/");
    }
    valcrttokn.value = splittekstgl[2] + "" + splittekstgl[1] + "" + splittekstgl[0];
}

function uploadfiletxtlagi() {
    var formulir = document.formuploadmateri
    formulir.style.display = "block";
    //==========================
    document.getElementById("divceklis").style.display = "block";
    document.getElementById("divsayasetuju").style.display = "block";


    document.getElementById("kirimmaterikeserver").style.display = "block"
    document.getElementById("kirimmaterikeserver").removeAttribute("onclick");
    document.getElementById("kirimmaterikeserver").setAttribute("onclick", "persiapanuploadkonten()");
    document.getElementById("judulformunggah").innerHTML = "Materi Berhasil Dipublikasikan<br/>";

    var divprivewhp = document.getElementById("materiimport");
    divprivewhp.style.display = "block";

    var divlayardepanhp = document.getElementById("layardepan");
    divlayardepanhp.style.display = "block";
    var inputtoken = document.getElementById("previewtoken");
    inputtoken.value = "";
    var kontengambar = document.getElementById("previewlogohp");
    kontengambar.style.display = "none";
    var loginsiswa = document.getElementById("previewloginsiswa");
    loginsiswa.style.display = "none"
    var divmateriimport = document.getElementById("materiimport");
    divmateriimport.style.display = "none"

    //Disini fungsi untuk memanggil riwayat materi
    document.formuploadmateri.idkelas.value = document.getElementById("kelassayapilih").innerHTML;
    document.formuploadmateri.idpendaftar.value = document.getElementById("keyidpendaftar").innerHTML;
    document.formuploadmateri.idSekolah.value = document.getElementById("keyidsekolah").innerHTML;

    document.getElementById("namafileupload").innerHTML = "";
    document.getElementById("resultlink").innerHTML = "";


}

function sayasetuju() {
    var ceklis = document.getElementById("sayasetuju");
    var tekslis = document.getElementById("tekssetuju");
    var tombolsetuju = document.getElementById("kirimmaterikeserver");
    if (ceklis.checked == true) {
        tekslis.innerHTML = "Yakin";
        tombolsetuju.style.display = "block"
    } else {
        tekslis.innerHTML = "Tidak Yakin";
        tombolsetuju.style.display = "none"
    }
}

function kliklamaso() {
    var inputtoken = document.getElementById("previewtoken");
    var inputgurutoken = document.getElementById("idtoken");
    var kontengambar = document.getElementById("previewlogohp");
    var loginsiswa = document.getElementById("previewloginsiswa");
    var kelassiswa = document.getElementById("previewpilihkelas");
    var kelasguru = document.getElementById("kelassayapilih");
    var previewhtml = document.getElementById("materiimport");
    var layardepanhp = document.getElementById("layardepan");
    if (inputtoken.value == inputgurutoken.value && kelassiswa.value == kelasguru.innerHTML) {
        alert("Token yang anda masukkan sudah benar. Selamat Belajar");
        kontengambar.style.display = "block";
        loginsiswa.style.display = "block";
        previewhtml.style.display = "none";
        layardepanhp.style.display = "none";
        document.getElementById("output").innerHTML = "";
        // coba tambah fungsi ini: 
        tambahtombolisijawaban();
        ///------------------------------------////

        ///------------------------------------////





    } else {
        alert("Tampilan Online: Token yang Ananda masukkan tidak terdaftar. Silakan ulangi \r\n \r\n Preview: Untuk preview/uji coba, Kode Token/Sandi kosongkan saja agar dapat melihat tampilan e-Lamaso yang sedang Anda kerjakan");
        inputtoken.value = "";
    }
}

function riwayatmateri() {
    //jika ingin menampilkan riwayat materi, maka data di elemen id=materiimport dan/atau di id=output harus dihapus, sebab akan mempengaruhi klik opsi jawaaban
    var divmateriimport = document.getElementById("materiimport");
    var divoutput = document.getElementById("output");
    divmateriimport.innerHTML = "";
    divoutput.innerHTML = "";

    var kelas = document.getElementById("kelassayapilih").innerHTML;
    var divKontenmateri = document.getElementById("kontenriwayatmateri");
    divKontenmateri.innerHTML = "Berikut adalah riwayat materi pembelajaran kelas " + kelas + " :<br/>"
    var url = script_url + "?action=riwayatmateri";
    $.getJSON(url, function (json) {

        var tabel = document.createElement("table")
        tabel.setAttribute("class", "versi-table");
        tabel.setAttribute("id", "tabel_riwayat_materi");
        var tr = tabel.insertRow(0);
        var th = document.createElement("th");
        th.innerHTML = "Tanggal";
        var th2 = document.createElement("th");
        th2.innerHTML = "Preview";
        var th3 = document.createElement("th");
        th3.innerHTML = "Kode Token";
        var th4 = document.createElement("th");
        th4.innerHTML = "Dipublikasikan Tanggal";
        var th5 = document.createElement("th");
        th5.innerHTML = "Mapel/Tema";
        var th6 = document.createElement("th");
        th6.innerHTML = "Frekuensi Akses";
        var th7 = document.createElement("th");
        th7.innerHTML = "Durasi";
        var th8 = document.createElement("th");
        th8.innerHTML = "Jumlah PG";
        var th9 = document.createElement("th");
        th9.innerHTML = "Jumlah Essay";
        tr.appendChild(th);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        tr.appendChild(th6);
        tr.appendChild(th7);
        tr.appendChild(th8);
        tr.appendChild(th9);
        var idpendaftarvalue = document.getElementById("keyidpendaftar").innerHTML;
        for (i = 0; i < json.records.length; i++) {
            if (json.records[i].idkelas == kelas && json.records[i].idpendaftar == idpendaftarvalue) { //
                var tr = tabel.insertRow(1);
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = new Date(json.records[i].Time_Stamp).toLocaleString();
                var tabCell = tr.insertCell(-1);
                var btn = document.createElement("button");
                btn.setAttribute("onclick", "previewriwayat('" + json.records[i].idmateri + "')")
                btn.innerHTML = "Preview";
                tabCell.appendChild(btn);
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].idtoken;
                var tabCell = tr.insertCell(-1);
                var idtg = json.records[i].crtToken;
                tabCell.innerHTML = formattanggallengkap(idtg);
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].idmapel;
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].idaksessiswa;
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].iddurasi + " menit.";
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].jumlahpg;
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].jumlahessay;

            }
        }
        divKontenmateri.appendChild(tabel);
    })

}

function formattanggallengkap(xxx) {
    // misal idtoken = 01092020
    var idtoken = "" + xxx + "";
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var tgl = idtoken.slice(0, 2); // 01
    var bulan = deleteZero(idtoken.slice(2, 4)); // 09 --> 9, kalo 10 ya tetep 10
    var tahun = idtoken.slice(4, 8)

    return tgl + " " + namabulan[bulan - 1] + " " + tahun + " Pukul 07:00 WIB";

}

function mulaibelajar() {
    var inputtoken = document.getElementById("previewtoken");
    var inputgurutoken = document.getElementById("idtoken");
    var kontengambar = document.getElementById("previewlogohp");
    var loginsiswa = document.getElementById("previewloginsiswa");
    var kelassiswa = document.getElementById("previewpilihkelas");
    var kelasguru = document.getElementById("kelassayapilih");
    var previewhtml = document.getElementById("materiimport");
    var layardepanhp = document.getElementById("layardepan");

    kontengambar.style.display = "none";
    loginsiswa.style.display = "none";
    previewhtml.style.display = "block";
    layardepanhp.style.display = "none";
    document.getElementById("output").innerHTML = "";
    ///------ isi identitas sampel -------////
    document.getElementById("prevhp_Nama_Siswa").innerHTML = document.getElementById("previewpilihnama").value;
    document.getElementById("prevhp_Kelas_Siswa").innerHTML = document.getElementById("previewpilihkelas").value;
    document.getElementById("previewhp_mapeltoken_Siswa").innerHTML = document.formuploadmateri.idmapel.value;
    document.getElementById("previewhp_tgltoken_Siswa").innerHTML = lentanggal(document.formuploadmateri.crtToken.value);
    document.getElementById("previewhp_durasitoken_Siswa").innerHTML = document.formuploadmateri.iddurasi.value + " menit.";
    document.getElementById("cd_seconds").value = document.formuploadmateri.iddurasi.value;

    ///------------------------------------////






}

function refreshpreview() {
    var inputtoken = document.getElementById("previewtoken");
    var inputgurutoken = document.getElementById("idtoken");
    var kontengambar = document.getElementById("previewlogohp");
    var loginsiswa = document.getElementById("previewloginsiswa");
    var previewhtml = document.getElementById("materiimport");
    var divinput = document.getElementById("output");
    var divprivewhp = document.getElementById("materiimport");
    var divlayardepanhp = document.getElementById("layardepan");
    kontengambar.style.display = "none";
    loginsiswa.style.display = "none";
    previewhtml.style.display = "none";
    divlayardepanhp.style.display = "block";
    inputtoken.value = "";
    //divinput.innerHTML="";
    //divprivewhp.innerHTML="Anda Sudah merefresh laman preview, Upload ulang materi Anda.";
    //document.getElementById("namafileupload").innerHTML ="File di Refresh. Silakan upload ulang";
    //document.getElementById("basetxt").value="";



}

function salahkelas() {
    var selectkelaspreview = document.getElementById("previewpilihkelas");
    var kelasgurunya = document.getElementById("kelassayapilih").innerHTML;
    var selectnamasiswa = document.getElementById("previewpilihnama");
    if (selectkelaspreview.value == kelasgurunya) {
        selectnamasiswa.style.display = "block";
    } else {
        alert("Privew ini, kelas yang dipilih tidak sesuai dengan kelas Anda");
        selectnamasiswa.style.display = "none";

    }
}

function cektugasdansoal() {
    //Cek nosoalPG
    output.innerHTML = ""
    var nosoal = document.getElementsByClassName("calcnosoal");
    var opsiclac = document.getElementsByClassName("calc");
    var essayclac = document.getElementsByClassName("soalessay");
    cektagihan.innerHTML = "Jumlah soal PG: " + nosoal.length + " butir soal. <hr style='border-top:1px solid blue'/>";
    // ---------- Cek No soal Duplikat
    var koleksnosoal = [];
    var nosoalduplikat = [];
    for (var a = 0; a < nosoal.length; a++) {
        if (koleksnosoal.indexOf(nosoal[a].getAttribute("id")) < 0) {
            koleksnosoal.push(nosoal[a].getAttribute("id"));
        } else {
            nosoalduplikat.push(nosoal[a].getAttribute("id"))
        }
    }

    //----------- Beri Keterangan No soal yang duplikat 
    var infonosoalduplikat = "";
    if (nosoalduplikat.length > 0 && nosoal.length > 0) {
        infonosoalduplikat = "Penulisan Kode No Soal: <span style='color:red'>Kode Nomor Soal PG yang duplikat, yaitu No : (" + nosoalduplikat.join(', ') + "), segera perbaiki sumber materi Anda agar e-Lamaso mampu membaca nilai yang diperoleh siswa. </span> "
    } else if (nosoalduplikat.length == 0 && nosoal.length > 0) {
        infonosoalduplikat = "Penulisan Kode No Soal: <span style='color:blue'>Bagus, tidak ada kode Nomor Soal yang duplikat.</span>"
    } else {
        infonosoalduplikat = "";
    }

    // ---------- Cek Kode Opsi Duplikat

    //----------- Beri Keterangan Kode ID yang duplikat 
    var opsiduplikat = [];
    var koleksiduplikat = [];
    for (x = 0; x < opsiclac.length; x++) {
        //cektagihan.innerHTML += opsiclac[x].getAttribute("id") + "<br>";
        if (opsiduplikat.indexOf(opsiclac[x].getAttribute("id")) < 0) {
            var hapusspasi = opsiclac[x].getAttribute("id").replace(/\s+/g, "")
            opsiduplikat.push(hapusspasi)
        } else {
            var hapusspasi = opsiclac[x].getAttribute("id").replace(/\s+/g, "")
            koleksiduplikat.push(hapusspasi)
        }

    }


    //cektagihan.innerHTML += "Jumlah Koleksi Opsijawaban: " + opsiduplikat.length +" ("+opsiduplikat+"), dan jumlah opsi duplikat: " + koleksiduplikat.length +" ("+koleksiduplikat+")<br/>";

    var infoteksduplikat = ""; // opsi pilihan ganda yang duplikat
    if (koleksiduplikat.length > 0 && nosoal.length > 0) {
        infoteksduplikat = "Penulisan Kode Opsion Pilihan Ganda : <span style='color:red'>Kode ID opsion PG duplikat, opsion : (" + koleksiduplikat.join(', ') + "), ini akan mempengaruhi nilai siswa.</span> "
    } else if (koleksiduplikat.length == 0 && nosoal.length > 0) {
        infoteksduplikat = "Penulisan Kode Opsion Pilihan Ganda : <span style='color:blue'>Bagus, tidak ditemukan kode ID opsion jawaban PG duplikat.</span>"
    } else {
        infoteksduplikat = "<hr style='border-top:1px solid blue'>"
    }
    cektagihan.innerHTML += infonosoalduplikat + "<br/>" + infoteksduplikat;

    cektagihan.innerHTML += "<hr style='border-top:1px solid blue'> Jumlah Soal Essay : " + essayclac.length + " Soal. ";
    //===============
    var essayduplikat = [];
    var koleksiessayduplikat = [];
    for (x = 0; x < essayclac.length; x++) {
        //cektagihan.innerHTML += opsiclac[x].getAttribute("id") + "<br>";
        if (essayduplikat.indexOf(essayclac[x].getAttribute("id")) < 0) {
            var hapusspasi = essayclac[x].getAttribute("id").replace(/\s+/g, "")
            essayduplikat.push(hapusspasi)
        } else {
            var hapusspasi = essayclac[x].getAttribute("id")
            koleksiessayduplikat.push(hapusspasi)
        }

    }
    //cektagihan.innerHTML += "Jumlah Koleksi Essay: " + essayduplikat.length +" ("+essayduplikat.join(', ')+"), dan jumlah essay duplikat: " + koleksiessayduplikat.length +" ("+koleksiessayduplikat.join(', ')+")<br/>";
    if (koleksiessayduplikat.length == 0 && essayclac.length > 0) {
        cektagihan.innerHTML += "<span style='color:blue'> (tidak ditemukan nomor soal essay duplikat)</span><hr style='border-top:1px solid blue'>"
    } else if (koleksiessayduplikat.length > 0 && essayclac.length > 0) {
        cektagihan.innerHTML += "<span style='color:red'> Nomor Essay Duplikat = " + koleksiessayduplikat.join(', ') + "</span><hr style='border-top:1px solid blue'>";
    } else {
        cektagihan.innerHTML += "";
    }
    //===============
    var potoessayjawaban = document.getElementsByClassName("potoessay");
    cektagihan.innerHTML += "Jumlah Tombol Upload untuk essay ada : " + potoessayjawaban.length + " buah.<br/>";
    for (y = 0; y < potoessayjawaban.length; y++) {
        cektagihan.innerHTML += "Tombol Upload (Poto/Media) ke-" + (y + 1) + " untuk No: "
        var nosoalpotoini = potoessayjawaban[y].getAttribute("id").split("/");
        for (z = 0; z < nosoalpotoini.length; z++) {
            cektagihan.innerHTML += nosoalpotoini[z] + ", "
        }
        cektagihan.innerHTML += "<br/>"
    }
    cektagihan.innerHTML += "<hr style='border-top:1px solid red'/>";
    var keybase = tttkeybase.innerHTML
    if (keybase.length > 0) {
        var kuncijawaban = window.atob(keybase);
        cektagihan.innerHTML += "Kode Kunci Jawaban:  <b><em>" + keybase + "</em></b>, translate Kode Kunci Jawaban =" + kuncijawaban + "<hr style='border-top:1px solid red'/>";
    } else {
        cektagihan.innerHTML += "Tidak ditemukan kunci jawaban <hr style='border-top:1px solid red'/>";
    }
}

function tambahtombolisijawaban() {
    var elEssay = document.getElementsByClassName("soalessay")
    if (elEssay.length !== 0) {
        for (i = 0; i < elEssay.length; i++) {
            var idEl = elEssay[i].getAttribute("id");
            var inidEl = idEl.replace("essay", "");
            var tempattombol = document.getElementById("tomboljawaban" + inidEl);
            var tombolsatu = document.createElement("button");
            tombolsatu.setAttribute("onclick", "tombolketikjawaban('" + inidEl + "')");
            var tekstombolsatu = document.createTextNode("Ketik Jawaban No " + inidEl);
            tombolsatu.appendChild(tekstombolsatu);
            tempattombol.appendChild(tombolsatu);
            tempattombol.innerHTML += "<br/><sub>atau</sub></br/> "
            var tomboldua = document.createElement("button");
            tomboldua.setAttribute("onclick", "tomboluploadjawaban('" + inidEl + "')");
            var tekstomboldua = document.createTextNode("Upload Jawaban No " + inidEl);
            tomboldua.appendChild(tekstomboldua);
            tempattombol.appendChild(tomboldua);
            tempattombol.innerHTML += "<br/><sub>Pilih Salah satu cara Kalian menjawab soal ini</sub>"

        }
    }

}

function persiapanuploadkonten() {
    $("#kirimmaterikeserver").html("<i class='fa fa-spin fa-spinner'><i>")
    var namaformt = document.formuploadmateri;
    output.innerHTML = "";
    var nosoal = document.getElementsByClassName("calcnosoal");
    var essayclac = document.getElementsByClassName("soalessay");
    namaformt.jumlahpg.value = nosoal.length;
    namaformt.jumlahessay.value = essayclac.length;

    var namaform = document.formuploadmateri;
    var koleksdata = KoleksiFormSiswa(namaform);
    var en = submitsiswa(namaform);

    document.getElementById("kirimmaterikeserver").removeAttribute("onclick");
    document.getElementById("kirimmaterikeserver").setAttribute("onclick", "alert('Maaf, Sedang Proses ... ')");
    //document.getElementById("resultpoto").innerHTML = en;
    //---------------------------------------
    //var x = document.frmeditpoto.idguru;
    //var url = script_url+"?callback=linktxt&action=uploadmateri";
    var url = script_url + "?action=uploadmateri";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("kirimmaterikeserver").innerHTML = "Publikasikan";
            document.getElementById("kirimmaterikeserver").style.display = "none";
            //document.getElementById("resultlink").innerHTML = "Data berhasil diupload. Anda hanya dapat mengedit tanggal publikasinya.<br/>Cek Riwayat Materi Anda.";
            document.getElementById("resultlink").innerHTML = xhr.responseText;

            document.getElementById("divceklis").style.display = "none";
            document.getElementById("divsayasetuju").style.display = "none";



            document.getElementById("judulformunggah").innerHTML = "Materi Berhasil Dipublikasikan<br/>";
            var btntambah = document.createElement("button");
            btntambah.setAttribute("onclick", "uploadfiletxtlagi()");
            btntambah.innerHTML = "Upload Materi lagi";
            document.getElementById("judulformunggah").appendChild(btntambah);

            var divprivewhp = document.getElementById("materiimport");
            divprivewhp.style.display = "none";
            divprivewhp.innerHTML = "Untuk melihat preview sesuai token, lihat di Riwayat Materi";

            var divlayardepanhp = document.getElementById("layardepan");
            divlayardepanhp.style.display = "block";
            var inputtoken = document.getElementById("previewtoken");
            inputtoken.value = "";
            var kontengambar = document.getElementById("previewlogohp");
            kontengambar.style.display = "none";
            var loginsiswa = document.getElementById("previewloginsiswa");
            loginsiswa.style.display = "none"

            document.formuploadmateri.reset();
            document.formuploadmateri.idkelas.value = document.getElementById("kelassayapilih").innerHTML;
            document.getElementById("namafileupload").innerHTML = "";
            document.formuploadmateri.style.display = "none";
            var ceklis = document.getElementById("sayasetuju").checked = false;
            sayasetuju();
            //Disini fungsi untuk memanggil riwayat materi
            riwayatmateri();
        }
    };
    // url encode form data for sending as post data

    xhr.send(en);
    //---------------------------------------
    //document.getElementById("sembunyi").disabled=true;

}

function submitsiswa(form) { // handles form submit without any jquery

    var formData = KoleksiFormSiswa(form); // getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.koleksispam) {
        return false;
    }

    // disableAllButtons(form);
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    //xhr.send(encoded);
    return encoded;
}

function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "Sedang Proses";
        buttons[i].disabled = true;
    }
}

function daftarnilai() {

    // menu navigasi
    //document.getElementById("bargurukelas").style.display ="block";
    //document.getElementById("barlogin").style.display ="none";
    w3_close(); // jika User menekan navigasi, setelah klik lalu tutup

    //div laman
    document.getElementById("mainmenulamaso").style.display = "block"; // data kelas ditampilkan 
    document.getElementById("mainlogin").style.display = "none"; // data kelas ditampilkan 
    document.getElementById("mainAnjangsana").style.display = "none"; // data kelas ditampilkan 
    // div tempat kerja guru kelas
    document.getElementById("divpembelajaran").style.display = "none"; // KBM 
    document.getElementById("divdaftarnilai").style.display = "block"; // KBM 
    document.getElementById("datakelassaya").style.display = "none"; // data kelas ditampilkan 
    document.getElementById("batasaksesguru").scrollIntoView();

}

function logout() {
    window.location.reload()
    w3_close();
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}

function deleteZero(i) {
    if (i.slice(0, 1) == "0") {
        i = i.slice(1, 2);
    };
    return i;
}

function getdaftarnilai() {
    // ---- CARI DATA BERDASARKAN TABEL ID "tabel_riwayat_materi", yang dicari adalah:
    // -- 1: Token, 
    //bersihkan dulu tempatnya;
    datasiswatoken.innerHTML = "";

    var caritokenini = document.getElementById("getidtoken").value;
    var sumbertabel = document.getElementById("tabel_riwayat_materi");
    if (sumbertabel == null) {
        alert("Kami Arahkan untuk membaca Riwayat Materi yang Anda buat. Tujuannya untuk mengenali token yang Anda isi");
        pembelajaran()
    } else {
        //var jumlahbarissumbertabel = sumbertabel.rows.length;
        for (a = 0; a < sumbertabel.rows.length; a++) {
            if (sumbertabel.rows[a].cells[2].innerHTML == caritokenini) {
                var barisyangdicari = a
            }
        }

        //--------- AMBIL DATATOKEN DULU DAN MENYEDIAKAN ID UNTUK JUMLAHSOAL PG DAN ESSAY-----------
        var tabeldatatoken = document.createElement("table");
        tabeldatatoken.setAttribute("class", "versi-table");
        tabeldatatoken.setAttribute("id", "tabel_data_token");
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Token"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[2].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Mata Pelajaran/Tema"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[4].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Jumlah Soal PG"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[7].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Jumlah Soal Essay"
        var td = tr.insertCell(-1);
        td.innerHTML = sumbertabel.rows[barisyangdicari].cells[8].innerHTML

        datatoken.innerHTML = "<h4>Data Token</h4>";
        datatoken.appendChild(tabeldatatoken);
        var jumlahsoalpg = sumbertabel.rows[barisyangdicari].cells[7].innerHTML
    }
    //--------- AMBIL DAFTAR SISWA SESUAI DENGAN DATA TABEL SISWA -----------//

    // ------ DATA DIBUAT DALAM BENTUK JSON SCRIPT -----------------
    var kelaslogin = document.getElementById("kelassayapilih").innerHTML;
    var sumberkelasnama = document.getElementsByClassName("koleksinamakelas" + kelaslogin);

    var tabeldatanilai = document.createElement("table");
    tabeldatanilai.setAttribute("id", "tabel_data_nilai");
    tabeldatanilai.setAttribute("class", "versi-table")
    tabeldatanilai.setAttribute("style", "border-collapse:collapse;border:1px solid black");
    var tr = tabeldatanilai.insertRow(-1)
    var th1 = document.createElement("th");
    th1.innerHTML = "No.";
    var th2 = document.createElement("th");
    th2.innerHTML = "Nama Siswa";
    tr.appendChild(th1);
    tr.appendChild(th2);

    var jumlahsoalPG = tabel_data_token.rows[2].cells[1].innerHTML
    if (jumlahsoalPG !== "") { //Jika tidak ada PG maka ga usah bikin kolom 
        var th3 = document.createElement("th");
        th3.innerHTML = "Skor PG";
        tr.appendChild(th3);
    }
    var jumlahsoalEssay = tabel_data_token.rows[3].cells[1].innerHTML
    if (jumlahsoalEssay !== "") {
        var th4 = document.createElement("th");
        th4.innerHTML = "Skor Essay";
        tr.appendChild(th4);
    }
    var th5 = document.createElement("th");
    th5.innerHTML = "Jumlah Nilai";
    tr.appendChild(th5);
    var th6 = document.createElement("th");
    th6.innerHTML = "Lembar Jawaban Siswa";
    tr.appendChild(th6);

    for (var i = 0; i < sumberkelasnama.length; i++) {
        var brs = tabeldatanilai.insertRow(-1);
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = (i + 1);
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = sumberkelasnama[i].innerHTML;
        var namasiswaini = sumberkelasnama[i].innerHTML;

        //PG 
        var jumlahsoalPG = tabel_data_token.rows[2].cells[1].innerHTML
        if (jumlahsoalPG !== "") { //Jika tidak ada PG maka ga usah bikin kolom 
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"
        }
        //essay
        var jumlahsoalEssay = tabel_data_token.rows[3].cells[1].innerHTML
        if (jumlahsoalEssay !== "") {
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = "'-";
        }
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = "'-";
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = "'-"
    }



    // ----- tabel analisis PG 
    var jumlahsoalPG = tabel_data_token.rows[2].cells[1].innerHTML;
    if (jumlahsoalPG !== "") {
        var tabelanalisispg = document.createElement("table");
        tabelanalisispg.setAttribute("id", "tabel_data_analisis");
        tabelanalisispg.setAttribute("class", "table2excel versii-table")
        tabelanalisispg.setAttribute("style", "border-collapse:collapse;border:1px solid black");
        tabelanalisispg.setAttribute("data-tableName", "Test Table 1")
        //data-tableName="Test Table 1"
        var tr = tabelanalisispg.insertRow(-1)
        var th1 = document.createElement("th");
        th1.setAttribute("rowspan", "2");
        th1.innerHTML = "No.";
        var th2 = document.createElement("th");
        th2.setAttribute("rowspan", "2");
        th2.innerHTML = "Nama Siswa";
        var th3 = document.createElement("th");
        th3.setAttribute("rowspan", "2");
        th3.innerHTML = "Skor PG";
        var th4 = document.createElement("th");
        th4.setAttribute("colspan", jumlahsoalpg);
        th4.innerHTML = "Pilihan Ganda";
        var th5 = document.createElement("th");
        th5.setAttribute("colspan", jumlahsoalpg)
        th5.innerHTML = "Nilai Tiap PG"

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);



        var tr2 = tabelanalisispg.insertRow(-1)
        //var tdkosong = tr2.insertCell(-1);
        //var tdkosong = tr2.insertCell(-1);
        //var tdkosong = tr2.insertCell(-1);
        for (var j = 0; j < jumlahsoalpg; j++) {
            var th7 = document.createElement("th");
            th7.innerHTML = (j + 1);
            tr2.appendChild(th7);
        }
        for (var j = 0; j < jumlahsoalpg; j++) {
            var th8 = document.createElement("th");
            th8.innerHTML = (j + 1);
            tr2.appendChild(th8);
        }

        for (var i = 0; i < sumberkelasnama.length; i++) {
            var brs = tabelanalisispg.insertRow(-1);
            var p = i % 17;
            var cell1 = brs.insertCell(-1);
            if (p == 0) {
                cell1.setAttribute("style", "break-after:page")
            };
            cell1.innerHTML = (i + 1);
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = sumberkelasnama[i].innerHTML;

            var cell1 = brs.insertCell(-1);
            //cell1.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"

            for (var j = 0; j < jumlahsoalpg; j++) {
                //var tr2 = tabelanalisispg.insertRow(-1)
                var cell1 = brs.insertCell(-1);
                //cell1.innerHTML = "P" + (j+1)
            }
            for (var j = 0; j < jumlahsoalpg; j++) {
                //var tr2 = tabelanalisispg.insertRow(-1)
                var cell1 = brs.insertCell(-1);
                //cell1.innerHTML = "SkorPG_" + (j+1)
            }

        }

        // -- SELESAI TABEL ANALISIS PG

        var url = script_url + "?action=respon_nilai"
        $.getJSON(url, function (json) {
            //menentukan idheaderguru
            var dataheader = [];
            var dataskor = []
            for (t in json.records[0]) {
                if (t.indexOf("PG_") > -1) {
                    dataheader.push(t)
                };
                if (t.indexOf("SKOR_") > -1) {
                    dataskor.push(t)
                }
            }

            var baristabel = document.getElementById("tabel_data_nilai").rows
            for (var a = 1; a < baristabel.length; a++) {
                baristabel[a].cells[2].innerHTML = "";
                var x = baristabel[a].cells[1].innerHTML

                for (var b = 0; b < json.records.length; b++) {
                    //if(json.records[b].namasiswa == x){
                    if (json.records[b].namasiswa == x && json.records[b].idtoken == caritokenini) {
                        baristabel[a].cells[2].innerHTML = (json.records[b].nilaiPG).replace(".", ",");
                        baristabel[a].cells[3].innerHTML = "";
                        var adanilaiessay = (json.records[b].nilaiEssay).replace(".", ",");
                        if (adanilaiessay == "") {
                            var btn = document.createElement("button")
                            btn.setAttribute("onclick", "koreksiessay('" + b + "<|>" + json.records[b].html_jawaban + "')")
                            btn.innerHTML = "Beri Nilai"
                            baristabel[a].cells[3].appendChild(btn)
                        } else {
                            baristabel[a].cells[3].innerHTML = adanilaiessay;
                            baristabel[a].cells[4].innerHTML = (((json.records[b].nilaiPG * 1 + json.records[b].nilaiEssay * 1) / 2).toFixed(2)).replace(".", ",");

                        }
                        var printlj = document.createElement("button");
                        printlj.setAttribute("onclick", "printessay('" + b + "<|>" + json.records[b].html_jawaban + "')")
                        printlj.innerHTML = "Lembar Jawaban"
                        baristabel[a].cells[5].appendChild(printlj)
                    }

                }
            }

            var baristabelanalisis = document.getElementById("tabel_data_analisis").rows
            for (a = 0; a < json.records.length; a++) {
                var namasiswajson = json.records[a].namasiswa;
                for (b = 2; b < baristabelanalisis.length; b++) {
                    var namasiswatabel = baristabelanalisis[b].cells[1].innerHTML
                    if (namasiswajson == namasiswatabel && json.records[a].idtoken == caritokenini) {
                        baristabelanalisis[b].cells[2].innerHTML = (json.records[a].nilaiPG).replace(".", ",");
                        var indekskorpg = (parseInt(jumlahsoalpg) + 3)
                        for (c = 0; c < jumlahsoalpg; c++) {
                            baristabelanalisis[b].cells[c + 3].innerHTML = json.records[a][dataheader[c]];
                            baristabelanalisis[b].cells[c + indekskorpg].innerHTML = json.records[a][dataskor[c]]
                        }
                    }
                    //baristabelanalisis[b].cells[2].innerHTML ="";
                }
            }

            //datasiswatoken.innerHTML = json.records[0].namasiswa;
            //console.log(myJson);
        })

        datasiswatoken.innerHTML = "<h4>Tabel Analisis Nilai</h4>";
        var excel = document.createElement("button");
        excel.setAttribute("onclick", "tombollain2()");
        excel.innerHTML = "<i class='fa fa-file-excel-o'></i> Simpan ke Ms. Excel"
        datasiswatoken.appendChild(excel);

        var print = document.createElement("button");
        print.setAttribute("onclick", "printanalisis2()")
        print.innerHTML = "<i class='fa fa-print'></i> Print"

        datasiswatoken.innerHTML += " ";
        datasiswatoken.appendChild(print);
        datasiswatoken.innerHTML += "<hr/>"
        datasiswatoken.appendChild(tabeldatanilai)

        datasiswatoken.innerHTML += "<h4>Tabel Analisis Pilihan Ganda</h4>";
        var excel = document.createElement("button");
        excel.setAttribute("onclick", "tombollain()");
        excel.innerHTML = "<i class='fa fa-file-excel-o'></i> Simpan ke Ms. Excel"
        datasiswatoken.appendChild(excel);

        var print = document.createElement("button");
        print.setAttribute("onclick", "printanalisis()")
        print.innerHTML = "<i class='fa fa-print'></i> Print"

        datasiswatoken.innerHTML += " ";
        datasiswatoken.appendChild(print);
        datasiswatoken.innerHTML += "<hr/>"
        datasiswatoken.appendChild(tabelanalisispg)
        //<button class="exportToExcel">Export to XLS</button>
        //var konsol = array_idpg()
        //console.log(konsol);
    }
    document.getElementById("judulpetunjuk").innerHTML = "";
    document.getElementById("isipetunjuk").innerHTML = "";
}

function printanalisis() {
    var id = "tabel_data_analisis";
    var h1 = "Tabel Analasis Soal Pilhan Ganda";
    var h2 = "Mata Pelajaran " + (document.getElementById("tabel_data_token").rows[1].cells[1].innerHTML).toUpperCase();
    var html = document.getElementById("iframeprint");
    var isi = html.contentDocument;
    var headnya = isi.head;
    while (headnya.hasChildNodes()) {
        headnya.removeChild(headnya.firstChild);
    }
    //var bodynya = isi.body;
    //bodynya="";

    var titlee = document.createElement("title");
    var teksjudul = document.createTextNode(":: e-LAMASO::")
    titlee.appendChild(teksjudul)
    headnya.appendChild(titlee);
    var css = '@page { size: landscape;}';
    //head = document.head || document.getElementsByTagName('head')[0],
    var style = document.createElement('style');
    var cssd = '.versii-table {width:950px;max-width:100%;border-collapse:collapse}.versii-table th,.versii-table td,.versii-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versii-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}.versi-table {width:auto;max-width:100%;border-collapse:collapse}.versi-table th,.versi-table td,.versi-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versi-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}';
    style.type = 'text/css';
    style.media = 'print';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));

    }
    var d = new Date();
    var tglakhirr = d.getDate();
    var blnakhirr = d.getMonth();
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var thnakhirr = d.getFullYear();
    var tglakhir = d.getDate(); //daysInMonth(blnakhirr+1,thnakhirr);
    var namakepsekku = document.getElementById('namakepsek').innerHTML;
    var nipkepsekku = document.getElementById('nipkepsek').innerHTML;
    var guruapa = document.getElementById("namakota").innerHTML; //document.getElementById("tblguru").innerHTML + " " + document.getElementById("namakota").innerHTML; // document.frmlogin.kelasguru.value;
    var namaguruku = document.getElementById('namagurux').innerHTML;
    var nipguruku = document.getElementById('nipgurux').innerHTML;

    headnya.appendChild(style);
    var bodynya = isi.body;
    //var teksbody =document.getElementById(id).innerHTML;
    var teksbody = document.getElementById(id).outerHTML;
    bodynya.innerHTML = "";
    bodynya.innerHTML = '<style>' + cssd + '</style>';
    bodynya.innerHTML += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    bodynya.innerHTML += '<h1 style="text-align:center">' + h1 + '</h1>';
    bodynya.innerHTML += '<h2 style="text-align:center">' + h2 + '</h2>';
    bodynya.innerHTML += teksbody;
    bodynya.innerHTML += '<br/><br/><br/>';
    bodynya.innerHTML += '<div style="float:left;position:relative;margin-left:50px;text-align:center">Mengetahui,<br/>Kepala ' + keyidsekolah.innerHTML + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>'; //namasekolahku + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>';
    bodynya.innerHTML += '<div style="float:right;position:relative;text-align:center">' + namakotaku + ', ' + tglakhir + ' ' + namabulan[blnakhirr] + ' ' + thnakhirr + '<br/>' + guruapa + '<br/><br/><br/><br/><br/><b><u>' + namaguruku + '</u></b><br/>NIP. ' + nipguruku + '</div>';
    //bodynya.innerHTML+='<br/><br/><br/>'+guruapa+'<br/><br/><br/><b><u>'+namaguruku+'</u></b><br/>NIP. '+nipguruku+'</div>';


    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
}

function printanalisis2() {
    var id = "tabel_data_nilai";
    var h1 = "REKAP NILAI E-LAMASO";
    var h2 = "Mata Pelajaran " + (document.getElementById("tabel_data_token").rows[1].cells[1].innerHTML).toUpperCase();
    var html = document.getElementById("iframeprint");
    var isi = html.contentDocument;
    var headnya = isi.head;
    while (headnya.hasChildNodes()) {
        headnya.removeChild(headnya.firstChild);
    }
    //var bodynya = isi.body;
    //bodynya="";

    var titlee = document.createElement("title");
    var teksjudul = document.createTextNode(":: e-LAMASO::")
    titlee.appendChild(teksjudul)
    headnya.appendChild(titlee);
    var css = '@page { size: portrait;}';
    //head = document.head || document.getElementsByTagName('head')[0],
    var style = document.createElement('style');
    var cssd = '.versii-table {width:950px;max-width:100%;border-collapse:collapse}.versii-table th,.versii-table td,.versii-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versii-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}.versi-table {width:auto;max-width:100%;border-collapse:collapse}.versi-table th,.versi-table td,.versi-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versi-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}';
    style.type = 'text/css';
    style.media = 'print';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));

    }
    var d = new Date();
    var tglakhirr = d.getDate();
    var blnakhirr = d.getMonth();
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var thnakhirr = d.getFullYear();
    var tglakhir = d.getDate(); //daysInMonth(blnakhirr+1,thnakhirr);
    var namakepsekku = document.getElementById('namakepsek').innerHTML;
    var nipkepsekku = document.getElementById('nipkepsek').innerHTML;
    var guruapa = document.getElementById("namakota").innerHTML; //document.getElementById("tblguru").innerHTML + " " + document.getElementById("namakota").innerHTML; // document.frmlogin.kelasguru.value;
    var namaguruku = document.getElementById('namagurux').innerHTML;
    var nipguruku = document.getElementById('nipgurux').innerHTML;

    headnya.appendChild(style);
    var bodynya = isi.body;
    //var teksbody =document.getElementById(id).innerHTML;
    var teksbody = document.getElementById(id).outerHTML;
    bodynya.innerHTML = "";
    bodynya.innerHTML = '<style>' + cssd + '</style>';
    bodynya.innerHTML += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    bodynya.innerHTML += '<h1 style="text-align:center">' + h1 + '</h1>';
    bodynya.innerHTML += '<h2 style="text-align:center">' + h2 + '</h2>';
    bodynya.innerHTML += teksbody;
    bodynya.innerHTML += '<br/><br/><br/>';
    bodynya.innerHTML += '<div style="float:left;position:relative;margin-left:50px;text-align:center">Mengetahui,<br/>Kepala ' + keyidsekolah.innerHTML + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>';
    bodynya.innerHTML += '<div style="float:right;position:relative;text-align:center">' + namakotaku + ', ' + tglakhir + ' ' + namabulan[blnakhirr] + ' ' + thnakhirr + '<br/>' + guruapa + '<br/><br/><br/><br/><br/><b><u>' + namaguruku + '</u></b><br/>NIP. ' + nipguruku + '</div>';
    //bodynya.innerHTML+='<br/><br/><br/>'+guruapa+'<br/><br/><br/><b><u>'+namaguruku+'</u></b><br/>NIP. '+nipguruku+'</div>';


    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
}

function koreksiessay(bid) {
    //   alert("Anda akan mengoreksi data json " + bid + " dengan nilai b = " + bid.split("<|>")[0] + " dan idfile = " + bid.split("<|>")[1])
    var id = bid.split("<|>")[1];
    //document.getElementById("output").innerHTML="<i class='fa fa-spin fa-spinner'></i>";
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

    var idm = encodeURIComponent(id);
    var en = "?html_jawaban=" + idm;
    var url = script_url + en + "&action=lembarjawaban";

    $.getJSON(url, function (json) {
        //$("#output").html(brkline(json))
        document.getElementById("judulpetunjuk").innerHTML = "Lembar Jawaban Siswa";
        document.getElementById("isipetunjuk").innerHTML += "<div style='border:1px solid blue;padding:5px;'> Petunjuk:<br/><br/>Isikan nilai pada masing-masing jawaban siswa dengan rentang nilai dari 0 - 100<br/><br/>Setelah Anda selesai mengisi nilai, maka klik tombol <b>Beri Nilai</b> pada laman paling bawah.</div>";
        document.getElementById("isipetunjuk").innerHTML += brkline(decodeURI(json));
        var elEssay = document.getElementsByClassName("koleksilj")
        if (elEssay.length !== 0) {
            for (i = 0; i < elEssay.length; i++) {
                var idEl = elEssay[i].getAttribute("id");
                var inidEl = idEl.replace("untuklj", "");
                var tempattombol = document.getElementById("untuklj" + inidEl);
                var tombolsatu = document.createElement("input");
                tombolsatu.setAttribute("type", "number");
                tombolsatu.setAttribute("class", "koreksisoal");
                tombolsatu.setAttribute("onchange", "updatenilaikoreksi()");
                tempattombol.innerHTML = "Beri Nilai :";
                tempattombol.appendChild(tombolsatu);


            }
        }

        var tengahdulu = document.createElement("center");
        tengahdulu.setAttribute("style", "background-color:yellow");
        var inputidbaris = document.createElement("input");
        inputidbaris.setAttribute("id", "brs");
        inputidbaris.setAttribute("value", bid.split("<|>")[0]);
        inputidbaris.setAttribute("disabled", "true");
        inputidbaris.setAttribute("style", "display:none");

        var inputnilaikoreksi = document.createElement("input");
        inputnilaikoreksi.setAttribute("type", "number");
        inputnilaikoreksi.setAttribute("id", "nilaiakhiressay");
        inputnilaikoreksi.setAttribute("disabled", "true");

        var tombolkirim = document.createElement("button");
        tombolkirim.setAttribute("onclick", "siapkirimnilai()")
        tombolkirim.innerHTML = "Beri Nilai";
        var tombolprint = document.createElement("button")
        tombolprint.setAttribute("onclick", "printlembarjawaban()")
        tombolprint.innerHTML = "<i class='fa fa-print'> Print "


        tengahdulu.appendChild(inputidbaris);
        tengahdulu.innerHTML += "Preview Nilai Essay : "
        tengahdulu.appendChild(inputnilaikoreksi);
        tengahdulu.appendChild(tombolkirim);
        tengahdulu.innerHTML += " Cetak Jawaban ini: "
        tengahdulu.appendChild(tombolprint);
        //document.getElementById("isipetunjuk").appendChild(tengahdulu);
        document.getElementById("isipetunjuk").innerHTML += "<br/><br/>";
        document.getElementById("isipetunjuk").appendChild(tengahdulu);
        document.getElementById("isipetunjuk").innerHTML += "<br/><br/><br/><br/>";

    })



}

function printessay(bid) {
    //   alert("Anda akan mengoreksi data json " + bid + " dengan nilai b = " + bid.split("<|>")[0] + " dan idfile = " + bid.split("<|>")[1])
    var id = bid.split("<|>")[1];
    //document.getElementById("output").innerHTML="<i class='fa fa-spin fa-spinner'></i>";
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

    var idm = encodeURIComponent(id);
    var en = "?html_jawaban=" + idm;
    var url = script_url + en + "&action=lembarjawaban";

    $.getJSON(url, function (json) {
        //$("#output").html(brkline(json))
        document.getElementById("judulpetunjuk").innerHTML = "Lembar Jawaban Siswa";
        document.getElementById("isipetunjuk").innerHTML += "<div style='border:1px solid blue;padding:5px;'> Petunjuk:<br/><br/>Isikan nilai pada masing-masing jawaban siswa dengan rentang nilai dari 0 - 100<br/><br/>Setelah Anda selesai mengisi nilai, maka klik tombol <b>Beri Nilai</b> pada laman paling bawah.</div>";
        document.getElementById("isipetunjuk").innerHTML += brkline(decodeURI(json));
        // var elEssay = document.getElementsByClassName("koleksilj")
        // if (elEssay.length !== 0) {
        //     for (i = 0; i < elEssay.length; i++) {
        //         var idEl = elEssay[i].getAttribute("id");
        //         var inidEl = idEl.replace("untuklj", "");
        //         var tempattombol = document.getElementById("untuklj" + inidEl);
        //         var tombolsatu = document.createElement("input");
        //         tombolsatu.setAttribute("type", "number");
        //         tombolsatu.setAttribute("class", "koreksisoal");
        //         tombolsatu.setAttribute("onchange", "updatenilaikoreksi()");
        //         tempattombol.innerHTML = "Beri Nilai :";
        //         tempattombol.appendChild(tombolsatu);


        //     }
        // }

        var tengahdulu = document.createElement("center");
        tengahdulu.setAttribute("style", "background-color:yellow");
        // var inputidbaris = document.createElement("input");
        // inputidbaris.setAttribute("id", "brs");
        // inputidbaris.setAttribute("value", bid.split("<|>")[0]);
        // inputidbaris.setAttribute("disabled", "true");
        // inputidbaris.setAttribute("style", "display:none");

        // var inputnilaikoreksi = document.createElement("input");
        // inputnilaikoreksi.setAttribute("type", "number");
        // inputnilaikoreksi.setAttribute("id", "nilaiakhiressay");
        // inputnilaikoreksi.setAttribute("disabled", "true");

        // var tombolkirim = document.createElement("button");
        // tombolkirim.setAttribute("onclick", "siapkirimnilai()")
        // tombolkirim.innerHTML = "Beri Nilai";
        var tombolprint = document.createElement("button")
        tombolprint.setAttribute("onclick", "printlembarjawaban()")
        tombolprint.innerHTML = "<i class='fa fa-print'> Print "


        // tengahdulu.appendChild(inputidbaris);
        // tengahdulu.innerHTML += "Preview Nilai Essay : "
        // tengahdulu.appendChild(inputnilaikoreksi);
        // tengahdulu.appendChild(tombolkirim);
        tengahdulu.innerHTML += "<i class='fa fa-print'></i> Cetak Lembar Jawaban ini: "
        tengahdulu.appendChild(tombolprint);
        //document.getElementById("isipetunjuk").appendChild(tengahdulu);
        document.getElementById("isipetunjuk").innerHTML += "<br/><br/>";
        document.getElementById("isipetunjuk").appendChild(tengahdulu);
        document.getElementById("isipetunjuk").innerHTML += "<br/><br/><br/><br/>";

    })



}

function printlembarjawaban() {
    alert("akan mencetak")
    var id = "isipetunjuk";
    var h1 = "";
    var h2 = "";
    var html = document.getElementById("iframeprint");
    var isi = html.contentDocument;
    var headnya = isi.head;
    while (headnya.hasChildNodes()) {
        headnya.removeChild(headnya.firstChild);
    }
    //var bodynya = isi.body;
    //bodynya="";

    var titlee = document.createElement("title");
    var teksjudul = document.createTextNode(":: e-LAMASO Jawaban::")
    titlee.appendChild(teksjudul)
    headnya.appendChild(titlee);
    var css = '@page { size: portrait;}';
    //head = document.head || document.getElementsByTagName('head')[0],
    var style = document.createElement('style');
    var cssd = '.w3-circle{border-radius:50%} .versii-table {width:950px;max-width:100%;border-collapse:collapse}.versii-table th,.versii-table td,.versii-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versii-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versii-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versii-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}.versi-table {width:auto;max-width:100%;border-collapse:collapse}.versi-table th,.versi-table td,.versi-table tr {border:1px solid #000;color:#000;padding:5px 10px 5px 10px}.versi-table th{background-color:#eee;color:blue;vertical-align:middle;text-align:center}.versi-table tr:nth-of-type(even) td{border:0;background-color:#fff;border:1px solid #000}versi-table tr:nth-of-type(odd) td{border:0;background-color:#eef;border:1px solid #000}';
    style.type = 'text/css';
    style.media = 'print';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));

    }
    var d = new Date();
    var tglakhirr = d.getDate();
    var blnakhirr = d.getMonth();
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var thnakhirr = d.getFullYear();
    var tglakhir = d.getDate(); //daysInMonth(blnakhirr+1,thnakhirr);
    var namakepsekku = document.getElementById('namakepsek').innerHTML;
    var nipkepsekku = document.getElementById('nipkepsek').innerHTML;
    var guruapa = document.getElementById("namakota").innerHTML; //document.getElementById("tblguru").innerHTML + " " + document.getElementById("namakota").innerHTML; // document.frmlogin.kelasguru.value;
    var namaguruku = document.getElementById('namagurux').innerHTML;
    var nipguruku = document.getElementById('nipgurux').innerHTML;

    headnya.appendChild(style);
    headnya.innerHTML += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    headnya.innerHTML += '<link rel="stylesheet" href="https://e-lamaso.github.io/e_lamaso_guru/e_lamaso_publick.css">';

    var bodynya = isi.body;
    //var teksbody =document.getElementById(id).innerHTML;
    var teksbody = document.getElementById(id).outerHTML;
    bodynya.innerHTML = "";
    bodynya.innerHTML = '<style>' + cssd + '</style>';
    // bodynya.innerHTML += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
    // bodynya.innerHTML += '<link rel="stylesheet" href="https://e-lamaso.github.io/e_lamaso_guru/e_lamaso_publick.css">';
    bodynya.innerHTML += '<h1 style="text-align:center">' + h1 + '</h1>';
    bodynya.innerHTML += '<h2 style="text-align:center">' + h2 + '</h2>';
    bodynya.innerHTML += teksbody;
    bodynya.innerHTML += '<br/><br/><br/>';
    bodynya.innerHTML += '<div style="float:left;position:relative;margin-left:50px;text-align:center">Mengetahui,<br/>Kepala ' + keyidsekolah.innerHTML + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>'; //namasekolahku + '<br/><br/><br/><br/><br/><u><b>' + namakepsekku + '</b></u><br/>NIP. ' + nipkepsekku + '</div>';
    bodynya.innerHTML += '<div style="float:right;position:relative;text-align:center">' + namakotaku + ', ' + tglakhir + ' ' + namabulan[blnakhirr] + ' ' + thnakhirr + '<br/>' + guruapa + '<br/><br/><br/><br/><br/><b><u>' + namaguruku + '</u></b><br/>NIP. ' + nipguruku + '</div>';
    //bodynya.innerHTML+='<br/><br/><br/>'+guruapa+'<br/><br/><br/><b><u>'+namaguruku+'</u></b><br/>NIP. '+nipguruku+'</div>';


    window.frames["iframeprint"].focus();
    window.frames["iframeprint"].print();
}

function siapkirimnilai() {
    var brsdata = (document.getElementById("brs").value) * 1 + 2;
    var nilaiessay = document.getElementById("nilaiakhiressay").value;
    var en = "brs=" + encodeURIComponent(brsdata) + "&nilaiEssay=" + encodeURIComponent(nilaiessay);
    var url = script_url + "?action=koreksiessay"; //&callback=berhasilkah"; //+en;
    //document.getElementById("isipetunjuk").style.display="none";
    var request = jQuery.ajax({

        crossDomain: true,
        url: url,
        data: en + "&callback=berhasilkah",
        dataType: "jsonp",
        method: "GET",
        success: function bershailkah(e) {
            document.getElementById("isipetunjuk").innerHTML = e.result;
            getdaftarnilai();
        }





    })
    //document.getElementById("judulpetunjukpetunjuk").style.display = "none"

}


function updatenilaikoreksi() {
    var kelasinput = document.getElementsByClassName("koreksisoal");
    var nilai = 0;
    for (i = 0; i < kelasinput.length; i++) {
        nilai += kelasinput[i].value * 1;
    }
    var jumlahsoalessaysebenarnya = document.getElementById("tabel_data_token").rows[3].cells[1].innerHTML * 1;
    var nilaiakhir = (nilai / jumlahsoalessaysebenarnya).toFixed(2);
    //document.getElementById("nilaiakhiressay").value = nilai;
    document.getElementById("nilaiakhiressay").value = nilaiakhir;
}

function Koleksi_idpg() {
    var url = script_url + "?action=respon_nilai";
    var dataid = [];
    var isiannya = []
    $.getJSON(url, function (json) {
        for (a = 0; a < json.records.length; a++) {

            for (t in json.records[0]) {
                dataid.push(t)
                if (t.indexOf("PG_") > -1) {
                    isiannya.push(json.records[a][t])
                }
            }

        }

    })
    return isiannya
}

function array_idpg() {
    var url = script_url + "?action=respon_nilai"
    var dataid = []
    $.getJSON(url, function (json) {
        for (t in json.records[0]) {
            dataid.push(t)
        }

        var rows = json.records,
            data = [];

        for (var r = 0, l = rows.length; r < l; r++) {
            //for(r in json.records){
            var row = rows[r],
                record = {};

            for (var p in dataid) {
                record[dataid[p]] = row[dataid[p]]; //row[p];
            }

            data.push(record);
        }
        return data
        //console.log(data)
    })
}

function previewriwayat(id) {
    //document.getElementById("output").innerHTML="<i class='fa fa-spin fa-spinner'></i>";
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

    var idm = encodeURIComponent(id);
    var en = "idmateri=" + idm;
    var url = script_url + "?" + en + "&action=previewriwayat";

    $.getJSON(url, function (json) {
        //$("#output").html(brkline(json))
        document.getElementById("judulpetunjuk").innerHTML = "Preview e-Lamaso";
        document.getElementById("isipetunjuk").innerHTML = brkline(json);
        var elEssay = document.getElementsByClassName("soalessay")
        if (elEssay.length !== 0) {
            for (i = 0; i < elEssay.length; i++) {
                var idEl = elEssay[i].getAttribute("id");
                var inidEl = idEl.replace("essay", "");
                var tempattombol = document.getElementById("tomboljawaban" + inidEl);
                var tombolsatu = document.createElement("button");
                tombolsatu.setAttribute("onclick", "tombolketikjawaban('" + inidEl + "')");
                var tekstombolsatu = document.createTextNode("Ketik Jawaban No " + inidEl);
                tombolsatu.appendChild(tekstombolsatu);
                tempattombol.appendChild(tombolsatu);
                tempattombol.innerHTML += "<br/><sub>atau</sub></br/> "
                var tomboldua = document.createElement("button");
                tomboldua.setAttribute("onclick", "tomboluploadjawaban('" + inidEl + "')");
                var tekstomboldua = document.createTextNode("Upload Jawaban No " + inidEl);
                tomboldua.appendChild(tekstomboldua);
                tempattombol.appendChild(tomboldua);
                tempattombol.innerHTML += "<br/><sub>Pilih Salah satu cara Kalian menjawab soal ini</sub>"

            }
        }


    })

}

function tombollain() {
    var tbl = document.getElementById("tabel_data_token");
    var namamapel = tbl.rows[1].cells[1].innerHTML;

    $("#tabel_data_analisis").table2excel({
        //exclude: ".excludeThisClass",
        //name: "Worksheet Name",
        //filename: "SomeFile.xls", // do include extension
        //preserveColors: true // set to true if you want background colors and font colors preserved
        name: "Worksheet Name",
        filename: "Data Analisis Soal PG " + namamapel + " " + new Date(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true
    });
}

function tombollain2() {
    var tbl = document.getElementById("tabel_data_token");
    var namamapel = tbl.rows[1].cells[1].innerHTML;

    $("#tabel_data_nilai").table2excel({
        //exclude: ".excludeThisClass",
        //name: "Worksheet Name",
        //filename: "SomeFile.xls", // do include extension
        //preserveColors: true // set to true if you want background colors and font colors preserved
        name: "Worksheet Name",
        filename: "Rekap Nilai " + namamapel + " " + new Date(),
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: true
    });
}

function Anjangsana() {
    //tampilin formatnya dulu

    // alert("Anda akan keluar dari proses pengajaran dan akan masuk ke forum Anjangsana (Silaturahmi)");
    mainlogin.style.display = "none";
    mainmenulamaso.style.display = "none";
    document.getElementById("mainAnjangsana").style.display = "block"; // data kelas ditampilkan 
    w3_close();
    document.getElementById("batasaksesguru").scrollIntoView();

    var tabeldatauser = document.getElementById("id_tabel_user");
    var brs = document.getElementById("keyidpendaftar").innerHTML - 1
    //avatarlogin
    document.getElementById("avatarlogin").removeAttribute("src");
    document.getElementById("avatarlogin").setAttribute("src", "https://drive.google.com/uc?export=view&id=" + tabeldatauser.rows[brs].cells[13].innerHTML);
    document.getElementById("avatarlogin").setAttribute("onclick", "potodia('" + brs + "')");

    //jika diklikmaka tampil gede:
    document.getElementById("namaAnjangsana").innerHTML = "<em>" + tabeldatauser.rows[brs].cells[8].innerHTML + "</em >  <i class='fa fa-user-circle w3-large w3-right'></i>";
    //Namalogin
    document.getElementById("asalsekolah").innerHTML = tabeldatauser.rows[brs].cells[5].innerHTML + " " + tabeldatauser.rows[brs].cells[7].innerHTML + " " + tabeldatauser.rows[brs].cells[6].innerHTML;
    //document.getElementById("asalsekolah").innerHTML += 
    //panggil data pasang yang bersattus
    var url = script_url + "?action=lihatanjangsana"

    $.getJSON(url, function (json) {
        // var brsterakhir = json.records.length;
        // var teksjon = json.records[brsterakhir].status;
        // var tekssplit = teksjon.split("\r\n")
        var rekstatus = document.getElementById("recordstatus");
        rekstatus.innerHTML = ""
        // rekstatus.innerHTML = tekssplit.join("<br/>")
        //console.log(json)
        //for (i = 0; i < json.records.length; i++) {
        //for (var i = 10; i >= 0; i--) 
        for (i = json.records.length - 1; i >= 0; i--) {
            //var teksjon = json.records[i].inputstatusanjangsana;
            var divclass1 = document.createElement("div");
            divclass1.setAttribute("class", "w3-container w3-card w3-white w3-round w3-col m7 w3-margin w3-margin-bottom");
            divclass1.setAttribute("id", "statuske" + i);
            divclass1.innerHTML = "<br/>"
            // var avatarpenyetatus = document.createElement("img");
            // avatarpenyetatus.setAttribute("src", json.records[i].avatareuser);
            // avatarpenyetatus.setAttribute("alt", "poto_" + json.records[i].namapenyetatus);
            // avatarpenyetatus.setAttribute("style", "width:60px;border:1px solid blue;");
            // avatarpenyetatus.setAttribute("class", "w3-left w3-circle w3-margin-right");
            //var avatarnya = json.records[i].avatareuser;
            //var avatargantiid = avatarnya.replace("id=", "class=");
            // --> -- > //divclass1.innerHTML += json.records[i].avatareuser; //.replace("avatarlogin", "avatarstatus" + i);
            //divclass1.innerHTML += avatargantiid;
            var idj = json.records[i].avatareuser;
            var idavatar = document.getElementById("id_tabel_user").rows[idj].cells[13].innerHTML;
            //  
            var avatark = document.createElement("img")
            avatark.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + idavatar);
            avatark.setAttribute("style", "width:60px;height:60px;border:1px solid red");
            avatark.setAttribute("class", "avatarlogin w3-circle");
            avatark.setAttribute("onclick", "potodia('" + idj + "')")
            divclass1.appendChild(avatark);
            divclass1.innerHTML += "<br/>";


            var tempatnamalah = document.createElement("div");
            tempatnamalah.setAttribute("class", "tempatidentitas");

            var spannama = document.createElement("span");
            spannama.setAttribute("style", "cursor:pointer")
            spannama.setAttribute("onclick", "tentangdia('" + json.records[i].profileuser + "')");
            spannama.innerHTML = json.records[i].namapenyetatus;

            tempatnamalah.appendChild(spannama);

            var spanwaktu = document.createElement("span");
            spanwaktu.setAttribute("class", "w3-right w3-opacity");
            spanwaktu.setAttribute("style", "font-size:10px");
            spanwaktu.innerHTML = waktulalu(json.records[i].Time_Stamp);

            tempatnamalah.appendChild(spanwaktu);

            var divspannamadanket = document.createElement("div");
            divspannamadanket.setAttribute("style", "border-top:1px solid grey")

            tempatnamalah.appendChild(divspannamadanket)

            var sumbertabel = document.getElementById("id_tabel_user");
            var baris = json.records[i].profileuser
            var guruapa = sumbertabel.rows[baris].cells[7].innerHTML;
            var kelasberapa = sumbertabel.rows[baris].cells[6].innerHTML;
            var sekolahmana = sumbertabel.rows[baris].cells[5].innerHTML;
            var spanket = document.createElement("span");
            spanket.innerHTML = sekolahmana + " - " + guruapa + " - " + kelasberapa;
            tempatnamalah.appendChild(spanket);
            divclass1.appendChild(tempatnamalah);

            divclass1.innerHTML += "<br/><br/>";

            var divclear = document.createElement("div");
            divclear.setAttribute("class", "w3-clear w3-border-bottom");

            divclass1.appendChild(divclear);

            var pstatus = document.createElement("p");
            pstatus.setAttribute("style", "text-align:justify");
            pstatus.innerHTML = json.records[i].inputstatusanjangsana;
            divclass1.innerHTML += "<div style='background-color: rgb(233, 230, 230);'>"

            var dibg = document.createElement("div");
            dibg.setAttribute("style", "background-color: rgb(233, 230, 230);padding:5px;border:1px solid white;border-radius:5px");
            dibg.appendChild(pstatus)
            divclass1.appendChild(dibg);
            //divclass1.innerHTML += "</div>"

            var divgambar = document.createElement("div");
            divgambar.setAttribute("class", "w3-row-padding");
            divgambar.setAttribute("style", "margin:0 -16px");

            var divtengah = document.createElement("div");
            divtengah.setAttribute("class", "w3-half");
            divtengah.innerHTML = json.records[i].mediapenyetayus;

            divgambar.appendChild(divtengah);
            divclass1.appendChild(divgambar);


            // divclass1.innerHTML += "Jumlahkolom =" + jumlahkolom;
            var divtempattombol = document.createElement("div")
            divtempattombol.setAttribute("style", "border-bottom:1px solid grey;border-top:1px solid grey;")

            var jumlahsuka = 0;
            var siapayangsuka = [];
            var sudahsuka = 0;
            var sayasedangaktif = document.getElementById("namagurux").innerHTML;
            for (s in json.records[i]) {
                if (s.indexOf("suka") > -1 && json.records[i][s] !== "")
                    jumlahsuka += 1;
                var namasuka = s;
                // siapayangsuka.push(namasuka)
                if (namasuka.indexOf("suka") > -1) {
                    // siapayangsuka += json.records[i][namasuka] + "\r\n"
                    siapayangsuka.push(json.records[i][namasuka]);
                    if (json.records[i][namasuka] == sayasedangaktif) {
                        sudahsuka += 1;
                    }
                }



            }
            var tekssuka = "";
            if (jumlahsuka > 0) {
                if (sudahsuka > 0) {
                    if (sudahsuka == 1 && jumlahsuka == 1) {
                        tekssuka = "Anda menyukai ini"
                    } else {
                        tekssuka = "Anda suka ini bersama " + (jumlahsuka - 1) + " guru lainnya"
                    }; //kode suka (" + sudahsuka + ")"
                } else {
                    tekssuka = jumlahsuka + " sahabat yang suka"; //+ sudahsuka
                }
            } else {
                tekssuka = ""
            }
            var kid = document.getElementById("keyidpendaftar").innerHTML
            var tkomen = document.createElement("button");
            tkomen.setAttribute("type", "button");
            tkomen.setAttribute("class", "w3-button  w3-col s6 w3-margin-bottom");

            if (sudahsuka == 0) {
                tkomen.setAttribute("onclick", "kirimsuka('" + i + "_" + jumlahsuka + "')")
            } else {
                tkomen.setAttribute("onclick", "alert('Anda telah menyukai sapaan ini.')")
            }

            tkomen.innerHTML = "<i class='fa fa-thumbs-up'></i> Suka";
            divtempattombol.appendChild(tkomen);

            var siapayangkomen = document.getElementById("keyidpendaftar").innerHTML //; tabel pada baris di html;
            var komenkeberapa = 0;
            for (cm in json.records[i]) {
                if (cm.indexOf("avatarkomen") > -1 && json.records[i][cm] !== "") {
                    komenkeberapa += 1
                }

            }
            var kodeidkomen = "komenin('" + (i + 2) + "_" + siapayangkomen + "_" + komenkeberapa + "')";
            // console.log(kodeidkomen);
            var lkomen = document.createElement("button");
            lkomen.setAttribute("type", "button");
            lkomen.setAttribute("class", "w3-button w3-col s6 w3-margin-bottom stoptimer");
            lkomen.setAttribute("id", "btnkomen" + i);
            lkomen.setAttribute("onclick", kodeidkomen);
            lkomen.innerHTML = "<i class='fa fa-comment'></i> Sapa";
            divtempattombol.appendChild(lkomen);


            divclass1.appendChild(divtempattombol);
            divtempattombol.innerHTML += "<span class='w3-clear'></span> "; //<hr style='border-bottom:1px solid blue'/>";


            var jumlahkolom = 0;
            //var innerkoment ="";
            var kolomkomentar = document.createElement("div")
            kolomkomentar.setAttribute("style", "border-bottom:1px solid grey;border-top:1px solid grey;padding:0px 0px 0px 10px");
            //kolomkomentar.setAttribute("class", "w3-left");
            kolomkomentar.innerHTML = "";
            var kolomteks = document.createElement("div");
            kolomteks.setAttribute("class", "tempatpengomentarnya")

            kolomteks.innerHTML = "";
            var angka;

            for (k in json.records[i]) {
                if (k.indexOf("avatarkomen") > -1 && json.records[i][k] !== "") {
                    jumlahkolom += 1
                    //cek id pengomentar
                    // var teks = json.records[i][k];
                    // var mulaidari = teks.indexOf("potodia(") + 8; // menghasilkan angka
                    // var sliceTek = teks.slice(mulaidari, teks.length - 4); // hasil = "potodia('14')">
                    angka = json.records[i][k] * 1;
                    // kolomkomentar.innerHTML += "<hr/>"
                    //kolomkomentar.innerHTML += json.records[i][k]; //+ "id nih orang adalah =" + angka;
                    //<img class="avatarlogin w3-circle" style="width:50px;height:50px;border:1px solid red;" src="https://drive.google.com/uc?export=view&id=1u6sB-N8M79FODkIsJ5Xn2CTQ8R4jrRkR" onclick="potodia(11)">
                    var idimg = document.getElementById("id_tabel_user").rows[angka].cells[13].innerHTML
                    var avkom = document.createElement("img");
                    avkom.setAttribute("class", "avatarlogin w3-circle");
                    avkom.setAttribute("style", "width:50px;height:50px;border:1px solid red");
                    avkom.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + idimg)
                    avkom.setAttribute("onclick", "potodia('" + angka + "')");
                    kolomkomentar.appendChild(avkom);
                    kolomkomentar.innerHTML += "";

                    //kolomkomentar.innerHTML += "<span class='w3-clear'></span>";
                    //var nodegambar = document.createTextNode(decodeURIComponent(json.records[i][k]));
                    //kolomkomentar.appendChild(nodegambar);

                }
                if (k.indexOf("siapakomen") > -1 && json.records[i][k] !== "") {
                    var spanw = document.createElement("b");
                    spanw.setAttribute("class", "w3-left");
                    spanw.setAttribute("style", "cursor:pointer");
                    spanw.setAttribute("title", "Tentang saya");
                    spanw.setAttribute("onclick", "tentangdia('" + angka + "')");
                    spanw.innerHTML = json.records[i][k]; // + " penyetatus ke-" + i;

                    //kolomkomentar.appendChild(spanw)
                    //kolomkomentar.innerHTML += "<hr/>";
                    kolomteks.innerHTML = "";
                    kolomteks.appendChild(spanw);
                    kolomkomentar.appendChild(kolomteks)
                }
                if (k.indexOf("waktukomen") > -1 && json.records[i][k] !== "") {
                    var spanw = document.createElement("span");
                    spanw.setAttribute("class", "w3-right w3-opacity");
                    spanw.setAttribute("style", "font-size:10px");
                    spanw.innerHTML = waktulalu(json.records[i][k]);
                    //kolomkomentar.appendChild(spanw)
                    kolomteks.appendChild(spanw);
                    kolomteks.innerHTML += "<hr style='border-bottom:1px dotted grey'/>";
                    kolomkomentar.appendChild(kolomteks)
                    //kolomkomentar.innerHTML += "<hr/>"
                }
                if (k.indexOf("isikomen") > -1 && json.records[i][k] !== "") {
                    //kolomkomentar.innerHTML += json.records[i][k];
                    kolomteks.innerHTML += json.records[i][k]
                    kolomkomentar.appendChild(kolomteks);
                }
                //  kolomkomentar.appendChild(kolomteks)
                //kolomkomentar.innerHTML += "<span class='w3-clear'></span>"
                //kolomteks.innerHTML = "";
            }

            //hitung dulu jumlah pengomentar dan tetapkan keynya;
            // var keynya = [];
            // for(k in json.records[i]){
            //     jumlah+=1
            //     keynya.push(k)
            // }



            if (jumlahkolom == 0 && jumlahsuka > 0) {
                var sukadankomen = document.createElement("div");
                sukadankomen.setAttribute("style", "border-bottom:1px solid red;border-top:1px solid red;padding:5px;text-align:center");

                var spansuka = document.createElement("span");
                var tekstitle = "";
                if (siapayangsuka.length > 3) {
                    for (x = 0; x < 3; x++) {
                        tekstitle += siapayangsuka[x] + "\r\n";
                    }
                    tekstitle += (siapayangsuka.length - 3) + " teman lainnya"
                } else {
                    tekstitle = siapayangsuka.join("\r\n")
                }

                //var arraysuka = siapayangsuka; //.join("\r\n");
                spansuka.setAttribute("title", tekstitle);
                spansuka.setAttribute("style", "cursor:pointer");
                var idund = siapayangsuka.join("_");
                spansuka.setAttribute("onclick", "siapayangsuka('" + idund + "')");


                spansuka.innerHTML = tekssuka;
                sukadankomen.appendChild(spansuka);
                //sukadankomen.innerHTML += ", dan " + jumlahkolom + " Komentar.";
                divclass1.appendChild(sukadankomen);
                divclass1.appendChild(kolomkomentar)
            } else {
                var sukadankomen = document.createElement("div");
                sukadankomen.setAttribute("style", "border-bottom:1px solid red;border-top:1px solid red;padding:5px;text-align:center");

                var spansuka = document.createElement("span");
                var tekstitle = "";
                if (siapayangsuka.length > 3) {
                    for (x = 0; x < 3; x++) {
                        tekstitle += siapayangsuka[x] + "\r\n";
                    }
                    tekstitle += (siapayangsuka.length - 3) + " teman lainnya"
                } else {
                    tekstitle = siapayangsuka.join("\r\n")
                }

                //var arraysuka = siapayangsuka; //.join("\r\n");
                spansuka.setAttribute("title", tekstitle);
                spansuka.setAttribute("style", "cursor:pointer");
                var idund = siapayangsuka.join("_");
                spansuka.setAttribute("onclick", "siapayangsuka('" + idund + "')");


                spansuka.innerHTML = tekssuka;
                sukadankomen.appendChild(spansuka);
                if (jumlahsuka == 0 && jumlahkolom > 0) {
                    sukadankomen.innerHTML += jumlahkolom + " Komentar."
                    divclass1.appendChild(sukadankomen);
                } else if (jumlahsuka > 0 && jumlahkolom > 0) {
                    sukadankomen.innerHTML += ", dan " + jumlahkolom + " Komentar.";
                    divclass1.appendChild(sukadankomen);

                } else {

                }
                divclass1.appendChild(kolomkomentar)
            }
            rekstatus.appendChild(divclass1);

            document.getElementById("teksinputstatus").innerHTML = "Sapa Sahabat Guru ...";
            document.getElementById("datauploadstatus").innerHTML = "";
            document.getElementById("mediastatus").innerHTML = "";


        }
    })
    clearInterval(timerAnjangsana);
    timerAnjangsana = setInterval(AnjangsanaUpdateterus, 5000)



}

teksinputstatus.addEventListener("click", function () {
    //alert("mau ngetik, saya matiin dulu timer updatenya");
    teksinputstatus.innerHTML = "";
    clearInterval(timerAnjangsana);
})
uploadpotostatus.addEventListener("click", function () {
    //alert("tambahkan fungsi lagi");
    clearInterval(timerAnjangsana)
})


//var tx = document.getElementById("teksinputstatus").innerHTML; //$(this).HTML();
// var kodechr = ""
// var dteks = document.getElementById("teksinputstatus");
// $("#teksinputstatus, .janganubah").keypress(function (e) {
//     //console.log(e.which)
//     // if (kodechr !== e.which) {
//     if (e.which !== "") {
//         clearInterval(timerAnjangsana)


//     }

// })


// dteks.addEventListener("keypress", function (e) {
//     kodechr = e.which;
//     if (kodechr !== "") {
//         console.log(timerAnjangsana)
//         clearInterval(timerAnjangsana)

//     }

// })
// var xTriggered = 0;
// $( "#target" ).keypress(function( event ) {
//   if ( event.which == 13 ) {
//      event.preventDefault();
//   }
//   xTriggered++;
//   var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
//   $.print( msg, "html" );
//   $.print( event );
// });

function AnjangsanaUpdateterus() {
    //panggil data pasang yang bersattus
    var url = script_url + "?action=lihatanjangsana"

    $.getJSON(url, function (json) {
        // var brsterakhir = json.records.length;
        // var teksjon = json.records[brsterakhir].status;
        // var tekssplit = teksjon.split("\r\n")
        var rekstatus = document.getElementById("recordstatus");
        rekstatus.innerHTML = ""
        // rekstatus.innerHTML = tekssplit.join("<br/>")
        //console.log(json)
        //for (i = 0; i < json.records.length; i++) {
        //for (var i = 10; i >= 0; i--) 
        for (i = json.records.length - 1; i >= 0; i--) {
            //var teksjon = json.records[i].inputstatusanjangsana;
            var divclass1 = document.createElement("div");
            divclass1.setAttribute("class", "w3-container w3-card w3-white w3-round w3-col m7 w3-margin w3-margin-bottom");
            divclass1.setAttribute("id", "statuske" + i);
            divclass1.innerHTML = "<br/>"
            // var avatarpenyetatus = document.createElement("img");
            // avatarpenyetatus.setAttribute("src", json.records[i].avatareuser);
            // avatarpenyetatus.setAttribute("alt", "poto_" + json.records[i].namapenyetatus);
            // avatarpenyetatus.setAttribute("style", "width:60px;border:1px solid blue;");
            // avatarpenyetatus.setAttribute("class", "w3-left w3-circle w3-margin-right");
            //var avatarnya = json.records[i].avatareuser;
            //var avatargantiid = avatarnya.replace("id=", "class=");
            //divclass1.innerHTML += json.records[i].avatareuser; //.replace("avatarlogin", "avatarstatus" + i);
            //divclass1.innerHTML += avatargantiid;
            var idj = json.records[i].avatareuser;
            var idavatar = document.getElementById("id_tabel_user").rows[idj].cells[13].innerHTML;
            //  
            var avatark = document.createElement("img")
            avatark.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + idavatar);
            avatark.setAttribute("style", "width:60px;height:60px;border:1px solid red");
            avatark.setAttribute("class", "avatarlogin w3-circle");
            avatark.setAttribute("onclick", "potodia('" + idj + "')")
            divclass1.appendChild(avatark);

            divclass1.innerHTML += "<br/>";


            var tempatnamalah = document.createElement("div");
            tempatnamalah.setAttribute("class", "tempatidentitas");

            var spannama = document.createElement("span");
            spannama.setAttribute("style", "cursor:pointer")
            spannama.setAttribute("onclick", "tentangdia('" + json.records[i].profileuser + "')");
            spannama.innerHTML = json.records[i].namapenyetatus;

            tempatnamalah.appendChild(spannama);

            var spanwaktu = document.createElement("span");
            spanwaktu.setAttribute("class", "w3-right w3-opacity");
            spanwaktu.setAttribute("style", "font-size:10px");
            spanwaktu.innerHTML = waktulalu(json.records[i].Time_Stamp);

            tempatnamalah.appendChild(spanwaktu);

            var divspannamadanket = document.createElement("div");
            divspannamadanket.setAttribute("style", "border-top:1px solid grey")

            tempatnamalah.appendChild(divspannamadanket)

            var sumbertabel = document.getElementById("id_tabel_user");
            var baris = json.records[i].profileuser
            var guruapa = sumbertabel.rows[baris].cells[7].innerHTML;
            var kelasberapa = sumbertabel.rows[baris].cells[6].innerHTML;
            var sekolahmana = sumbertabel.rows[baris].cells[5].innerHTML;
            var spanket = document.createElement("span");
            spanket.innerHTML = sekolahmana + " - " + guruapa + " - " + kelasberapa;
            tempatnamalah.appendChild(spanket);
            divclass1.appendChild(tempatnamalah);

            divclass1.innerHTML += "<br/><br/>";

            var divclear = document.createElement("div");
            divclear.setAttribute("class", "w3-clear w3-border-bottom");

            divclass1.appendChild(divclear);

            var pstatus = document.createElement("p");
            pstatus.setAttribute("style", "text-align:justify");
            pstatus.innerHTML = json.records[i].inputstatusanjangsana;
            divclass1.innerHTML += "<div style='background-color: rgb(233, 230, 230);'>"

            var dibg = document.createElement("div");
            dibg.setAttribute("style", "background-color: rgb(233, 230, 230);padding:5px;border:1px solid white;border-radius:5px");
            dibg.appendChild(pstatus)
            divclass1.appendChild(dibg);
            //divclass1.innerHTML += "</div>"

            var divgambar = document.createElement("div");
            divgambar.setAttribute("class", "w3-row-padding");
            divgambar.setAttribute("style", "margin:0 -16px");

            var divtengah = document.createElement("div");
            divtengah.setAttribute("class", "w3-half");
            divtengah.innerHTML = json.records[i].mediapenyetayus;

            divgambar.appendChild(divtengah);
            divclass1.appendChild(divgambar);


            // divclass1.innerHTML += "Jumlahkolom =" + jumlahkolom;
            var divtempattombol = document.createElement("div")
            divtempattombol.setAttribute("style", "border-bottom:1px solid grey;border-top:1px solid grey;")

            var jumlahsuka = 0;
            var siapayangsuka = [];
            var sudahsuka = 0;
            var sayasedangaktif = document.getElementById("namagurux").innerHTML;
            for (s in json.records[i]) {
                if (s.indexOf("suka") > -1 && json.records[i][s] !== "")
                    jumlahsuka += 1;
                var namasuka = s;
                // siapayangsuka.push(namasuka)
                if (namasuka.indexOf("suka") > -1) {
                    // siapayangsuka += json.records[i][namasuka] + "\r\n"
                    siapayangsuka.push(json.records[i][namasuka]);
                    if (json.records[i][namasuka] == sayasedangaktif) {
                        sudahsuka += 1;
                    }
                }



            }
            var tekssuka = "";
            if (jumlahsuka > 0) {
                if (sudahsuka > 0) {
                    if (sudahsuka == 1 && jumlahsuka == 1) {
                        tekssuka = "Anda menyukai ini"
                    } else {
                        tekssuka = "Anda suka ini bersama " + (jumlahsuka - 1) + " guru lainnya"
                    }; //kode suka (" + sudahsuka + ")"
                } else {
                    tekssuka = jumlahsuka + " sahabat yang suka"; //+ sudahsuka
                }
            } else {
                tekssuka = ""
            }
            var kid = document.getElementById("keyidpendaftar").innerHTML
            var tkomen = document.createElement("button");
            tkomen.setAttribute("type", "button");
            tkomen.setAttribute("class", "w3-button  w3-col s6 w3-margin-bottom");

            if (sudahsuka == 0) {
                tkomen.setAttribute("onclick", "kirimsuka('" + i + "_" + jumlahsuka + "')")
            } else {
                tkomen.setAttribute("onclick", "alert('Anda telah menyukai sapaan ini.')")
            }

            tkomen.innerHTML = "<i class='fa fa-thumbs-up'></i> Suka";
            divtempattombol.appendChild(tkomen);

            var siapayangkomen = document.getElementById("keyidpendaftar").innerHTML //; tabel pada baris di html;
            var komenkeberapa = 0;
            for (cm in json.records[i]) {
                if (cm.indexOf("avatarkomen") > -1 && json.records[i][cm] !== "") {
                    komenkeberapa += 1
                }

            }
            var kodeidkomen = "komenin('" + (i + 2) + "_" + siapayangkomen + "_" + komenkeberapa + "')";
            // console.log(kodeidkomen);
            var lkomen = document.createElement("button");
            lkomen.setAttribute("type", "button");
            lkomen.setAttribute("class", "w3-button   w3-col s6 w3-margin-bottom stoptimer");
            lkomen.setAttribute("id", "btnkomen" + i);
            lkomen.setAttribute("onclick", kodeidkomen);
            lkomen.innerHTML = "<i class='fa fa-comment'></i> Sapa";
            divtempattombol.appendChild(lkomen);


            divclass1.appendChild(divtempattombol);
            divtempattombol.innerHTML += "<span class='w3-clear'></span> "; //<hr style='border-bottom:1px solid blue'/>";

            var jumlahkolom = 0;
            //var innerkoment ="";
            var jumlahkolom = 0;
            //var innerkoment ="";
            var kolomkomentar = document.createElement("div")
            kolomkomentar.setAttribute("style", "border-bottom:1px solid grey;border-top:1px solid grey;padding:0px 0px 0px 10px");
            //kolomkomentar.setAttribute("class", "w3-left");
            kolomkomentar.innerHTML = "";
            var kolomteks = document.createElement("div");
            kolomteks.setAttribute("class", "tempatpengomentarnya");


            kolomteks.innerHTML = "";
            var angka;

            for (k in json.records[i]) {
                if (k.indexOf("avatarkomen") > -1 && json.records[i][k] !== "") {
                    jumlahkolom += 1
                    //cek id pengomentar
                    // var teks = json.records[i][k];
                    // var mulaidari = teks.indexOf("potodia(") + 8; // menghasilkan angka
                    // var sliceTek = teks.slice(mulaidari, teks.length - 4); // hasil = "potodia('14')">
                    // angka = parseInt(sliceTek);
                    angka = json.records[i][k] * 1;
                    // kolomkomentar.innerHTML += "<hr/>"
                    //kolomkomentar.innerHTML += json.records[i][k]; //+ "id nih orang adalah =" + angka;
                    //<img class="avatarlogin w3-circle" style="width:50px;height:50px;border:1px solid red;" src="https://drive.google.com/uc?export=view&id=1u6sB-N8M79FODkIsJ5Xn2CTQ8R4jrRkR" onclick="potodia(11)">
                    var idimg = document.getElementById("id_tabel_user").rows[angka].cells[13].innerHTML
                    var avkom = document.createElement("img");
                    avkom.setAttribute("class", "avatarlogin w3-circle");
                    avkom.setAttribute("style", "width:50px;height:50px;border:1px solid red");
                    avkom.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + idimg)
                    avkom.setAttribute("onclick", "potodia('" + angka + "')");
                    kolomkomentar.appendChild(avkom);
                    kolomkomentar.innerHTML += "";

                    //kolomkomentar.innerHTML += "<span class='w3-clear'></span>";
                    //var nodegambar = document.createTextNode(decodeURIComponent(json.records[i][k]));
                    //kolomkomentar.appendChild(nodegambar);

                }
                if (k.indexOf("siapakomen") > -1 && json.records[i][k] !== "") {
                    var spanw = document.createElement("b");
                    spanw.setAttribute("class", "w3-left");
                    spanw.setAttribute("style", "cursor:pointer");
                    spanw.setAttribute("title", "Tentang saya");
                    spanw.setAttribute("onclick", "tentangdia('" + angka + "')");
                    spanw.innerHTML = json.records[i][k]; // + " penyetatus ke-" + i;

                    //kolomkomentar.appendChild(spanw)
                    //kolomkomentar.innerHTML += "<hr/>";
                    kolomteks.innerHTML = "";
                    kolomteks.appendChild(spanw);
                    kolomkomentar.appendChild(kolomteks)
                }
                if (k.indexOf("waktukomen") > -1 && json.records[i][k] !== "") {
                    var spanw = document.createElement("span");
                    spanw.setAttribute("class", "w3-right w3-opacity");
                    spanw.setAttribute("style", "font-size:10px");
                    spanw.innerHTML = waktulalu(json.records[i][k]);
                    //kolomkomentar.appendChild(spanw)
                    kolomteks.appendChild(spanw);
                    kolomteks.innerHTML += "<hr style='border-bottom:1px dotted grey'/>";
                    kolomkomentar.appendChild(kolomteks)
                    //kolomkomentar.innerHTML += "<hr/>"
                }
                if (k.indexOf("isikomen") > -1 && json.records[i][k] !== "") {
                    //kolomkomentar.innerHTML += json.records[i][k];

                    kolomteks.innerHTML += json.records[i][k]; //.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                    kolomkomentar.appendChild(kolomteks);
                }
                //  kolomkomentar.appendChild(kolomteks)
                //kolomkomentar.innerHTML += "<span class='w3-clear'></span>"
                //kolomteks.innerHTML = "";
            }
            //hitung dulu jumlah pengomentar dan tetapkan keynya;
            // var keynya = [];
            // for(k in json.records[i]){
            //     jumlah+=1
            //     keynya.push(k)
            // }



            if (jumlahkolom == 0 && jumlahsuka > 0) {
                var sukadankomen = document.createElement("div");
                sukadankomen.setAttribute("style", "border-bottom:1px solid red;border-top:1px solid red;padding:5px;text-align:center");

                var spansuka = document.createElement("span");
                var tekstitle = "";
                if (siapayangsuka.length > 3) {
                    for (x = 0; x < 3; x++) {
                        tekstitle += siapayangsuka[x] + "\r\n";
                    }
                    tekstitle += (siapayangsuka.length - 3) + " teman lainnya"
                } else {
                    tekstitle = siapayangsuka.join("\r\n")
                }

                //var arraysuka = siapayangsuka; //.join("\r\n");
                spansuka.setAttribute("title", tekstitle);
                spansuka.setAttribute("style", "cursor:pointer");
                var idund = siapayangsuka.join("_");
                spansuka.setAttribute("onclick", "siapayangsuka('" + idund + "')");


                spansuka.innerHTML = tekssuka;
                sukadankomen.appendChild(spansuka);
                //sukadankomen.innerHTML += ", dan " + jumlahkolom + " Komentar.";
                divclass1.appendChild(sukadankomen);
                divclass1.appendChild(kolomkomentar)
            } else {
                var sukadankomen = document.createElement("div");
                sukadankomen.setAttribute("style", "border-bottom:1px solid red;border-top:1px solid red;padding:5px;text-align:center");

                var spansuka = document.createElement("span");
                var tekstitle = "";
                if (siapayangsuka.length > 3) {
                    for (x = 0; x < 3; x++) {
                        tekstitle += siapayangsuka[x] + "\r\n";
                    }
                    tekstitle += (siapayangsuka.length - 3) + " teman lainnya"
                } else {
                    tekstitle = siapayangsuka.join("\r\n")
                }

                //var arraysuka = siapayangsuka; //.join("\r\n");
                spansuka.setAttribute("title", tekstitle);
                spansuka.setAttribute("style", "cursor:pointer");
                var idund = siapayangsuka.join("_");
                spansuka.setAttribute("onclick", "siapayangsuka('" + idund + "')");


                spansuka.innerHTML = tekssuka;
                sukadankomen.appendChild(spansuka);
                if (jumlahsuka == 0 && jumlahkolom > 0) {
                    sukadankomen.innerHTML += jumlahkolom + " Komentar."
                    divclass1.appendChild(sukadankomen);
                } else if (jumlahsuka > 0 && jumlahkolom > 0) {
                    sukadankomen.innerHTML += ", dan " + jumlahkolom + " Komentar.";
                    divclass1.appendChild(sukadankomen);

                } else {

                }
                divclass1.appendChild(kolomkomentar)
            }
            rekstatus.appendChild(divclass1);

            // document.getElementById("teksinputstatus").innerHTML = "Sapa Sahabat Guru ...";
            // document.getElementById("datauploadstatus").innerHTML = "";
            // document.getElementById("mediastatus").innerHTML = "";


        }
    })



    // $("#teksinputstatus, .janganubah")

}

function waktulalu(t) {
    var hasil;

    const x = new Date(t).getTime();
    const d = new Date().getTime();
    const selisih = d - x;
    //console.log(selisih)
    var jumlahhari = 24 * 60 * 60 * 1000;
    var jumlahjam = 60 * 60 * 1000;
    var jumlahmenit = 60 * 1000;
    var jumlahdetik = 1000;

    var menitlewat = Math.floor(selisih % jumlahjam / (jumlahmenit));
    var jamlewat = Math.floor(selisih % jumlahhari / (jumlahjam));
    var harilewat = Math.floor(selisih / jumlahhari);
    if (selisih > jumlahhari) {
        hasil = harilewat + " hari yang lalu"
    } else if (selisih > jumlahjam) {
        hasil = jamlewat + " jam yang lalu"
    } else if (selisih > jumlahmenit) {
        hasil = menitlewat + " menit yang lalu"
    } else if (selisih > jumlahdetik) {

        hasil = "Baru Saja"
    } else {
        hasil = " kenangan"
    }
    return hasil
}

function tomboluploadpotostatus() {
    clearInterval(timerAnjangsana);
    var emailnya = document.getElementById("keyemail").innerHTML;
    var item = document.getElementById("uploadpotostatus").files[0];
    var oFReader = new FileReader();
    oFReader.readAsDataURL(item);

    oFReader.onload = function (oFREvent) {
        var divmediastatus = document.getElementById("mediastatus");
        var namapengupload = document.getElementById("namagurux").innerHTML;
        // var divimg = document.createElement("div");
        // divimg.setAttribute("class", "w3-half")
        // var crimg = document.createElement("img");
        // crimg.setAttribute("class", "w3-margin-bottom w3-col w3-center");
        // crimg.setAttribute("src", oFREvent.target.result);
        // // crimg.setAttribute("style", "width:100%");
        // divimg.appendChild(crimg);
        // divmediastatus.appendChild(divimg);


        //tapi kita ingin mengecilkan ukurannya menjadi width = 150 px;
        var img = new Image();
        img.src = oFREvent.target.result; //result is base64-encoded Data URI
        //img.name = oFREvent.target.name; //set name (optional)
        img.size = oFREvent.target.size; //set size (optional)

        img.onload = function (el) {
            var canv = document.createElement("canvas");
            var pembagi = 300 / el.target.width;
            canv.width = 300;
            canv.height = el.target.height * pembagi;
            var ctx = canv.getContext("2d");
            ctx.drawImage(el.target, 0, 0, canv.width, canv.height);
            var srcEncode = ctx.canvas.toDataURL(el.target, "image/jpg", 0);
            datauploadstatus.innerHTML = "<i class='fa fa-spin fa-spinner'></i> sedang proses...";
            var divmediastatus = document.getElementById("mediastatus");
            // var namapengupload = document.getElementById("namagurux").innerHTML;
            // var divimg = document.createElement("div");
            // divimg.setAttribute("class", "w3-half")
            // var crimg = document.createElement("img");
            // crimg.setAttribute("class", "w3-margin-bottom");
            // crimg.setAttribute("src", srcEncode);
            // crimg.setAttribute("style", "width:100%");
            // divimg.appendChild(crimg);
            // divmediastatus.appendChild(divimg);

            var database64 = srcEncode.replace(/^.*,/, "");
            var mimetype = srcEncode.match(/^.*(?=;)/)[0];
            var html = "email=" + encodeURIComponent(emailnya)
            html += "&data=" + encodeURIComponent(database64);
            html += "&mimetype=" + encodeURIComponent(mimetype);
            html += "&namafile=" + encodeURIComponent(namapengupload);
            //kirim ke serverdulu
            var link = script_url + "?action=uploadmediastatus";
            var xhr = new XMLHttpRequest();
            xhr.open("POST", link, true)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function () {

                if (xhr.readyState === 4 && xhr.status === 200) {
                    datauploadstatus.innerHTML = "Poto siap menyapa ";
                    //document.getElementById("mediapenyetayus").value = JSON.parse(xhr.responseText).result;
                    var divimage = JSON.parse(xhr.responseText).result
                    // var divimg = document.createElement("div");
                    // divimg.setAttribute("class", "w3-half")
                    // var crimg = document.createElement("img");
                    // crimg.setAttribute("class", "w3-margin-bottom w3-col w3-center");
                    // crimg.setAttribute("src", srcEncode);
                    // // crimg.setAttribute("style", "width:100%");
                    // divimg.appendChild(crimg);
                    divmediastatus.innerHTML = divimage;

                    //         prosesloadingdaftar.innerHTML = "Terima kasih, telah mendaftar. Mohon cek email Anda dan verifikasikan bahwa ini benar-benar Anda. Hal ini bertujuan untuk mengirimkan file ke Google Drive Anda. <br/> pengen cek:" + xhr.responseText;
                    //         document.getElementById("tutupeksekusitambahuser").removeAttribute("onclick");
                    //         document.getElementById("tutupeksekusitambahuser").setAttribute("onclick", "reloaddatauser()");

                }
            };
            // // url encode form data for sending as post data

            xhr.send(html);
            // document.getElementById("datauploadstatus").value = html;
            document.getElementById("labelmediastatus").innerHTML = "<i class='fa fa-times'></i> Hapus Media"
            document.getElementById("labelmediastatus").removeAttribute("for");
            document.getElementById("labelmediastatus").setAttribute("for", "tombolhapusmedia")

        }

    }


}


function tombolhapusmedia() {
    document.getElementById("mediastatus").innerHTML = "";

    //for="uploadpotostatus"><i class="fa fa-camera"></i> Unggah    Gambar
    document.getElementById("labelmediastatus").innerHTML = "<i class='fa fa-camera'></i>  Unggah Gambar";
    document.getElementById("labelmediastatus").removeAttribute("for");
    document.getElementById("labelmediastatus").setAttribute("for", "uploadpotostatus");
}

function pasangstatusanjangsana() {
    //alert("dalam tahap pengembangan ... sabar ya ....")
    generatestatusanjangsana();
    var dataku = $('#tempbikinstatus').serialize();
    //console.log(dataku)
    var link = script_url + "?action=pasangstatus";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", link, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            recordstatus.innerHTML += "<h1>Berhasil masuk</h1> " + JSON.parse(xhr.responseText).result;
            //         prosesloadingdaftar.innerHTML = "Terima kasih, telah mendaftar. Mohon cek email Anda dan verifikasikan bahwa ini benar-benar Anda. Hal ini bertujuan untuk mengirimkan file ke Google Drive Anda. <br/> pengen cek:" + xhr.responseText;
            //         document.getElementById("tutupeksekusitambahuser").removeAttribute("onclick");
            //         document.getElementById("tutupeksekusitambahuser").setAttribute("onclick", "reloaddatauser()");
            Anjangsana();
            inputstatusanjangsana.innerHTML = "";
            mediapenyetayus.innerHTML = "";
            document.getElementById("labelmediastatus").removeAttribute("for");
            document.getElementById("labelmediastatus").setAttribute("for", "uploadpotostatus");
        }
    };
    // // url encode form data for sending as post data

    xhr.send(dataku);



}

function generatestatusanjangsana() {
    //var form = document.getElementById("tempbikinstatus");
    var teks1 = document.getElementById("avatareuser");
    var teks2 = document.getElementById("inputstatusanjangsana");
    var teks3 = document.getElementById("profileuser");
    var teks4 = document.getElementById("namapenyetatus");
    var teks5 = document.getElementById("mediapenyetayus");
    var sumbertabeluser = document.getElementById("id_tabel_user");
    var idsedanglogin = (document.getElementById("keyidpendaftar").innerHTML * 1) - 1;
    var namauser = sumbertabeluser.rows[idsedanglogin].cells[8].innerHTML;
    var idgambar = sumbertabeluser.rows[idsedanglogin].cells[13].innerHTML;
    var sekolahid = sumbertabeluser.rows[idsedanglogin].cells[5].innerHTML;
    var gurugmpkelas = sumbertabeluser.rows[idsedanglogin].cells[7].innerHTML;
    var nowauser = sumbertabeluser.rows[idsedanglogin].cells[20].innerHTML;
    // var avatartanya = document.getElementById("avatarlogin").outerHTML;
    // var avatartanpaid = avatartanya.replace('id="avatarlogin"', '');
    // teks1.value = document.getElementById("avatarlogin").outerHTML;
    teks1.value = document.getElementById("keyidpendaftar").innerHTML - 1;
    // teks1.value = avatartanpaid;
    teks2.textContent = document.getElementById("teksinputstatus").innerHTML;

    var kontent = "<table class='versi-table'><tr><td colspan='2'><img src='https://drive.google.com/uc?export=view&id=" + idgambar + "' style='width:50%;border:1px solid blue;border-radius:15px;margin:0px auto'/>";
    kontent += "</td></tr><tr><td>Nama</td><td>" + namauser + "</td></tr>";
    kontent += "<tr><td>Sebagai</td><td>" + gurugmpkelas + "</td></tr>";
    kontent += "<tr><td>Tempat Bertugas</td><td>" + sekolahid + "</td></tr>";
    kontent += "<tr><td>Kirim Pesan via Whatsapp</td><td>" + nowauser + "</td></tr></table>";

    teks3.value = idsedanglogin; // kontent; //document.getElementById("profileuser").innerHTML;
    teks4.value = namauser; //document.getElementById("namaAnjangsana").innerHTML;
    teks5.value = document.getElementById("mediastatus").innerHTML;
}

function komenin(id) {
    //console.log(timerAnjangsana);
    // clearInterval(timerAnjangsana);

    //var kodeidkomen = "komenin('" + (i + 2) + "_" + siapayangkomen + "_" + komenkeberapa + "')";
    var idx = id.split("_");
    var brs = idx[0]; // baris di SS Tab Anjangsana;
    var idkomentator = idx[1]; // baris id di Tab User (id Komentator)
    var statuske = idx[0] - 2;
    var tabelsumber = document.getElementById("id_tabel_user");
    //var kontavatar =  
    //<img id="avatarlogin" class="w3-circle" style="width:60px;height:60px;border:1px solid red;" src="https://drive.google.com/uc?export=view&amp;id=1llin2wBZta038hGrsmEB6L7hmLT_2X1R" onclick="potodia('9')">
    // document.getElementById('modalpetunjuk').style.display = 'block';
    // document.getElementById("judulpetunjuk").innerHTML = "Komentarin";
    // document.getElementById("isipetunjuk").innerHTML = document.getElementById("statuske" + statuske).innerHTML;

    //buat div tekx
    //<div contenteditable="true" id="teksinputstatus" class="w3-border-top w3-padding w3-white">
    var divsemang = document.getElementById("statuske" + statuske);

    var tempatkomen = document.querySelector('#btnkomen' + statuske); //document.getElementById("statuske" + statuske);

    //tempatkomen.after(divkomenbaru);
    //if(tempatkomen.hasOwnPropertiy("#btnkomen"+statuske)){alert()}
    var divbapa = "#statuske" + statuske;
    var divanak = "#tekskomenbaru" + statuske;
    var elemencar = $(divanak).parents(divbapa).length;

    if (elemencar == 0) {
        // clearInterval(timerAnjangsana);
        //$(".child-element").parents("#main-nav").length == 1 

        var divkomenbaru = document.createElement("div");
        divkomenbaru.setAttribute("contenteditable", "true");
        divkomenbaru.setAttribute("id", "tekskomenbaru" + statuske);
        divkomenbaru.setAttribute("class", "janganubah");
        divkomenbaru.innerHTML = " ...";
        divkomenbaru.setAttribute("class", "w3-border-top w3-padding w3-white w3-clear");
        var hr = document.createElement("hr")
        hr.setAttribute("class", "w3-clear");
        hr.setAttribute("id", "hr" + statuske);
        var tombol = document.createElement("button");
        tombol.setAttribute("class", "w3-button w3-col s7 w3-theme-d2 w3-right w3-margin-bottom");
        tombol.setAttribute("id", "kirimkomentar");
        tombol.innerHTML = "Kirim";
        tombol.setAttribute("onclick", "kirimkomentar('" + id + "')");

        tempatkomen.after(tombol);
        tempatkomen.after(divkomenbaru);

        tempatkomen.after(hr);
        tempatkomen.innerHTML = "<i class='fa fa-comment'></i> Batal Menyapa";
        tempatkomen.setAttribute("class", "w3-button   w3-col s6 w3-margin-bottom mulaitimer");
        clearInterval(timerAnjangsana);
    } else {
        //clearInterval(timerAnjangsana);
        var dom = document.getElementById("tekskomenbaru" + statuske);
        var domhr = document.getElementById("hr" + statuske);
        var domtombol = document.getElementById("kirimkomentar");
        dom.remove();
        domhr.remove();
        domtombol.remove();
        tempatkomen.innerHTML = "<i class='fa fa-comment'></i> Sapa";
        tempatkomen.setAttribute("class", "w3-button   w3-col s6 w3-margin-bottom stoptimer");
        timerAnjangsana = setInterval(AnjangsanaUpdateterus, 5000)
    }
    // console.log(timerAnjangsana);
    //clearInterval(timerAnjangsana);
}

function kirimkomentar(id) {
    //clearInterval(timerAnjangsana);
    var kodeid = id.split("_");
    var key1 = "avatarkomen" + kodeid[2];
    var key2 = "siapakomen" + kodeid[2];
    //var kol = (((kodeid[2] * 1) + 2) * 4); // kode ini sebelum melacak jumlah suka
    var kol = ((kodeid[2] * 5) + 8); //
    var yangpunyastatus = "brs";
    var key3 = "waktukomen" + kodeid[2];
    var key4 = "isikomen" + kodeid[2];
    var idkomentator = (kodeid[1] * 1) - 1;
    var barisss = kodeid[0];
    var d = new Date();
    var dx = d.toLocaleDateString();
    var idtombolstatus = barisss - 2;
    var namasiapakomen = document.getElementById("namagurux").innerHTML;
    var scrgambarkomentator = document.getElementById("id_tabel_user").rows[idkomentator].cells[13].innerHTML;
    ////<img id="avatarlogin" class="w3-circle" style="width:60px;height:60px;border:1px solid red;" src="https://drive.google.com/uc?export=view&amp;id=1llin2wBZta038hGrsmEB6L7hmLT_2X1R" onclick="potodia('9')">    
    var htmlavatarkomen = '<img class="avatarlogin w3-circle" style="width:50px;height:50px;border:1px solid red;" src="https://drive.google.com/uc?export=view&id=' + scrgambarkomentator + '" onclick="potodia(' + parseInt(idkomentator) + ')"> ';
    // var htmlavatarkomen = document.createElement("img");
    // htmlavatarkomen.setAttribute("class", "avatarlogin w3-circle");
    // htmlavatarkomen.setAttribute("style", "width:50px;border:1px solid red");
    // htmlavatarkomen.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + scrgambarkomentator);
    // htmlavatarkomen.setAttribute("onclick", "potodia(" + idkomentator + ")");
    //var htmlavatarkomen = document.getElementById("avatarlogin").outerHTML;

    var idavatar = document.getElementById("keyidpendaftar").innerHTML - 1;
    var isikomen = document.getElementById("tekskomenbaru" + idtombolstatus).innerHTML
    var html = yangpunyastatus + "=" + barisss;
    html += "&col=" + encodeURIComponent(kol);
    //html += "&" + key1 + "=" + encodeURIComponent(htmlavatarkomen);
    html += "&" + key1 + "=" + encodeURIComponent(idavatar);
    html += "&" + key2 + "=" + encodeURIComponent(namasiapakomen);
    html += "&" + key3 + "=" + encodeURIComponent(d);
    html += "&" + key4 + "=" + encodeURIComponent(isikomen);
    //console.log(html)

    // var html = yangpunyastatus+"=" + kodeid[0];//+ encodeURIComponent(emailnya); // baris status di SS
    // html += "&=" + encodeURIComponent(database64);
    // html += "&mimetype=" + encodeURIComponent(mimetype);
    // html += "&namafile=" + encodeURIComponent(namapengupload);
    // //kirim ke serverdulu
    var link = script_url + "?action=komeninorang";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", link, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            // datauploadstatus.innerHTML = "Poto siap menyapa ";
            //document.getElementById("mediapenyetayus").value = JSON.parse(xhr.responseText).result;

            // var divimage = JSON.parse(xhr.responseText).result
            recordstatus.innerHTML += "<h1>Berhasil masuk</h1> " + JSON.parse(xhr.responseText).result;
            //         prosesloadingdaftar.innerHTML = "Terima kasih, telah mendaftar. Mohon cek email Anda dan verifikasikan bahwa ini benar-benar Anda. Hal ini bertujuan untuk mengirimkan file ke Google Drive Anda. <br/> pengen cek:" + xhr.responseText;
            //         document.getElementById("tutupeksekusitambahuser").removeAttribute("onclick");
            //         document.getElementById("tutupeksekusitambahuser").setAttribute("onclick", "reloaddatauser()");
            Anjangsana();

            //         prosesloadingdaftar.innerHTML = "Terima kasih, telah mendaftar. Mohon cek email Anda dan verifikasikan bahwa ini benar-benar Anda. Hal ini bertujuan untuk mengirimkan file ke Google Drive Anda. <br/> pengen cek:" + xhr.responseText;
            //         document.getElementById("tutupeksekusitambahuser").removeAttribute("onclick");
            //         document.getElementById("tutupeksekusitambahuser").setAttribute("onclick", "reloaddatauser()");

        }
    };
    // // url encode form data for sending as post data

    xhr.send(html);
}

function tentangdiatabel(id) {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Tentang Sahabat";
    document.getElementById("isipetunjuk").innerHTML = id
}

function siapayangsuka(id) {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Sahabat Menyukai ini";
    var idx = id.split("_")
    document.getElementById("isipetunjuk").innerHTML = idx.join("<br/>");
}

function tentangdia(id) {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Tentang Sahabat";
    var sumbertabeluser = document.getElementById("id_tabel_user");
    var idsedanglogin = id; // (document.getElementById("keyidpendaftar").innerHTML * 1) - 1;
    var namauser = sumbertabeluser.rows[idsedanglogin].cells[8].innerHTML;
    var idgambar = sumbertabeluser.rows[idsedanglogin].cells[13].innerHTML;
    var sekolahid = sumbertabeluser.rows[idsedanglogin].cells[5].innerHTML;
    var gurugmpkelas = sumbertabeluser.rows[idsedanglogin].cells[7].innerHTML;
    var nowauser = sumbertabeluser.rows[idsedanglogin].cells[20].innerHTML;

    var kontent = "<table class='versi-table'><tr><td colspan='2'><img src='https://drive.google.com/uc?export=view&id=" + idgambar + "' style='width:98%;border:1px solid blue;border-radius:15px;margin:0px auto'/>";
    kontent += "</td></tr><tr><td>Nama</td><td>" + namauser + "</td></tr>";
    kontent += "<tr><td>Sebagai</td><td>" + gurugmpkelas + "</td></tr>";
    kontent += "<tr><td>Tempat Bertugas</td><td>" + sekolahid + "</td></tr>";
    kontent += "<tr><td>Kirim Pesan via Whatsapp</td><td>" + nowauser + "</td></tr></table>";
    document.getElementById("isipetunjuk").innerHTML = kontent; //document.getElementById("petunjukuploadmateri").outerHTML;

}

function kirimsuka(id) {
    var splitid = id.split("_")
    //alert("baris SS Anjangsana tambah 2 " + splitid[0] + ", baris SS user asli" + splitid[1] + " dan ini kode kolom ");
    // splitid[0] diambil dari keyidpendaftar, merujuk baris pada SS, dan didapat dari JSON
    // splitid[0], misalnya bernilai (x)= 1.  
    //      artinya baris pada SS tab User bernilai x + 2 =  3;
    //      nilai splitid[0] ini didapat dari JSON yang mengambil data dari SS tab Anjangsana
    //      menginformasikan tentang baris status.
    //      Jadi, nilai yang dikirim adalah : x + 2
    var brs = ((splitid[0] * 1) + 2);
    // splitid[1], misalnya bernilai (x) = 0;
    //      artinya, kolom terakhir yang terdeteksi menyukai status ini.
    //      user yang sudah menyukai, tidak terkena fungsi ini. Fungsi sudah lain. Fokus yang mengirim suka aja
    //      nilai ini digunakan untuk menentukan kolom mengisi SS Anjangsana dengan kolom tertentu didasar aritmatika
    //      nilai 0 = 12, nilai 1 = 17; nilai 2 = 22, dst.
    //      sehingga formula ini adalah = x.5 + 12;
    var kol = ((splitid[1] * 5) + 12);
    var namayangsuka = document.getElementById("namagurux").innerHTML;
    var data = "brs=" + brs;
    data += "&kol=" + kol;
    data += "&nama=" + encodeURIComponent(namayangsuka);
    // kirim dengan metode pos dan request XMLHTTPREQUEST;
    var link = script_url + "?action=kirimsuka"
    var xhr = new XMLHttpRequest()
    xhr.open("POST", link, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            // datauploadstatus.innerHTML = "Poto siap menyapa ";
            //document.getElementById("mediapenyetayus").value = JSON.parse(xhr.responseText).result;

            // var divimage = JSON.parse(xhr.responseText).result
            recordstatus.innerHTML += "<h1>Berhasil Suka</h1> " + JSON.parse(xhr.responseText).result;
            //         prosesloadingdaftar.innerHTML = "Terima kasih, telah mendaftar. Mohon cek email Anda dan verifikasikan bahwa ini benar-benar Anda. Hal ini bertujuan untuk mengirimkan file ke Google Drive Anda. <br/> pengen cek:" + xhr.responseText;
            //         document.getElementById("tutupeksekusitambahuser").removeAttribute("onclick");
            //         document.getElementById("tutupeksekusitambahuser").setAttribute("onclick", "reloaddatauser()");
            //            Anjangsana();

            //         prosesloadingdaftar.innerHTML = "Terima kasih, telah mendaftar. Mohon cek email Anda dan verifikasikan bahwa ini benar-benar Anda. Hal ini bertujuan untuk mengirimkan file ke Google Drive Anda. <br/> pengen cek:" + xhr.responseText;
            //         document.getElementById("tutupeksekusitambahuser").removeAttribute("onclick");
            //         document.getElementById("tutupeksekusitambahuser").setAttribute("onclick", "reloaddatauser()");

        }
    };
    // // url encode form data for sending as post data

    xhr.send(data);



}

function potodia(id) {
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "Tentang Sahabat";
    var sumbertabeluser = document.getElementById("id_tabel_user");
    var idsedanglogin = id; // (document.getElementById("keyidpendaftar").innerHTML * 1) - 1;
    var idgambar = sumbertabeluser.rows[idsedanglogin].cells[13].innerHTML;

    var kontent = "<img src='https://drive.google.com/uc?export=view&id=" + idgambar + "' style='width:98%;border:1px solid blue;border-radius:15px;margin:0px auto'/>";
    document.getElementById("isipetunjuk").innerHTML = kontent; //document.getElementById("petunjukuploadmateri").outerHTML;

}

function editprofildata() {
    document.getElementById("modallogin").style.display = "none";
    modaledituser.style.display = "block";
    w3_close();

    var kolomheader = document.getElementById("id_tabel_user").rows[0].cells;

    var header = []
    for (a = 0; a < kolomheader.length; a++) {
        header.push(kolomheader[a].innerHTML)
    }

    var refrensibaris = (document.getElementById("keyidpendaftar").innerHTML * 1) - 1;

    var datapengedit = document.getElementById("id_tabel_user").rows[refrensibaris].cells;
    var datanya = []
    for (b = 0; b < datapengedit.length; b++) {
        datanya.push(datapengedit[b].innerHTML)
    }

    var elementform = document.getElementById("formedituser").elements;
    for (c = 0; c < header.length; c++) {
        //document.edituser[name = header[c]].value = c;;

        //isipetunjuk.innerHTML += header[c] + " = " + datanya[c] + "<br/>"

    }
    //koleksinama
    for (x = 0; x < elementform.length; x++) {
        //for (c = 0; c < header.length; c++) {
        if (elementform[x].type !== "file") {
            for (d = 0; d < header.length; d++) {
                if (elementform[x].name == header[d]) {
                    if (elementform[x].name == "password") {
                        elementform[x].value = window.atob(datanya[d])
                    } else {
                        elementform[x].value = datanya[d]
                    };

                }
            }
        }
        //}
    }
    document.getElementById("avatarkuedit").removeAttribute("src");
    document.getElementById("avatarkuedit").setAttribute("src", "https://drive.google.com/uc?export=view&id=" + datanya[13]);
    var sumberdataanak = document.getElementById("myTable").rows;
    prev_upload_datasiswaedit.innerHTML = "";
    if (document.getElementById("myTable") !== null) {
        for (r = 1; r < sumberdataanak.length; r++) {
            var op = document.createElement("option");
            op.setAttribute("value", sumberdataanak[r].cells[5].innerHTML);
            op.innerHTML = sumberdataanak[r].cells[5].innerHTML;
            prev_upload_datasiswaedit.appendChild(op)
        }
    }


}

function ungg_avataredit() {
    var item = document.getElementById("upl_avataredit").files[0]
    var oFReader = new FileReader();
    oFReader.readAsDataURL(item);

    oFReader.onload = function (oFREvent) {
        document.getElementById("avatarkuedit").src = oFREvent.target.result;
        //tapi kita ingin mengecilkan ukurannya menjadi width = 150 px;

        //document.getElementById("idpoto_potoguru").value = srcEncode; //oFREvent.target.result;
        var tempatidpotoguru = document.getElementById("idpoto_potoguruedit")
        tempatidpotoguru.innerHTML = "";
        // buat generate input
        var inputbase64 = document.createElement("input");
        inputbase64.setAttribute("name", "data");
        inputbase64.value = oFREvent.target.result.replace(/^.*,/, '');
        var inputfilename = document.createElement("input");
        inputfilename.setAttribute("name", "filename");
        inputfilename.value = "avatar_" + guru_namalengkapedit.value.toUpperCase().replace(/\s+/, "_");
        var inputmimetype = document.createElement("input");
        inputmimetype.setAttribute("name", "mimeType")
        inputmimetype.value = "data:image/jpg"; //e.target.result.match(/^.*(?=;)/)[0]
        //sekarang kita taroh di sini:
        tempatidpotoguru.appendChild(inputbase64);
        tempatidpotoguru.appendChild(inputfilename);
        tempatidpotoguru.appendChild(inputmimetype);




    }
}

function tomboledituser() { //fungsi tombol untuk mengirimkan data ke server
    //sembunyikan dulu form-nya;
    if (validationedit()) {
        document.getElementById("formedituser").style.display = "none";
        document.getElementById("registrasikanedit").style.display = "none"; // menghindari user mengeklik beberapa kali
        document.getElementById("prosesloadingdaftaredit").innerHTML = "<i class='fa fa-spin fa-spinner' style='font-size:36px;color:blue'></i> Sedang Proses ...."
        var dataku = $('#formedituser').serialize();
        dataku += "&brs=" + keyidpendaftar.innerHTML;
        var link = script_url + "?action=editdaftar";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", link, true)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4 && xhr.status === 200) {

                prosesloadingdaftaredit.innerHTML = "Terima kasih, Data Anda berhasil disimpan.";
                document.getElementById("tutupeksekusiedituser").removeAttribute("onclick");
                document.getElementById("tutupeksekusiedituser").setAttribute("onclick", "reloaddatauser()");

            }
        };
        // url encode form data for sending as post data

        xhr.send(dataku);


    }
}

// Name And Email Validation Function
function validationedit() {
    var name = document.getElementById("usernameedit").value;
    var email = document.getElementById("emailedit").value;
    var sekolah = document.getElementById("sekolahedit").value;
    var kelas = document.getElementById("kelasedit").value;
    // var datain = document.getElementById("data");
    var dividpoto_potoguru = document.getElementById("idpoto_potoguruedit").innerHTML;
    var diidnp_datasiswa = document.getElementById("idnp_dataanakedit").innerHTML;
    var emailReg = email.indexOf("@gmail.com"); ///^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '' || sekolah === '' || diidnp_datasiswa === '' || dividpoto_potoguru === '' || kelas === '') {
        alert("Mohon lengkapi formulir ini dengan lengkap! \r\n Terutama: email, Nama Pengguna, Nama Sekolah, Kelas, termasuk poto dan unggahan daftar kelas Anda (Notepad)");
        return false;
    } else if (emailReg < 0) {
        alert("Format email Anda salah. Mohon gunakan akun Gmail ya ...");
        return false;
    } else {
        return true;
    }
}

function ungg_np_datasiswaedit() { // fungsi untuk mengupload file Notepad yng dijadikan base64 dan preview
    var item = document.getElementById("upnp_datasiswaedit").files[0]
    var oFReader = new FileReader();
    oFReader.readAsDataURL(item);

    oFReader.onload = function (oFREvent) {
        // document.getElementById("idnp_dataanak").value = oFREvent.target.result;

        // //document.getElementById("idpoto_potoguru").value = srcEncode; //oFREvent.target.result;
        var tempatidpotoguru = document.getElementById("idnp_dataanakedit")
        tempatidpotoguru.innerHTML = "";
        // buat generate input
        var inputbase64 = document.createElement("input");
        inputbase64.setAttribute("name", "data");
        inputbase64.value = oFREvent.target.result.replace(/^.*,/, '');
        var inputfilename = document.createElement("input");
        inputfilename.setAttribute("name", "filename");
        inputfilename.value = "idnp_dataanak"; //+ guru_namalengkap.innerHTML.toUpperCase().replace(/\s+/, "_");
        var inputmimetype = document.createElement("input");
        inputmimetype.setAttribute("name", "mimeType")
        inputmimetype.value = oFREvent.target.result.match(/^.*(?=;)/)[0];
        //sekarang kita taroh di sini:
        tempatidpotoguru.appendChild(inputbase64);
        tempatidpotoguru.appendChild(inputfilename);
        tempatidpotoguru.appendChild(inputmimetype);

    };
    // reader untuk menampilkan preview
    var tempatselek = document.getElementById("prev_upload_datasiswaedit");
    tempatselek.innerHTML = "";
    var opsiawal = document.createElement("option");
    opsiawal.setAttribute("value", "Belum Pilih Nama")
    opsiawal.innerHTML = "Pilih Nama Siswa"
    tempatselek.appendChild(opsiawal);
    var ofprev = new FileReader();
    ofprev.onload = function () {
        var data = ofprev.result
        var arrdata = data.split("\r\n")
        for (i = 0; i < arrdata.length; i++) {
            var opsi = document.createElement("option");
            opsi.setAttribute("value", arrdata[i])
            opsi.innerHTML = arrdata[i].toUpperCase()
            tempatselek.appendChild(opsi)
        }
    }
    ofprev.readAsText(item)

}
