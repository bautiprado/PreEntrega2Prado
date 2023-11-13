const indumentarias = ["Neymar", "Independiente", "Napoli", "Sampdoria", "Independiente 2023", "Buzo NYC"]
const seleccioness = ["Messi", "Argentina"]
const ofertass = ["Independiente 2020", "Independiente 2014", "Sevilla", "Campera Independiente"]
const novedadesydestacadoss = ["Bale", "Sergio Ramos", "Real Madrid mujer", "Independiente 2018", "Billetera Real Madrid"]
const colecciónn = ["Kun", "Independiente 2017", "Real Madrid 2014", "Buzo LAG"]
const extra50offsalee = ["Real Madrid 2012", "Independiente 2017 blanca", "Arsenal", "Short Independiente"]

const todosMisProductos = indumentarias.concat(seleccioness).concat(ofertass).concat(novedadesydestacadoss).concat(colecciónn).concat(extra50offsalee)


function registro() {
    alert("Bienvenido a Seven Only Fútbol, te ofrecemos camisetas únicas 🙌🏻")
    alert("¡Empecemos!")
    let nombre = prompt("Ingrese su nombre completo para registrarse")
    let contraseña = prompt("Cree una contraseña para registrarse")
    alert("¡Felicidades, ya te encuentras registrado!")
}

registro()


function calcularOferta(precioInicial, descuentoPorcentaje = 20) {
    let descuento = (precioInicial * descuentoPorcentaje) / 100
    let oferta = precioInicial - descuento
    alert("El precio con un " + descuentoPorcentaje + "% de descuento es: " + oferta)
    return oferta
}

let confirmacion = true


let producto = (prompt("Ingrese el nombre de la camiseta que desea"))
do {
    let precioDescuento

    while (true) {
        precioDescuento = parseFloat(prompt("Ingrese su precio inicial para calcular el descuento"))

    if (!isNaN(precioDescuento) && precioDescuento > 0) {
    let oferta = calcularOferta(precioDescuento)

    let respuesta = prompt("¿Desea ingresar otro precio para calcular?")

    if (respuesta.toLowerCase() !== 'si') {
        confirmacion = false
    }
    break
        } else {
            alert("Por favor, ingrese un número válido")
        }
    }
} while (confirmacion)

const indice = todosMisProductos.indexOf(producto)

if(indice != -1) {
    console.log("El producto se encuenra disponible")
    console.log(todosMisProductos[indice])
} else {
    console.log("El producto no se encuentra disponible")
}

class indumentaria {
    constructor(Titulo, Precio, Estado) {
        this.Titulo = Titulo
        this.Precio = Precio
        this.Estado = Estado
    }
}

class selecciones {
    constructor(Titulo, Precio, Estado) {
        this.Titulo = Titulo
        this.Precio = Precio
        this.Estado = Estado
    }
}

class ofertas {
    constructor(Titulo, Precio, Estado) {
        this.Titulo = Titulo
        this.Precio = Precio
        this.Estado = Estado
    }
}

class novedadesydestacados {
    constructor(Titulo, Precio, Estado) {
        this.Titulo = Titulo
        this.Precio = Precio
        this.Estado = Estado
    }
}

class colección {
    constructor(Titulo, Precio, Estado) {
        this.Titulo = Titulo
        this.Precio = Precio
        this.Estado = Estado
    }
}

class extra50offsale {
    constructor(Titulo, Precio, Estado) {
        this.Titulo = Titulo
        this.Precio = Precio
        this.Estado = Estado
    }
}

const camiseta1 = new indumentaria("Neymar", "$50.000", "9/10")
const camiseta2 = new indumentaria("Independiemte", "$30.000", "10/10")
const camiseta3 = new indumentaria("Napoli", "$30.000", "10/10")
const camiseta4 = new indumentaria("Sampdoria", "$30.000", "10/10")
const camiseta5 = new indumentaria("Independiente 2023", "$25.000", "10/10")
const camiseta6 = new indumentaria("Buzo NYC", "$60.000", "10/10")
const camiseta7 = new selecciones("Messi", "$35.000", "10/10")
const camiseta8 = new selecciones("Argentina", "$20.000", "10/10")
const camiseta9 = new ofertas("Independiente 2020", "$10.000", "10/10")
const camiseta10 = new ofertas("Independiente 2014", "$15.000", "8/10")
const camiseta11 = new ofertas("Sevilla", "$20.000", "10/10")
const camiseta12 = new ofertas("Campera Independiente", "$20.000", "7/10")
const camiseta13 = new novedadesydestacados("Bale", "$45.000", "10/10")
const camiseta14 = new novedadesydestacados("Sergio Ramos", "$45.000", "9/10")
const camiseta15 = new novedadesydestacados("Real Madrid mujer", "$30.000", "10/10")
const camiseta16 = new novedadesydestacados("Independiente 2018", "$30.000", "10/10")
const camiseta17 = new novedadesydestacados("Billetera Real Madrid", "$11.500", "8/10")
const camiseta18 = new colección("Kun", "Coleccionable", "5/10")
const camiseta19 = new colección("Independiente 2017", "Coleccionable", "8/10")
const camiseta20 = new colección("Real Madrid 2014", "Coleccionable", "10/10")
const camiseta21 = new colección("Buzo LAG", "Coleccionable", "9/10")
const camiseta22 = new extra50offsale("Real Madrid 2012", "$15.000", "10/10")
const camiseta23 = new extra50offsale("Independiente 2017 blanca", "$15.000", "7/10")
const camiseta24 = new extra50offsale("Arsenal", "$12.500", "7/10")
const camiseta25 = new extra50offsale("Short Independiente", "$10.000", "7/10")


const camisetas = [camiseta1, camiseta2, camiseta3, camiseta4, camiseta5, camiseta6, camiseta7, camiseta8, camiseta9, camiseta10, camiseta11, camiseta12, camiseta13, camiseta14, camiseta15, camiseta16, camiseta17, camiseta18, camiseta19, camiseta20, camiseta21, camiseta22, camiseta23, camiseta24, camiseta25]

console.table(camisetas)