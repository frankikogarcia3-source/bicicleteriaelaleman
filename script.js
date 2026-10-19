// ============ DATOS: CATÁLOGO (array de objetos) ============
// Precios en pesos argentinos, referenciales. Cambialos cuando quieras.
const NUMERO_WHATSAPP = "5493510000000"; // <-- poné acá el número real (código país + área + número, sin + ni espacios)

const productos = [
  // Bicicletas
  { id: 1,  nombre: "BMX Stunt Pro Rodado 20\"",     categoria: "bicicletas",   precio: 689000, icono: "🚲", descripcion: "Cuadro cromoly, rotor 360° y pegs. Ideal para street y rampa." },
  { id: 2,  nombre: "BMX Freestyle Rodado 20\" Park", categoria: "bicicletas",   precio: 520000, icono: "🚴", descripcion: "Cuadro de acero reforzado, 4 pegs, perfecta para skatepark." },
  { id: 3,  nombre: "BMX Iniciación Rodado 20\"",     categoria: "bicicletas",   precio: 349000, icono: "🚲", descripcion: "Para empezar a rodar y aprender los primeros trucos." },
  { id: 4,  nombre: "MTB Dirt Jump Rodado 26\"",      categoria: "bicicletas",   precio: 790000, icono: "🚵", descripcion: "Horquilla reforzada, frenos de disco, saltos y dirt." },
  // Componentes
  { id: 5,  nombre: "Pedales Plataforma de Aluminio", categoria: "componentes",  precio: 38500,  icono: "⚙️", descripcion: "Pines antideslizantes, rodamientos sellados." },
  { id: 6,  nombre: "Cadena BMX 1/2 x 1/8\"",         categoria: "componentes",  precio: 24900,  icono: "⛓️", descripcion: "Cadena reforzada de alta resistencia, 112 eslabones." },
  { id: 7,  nombre: "Puños (Grips) Flanged",          categoria: "componentes",  precio: 13500,  icono: "🧤", descripcion: "Goma blanda con agarre firme y flange." },
  { id: 8,  nombre: "Pegs de Aluminio (par)",         categoria: "componentes",  precio: 29900,  icono: "🔩", descripcion: "Para grinds. Eje de 14 mm, incluye tuercas." },
  { id: 9,  nombre: "Frenos U-Brake con Cable",       categoria: "componentes",  precio: 31500,  icono: "🛑", descripcion: "Brake trasero con palanca y cable, listo para instalar." },
  { id: 10, nombre: "Asiento Pivotal Stunt",          categoria: "componentes",  precio: 22900,  icono: "💺", descripcion: "Liviano, sin costuras, resiste caídas." },
  { id: 11, nombre: "Plato 25T + Pata de Cabra",      categoria: "componentes",  precio: 58000,  icono: "⚙️", descripcion: "Plato forjado compatible con eje de 19 mm." },
  // Cubiertas
  { id: 12, nombre: "Cubierta BMX 20 x 2.30 Street",  categoria: "cubiertas",    precio: 34500,  icono: "🛞", descripcion: "Perfil bajo, rueda lisa para asfalto y rampa." },
  { id: 13, nombre: "Cubierta 20 x 2.40 Taco Medio",  categoria: "cubiertas",    precio: 36900,  icono: "🛞", descripcion: "Mayor agarre, para dirt y park." },
  { id: 14, nombre: "Cámara 20\" Válvula Schrader",    categoria: "cubiertas",    precio: 7500,   icono: "⭕", descripcion: "Cámara reforzada con válvula americana." },
  // Lubricantes
  { id: 15, nombre: "Lubricante de Cadena 120 ml",    categoria: "lubricantes",  precio: 9800,   icono: "🧴", descripcion: "Seco, para uso diario. Limpia y protege." },
  { id: 16, nombre: "Desengrasante en Spray 400 ml",  categoria: "lubricantes",  precio: 12500,  icono: "🧼", descripcion: "Quita grasa vieja de cadena y piñón en segundos." },
  { id: 17, nombre: "Grasa para Rodamientos 100 g",   categoria: "lubricantes",  precio: 8900,   icono: "🛢️", descripcion: "Grasa multiuso para mazas, dirección y eje." },
  { id: 18, nombre: "Aceite Lubricante Húmedo 60 ml", categoria: "lubricantes",  precio: 7900,   icono: "💧", descripcion: "Ideal para días de lluvia y barro." },
  // Indumentaria
  { id: 19, nombre: "Casco Stunt Certificado",        categoria: "indumentaria", precio: 52000,  icono: "🪖", descripcion: "Carcasa rígida, ventilado, varios talles." },
  { id: 20, nombre: "Rodilleras y Coderas Set",       categoria: "indumentaria", precio: 38000,  icono: "🛡️", descripcion: "Protecciones acolchadas ajustables." },
  { id: 21, nombre: "Guantes de Ciclista",            categoria: "indumentaria", precio: 16500,  icono: "🧤", descripcion: "Palma reforzada, cómodos y resistentes." }
];

