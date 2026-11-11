function validasiNama() {
    var nama = document.getElementById("nama").value;
    if (nama === "") {
        alert("Nama harus diisi.");
        return false; // Mencegah form terkirim
    }
    return true;
}

function validasiEmail() {
    var email = document.getElementById("email").value;
    var pola = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if (email !== "" && !email.match(pola)) {
        alert("Email tidak valid.");
        return false; 
    }
    return true;
}

function validasiUmur() {
    var umur = document.getElementById("umur").value;
    if (umur !== "") {
        if (isNaN(umur) || umur < 1 || umur > 100) {
            alert("Umur harus diisi dengan angka antara 1 sampai 100.");
            return false;
        }
    } else {
        alert("Umur harus diisi.");
        return false;
    }
    return true;
}

// Fungsi baru yang dijalankan saat tombol Enter / Kirim ditekan
function validasiSemua() {
    // Mengecek satu per satu, jika ada yang false, form batal dikirim
    if (!validasiNama()) {
        return false; 
    }
    if (!validasiEmail()) {
        return false; 
    }
    if (!validasiUmur()) {
        return false; 
    }
    
    // Jika semua benar
    alert("Form berhasil disubmit!");
    return true; 
}