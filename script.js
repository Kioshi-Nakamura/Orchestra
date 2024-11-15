let totalPrice = 0;

const prices = {
    "pelajar sggs": 12.00,
    "guru sggs": 14.00,
    "orang awam <12": 5.50,
    "orang awam 13-50": 20.00,
    "orang awam 51+": 15.00
};

const symbols = {
    "pelajar sggs": "🎓",
    "guru sggs": "👩‍🏫",
    "orang awam <12": "🦄",
    "orang awam 13-50": "🎸",
    "orang awam 51+": "🎻"
};

function addTicket() {
    const category = document.getElementById('category').value;
    const ticketPrice = prices[category];
    const ticketSymbol = symbols[category];

    totalPrice += ticketPrice;

    const ticketItem = document.createElement('div');
    ticketItem.classList.add('ticket-item');
    ticketItem.innerHTML = `💸 ${category.replace(/_/g, " ")}: RM${ticketPrice.toFixed(2)} ${ticketSymbol}`;
    
    document.getElementById('tickets-list').appendChild(ticketItem);

    updateTotalPrice();
}

function updateTotalPrice() {
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function finishPurchase() {
    if (totalPrice === 0) {
        alert("Sila tambah tiket terlebih dahulu!");
    } else {
        alert(`Pembelian selesai! Jumlah harga: RM${totalPrice.toFixed(2)}`);
        resetForm();
    }
}

function resetForm() {
    totalPrice = 0;
    document.getElementById('total-price').textContent = "0.00";
    document.getElementById('tickets-list').innerHTML = '';
}