// ============ FUNCIONES AUXILIARES ============
function formatearPrecio(n) {
  return "$" + n.toLocaleString("es-AR");
}
function guardar(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) {}
}
function leer(clave, porDefecto) {
  try {
    const v = localStorage.getItem(clave);
    return v === null ? porDefecto : JSON.parse(v);
  } catch (e) { return porDefecto; }
}

// ============ 1.1 MENÚ HAMBURGUESA ============
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", function () {
  const abierto = menu.classList.toggle("abierto");
  btnMenu.setAttribute("aria-expanded", abierto);
  btnMenu.textContent = abierto ? "✕" : "☰";
});
menu.querySelectorAll("a").forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.remove("abierto");
    btnMenu.textContent = "☰";
  });
});

// ============ 1.2 MODO CLARO / OSCURO (guarda en localStorage) ============
const btnTema = document.getElementById("btn-tema");
function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  btnTema.textContent = oscuro ? "☀️" : "🌙";
}
aplicarTema(leer("tema-oscuro", false));
btnTema.addEventListener("click", function () {
  const oscuro = !document.body.classList.contains("oscuro");
  aplicarTema(oscuro);
  guardar("tema-oscuro", oscuro);
});

// ============ 1.3 BOTÓN VOLVER ARRIBA ============
const btnSubir = document.getElementById("btn-subir");
window.addEventListener("scroll", function () {
  btnSubir.classList.toggle("oculto", window.scrollY < 300);
});
btnSubir.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============ 1.4 SALUDO SEGÚN LA HORA + AÑO ============
const hora = new Date().getHours();
let saludo = "¡Buenas noches! 🌙";
if (hora >= 6 && hora < 12) saludo = "¡Buen día! ☀️";
else if (hora >= 12 && hora < 20) saludo = "¡Buenas tardes! 🌤️";
document.getElementById("saludo").textContent = saludo + " Bienvenido a El Alemán";
document.getElementById("anio").textContent = new Date().getFullYear();

// ============ 4.2 CUENTA REGRESIVA ============
// Cambiá la fecha de fin de la promo (año, mes 0-11, día, hora, min)
const fechaFinPromo = new Date(2026, 10, 30, 23, 59, 59); // 30 de noviembre de 2026
function dos(n) { return String(n).padStart(2, "0"); }
function actualizarCuenta() {
  const falta = fechaFinPromo - new Date();
  if (falta <= 0) {
    document.getElementById("cuenta").classList.add("oculto");
    document.getElementById("cd-fin").classList.remove("oculto");
    return false;
  }
  document.getElementById("cd-dias").textContent = dos(Math.floor(falta / 86400000));
  document.getElementById("cd-horas").textContent = dos(Math.floor(falta / 3600000) % 24);
  document.getElementById("cd-min").textContent = dos(Math.floor(falta / 60000) % 60);
  document.getElementById("cd-seg").textContent = dos(Math.floor(falta / 1000) % 60);
  return true;
}
if (actualizarCuenta()) {
  const reloj = setInterval(function () {
    if (!actualizarCuenta()) clearInterval(reloj);
  }, 1000);
}

// ============ 2.1 / 2.2 / 2.3 CATÁLOGO + FILTRO + BUSCADOR ============
const grilla = document.getElementById("grilla-productos");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sin-resultados");
let categoriaActual = "todos";

