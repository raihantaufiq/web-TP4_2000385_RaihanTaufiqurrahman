
const kontainer = document.getElementById("kontainer");
const biodata_form = document.getElementById("biodata_form");

biodata_form.addEventListener('submit', function(event){

    let i;

    //mencegah tombol submit merefresh page
    event.preventDefault();

    //ambil input biodata
    let nama = biodata_form.querySelector('input[id="namaLengkap"]').value;
    let bdate = biodata_form.querySelector('input[id="tanggalLahir"]').value;

    let jenisKelamin_option = document.getElementsByName("jenisKelamin");
    let jenisKelamin;
    for(i=0; i<jenisKelamin_option.length; i++){
        if(jenisKelamin_option[i].checked == true){
            jenisKelamin = jenisKelamin_option[i].value;
            break;
        }
    }

    let hobi_option = document.querySelectorAll("#hobi div input");
    let hobi = [];
    for(i=0; i<hobi_option.length; i++){
        if(hobi_option[i].checked == true){
            hobi.push(hobi_option[i].value);
        }
    }

    let agama_option = document.querySelectorAll("#agama option");
    let agama;
    for(i=1; i<agama_option.length; i++){
        if(agama_option[i].selected == true){
            agama = agama_option[i].value;
            break;
        }
    }

    let pesan = biodata_form.querySelector('textarea[id="pesan"]').value;
    
    //buat elemen untuk tabel biodata
    const tabelx = document.createElement("table")
    tabelx.setAttribute("id","tabel_biodata")
    tabelx.setAttribute("class","table col-12 mt-5")

    tabelx.append(document.createElement("thead"))
    tabelx.querySelector("thead").append(document.createElement("tr"))
    tabelx.querySelector("thead tr").append(document.createElement("th"))
    tabelx.querySelector("thead tr").append(document.createElement("th"))
    tabelx.querySelectorAll("thead tr th")[0].setAttribute("class","col-3")
    tabelx.querySelectorAll("thead tr th")[0].textContent = "Label"
    tabelx.querySelectorAll("thead tr th")[1].textContent = "Value"

    tabelx.append(document.createElement("tbody"))
    for(i=0; i<6; i++){
        tabelx.querySelector("tbody").append(document.createElement("tr"))
    }
    for(i=0; i<6; i++){
        tabelx.querySelectorAll("tbody tr")[i].append(document.createElement("th"))
        tabelx.querySelectorAll("tbody tr")[i].append(document.createElement("td"))
    }
    tabelx.querySelectorAll("tbody tr th")[0].textContent = "Nama"
    tabelx.querySelectorAll("tbody tr th")[1].textContent = "Tanggal Lahir"
    tabelx.querySelectorAll("tbody tr th")[2].textContent = "Jenis Kelamin"
    tabelx.querySelectorAll("tbody tr th")[3].textContent = "Hobi"
    tabelx.querySelectorAll("tbody tr th")[4].textContent = "Agama"
    tabelx.querySelectorAll("tbody tr th")[5].textContent = "Pesan"

    //jika belum ada tabelnya
    if(document.getElementById("tabel_biodata") == null){
        kontainer.append(tabelx)//masukkan tabel ke kontainer untuk ditampilkan
    }

    //isi tabel dengan hasil input biodata
    document.getElementById("tabel_biodata").querySelectorAll("tbody tr td")[0].textContent = nama
    document.getElementById("tabel_biodata").querySelectorAll("tbody tr td")[1].textContent = bdate
    document.getElementById("tabel_biodata").querySelectorAll("tbody tr td")[2].textContent = jenisKelamin
    document.getElementById("tabel_biodata").querySelectorAll("tbody tr td")[3].textContent = hobi
    document.getElementById("tabel_biodata").querySelectorAll("tbody tr td")[4].textContent = agama
    document.getElementById("tabel_biodata").querySelectorAll("tbody tr td")[5].textContent = pesan
    
});