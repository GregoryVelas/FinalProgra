window.addEventListener("load", function() {
    var lista = [];
    var historial = localStorage.getItem('local');
    lista = JSON.parse(historial);
    var fila = document.getElementById("lista-compra");
    for (var x = 0; x < historial.length; x++) {
        fila.innerHTML += '<tr> <td>' + lista.datos[x].Producto + '</td><td>' + lista.datos[x].Precio + '</td><td>' + lista.datos[x].Subtotal + '</td></tr>';
    }
    const procesarCompraBtn = document.getElementById('procesar-compra');
    procesarCompraBtn.addEventListener('click', procesarCompra());
    const cancelarCompraBtn = document.getElementById('cancelar-compra');
    cancelarCompraBtn.addEventListener('click', cancelarCompra());
    const cliente = document.getElementById('cliente');
    const correo = document.getElementById('correo');

    function procesarCompra() {
        if (cliente.value == '' || correo.value === '') {
            alert("Debe llenar los campos");
        } else {
            alert("Venta Realizada");
        }

    }

    function procesarCompra() {
        localStorage.clear();

    }
});