function mostrarProductos() {
  const texto = buscador.value.trim().toLowerCase();
  grilla.innerHTML = "";
  let cantidad = 0;
  for (let i = 0; i < productos.length; i++) {
    const p = productos[i];
    const coincideCat = categoriaActual === "todos" || p.categoria === categoriaActual;
    const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
    if (coincideCat && coincideTexto) {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta";
      tarjeta.innerHTML =
        '<div class="tarjeta-img">' + p.icono + '</div>' +
        '<div class="tarjeta-cuerpo">' +
          '<span class="tarjeta-cat">' + p.categoria + '</span>' +
          '<h3>' + p.nombre + '</h3>' +
          '<p>' + p.descripcion + '</p>' +
          '<span class="precio">' + formatearPrecio(p.precio) + '</span>' +
          '<button class="btn" data-id="' + p.id + '">Agregar al pedido</button>' +
        '</div>';
      grilla.appendChild(tarjeta);
      cantidad++;
    }
  }
  sinResultados.classList.toggle("oculto", cantidad > 0);
}

document.querySelectorAll(".btn-filtro").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".btn-filtro").forEach(function (b) { b.classList.remove("activo"); });
    btn.classList.add("activo");
    categoriaActual = btn.dataset.cat;
    mostrarProductos();
  });
});
buscador.addEventListener("input", mostrarProductos);
grilla.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) agregarAlCarrito(Number(id));
});

// ============ 3.1 CARRITO (con localStorage) ============
let carrito = leer("carrito-aleman", []); // [{id, cantidad}]
const listaCarrito = document.getElementById("lista-carrito");

function buscarProducto(id) {
  return productos.find(function (p) { return p.id === id; });
}
function calcularTotal() {
  let total = 0;
  carrito.forEach(function (it) { total += buscarProducto(it.id).precio * it.cantidad; });
  return total;
}
function cantidadItems() {
  return carrito.reduce(function (s, it) { return s + it.cantidad; }, 0);
}
function agregarAlCarrito(id) {
  const existente = carrito.find(function (it) { return it.id === id; });
  if (existente) existente.cantidad++;
  else carrito.push({ id: id, cantidad: 1 });
  actualizarCarrito();
}
function cambiarCantidad(id, delta) {
  const it = carrito.find(function (x) { return x.id === id; });
  if (!it) return;
  it.cantidad += delta;
  if (it.cantidad <= 0) carrito = carrito.filter(function (x) { return x.id !== id; });
  actualizarCarrito();
}
function quitarDelCarrito(id) {
  carrito = carrito.filter(function (x) { return x.id !== id; });
  actualizarCarrito();
}
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach(function (it) {
    const p = buscarProducto(it.id);
    const li = document.createElement("li");
    li.innerHTML =
      '<span class="item-nombre">' + p.icono + ' ' + p.nombre + '</span>' +
      '<span class="item-ctrl">' +
        '<button data-accion="menos" data-id="' + p.id + '" aria-label="Quitar uno">−</button>' +
        '<b>' + it.cantidad + '</b>' +
        '<button data-accion="mas" data-id="' + p.id + '" aria-label="Agregar uno">+</button>' +
      '</span>' +
      '<span>' + formatearPrecio(p.precio * it.cantidad) + '</span>' +
      '<button class="item-quitar" data-accion="quitar" data-id="' + p.id + '" aria-label="Eliminar">✕</button>';
    listaCarrito.appendChild(li);
  });
  const items = cantidadItems();
  document.getElementById("contador-items").textContent = items;
  document.getElementById("contador-menu").textContent = items;
  document.getElementById("total-carrito").textContent = formatearPrecio(calcularTotal());
  document.getElementById("carrito-vacio").classList.toggle("oculto", carrito.length > 0);
  guardar("carrito-aleman", carrito);
}
listaCarrito.addEventListener("click", function (e) {
  const accion = e.target.dataset.accion;
  const id = Number(e.target.dataset.id);
  if (accion === "mas") cambiarCantidad(id, 1);
  if (accion === "menos") cambiarCantidad(id, -1);
  if (accion === "quitar") quitarDelCarrito(id);
});
document.getElementById("btn-vaciar").addEventListener("click", function () {
  carrito = [];
  actualizarCarrito();
});

