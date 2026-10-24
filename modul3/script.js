// Validasi form profil.html
// Semua kolom wajib diisi; pesan kesalahan tampil di bawah kolom yang bermasalah.

const form = document.getElementById("formMahasiswa");
const pesanSukses = document.getElementById("pesanSukses");

// Menampilkan pesan kesalahan pada sebuah kolom
function tampilkanError(idKolom, pesan) {
    document.getElementById(idKolom + "Error").textContent = pesan;
    const input = document.getElementById(idKolom);
    if (input) input.classList.add("input-salah");
}

// Menghapus semua pesan kesalahan sebelum validasi ulang
function bersihkanError() {
    document.querySelectorAll(".error").forEach(function (el) {
        el.textContent = "";
    });
    document.querySelectorAll(".input-salah").forEach(function (el) {
        el.classList.remove("input-salah");
    });
    pesanSukses.textContent = "";
}

function validasiForm() {
    let valid = true;

    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const email = document.getElementById("email").value.trim();
    const jurusan = document.getElementById("jurusan").value;
    const alamat = document.getElementById("alamat").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobi = document.querySelectorAll('input[name="hobi"]:checked');
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        tampilkanError("nama", "Nama lengkap tidak boleh kosong.");
        valid = false;
    }

    if (nim === "") {
        tampilkanError("nim", "NIM tidak boleh kosong.");
        valid = false;
    } else if (!/^\d+$/.test(nim)) {
        tampilkanError("nim", "NIM hanya boleh berisi angka.");
        valid = false;
    }

    if (email === "") {
        tampilkanError("email", "Email tidak boleh kosong.");
        valid = false;
    } else if (!polaEmail.test(email)) {
        tampilkanError("email", "Format email tidak valid. Contoh: nama@email.com");
        valid = false;
    }

    if (jurusan === "") {
        tampilkanError("jurusan", "Silakan pilih salah satu jurusan.");
        valid = false;
    }

    if (!gender) {
        tampilkanError("gender", "Silakan pilih jenis kelamin.");
        valid = false;
    }

    if (hobi.length === 0) {
        tampilkanError("hobi", "Pilih minimal satu hobi.");
        valid = false;
    }

    if (alamat === "") {
        tampilkanError("alamat", "Alamat tidak boleh kosong.");
        valid = false;
    }

    return valid;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();   // cegah pengiriman bawaan browser
    bersihkanError();

    if (validasiForm()) {
        pesanSukses.textContent = "Data berhasil dikirim. Terima kasih!";
        form.reset();
    } else {
        // arahkan fokus ke kolom pertama yang salah
        const pertama = document.querySelector(".input-salah");
        if (pertama) pertama.focus();
    }
});