var submitBtn = document.getElementById('tombol');
var inputElement = document.getElementById('tebakan');
var alertContainer = document.getElementById('alertContainer');

submitBtn.addEventListener('click', function() {
    performValidation();
});

inputElement.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        performValidation();
    }
});

function performValidation() {
    var tebakan = inputElement.value;
    var message;

    if (tebakan.toLowerCase() === "klandestin") {
        message = "Benar";
        showAlert(message, 'success');
    } else {
        message = "Salah";
        showAlert(message, 'error');
    }
}

function showAlert(message, type) {
    alertContainer.textContent = message;
    alertContainer.style.display = 'block';
    
    // Tambahkan class sesuai dengan jenis alert
    alertContainer.className = '';
    alertContainer.classList.add(type);

    // Sembunyikan alert setelah 2 detik
    setTimeout(function() {
        alertContainer.style.display = 'none';
    }, 2000);
}
