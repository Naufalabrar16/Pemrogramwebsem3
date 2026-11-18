<?php
$nama = isset($_GET['nama']) ? $_GET['nama'] : 'Nama tidak diisi';
echo "Nama Anda adalah: " . htmlspecialchars($nama);
?>