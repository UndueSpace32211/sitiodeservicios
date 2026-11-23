// Calcula el total del pedido
document.getElementById("btnCalcular").addEventListener("click", function () {
  var precio = Number(document.getElementById("producto").value);
  var cantidad = Number(document.getElementById("cantidad").value);

  if (cantidad < 1) {
    document.getElementById("resultado").textContent = "La cantidad debe ser al menos 1.";
    return;
  }
  document.getElementById("resultado").textContent = "Total a pagar: " + (precio * cantidad) + " Bs";
});
