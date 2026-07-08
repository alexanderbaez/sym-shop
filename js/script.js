// --- CONFIGURACIÓN Y ESTADO CONSTANTE ---
const CONFIG = {
    WHATSAPP_NUMBER: '5492644762626',
    STORAGE_KEYS: {
        CARRITO: 'symShopCarrito'
    },
    LOCALE: 'es-AR',
    CRITERIO_MAYORISTA: 6 // Mantenemos la base para evaluar la orden de compra
};

let estado = {
    carrito: JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CARRITO)) || [],
    talleFiltroActivo: 'TODOS'
};

// --- ORQUESTADOR PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {
    inicializarUI();
    enrutarPantalla();
});

function inicializarUI() {
    document.body.style.backgroundColor = "var(--brand-bg)";
    actualizarContadorUI();

    const modalCarrito = document.getElementById('cartModal');
    if (modalCarrito) {
        modalCarrito.addEventListener('show.bs.modal', renderizarListaCarrito);
    }
}

function enrutarPantalla() {
    if (typeof PRODUCTOS === 'undefined') {
        console.error("El catálogo de PRODUCTOS no está cargado.");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const categoriaBuscada = urlParams.get('cat'); // Lee "?cat=mujer", "?cat=hombre", etc.
    const productoId = urlParams.get('id'); // Lee "?id=1", "?id=2", etc.
    const path = window.location.pathname;

    // Detectamos si estamos en el index o en la página de detalles
    const esDetalle = path.endsWith('producto.html') || path.endsWith('detalle.html');
    const esIndex = !esDetalle && !path.endsWith('catalogo.html');

    if (esDetalle) {
        // CORRECCIÓN INTERNA: Si detecta que es detalle, busca el ID de la URL y renderiza
        if (productoId) {
            cargarPantallaDetalle(productoId);
        } else {
            console.warn("No se encontró ningún ID de producto en la URL.");
        }
        return;
    }

    // Si estamos en la Home (index.html), procesamos el catálogo con la categoría de la URL
    const contenedor = document.getElementById("contenedor-productos");
    if (contenedor) {
        procesarCatalogoPrincipal(categoriaBuscada, esIndex);
    }
} 

// --- LÓGICA DE NEGOCIO (PRECIOS Y TOTALES) ---
function calcularTotalCarrito() {
    let totalGeneral = 0;
    const unidadesTotales = obtenerUnidadesTotales();
    const esMayorista = unidadesTotales >= CONFIG.CRITERIO_MAYORISTA;
    let totalOriginalSiHuboDescuento = 0;
    
    estado.carrito.forEach(item => {
        const prodMatch = PRODUCTOS.find(p => String(p.id) === String(item.id));
        
        // Determinamos el precio base que corresponde según volumen (Minorista o Mayorista)
        let precioAplicado = prodMatch ? prodMatch.precioMinorista : item.precio;
        if (esMayorista && prodMatch && prodMatch.precioMayorista !== null) {
            precioAplicado = prodMatch.precioMayorista;
        }
        
        totalGeneral += precioAplicado * item.cantidad;
        
        // Calculamos el costo base teórico sin ofertas o minorista común para desglosar ahorros si se desea
        const precioBaseTeorico = prodMatch ? (prodMatch.precioOriginal || prodMatch.precioMinorista) : item.precio;
        totalOriginalSiHuboDescuento += precioBaseTeorico * item.cantidad;
    });

    return {
        total: totalGeneral,
        esMayorista: esMayorista,
        ahorro: totalOriginalSiHuboDescuento - totalGeneral
    };
}

const obtenerUnidadesTotales = () => estado.carrito.reduce((acc, item) => acc + item.cantidad, 0);

// --- RENDERIZADO DE CATÁLOGO ---
function procesarCatalogoPrincipal(categoria, esIndex) {
    const tituloSeccion = document.querySelector('.section-title');
    const subtituloSeccion = document.getElementById('subtitulo-catalogo');
    const portada = document.getElementById('portada-principal'); // El banner "Comodidad que inspira"
    let productosFiltrados = PRODUCTOS;

    // SI EL USUARIO HIZO CLIC EN UNA CATEGORÍA DEL MENÚ (mujer, hombre, ninos, regaleria)
    if (categoria) {
        const catLower = categoria.toLowerCase();
        // Filtramos el array de productos usando la propiedad "categoria" (¡Ignoramos la subcategoría!)
        productosFiltrados = PRODUCTOS.filter(p => p.categoria.toLowerCase() === catLower);
        
        // Cambiamos los títulos del index dinámicamente
        if (tituloSeccion) tituloSeccion.innerText = `Colección ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
        if (subtituloSeccion) subtituloSeccion.innerText = "Catálogo Filtrado";
        
        // ¡MAGIA! Ocultamos la portada principal para que se note que cambió de sección
        if (portada) portada.style.setProperty("display", "none", "important");
        
        // Bajamos la pantalla suavemente hasta el catálogo para que el usuario vea los productos directo
        setTimeout(() => {
            const seccion = document.getElementById('catalogo-seccion');
            if (seccion) seccion.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        
    } else if (esIndex) {
        // SI ESTÁ EN INICIO COMPLETO: Mostramos TODOS los productos que tengan CUALQUIER etiqueta
        // Esto va a capturar "🔥 MÁS VENDIDO", "⚡ POCO STOCK", "🔥 NUEVO", etc.
        const destacados = PRODUCTOS.filter(p => p.etiqueta && p.etiqueta.trim() !== "");
        
        // Si por alguna razón no hay ninguno con etiqueta, muestra los primeros 4 por defecto
        productosFiltrados = destacados.length > 0 ? destacados : PRODUCTOS.slice(0, 4);
        
        if (tituloSeccion) tituloSeccion.innerText = "Productos Destacados";
        if (subtituloSeccion) subtituloSeccion.innerText = "Selección Especial";
        if (portada) portada.style.setProperty("display", "block", "important");
    }

    // Llamás a tu función existente que dibuja las tarjetitas en el HTML
    if (typeof dibujarProductos === 'function') {
        dibujarProductos(productosFiltrados, esIndex);
    }
}

function dibujarProductos(lista, esIndex) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;
    
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `<div class="col-12 text-center py-5 text-muted">No se encontraron productos en esta categoría.</div>`;
        return;
    }

    const fragmento = document.createDocumentFragment();
    lista.forEach(p => {
        const divCol = document.createElement("div");
        divCol.className = "col-6 col-md-4 col-lg-3 mb-3 d-flex align-items-stretch product-item-card";
        divCol.setAttribute('data-talles', p.talles || "");
        
        // CORRECCIÓN INTERNA: Modificado para enlazar a detalle.html en lugar de producto.html
        const linkDetalle = esIndex ? `./html/detalle.html?id=${p.id}` : `./detalle.html?id=${p.id}`;
        
        let imgUrl = p.imagenes[0];
        if (!esIndex && imgUrl.startsWith('./')) {
            imgUrl = imgUrl.replace(/^\.\//, '../');
        } else if (!esIndex && !imgUrl.startsWith('../')) {
            imgUrl = `../${imgUrl}`;
        }

        const precioFormateado = p.precioMinorista.toLocaleString(CONFIG.LOCALE);
        
        // --- COMPONENTE DINÁMICO DE DESCUENTOS ESTILO MERCADO LIBRE ---
        let contenedorPreciosHtml = `<span class="fw-bold text-dark">$${precioFormateado}</span>`;
        
        if (p.precioOriginal && p.precioOriginal > p.precioMinorista) {
            const porcentajeOff = Math.round(((p.precioOriginal - p.precioMinorista) / p.precioOriginal) * 100);
            const precioOrigFormateado = p.precioOriginal.toLocaleString(CONFIG.LOCALE);
            
            contenedorPreciosHtml = `
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <span class="text-muted text-decoration-line-through small mb-0" style="font-size: 0.72rem; opacity: 0.7;">$${precioOrigFormateado}</span>
                    <div class="d-flex align-items-center justify-content-center gap-1">
                        <span class="fw-bold text-dark">$${precioFormateado}</span>
                        <span class="text-success fw-bold" style="font-size: 0.72rem; letter-spacing: -0.3px;">${porcentajeOff}% OFF</span>
                    </div>
                </div>
            `;
        }

        divCol.innerHTML = `
            <div class="product-card shadow-sm w-100 d-flex flex-column position-relative" style="background: #fff; border: 1px solid rgba(0,0,0,0.05);">
                <a href="${linkDetalle}" class="text-decoration-none">
                    <img src="${imgUrl}" class="w-100" style="height: 250px; object-fit: cover;" alt="${p.nombre}" loading="lazy">
                </a>
                <div class="card-body p-2 text-center d-flex flex-column justify-content-between">
                    <a href="${linkDetalle}" class="text-decoration-none text-dark">
                        <h5 class="text-uppercase mb-1" style="font-size: 0.85rem;">${p.nombre}</h5>
                    </a>
                    <div>
                        <div class="mb-1">${contenedorPreciosHtml}</div>
                        <button class="btn w-100 mt-2 py-1" style="background: #1a1a1a; color: #fff; font-size: 0.7rem;" 
                                data-id="${p.id}" onclick="agregarAlCarrito(event, '${p.id}')">AÑADIR</button>
                    </div>
                </div>
            </div>`;
        fragmento.appendChild(divCol);
    });
    contenedor.appendChild(fragmento);
}

// --- FILTROS DE TALLES ---
window.filtrarPorTalle = function(talleSeleccionado) {
    estado.talleFiltroActivo = talleSeleccionado;
    let visibles = 0;

    document.querySelectorAll('#filtro-talles-container .btn').forEach(btn => {
        const esActivo = btn.innerText === talleSeleccionado;
        btn.classList.toggle('btn-dark', esActivo);
        btn.classList.toggle('btn-outline-dark', !esActivo);
    });

    document.querySelectorAll('.product-item-card').forEach(tarjeta => {
        const listaTalles = (tarjeta.getAttribute('data-talles') || "").split(',').filter(Boolean);
        const match = talleSeleccionado === 'TODOS' || listaTalles.includes(talleSeleccionado);
        
        tarjeta.classList.toggle('d-none', !match);
        if (match) visibles++;
    });

    gestionarAvisoStock(visibles, talleSeleccionado);
};

function gestionarAvisoStock(visibles, talle) {
    const contenedor = document.getElementById("contenedor-productos");
    const avisoExistente = document.getElementById("aviso-sin-stock-talle");
    if (avisoExistente) avisoExistente.remove();

    if (visibles === 0 && contenedor) {
        const aviso = document.createElement("div");
        aviso.id = "aviso-sin-stock-talle";
        aviso.className = "col-12 text-center py-5 text-muted small";
        aviso.innerHTML = `<i class="fas fa-info-circle me-1"></i> Por el momento no contamos con modelos en Talle ${talle}.`;
        contenedor.appendChild(aviso);
    }
}

// --- VISTA DE DETALLE DE PRODUCTO ---
function cargarPantallaDetalle(id) {
    const logoHeaderMinorista = document.getElementById('logo-header') || document.querySelector('header img');
    if (logoHeaderMinorista) {
        logoHeaderMinorista.src = "../images/LOGOSYM1.png";
    }

    const p = PRODUCTOS.find(prod => String(prod.id) === String(id));
    if (!p) {
        console.error("Producto no encontrado:", id);
        return;
    }

    document.title = `${p.nombre} - SyM Shop`;

    const corregirRuta = (ruta) => {
        if (!ruta) return '';
        let r = ruta.replace(/^\.\//, '');
        if (!r.startsWith('../')) {
            r = `../${r}`;
        }
        return r;
    };

    const txtNombre = document.getElementById('det-nombre');
    const txtDescripcion = document.getElementById('det-descripcion');
    const txtPrecioMinorista = document.getElementById('det-precio-minorista');
    const txtEtiqueta = document.getElementById('det-etiqueta');
    const imgPrincipal = document.getElementById('det-imagen-principal');
    const contenedorMiniaturas = document.getElementById('det-galeria-miniaturas');
    const contenedorTalles = document.getElementById('contenedor-talles');
    const divTallesOpciones = document.getElementById('det-talles-opciones');

    if (txtNombre) txtNombre.innerText = p.nombre;
    if (txtDescripcion) txtDescripcion.innerText = p.descripcion || "Sin descripción disponible.";
    
    // --- PRECIOS CON DESCUENTO EN PANTALLA DE DETALLE (ESTILO MERCADO LIBRE) ---
    if (txtPrecioMinorista) {
        if (p.precioOriginal && p.precioOriginal > p.precioMinorista) {
            const porcentajeOff = Math.round(((p.precioOriginal - p.precioMinorista) / p.precioOriginal) * 100);
            txtPrecioMinorista.innerHTML = `
                <div class="d-flex flex-column align-items-start">
                    <span class="text-muted text-decoration-line-through lh-1 mb-1" style="font-size: 0.95rem; opacity: 0.75;">$${p.precioOriginal.toLocaleString('es-AR')}</span>
                    <div class="d-flex align-items-center align-baseline gap-2">
                        <span class="fw-bold text-dark lh-1" style="font-size: 1.65rem;">$${p.precioMinorista.toLocaleString('es-AR')}</span>
                        <span class="text-success fw-bold" style="font-size: 1.05rem;">${porcentajeOff}% OFF</span>
                    </div>
                </div>
            `;
        } else {
            txtPrecioMinorista.innerHTML = `<span class="fw-bold text-dark" style="font-size: 1.5rem;">$${p.precioMinorista.toLocaleString('es-AR')}</span>`;
        }
    }

    if (txtEtiqueta) {
        if (p.etiqueta) {
            txtEtiqueta.innerText = p.etiqueta;
            txtEtiqueta.style.display = "inline-block";
        } else {
            txtEtiqueta.style.display = "none";
        }
    }

    if (imgPrincipal && p.imagenes && p.imagenes.length > 0) {
        const rutasCorregidas = p.imagenes.map(img => corregirRuta(img));
        imgPrincipal.src = rutasCorregidas[0];
        imgPrincipal.alt = p.nombre;

        let indiceImagenActiva = 0;

        imgPrincipal.onclick = () => {
            if (typeof abrirZoomSyM === 'function') {
                abrirZoomSyM(rutasCorregidas, indiceImagenActiva);
            }
        };

        if (contenedorMiniaturas) {
            contenedorMiniaturas.innerHTML = '';
            if (p.imagenes.length > 1) {
                p.imagenes.forEach((imgUrl, index) => {
                    const imgMini = document.createElement('img');
                    imgMini.src = corregirRuta(imgUrl);
                    imgMini.classList.add('img-miniatura', 'rounded');
                    if (index === 0) imgMini.classList.add('activa');

                    imgMini.addEventListener('click', () => {
                        imgPrincipal.src = corregirRuta(imgUrl);
                        indiceImagenActiva = index; 
                        document.querySelectorAll('.img-miniatura').forEach(m => m.classList.remove('activa'));
                        imgMini.classList.add('activa');
                    });

                    contenedorMiniaturas.appendChild(imgMini);
                });
            }
        }
    }

    if (divTallesOpciones) {
        divTallesOpciones.innerHTML = '';
        if (p.talles && p.talles.length > 0) {
            if (contenedorTalles) contenedorTalles.style.display = "block";

            p.talles.forEach(talle => {
                const btnTalle = document.createElement('button');
                btnTalle.type = 'button';
                btnTalle.innerText = talle;
                btnTalle.classList.add('btn-talle-caja', 'rounded', 'me-2', 'mb-2');

                btnTalle.addEventListener('click', () => {
                    document.querySelectorAll('.btn-talle-caja').forEach(b => b.classList.remove('seleccionado'));
                    btnTalle.classList.add('seleccionado');
                    btnTalle.dataset.talleElegido = talle;
                });

                divTallesOpciones.appendChild(btnTalle);
            });
        } else {
            if (contenedorTalles) contenedorTalles.style.display = "none";
        }
    }

    const btnAgregar = document.getElementById('det-btn-agregar');
    if (btnAgregar) {
        btnAgregar.onclick = () => {
            let talleSeleccionado = null;
            const inputCantidad = document.getElementById('det-cantidad-input');
            const cantidadAAgregar = inputCantidad ? parseInt(inputCantidad.value) || 1 : 1;

            if (p.talles && p.talles.length > 0) {
                const botonActivo = document.querySelector('.btn-talle-caja.seleccionado');
                if (!botonActivo) {
                    Swal.fire({
                        icon: 'warning', title: 'Seleccioná un talle',
                        text: 'Por favor, elegí un talle antes de agregar el producto a la bolsa.',
                        confirmButtonColor: '#1a1a1a'
                    });
                    return;
                }
                talleSeleccionado = botonActivo.dataset.talleElegido;
            }

            const productoFinal = {
                ...p,
                talleElegido: talleSeleccionado
            };

            gestionarPersistenciaCarrito(productoFinal, cantidadAAgregar, talleSeleccionado);

            Swal.fire({
                icon: 'success', title: '¡Agregado!',
                text: `${p.nombre} ${talleSeleccionado ? '(Talle ' + talleSeleccionado + ')' : ''} se sumó a tu bolsa.`,
                confirmButtonColor: '#1a1a1a'
            });
        };
    }
    
    const contenedorSimilares = document.getElementById('contenedor-similares');
    if (contenedorSimilares) {
        contenedorSimilares.innerHTML = '';
        
        const similares = PRODUCTOS.filter(prod => 
            prod.categoria.toLowerCase() === p.categoria.toLowerCase() && String(prod.id) !== String(p.id)
        ).slice(0, 4);

        if (similares.length === 0) {
            PRODUCTOS.filter(prod => String(prod.id) !== String(p.id)).slice(0, 4).forEach(prod => similares.push(prod));
        }

        similares.forEach(sim => {
            const divCol = document.createElement('div');
            divCol.className = 'col';
            const imgSim = sim.imagenes && sim.imagenes[0] ? corregirRuta(sim.imagenes[0]) : '';
            
            let preciosSimilaresHtml = `<span>$${sim.precioMinorista.toLocaleString('es-AR')}</span>`;
            if (sim.precioOriginal && sim.precioOriginal > sim.precioMinorista) {
                preciosSimilaresHtml = `
                    <span class="text-muted text-decoration-line-through d-block" style="font-size: 0.7rem; opacity: 0.7;">$${sim.precioOriginal.toLocaleString('es-AR')}</span>
                    <span class="text-dark fw-bold">$${sim.precioMinorista.toLocaleString('es-AR')}</span>
                `;
            } else {
                preciosSimilaresHtml = `<span class="text-dark fw-bold">$${sim.precioMinorista.toLocaleString('es-AR')}</span>`;
            }

            // Enlace corregido a 'detalle.html'
            divCol.innerHTML = `
                <div class="card similares-card h-100 rounded-0 p-2">
                    <a href="detalle.html?id=${sim.id}" class="text-decoration-none">
                        <img src="${imgSim}" class="card-img-top rounded-0" style="height: 180px; object-fit: cover;" alt="${sim.nombre}">
                    </a>
                    <div class="card-body p-2 text-center d-flex flex-column justify-content-between">
                        <a href="detalle.html?id=${sim.id}" class="text-decoration-none text-dark">
                            <h6 class="text-uppercase mb-1" style="font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${sim.nombre}</h6>
                        </a>
                        <div class="mt-1" style="font-size: 0.85rem;">
                            ${preciosSimilaresHtml}
                        </div>
                    </div>
                </div>`;
            contenedorSimilares.appendChild(divCol);
        });
    }
}

window.cambiarCantidadDetalle = function(valor) {
    const input = document.getElementById('det-cantidad-input');
    if (!input) return;
    const actual = parseInt(input.value) || 1;
    if (actual + valor > 0) input.value = actual + valor;
};

// --- GESTIÓN DEL CARRITO (CONTROLADORES Y MUTACIONES) ---
window.agregarAlCarrito = function (event, id) {
    if (event) event.stopPropagation();
    const p = PRODUCTOS.find(prod => String(prod.id) === String(id));
    if (p) gestionarPersistenciaCarrito(p, 1);
};

function gestionarPersistenciaCarrito(producto, cantidad, talleSeleccionado = null) {
    const talleAIngresar = talleSeleccionado || producto.talleElegido || null;

    const existe = estado.carrito.find(item => 
        String(item.id) === String(producto.id) && item.talleElegido === talleAIngresar
    );
    
    if (existe) {
        existe.cantidad += cantidad;
    } else {
        estado.carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precioMinorista,
            imagen: producto.imagenes ? producto.imagenes[0] : producto.imagen,
            cantidad: cantidad,
            talleElegido: talleAIngresar
        });
    }
    
    guardarYRefrescarUI();
    mostrarNotificacion(producto.nombre);
}

window.cambiarCantidad = function (index, valor) {
    if (estado.carrito[index].cantidad + valor > 0) {
        estado.carrito[index].cantidad += valor;
    } else {
        estado.carrito.splice(index, 1);
    }
    guardarYRefrescarUI();
    renderizarListaCarrito();
};

window.eliminarDelCarrito = function (index) {
    estado.carrito.splice(index, 1);
    guardarYRefrescarUI();
    renderizarListaCarrito();
};

function guardarYRefrescarUI() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.CARRITO, JSON.stringify(estado.carrito));
    actualizarContadorUI();
}

// --- INTERFAZ DINÁMICA DEL CARRITO (MODAL) ---
window.renderizarListaCarrito = function () {
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    if (!container) return;

    if (estado.carrito.length === 0) {
        renderizarCarritoVacio(container, totalElement);
        return;
    }

    const resCalculo = calcularTotalCarrito();
    const unidadesTotales = obtenerUnidadesTotales();

    // Detectamos en qué nivel de carpeta estamos para corregir la ruta de la imagen
    const path = window.location.pathname;
    const esDetalle = path.endsWith('producto.html') || path.endsWith('detalle.html');

    let cartHtml = `
        <div class="d-flex justify-content-between align-items-center mb-4 pb-2" style="border-bottom: 1px solid rgba(0,0,0,0.06);">
            <span class="text-uppercase text-muted" style="font-size: 0.65rem; letter-spacing: 1.2px; font-weight: 500;">
                ${unidadesTotales} ${unidadesTotales === 1 ? 'Artículo' : 'Artículos'} en tu bolsa
            </span>
            <button class="btn btn-link text-muted text-decoration-none p-0" onclick="confirmarVaciarCarrito()" style="font-size: 0.65rem; letter-spacing: 1.2px; text-transform: uppercase;">
                <i class="fas fa-trash-alt me-1" style="font-size: 0.6rem;"></i> Vaciar Bolsa
            </button>
        </div>
    `;

    estado.carrito.forEach((item, index) => {
        const prodMatch = PRODUCTOS.find(p => String(p.id) === String(item.id));
        
        // --- LOGICA DE CORRECCIÓN DE RUTA PARA LA IMAGEN ---
        let imgUrl = item.imagen;
        if (esDetalle) {
            if (imgUrl.startsWith('./')) {
                imgUrl = imgUrl.replace(/^\.\//, '../');
            } else if (!imgUrl.startsWith('../') && !imgUrl.startsWith('http')) {
                imgUrl = `../${imgUrl}`;
            }
        } else {
            // Si estamos en el index.html, aseguramos que empiece con ./ si no lo tiene
            if (!imgUrl.startsWith('./') && !imgUrl.startsWith('../') && !imgUrl.startsWith('http')) {
                imgUrl = `./${imgUrl}`;
            }
        }

        let precioAplicado = prodMatch ? prodMatch.precioMinorista : item.precio;
        if (resCalculo.esMayorista && prodMatch && prodMatch.precioMayorista !== null) {
            precioAplicado = prodMatch.precioMayorista;
        }

        let subvistaPreciosCarrito = `<span class="text-muted d-block mt-0.5" style="font-size: 0.7rem;">$${precioAplicado.toLocaleString(CONFIG.LOCALE)} c/u</span>`;
        
        if (!resCalculo.esMayorista && prodMatch?.precioOriginal && prodMatch.precioOriginal > prodMatch.precioMinorista) {
            subvistaPreciosCarrito = `
                <div class="mt-0.5" style="line-height: 1.2;">
                    <span class="text-muted text-decoration-line-through" style="font-size: 0.65rem; opacity: 0.7;">$${prodMatch.precioOriginal.toLocaleString(CONFIG.LOCALE)}</span>
                    <span class="text-success fw-semibold ms-1" style="font-size: 0.7rem;">$${precioAplicado.toLocaleString(CONFIG.LOCALE)} c/u</span>
                </div>
            `;
        }

        cartHtml += `
            <div class="row align-items-center mb-3 g-2 py-2" style="border-bottom: 1px solid rgba(0,0,0,0.03);">
                <div class="col-3 col-sm-2">
                    <div style="position: relative; padding-top: 120%; width: 100%; overflow: hidden; background: #fafafa; border: 1px solid rgba(0,0,0,0.04);">
                        <img src="${imgUrl}" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="${item.nombre}" onerror="this.src='${esDetalle ? '../images/placeholder.png' : './images/placeholder.png'}';">
                    </div>
                </div>
                <div class="col-5 col-sm-6 ps-2">
                    <p class="mb-0 text-dark fw-semibold text-uppercase" style="font-size: 0.75rem; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.nombre}</p>
                    ${subvistaPreciosCarrito}
                    
                    ${item.talleElegido ? `<span class="badge bg-light text-dark border mt-1" style="font-size: 0.65rem; font-weight: 500; padding: 2px 6px;">Talle: ${item.talleElegido}</span>` : ''}
                    
                    <button class="btn btn-link text-muted d-block p-0 border-0 bg-transparent mt-1" style="font-size: 0.65rem; text-decoration: none;" onclick="eliminarDelCarrito(${index})">Quitar</button>
                </div>
                <div class="col-4 text-end">
                    <div class="d-flex align-items-center justify-content-end mb-1">
                        <div class="d-flex align-items-center border px-1" style="background: #fff; height: 26px;">
                            <button class="btn btn-sm p-0 border-0 text-muted" style="width:22px; font-size: 0.8rem;" onclick="cambiarCantidad(${index}, -1)">−</button>
                            <span class="px-2 font-monospace text-dark" style="font-size: 0.70rem; min-width: 20px; text-align: center;">${item.cantidad}</span>
                            <button class="btn btn-sm p-0 border-0 text-muted" style="width:22px; font-size: 0.8rem;" onclick="cambiarCantidad(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="fw-semibold text-dark mt-1" style="font-size: 0.8rem;">
                        $${(precioAplicado * item.cantidad).toLocaleString(CONFIG.LOCALE)}
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = cartHtml;
    if (totalElement) totalElement.innerHTML = generarTemplateResumenPrecios(resCalculo);
};

function renderizarCarritoVacio(container, totalElement) {
    container.innerHTML = `
        <div class="text-center py-5">
            <div class="mb-3" style="font-size: 2rem; opacity: 0.15;">
                <i class="fas fa-shopping-bag"></i>
            </div>
            <h6 class="text-uppercase fw-normal text-muted" style="font-size: 0.75rem; letter-spacing: 1.5px;">Tu bolsa de compras está vacía</h6>
            <button class="btn btn-dark btn-sm mt-3 px-4 text-uppercase" data-bs-dismiss="modal" style="font-size: 0.65rem; border-radius: 0;">
                Explorar Colección
            </button>
        </div>`;
    if (totalElement) totalElement.innerHTML = '$0';
}

function generarTemplateResumenPrecios(res) {
    let avisoAhorroHtml = '';
    if (res.ahorro > 0) {
        avisoAhorroHtml = `
            <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-success" style="font-size: 0.72rem; font-weight: 500;">Estás ahorrando:</span>
                <span class="text-success fw-bold" style="font-size: 0.8rem;">-$${res.ahorro.toLocaleString(CONFIG.LOCALE)}</span>
            </div>
        `;
    }

    return `
        <div class="text-end w-100 mt-2">
            ${avisoAhorroHtml}
            <div class="d-flex justify-content-between align-items-center mt-2 pt-2" style="border-top: 1px solid rgba(0,0,0,0.06);">
                <span class="text-muted text-uppercase" style="font-size: 0.65rem; letter-spacing: 1.2px;">Total estimado</span>
                <span class="fw-bold" style="font-size: 1.25rem; color: #000;">$${res.total.toLocaleString(CONFIG.LOCALE)}</span>
            </div>
            <p class="text-muted text-start mt-3 mb-0 p-2.5" style="font-size: 0.62rem; line-height: 1.4; background: #fafafa; border: 1px solid rgba(0,0,0,0.04);">
                <i class="fas fa-info-circle text-dark me-1" style="opacity: 0.6;"></i> El pedido se procesará mediante nuestra plataforma de asistencia en WhatsApp. Coordinaremos los métodos de entrega de forma personalizada.
            </p>
        </div>`;
}

function actualizarContadorUI() {
    const contador = document.getElementById('cart-count');
    if (!contador) return;
    
    const totalUnidades = obtenerUnidadesTotales();
    contador.innerText = totalUnidades;
    
    const tieneElementos = totalUnidades > 0;
    contador.style.display = tieneElementos ? 'flex' : 'none';
    
    if (!tieneElementos) return;

    contador.style.backgroundColor = "#1a1a1a";
    contador.style.transform = "scale(1)";
}

function mostrarNotificacion(nombreProducto) {
    Swal.fire({
        toast: true, position: 'top-end', icon: 'success',
        title: '¡Añadido a la bolsa!', text: nombreProducto,
        showConfirmButton: false, timer: 2000, timerProgressBar: true,
        background: '#fff', color: '#1a1a1a', iconColor: '#b33939', width: '320px',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
            toast.style.fontSize = '0.85rem'; 
        }
    });
}

window.confirmarVaciarCarrito = function () {
    Swal.fire({
        title: '¿Vaciar tu bolsa?', text: "Se quitarán todos los artículos seleccionados hasta el momento.", icon: 'warning',
        showCancelButton: true, confirmButtonColor: '#1a1a1a', cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar bolsa', cancelButtonText: 'Cancelar', borderRadius: '0'
    }).then((result) => {
        if (result.isConfirmed) {
            estado.carrito = [];
            guardarYRefrescarUI();
            renderizarListaCarrito();
        }
    });
};

// --- NUEVA SECCIÓN: PRODUCTOS DESTACADOS ---
function cargarProductosDestacados(esIndex) {
    const contenedor = document.getElementById('contenedor-destacados');
    if (!contenedor) return; 

    const destacados = PRODUCTOS.filter(prod => prod.etiqueta !== undefined && prod.etiqueta !== null);

    contenedor.innerHTML = "";

    destacados.forEach(prod => {
        let estructuraPrecios = "";

        if (prod.precioOriginal && prod.precioOriginal > prod.precioMinorista) {
            const porcentajeOff = Math.round(((prod.precioOriginal - prod.precioMinorista) / prod.precioOriginal) * 100);
            
            estructuraPrecios = `
                <div class="mb-2">
                    <span class="text-muted text-decoration-line-through small">$${prod.precioOriginal.toLocaleString(CONFIG.LOCALE)}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="fs-5 fw-bold text-dark">$${prod.precioMinorista.toLocaleString(CONFIG.LOCALE)}</span>
                    <span class="text-success small fw-bold">${porcentajeOff}% OFF</span>
                </div>
            `;
        } else {
            estructuraPrecios = `
                <div class="d-flex align-items-center gap-2">
                    <span class="fs-5 fw-bold text-dark">$${prod.precioMinorista.toLocaleString(CONFIG.LOCALE)}</span>
                </div>
            `;
        }
    });
}

// --- MULTIMEDIA / ZOOM ---
window.abrirZoomSyM = function(imagenes, indexInicial) {
    const modal = document.createElement('div');
    modal.id = "sym-zoom-modal";
    Object.assign(modal.style, {
        position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.95)', zIndex: '9999', display: 'flex', flexDirection: 'column',
        touchAction: 'none'
    });

    modal.innerHTML = `
        <div style="position: absolute; top: 20px; right: 20px; z-index: 10001;">
            <button id="close-zoom" style="background: rgba(255,255,255,0.2); border: none; color: white; font-size: 1.5rem; width: 45px; height: 45px; border-radius: 50%; cursor: pointer;">&times;</button>
        </div>
        ${imagenes.length > 1 ? `
            <button id="prev-zoom" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); z-index: 10001; background: rgba(255,255,255,0.1); border: none; color: white; padding: 15px; border-radius: 8px;"><i class="fas fa-chevron-left"></i></button>
            <button id="next-zoom" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 10001; background: rgba(255,255,255,0.1); border: none; color: white; padding: 15px; border-radius: 8px;"><i class="fas fa-chevron-right"></i></button>
        ` : ''}
        <div id="zoom-track" style="display: flex; height: 100%; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; scroll-behavior: smooth;">
            ${imagenes.map(src => `
                <div style="flex: 0 0 100vw; height: 100vh; scroll-snap-align: start; display: flex; align-items: center; justify-content: center;">
                    <img src="${src}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                </div>`).join('')}
        </div>`;

    document.body.appendChild(modal);
    const track = modal.querySelector('#zoom-track');
    
    setTimeout(() => { track.scrollLeft = window.innerWidth * indexInicial; }, 50);

    if (imagenes.length > 1) {
        modal.querySelector('#next-zoom').onclick = () => track.scrollLeft += window.innerWidth;
        modal.querySelector('#prev-zoom').onclick = () => track.scrollLeft -= window.innerWidth;
    }
    modal.querySelector('#close-zoom').onclick = () => modal.remove();
}

// --- CONTROLADOR DE SALIDA / WHATSAPP CHECKOUT ---
window.enviarPedidoWhatsApp = function() {
    if (estado.carrito.length === 0) {
        Swal.fire({
            title: 'Bolsa vacía', text: 'Por favor, añade al menos un producto antes de enviar tu pedido.', icon: 'info',
            confirmButtonColor: '#1a1a1a', borderRadius: '0'
        });
        return;
    }

    const resCalculo = calcularTotalCarrito();
    const unidadesTotales = obtenerUnidadesTotales();
    
    let mensaje = `*¡Hola SyM SHOP!* 🛍️\n`;
    mensaje += `Quiero realizar el siguiente pedido desde el catálogo web:\n`;
    mensaje += `------------------------------------------\n\n`;

    estado.carrito.forEach((item, index) => {
        const prodMatch = PRODUCTOS.find(p => String(p.id) === String(item.id));
        
        let precioIndividual = prodMatch ? prodMatch.precioMinorista : item.precio;
        let anotacionDescuento = '';

        if (resCalculo.esMayorista && prodMatch && prodMatch.precioMayorista !== null) {
            precioIndividual = prodMatch.precioMayorista;
        } else if (!resCalculo.esMayorista && prodMatch?.precioOriginal && prodMatch.precioOriginal > prodMatch.precioMinorista) {
            // Si el cliente compra minorista pero el producto en sí venía con una oferta individual
            anotacionDescuento = ` *(¡Oferta Web!)*`;
        }
        
        mensaje += `*${index + 1}. ${item.nombre}*\n`;
        if (item.talleElegido) {
            mensaje += `   • Talle: ${item.talleElegido}\n`;
        }
        mensaje += `   • Cantidad: ${item.cantidad}\n`;
        mensaje += `   • Precio c/u: $${precioIndividual.toLocaleString(CONFIG.LOCALE)}${anotacionDescuento}\n`;
        mensaje += `   • Subtotal: $${(precioIndividual * item.cantidad).toLocaleString(CONFIG.LOCALE)}\n\n`;
    });

    mensaje += `------------------------------------------\n`;
    mensaje += `*Resumen Final:*\n`;
    mensaje += `• Total de prendas: ${unidadesTotales}\n`;
    mensaje += `• Tipo de Compra: ${resCalculo.esMayorista ? 'Mayorista 🎁' : 'Minorista'}\n`;
    if (resCalculo.ahorro > 0) {
        mensaje += `• Total Descontado: $${resCalculo.ahorro.toLocaleString(CONFIG.LOCALE)}\n`;
    }
    mensaje += `• *TOTAL A PAGAR: $${resCalculo.total.toLocaleString(CONFIG.LOCALE)}*\n\n`;
    mensaje += `Quedo atento/a para coordinar el pago y envío de las prendas. ¡Muchas gracias!`;

    const urlFinal = `https://api.whatsapp.com/send?phone=${CONFIG.WHATSAPP_NUMBER}&text=${encodeURIComponent(mensaje)}`;
    window.open(urlFinal, '_blank');
};