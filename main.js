var total = 0;
window.addEventListener("load", function() {

    var objeto = {};
    var productos = new Array();
    var precios = new Array();
    var subtotales = new Array();
    var i = 0;

    var objetos = document.querySelector(".btn btn-block btn-primary agregar-carrito");
    console.log(objetos);
    document.addEventListener("click", function(e) {
        if (e.target.getAttribute("class") == "btn btn-block btn-primary agregar-carrito") {
            var cadena = "";
            var descripcion = e.target.getAttribute("id");
            var Pventa = document.querySelector("." + e.target.getAttribute("id")).textContent;
            for (x = 2; x < Pventa.length; x++) {
                cadena += Pventa[x];
            }
            total += parseInt(cadena);

            productos[i] = descripcion;
            precios[i] = Pventa;
            subtotal = Pventa;
            subtotales[i] = subtotal;
            var datos = [];
            for (y = 0; y < productos.length; y++) {
                datos.push({
                    "Producto": productos[y],
                    "Precio": precios[y],
                    "Subtotal": subtotales[y]
                });
            }
            i++;
            objeto.datos = datos;
            console.log(JSON.stringify(objeto));
            localStorage.setItem('local', JSON.stringify((objeto)));

        }
    });

    var car = document.getElementById("icarrito");
    car.addEventListener("click", function() {
        if (localStorage.length > 0) {
            window.location = "carrito.html";
        }

    })

});