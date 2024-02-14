// Memilih elemen input dari ID 'inputfield'
var input = document.getElementById('inputfield');

// Membuat objek event keyup
var ev = new KeyboardEvent('keyup', { key: ' ' });

// Mengatur interval untuk mengecek elemen dengan kelas 'highlight' setiap 100 milidetik
setInterval(function() {
    // Memeriksa apakah ada elemen dengan kelas 'highlight'
    if (document.querySelector('.highlight')) {
        // Memfokuskan input
        input.focus();
        // Mengisi nilai input dengan teks dari elemen yang ditandai dengan kelas 'highlight'
        input.value = document.querySelector('.highlight').textContent;
        // Memicu event keyup pada elemen input
        input.dispatchEvent(ev);
    }
}, 100);