// ============ 3.4 PEDIR POR WHATSAPP ============
document.getElementById("btn-whatsapp").addEventListener("click", function () {
  if (carrito.length === 0) {
    alert("Tu pedido está vacío. Agregá algún producto primero 🙂");
    return;
  }
  let mensaje = "Hola! Quiero hacer este pedido en Bicicletería El Alemán:\n\n";
  carrito.forEach(function (it) {
    const p = buscarProducto(it.id);
    mensaje += "• " + it.cantidad + " x " + p.nombre + " - " + formatearPrecio(p.precio * it.cantidad) + "\n";
  });
  mensaje += "\nTotal: " + formatearPrecio(calcularTotal());
  window.open("https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje), "_blank");
});

// ============ 3.2 CALCULADORA DE PRESUPUESTO ============
const selectCalc = document.getElementById("calc-producto");
productos.forEach(function (p) {
  const op = document.createElement("option");
  op.value = p.id;
  op.textContent = p.nombre + " (" + formatearPrecio(p.precio) + ")";
  selectCalc.appendChild(op);
});
function descuentoPorCantidad(cant) {
  if (cant >= 10) return 0.15;
  if (cant >= 5) return 0.10;
  if (cant >= 3) return 0.05;
  return 0;
}
function calcularPresupuesto() {
  const p = buscarProducto(Number(selectCalc.value));
  const cant = parseInt(document.getElementById("calc-cantidad").value, 10);
  const res = document.getElementById("calc-resultado");
  if (!cant || cant < 1) {
    res.textContent = "Ingresá una cantidad válida (1 o más).";
    return;
  }
  const subtotal = p.precio * cant;
  const desc = descuentoPorCantidad(cant);
  const ahorro = subtotal * desc;
  res.innerHTML =
    "Subtotal: " + formatearPrecio(subtotal) + "<br>" +
    "Descuento (" + Math.round(desc * 100) + "%): -" + formatearPrecio(Math.round(ahorro)) + "<br>" +
    '<span class="total">Total: ' + formatearPrecio(Math.round(subtotal - ahorro)) + "</span>";
}
document.getElementById("btn-calcular").addEventListener("click", calcularPresupuesto);

// ============ 1.5 GALERÍA CON MINIATURAS ============
// Reemplazá "icono" por "img: 'foto.jpg'" si querés usar fotos reales (ver nota al final del README).
const fotos = [
  { icono: "🚲", titulo: "BMX Stunt armada a medida" },
  { icono: "🛞", titulo: "Cubiertas y ruedas para street" },
  { icono: "⛓️", titulo: "Service de cadena y transmisión" },
  { icono: "🧴", titulo: "Lubricantes y limpieza" },
  { icono: "🛠️", titulo: "Nuestro taller" },
  { icono: "🏆", titulo: "Riders de la casa" }
];
const galeriaGrande = document.getElementById("galeria-grande");
const contMini = document.getElementById("miniaturas");
function mostrarFoto(i) {
  galeriaGrande.innerHTML = fotos[i].icono + "<span>" + fotos[i].titulo + "</span>";
  contMini.querySelectorAll(".mini").forEach(function (m, idx) {
    m.classList.toggle("activa", idx === i);
  });
}
fotos.forEach(function (f, i) {
  const b = document.createElement("button");
  b.className = "mini";
  b.textContent = f.icono;
  b.setAttribute("aria-label", f.titulo);
  b.addEventListener("click", function () { mostrarFoto(i); });
  contMini.appendChild(b);
});
mostrarFoto(0);

// ============ 2.4 CARRUSEL DE TESTIMONIOS ============
const testimonios = [
  { texto: "Me armaron la BMX a medida y quedó una bestia. Atención de primera.", autor: "Lucas, rider de street" },
  { texto: "Los mejores precios en cubiertas y pegs de la ciudad. Siempre tienen stock.", autor: "Mati G." },
  { texto: "Le llevé mi bici hecha pedazos y me la dejaron como nueva. Muy recomendable.", autor: "Fede R." },
  { texto: "Excelente asesoramiento para mi primera freestyle. Gracias, Alemán!", autor: "Sofi M." }
];
let indiceCar = 0;
const carTexto = document.getElementById("car-texto");
const carPuntos = document.getElementById("car-puntos");
function mostrarTestimonio(i) {
  indiceCar = (i + testimonios.length) % testimonios.length;
  const t = testimonios[indiceCar];
  carTexto.innerHTML = "“" + t.texto + "”<footer>— " + t.autor + "</footer>";
  carPuntos.querySelectorAll(".punto").forEach(function (p, idx) {
    p.classList.toggle("activo", idx === indiceCar);
  });
}
testimonios.forEach(function (_, i) {
  const p = document.createElement("button");
  p.className = "punto";
  p.setAttribute("aria-label", "Opinión " + (i + 1));
  p.addEventListener("click", function () { mostrarTestimonio(i); reiniciarAuto(); });
  carPuntos.appendChild(p);
});
let autoCarrusel;
function reiniciarAuto() {
  clearInterval(autoCarrusel);
  autoCarrusel = setInterval(function () { mostrarTestimonio(indiceCar + 1); }, 5000);
}
document.getElementById("car-prev").addEventListener("click", function () { mostrarTestimonio(indiceCar - 1); reiniciarAuto(); });
document.getElementById("car-next").addEventListener("click", function () { mostrarTestimonio(indiceCar + 1); reiniciarAuto(); });
mostrarTestimonio(0);
reiniciarAuto();

// ============ 2.5 PREGUNTAS FRECUENTES (ACORDEÓN) ============
const preguntas = [
  { p: "¿Hacen envíos a todo el país?", r: "Sí, enviamos por correo o transporte a todo el país. El costo se calcula según destino y peso." },
  { p: "¿Qué medios de pago aceptan?", r: "Efectivo, transferencia, débito, y tarjetas de crédito (consultá cuotas vigentes)." },
  { p: "¿Arman bicis a medida?", r: "Sí. Elegís cuadro, ruedas y componentes y te la armamos y ajustamos en el taller." },
  { p: "¿Hacen service y reparaciones?", r: "Hacemos service completo: transmisión, rodamientos, frenos y centrado de ruedas. Pedí turno por WhatsApp." },
  { p: "¿Cómo sé qué rodado o talle necesito?", r: "Escribinos con tu altura y estilo de manejo (street, park, dirt) y te asesoramos sin cargo." }
];
const listaFaq = document.getElementById("lista-faq");
preguntas.forEach(function (item) {
  const div = document.createElement("div");
  div.className = "faq-item";
  div.innerHTML =
    '<button class="faq-pregunta" aria-expanded="false"><span>' + item.p + '</span><span class="flecha">▾</span></button>' +
    '<div class="faq-respuesta">' + item.r + '</div>';
  div.querySelector(".faq-pregunta").addEventListener("click", function (e) {
    const abierto = div.classList.toggle("abierto");
    e.currentTarget.setAttribute("aria-expanded", abierto);
  });
  listaFaq.appendChild(div);
});

// ============ 3.3 FORMULARIO CON VALIDACIÓN ============
const form = document.getElementById("form-contacto");
function marcarError(idCampo, idError, msg) {
  document.getElementById(idError).textContent = msg;
  document.getElementById(idCampo).classList.toggle("invalido", msg !== "");
  return msg === "";
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const okNombre = marcarError("nombre", "error-nombre", nombre === "" ? "Por favor ingresá tu nombre." : "");
  const okEmail = marcarError("email", "error-email", !regexEmail.test(email) ? "Ingresá un email válido (ej: nombre@correo.com)." : "");
  const okMsg = marcarError("mensaje", "error-mensaje", mensaje === "" ? "El mensaje no puede estar vacío." : "");

  const ok = document.getElementById("form-ok");
  if (okNombre && okEmail && okMsg) {
    ok.classList.remove("oculto");
    form.reset();
  } else {
    ok.classList.add("oculto");
  }
});

// ============ ARRANQUE ============
mostrarProductos();
actualizarCarrito();
