let totalAmount = 0;
let continueBuyingStatus = true;

// Harga bagi setiap kategori
const ticketPrices = {
    pelajar_sggs: 12.00,
    guru_sggs: 14.00,
    bawah_12: 5.50,
    13_50: 20.00,
    51_atas: 15.00
};

// Fungsi untuk menambah tiket ke jumlah keseluruhan
function addTicket() {
    const category = document.getElementById("ticket-category").value;

    // Tambahkan harga berdasarkan kategori tiket yang dipilih
    totalAmount += ticketPrices[category];

    // Kemas kini paparan jumlah tiket
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}

// Fungsi untuk memutuskan sama ada ingin terus membeli tiket atau tidak
function continueBuying(continueBuyingFlag) {
    if (continueBuyingFlag) {
        // Jika ya, teruskan membeli tiket
        document.querySelector('.ticket-form').style.display = 'block';
        document.querySelector('.continue-form').style.display = 'none';
    } else {
        // Jika tidak, sembunyikan borang dan paparkan mesej terima kasih
        document.querySelector('.ticket-form').style.display = 'none';
        document.querySelector('.continue-form').style.display = 'none';
        document.querySelector('footer').style.display = 'block';
    }
}
