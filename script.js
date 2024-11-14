let totalAmount = 0;

// Prices for different categories
const ticketPrices = {
    pelajar_sggs: 12.00,
    guru_sggs: 14.00,
    bawah_12: 5.50,
    13_50: 20.00,
    51_atas: 15.00
};

// Add a ticket when the user selects a category
function addTicket() {
    const category = document.getElementById("ticket-category").value;

    // Add the price based on the selected category
    totalAmount += ticketPrices[category];

    // Update the total amount displayed on the webpage
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}
