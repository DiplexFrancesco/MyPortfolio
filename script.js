// Quando si clicca il pulsante, mostra un messaggio di benvenuto
document.getElementById("myButton").addEventListener("click", function() {
    alert("Benvenuto nel mio portfolio!");
});

// Cambio colore del titolo al passaggio del mouse
document.getElementById("myTitle").addEventListener("mouseover", function() {
    this.style.color = "#ff5733";
});

document.getElementById("myTitle").addEventListener("mouseout", function() {
    this.style.color = "#007bff";
});
