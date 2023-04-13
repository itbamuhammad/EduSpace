// mengambil semua elemen dengan class scroll-link
const scrollLinks = document.querySelectorAll('.scroll-link');

// loop untuk setiap elemen scroll-link
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    // mengambil nilai href dari link yang diklik
    const href = link.getAttribute('href');

    // mengambil elemen target
    const target = document.querySelector(href);

    // menghitung jarak elemen target dari atas dokumen
    const offsetTop = target.offsetTop;

    // menggulirkan dokumen ke posisi target dengan animasi smooth
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });

    // mencegah link mengarahkan ke halaman lain secara langsung
    e.preventDefault();
  });
});
