


const semua_button = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");



semua_button.forEach((button_satuan)  => {
    button_satuan.addEventListener("click", () => {
        // remove dlu active klo ada
        semua_button.forEach((btn) => btn.classList.remove("active"))


        // tambah class active ke tombol yang sedang aktif
        button_satuan.classList.add("active")

        // ambil kategori dari tombol yg di klik
        const filter = button_satuan.getAttribute("data-filter");

        // tampilkan atau sembunyikan item berdasarkan filter---

        semua_gambar.forEach((gambar_satuan) => {
            if(filter === "all" || gambar_satuan.classList.contains(filter)){
                // gambar akan tertampil
                gambar_satuan.style.display = "block";
            } else{
                gambar_satuan.style.display = "none";
            }
                
        })
    });
})
