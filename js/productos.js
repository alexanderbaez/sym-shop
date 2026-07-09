/* ==========================================================================
   PRODUCTOS.JS - SYM SHOP (Base de Datos Oficial Simplificada v4)
   ========================================================================== */

const PRODUCTOS = [
    // ==========================================
    //   SECCIÓN: MUJER
    // ==========================================
    {
        id: "prod-b1",
        nombre: "Bombacha de Señora con Encaje",
        precioOriginal: 4000, 
        precioMinorista: 2000, 
        talles: ["M", "L", "XL", "XXL"],
        imagenes: [
            "images/Bombacha de Señora con Encaje1.jpg",
            "images/Bombachas encaje FRENTE.png",
            "images/Bombacha encaje DORSAL.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Diseño de encaje de alta calidad, tiro alto y corte clásico."
    },
    {
        id: "prod-b2",
        nombre: "Culote de Algodón",
        precioOriginal: null, 
        precioMinorista: 2500,
        talles: ["S", "M", "L"],
        imagenes: [
            "images/Culote de Algodón1.png",
            "images/Culote de Algodón2.png",
            "images/Culote algodon FRENTE.png", 
            "images/Culote algodon DORSAL.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        stock: false,
        descripcion: "Modelo de tiro medio en algodón suave. Ideal para el confort de cada día."
    },
    {
        id: "prod-b3",
        nombre: "Culote de Encaje",
        precioOriginal: 3800,
        precioMinorista: 2500,
        talles: ["S", "M", "L"],
        imagenes: [
            "images/Culote de Encaje1.jpg",
            "images/Culote encaje FRENTE.png",
            "images/Culote encaje DORSAL.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        etiqueta: "🔥 MÁS VENDIDO",
        descripcion: "Sin costuras, no se marca. Perfecto para sentirte cómoda y sensual."
    },
    {
        id: "prod-b4",
        nombre: "Less de Algodón",
        precioOriginal: null,
        precioMinorista: 1670,
        talles: ["S", "M", "L"],
        imagenes: [
            "images/Less de Algodón1.jpg",
            "images/Less de Algodón2.jpg",
            "images/Less algodon FRENTE.png",
            "images/Less algodon DORSAL.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Tejido de algodón con terminaciones ultra-cómodas y estampada en corazones."
    },
    {
        id: "prod-b5-puntilla",
        nombre: "Less de Algodón y Puntilla",
        precioOriginal: null,
        precioMinorista: 1670,
        talles: ["S", "M", "L"],
        imagenes: [
            "images/Less de Algodón y Puntilla0.1.jpg",
            "images/Less de Algodón y Puntilla1.jpg",
            "images/Less de Algodón y Puntilla2.jpg",
            "images/Less algodon y puntilla FRENTE.png",
            "images/Less algodon puntilla DORSAL.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Máxima cobertura frontal con un toque de sensualidad y comodidad."
    },
    {
        id: "prod-b-especial",
        nombre: "Less de Algodón en Talles Especiales",
        precioOriginal: 2400,
        precioMinorista: 1670,
        talles: ["XL", "XXL", "XXXL"],
        imagenes: [
            "images/Less de Algodón en Talles Especiales1.png",
            "images/Less de Algodón en Talles Especiales2.png",
            "images/Less Frente.png", 
            "images/Less Dorsal.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        etiqueta: "⚡ POCO STOCK",
        descripcion: "Con su tejido de algodón otorgan un toque de sensualidad y comodidad."
    },
    {
        id: "prod-b5",
        nombre: "Less Regulables",
        precioOriginal: null,
        precioMinorista: 1770,
        talles: ["Único"],
        imagenes: [
            "images/Less Regulables3.png", 
            "images/Less Regulables1.jpeg", 
            "images/Less Regulables2.jpeg",
            "images/Less regulable FRENTE.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Confeccionadas en algodón con encaje ofrecen un toque sexy y cómodo."
    },
    {
        id: "prod-b6",
        nombre: "Bombachas de Algodon con detalles de encaje",
        precioOriginal: null,
        precioMinorista: 2500,
        talles: ["M", "L", "XL"],
        imagenes: [
            "images/Bombachas de Algodon con detalles de encaje1.jpg",
            "images/Bombachas-de-Algodon-con-detalles-de-encaje1 (1).png",
            "images/Bombachas-de-Algodon-con-detalles-de-encaje1.png",
            "images/Bombachas-de-Algodon-con-detalles-de-encaje3.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Confeccionadas en algodón con encaje ofrecen un toque sexy y cómodo."
    },
    {
        id: "prod-b7",
        nombre: "Less Calvin Klein",
        precioOriginal: 3000,
        precioMinorista: 2000,
        talles: ["S", "M", "L"],
        imagenes: [
            "images/Less Calvin Klein1.jpeg",
            "images/Less Calvin Klein2.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        etiqueta: "🔥 TENDENCIA",
        descripcion: "Confeccionadas en algodón con encaje ofrecen un toque sexy y cómodo."
    },
    {
        id: "prod-b8",
        nombre: "Vedetina",
        precioOriginal: null,
        precioMinorista: 1740,
        talles: ["M", "L", "XL"],
        imagenes: ["images/Vedetina1.jpg"],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Confeccionadas en algodón con encaje ofrecen un toque sexy y cómodo."
    },
    {
        id: "prod-b9",
        nombre: "Boxers Dama con Faja",
        precioOriginal: 6000,
        precioMinorista: 4500,
        talles: ["M", "L", "XL"],
        imagenes: ["images/Boxers Dama con Faja0.1.png"],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Confeccionadas en algodón con faja modeladora integrada."
    },
    {
        id: "prod-b11",
        nombre: "Smart Sexi",
        precioOriginal: null,
        precioMinorista: 2250,
        talles: ["S", "M", "L"],
        imagenes: ["images/Smart Sexi1.png"],
        categoria: "mujer",
        subcategoria: "bombachas",
        stock: false,
        descripcion: "Confeccionadas en morley, brinda confort. Disponibles en colores tendencia."
    },
    {
        id: "prod-b12",
        nombre: "Culote Less Con Faja",
        precioOriginal: null,
        precioMinorista: 3000,
        talles: ["M", "L", "XL"],
        imagenes: ["images/Culote Less Con Faja0.1.png"],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Confeccionadas en morley, brinda confort. Disponibles en colores tendencia."
    },
    {
        id: "conj-01",
        nombre: "Red Velvet",
        precioOriginal: 21000,
        precioMinorista: 15000,
        talles: ["85", "90", "95", "100"],
        imagenes: ["images/Red Velvet0.jpeg"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        etiqueta: "🔥 IMPERDIBLE",
        descripcion: "La sofisticación del encaje se combina con un design tipo longline para ofrecerte un ajuste impecable."
    },
    {
        id: "conj-02",
        nombre: "Combo Alo - Remera + top + calza + medias",
        precioOriginal: 35000,
        precioMinorista: 25000,
        talles: ["S", "M", "L"],
        imagenes: ["images/Combo Alo - Remera + top + calza + medias1.jpg"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        etiqueta: "⚡ ÚLTIMOS COMBOS",
        descripcion: "Combo de lycra que incluye remera, top, medias y short de lycra sin frunce."
    },
    {
        id: "conj-03",
        nombre: "Conjunto D'lirio con tazas desmontables",
        precioOriginal: null,
        precioMinorista: 10500,
        talles: ["S", "M", "L"],
        imagenes: ["images/Conjunto D'lirio con tazas desmontables1.png"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "Diseño del top de morley con tazas desmontables y calza con frunce, faja y levanta glúteos."
    },
    {
        id: "conj-04",
        nombre: "Conjunto Persefone",
        precioOriginal: null,
        precioMinorista: 7000,
        talles: ["85", "90", "95"],
        imagenes: ["images/Conjunto Persefone1.jpg"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "La base perfecta. Cómodo morley y puntilla, ideal para usar bajo cualquier prenda."
    },
    {
        id: "conj-05",
        nombre: "Conjunto Roma",
        precioOriginal: 14000,
        precioMinorista: 10000,
        talles: ["85", "90", "95", "100"],
        imagenes: ["images/Conjunto Roma FRENTE.png"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "Copas triangulares de algodón con delicados detalles de encaje."
    },
    {
        id: "conj-06",
        nombre: "Calza (Lycra)",
        precioOriginal: null,
        precioMinorista: 4500,
        talles: ["S", "M", "L", "XL"],
        imagenes: ["images/Calza (Lycra)1.png"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "Color de tendencia. Confeccionado en lycra, sin frunce. Ideal para entrenar."
    },
    {
        id: "conj-07",
        nombre: "Conjunto Top + Calza (Negro)",
        precioOriginal: null,
        precioMinorista: 10000,
        talles: ["S", "M", "L"],
        imagenes: ["images/Conjunto Top + Calza (Negro)1.png"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        etiqueta: "⚡ ¡VUELA!",
        descripcion: "Últimos en color negro. De morley con un top de tazas desmontables y calza con frunce."
    },
    {
        id: "conj-08",
        nombre: "Conjunto Top + Pollera Pantalon",
        precioOriginal: null,
        precioMinorista: 16500,
        talles: ["S", "M", "L"],
        imagenes: ["images/Conjunto Top + Pollera Pantalon0.1.png"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "Color de tendencia. Confeccionado en lycra, elegancia y comodidad en una pieza."
    },
    {
        id: "conj-09",
        nombre: "Conjunto Vicblack",
        precioOriginal: 9500,
        precioMinorista: 7500,
        talles: ["85", "90", "95"],
        imagenes: ["images/Conjunto Vicblack1.png"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "Colores de la nueva temporada. Con un diseño cómodo en morley con detalles de puntilla."
    },
    {
        id: "conj-012",
        nombre: "Conjunto Deportivo",
        precioOriginal: null,
        precioMinorista: 7000,
        talles: ["S", "M", "L"],
        imagenes: ["images/Conjunto Deportivo1.jpeg"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "Colores de la nueva temporada con detalles de puntilla y tazas desmontables."
    },
    {
        id: "conj-013",
        nombre: "Sports Bell",
        precioOriginal: null,
        precioMinorista: 6500,
        talles: ["90", "95", "100", "105"],
        imagenes: ["images/Sports Bell1.jpg"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        descripcion: "Corpiño importado armado sin aro y con 4 broches para mayor ajuste."
    },
    {
        id: "acc-ok-m1",
        nombre: "Pack Medias Alo Dama (x3)",
        precioOriginal: null,
        precioMinorista: 5500,
        talles: ["Único"],
        imagenes: ["images/Medias-Alo-dama.jpg"],
        categoria: "mujer",
        subcategoria: "medias",
        descripcion: "Pack de 3 pares de medias cómodas para uso diario."
    },
    {
        id: "acc-med-05",
        nombre: "Medias Sport Girls Socks",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/medias-femenina.png"],
        categoria: "mujer",
        subcategoria: "medias",
        descripcion: "Diseño urbano, suaves y cómodas para el uso diario."
    },
    {
        id: "acc-med-06",
        nombre: "Medias Fasihon women's Socks",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/medias-femenina2.png"],
        categoria: "mujer",
        subcategoria: "medias",
        descripcion: "Diseño urbano, suaves y cómodas para el uso diario."
    },
    {
        id: "acc-med-07",
        nombre: "Medias Women's Socks",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/medias-femenina-sport.png"],
        categoria: "mujer",
        subcategoria: "medias",
        descripcion: "Diseño urbano, suaves y cómodas para el uso diario."
    },

    // ==========================================
    //   SECCIÓN: HOMBRE
    // ==========================================
    {
        id: "masc-01",
        nombre: "Boxer uomo",
        precioOriginal: 5500,
        precioMinorista: 4000,
        talles: ["S", "M", "L", "XL", "XXL"],
        imagenes: [
            "images/Boxer uomo1.jpg",
            "images/Boxer uomo2.jpg"
        ],
        categoria: "hombre",
        subcategoria: "boxers",
        descripcion: "Boxer de algodón con lycra, elástico suave con logo de marca."
    },
    {
        id: "masc-02",
        nombre: "Boxers de Algodón Zantino",
        precioOriginal: null,
        precioMinorista: 2200,
        talles: ["M", "L", "XL"],
        imagenes: ["images/Boxers Niño1.jpg"],
        categoria: "hombre",
        subcategoria: "boxers",
        descripcion: "Boxer de algodón con lycra, elástico suave de alta durabilidad."
    },
    {
        id: "masc-03",
        nombre: "Slip Algodón Clásico",
        precioOriginal: null,
        precioMinorista: 3000,
        talles: ["M", "L", "XL", "XXL"],
        imagenes: ["images/Slip Algodón Clásico1.png"],
        categoria: "hombre",
        subcategoria: "boxers",
        descripcion: "Corte clásico, máxima comodidad y ajuste perfecto."
    },
    {
        id: "acc-med-08",
        nombre: "Medias Men",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/medias-hombres.png"],
        categoria: "hombre",
        subcategoria: "medias",
        descripcion: "Diseño urbano, suaves y de calce anatómico."
    },
    {
        id: "acc-med-09",
        nombre: "Medias Men's Socks",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/medias-hombre.sport.png"],
        categoria: "hombre",
        subcategoria: "medias",
        descripcion: "Diseño urbano, suaves y cómodas para el uso diario."
    },

    // ==========================================
    //   SECCIÓN: NIÑOS (NENAS Y NENOS)
    // ==========================================
    {
        id: "prod-b10",
        nombre: "Bombacha Juvenil",
        precioOriginal: null,
        precioMinorista: 1700,
        talles: ["10", "12", "14", "16"],
        imagenes: ["images/Bombacha-juvenil.jpg"],
        categoria: "ninos",
        subcategoria: "interior",
        descripcion: "Confeccionadas en algodón con diseño de guerreras K-pop."
    },
    {
        id: "conj-10",
        nombre: "Conjunto Inicial Nena",
        precioOriginal: null,
        precioMinorista: 3800,
        talles: ["8", "10", "12"],
        imagenes: ["images/Conjunto Inicial Nena1.jpeg"],
        categoria: "ninos",
        subcategoria: "interior",
        descripcion: "Diseño cómodo en morley con detalles de puntilla infantil."
    },
    {
        id: "conj-011",
        nombre: "Top Inicial Nena",
        precioOriginal: null,
        precioMinorista: 2000,
        talles: ["8", "10", "12", "14"],
        imagenes: ["images/Topcito-inicial-nena1.png"],
        categoria: "ninos",
        subcategoria: "interior",
        descripcion: "Cómodo top de morley ideal para la etapa inicial."
    },
    {
        id: "masc-04",
        nombre: "Slip Algodón niño",
        precioOriginal: 2500,
        precioMinorista: 1833,
        talles: ["4", "6", "8", "10"],
        imagenes: ["images/Slip Niño1.jpg"],
        categoria: "ninos",
        subcategoria: "interior",
        descripcion: "Corte clásico infantil, máxima comodidad para jugar libremente."
    },
    {
        id: "acc-01",
        nombre: "Medias Escolares",
        precioOriginal: null,
        precioMinorista: 2000,
        talles: ["24-27", "28-31", "32-35"],
        imagenes: ["images/Medias-escolares-blanca.jpg"],
        categoria: "ninos",
        subcategoria: "medias",
        descripcion: "Par de medias escolares blancas reforzadas."
    },
    {
        id: "acc-03",
        nombre: "Pack Medias Con Orejitas Niños (x3)",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/Medias con orejita1.1.png"],
        categoria: "ninos",
        subcategoria: "medias",
        descripcion: "Pack de 3 pares de medias con orejitas divertidas."
    },
    {
        id: "acc-med-04",
        nombre: "Medias con dibujitos",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["28-31", "32-35"],
        imagenes: ["images/medias-niñas.png"],
        categoria: "ninos",
        subcategoria: "medias",
        descripcion: "Medias de algodón con tus personajes preferidos."
    },
    {
        id: "acc-med-10",
        nombre: "Medias For Girls Socks",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/Medias Niña1.png"],
        categoria: "ninos",
        subcategoria: "medias",
        descripcion: "Diseño urbano infantil, suaves y cómodas."
    },
    {
        id: "acc-med-11",
        nombre: "Medias For Boys Socks",
        precioOriginal: null,
        precioMinorista: 1500,
        talles: ["Único"],
        imagenes: ["images/Medias Niño1.png"],
        categoria: "ninos",
        subcategoria: "medias",
        descripcion: "Diseño urbano infantil, suaves y resistentes."
    },

    // ==========================================
    //   SECCIÓN: REGALERÍA / ELECTRO / HOGAR
    // ==========================================
    {
        id: "reg-01",
        nombre: "Luz Led Emergencia Recargable 32cm",
        precioOriginal: 12000,
        precioMinorista: 9000,
        imagenes: [
            "images/Luz Led Emergencia Recargable1.jpg",
            "images/Luz Led Emergencia Recargable2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        etiqueta: "🔥 NUEVO",
        descripcion: "Unidades por pack: 1, Voltaje: 5V. Luz LED con flujo luminoso de 250 a 450 lúmenes para máxima visibilidad. Autonomía de 5 a 8 horas para uso prolongado. Batería recargable de 800 mAh para múltiples usos. Tiempo de carga de solo 2 horas para mayor eficiencia. Incluye manija para fácil transporte y colocación."
    },
    {
        id: "reg-02",
        nombre: "Jarra Eléctrica Raf Electrico R.7873 2.3l",
        precioOriginal: null,
        precioMinorista: 21000,
        imagenes: [
            "images/Jarra Eléctrica Raf Electrico R.7873 2.3l1.jpg",
            "images/Jarra Eléctrica Raf Electrico R.7873 2.3l2.jpg",
            "images/Jarra Eléctrica Raf Electrico R.7873 2.3l3.jpg",
            "images/Jarra Eléctrica Raf Electrico R.7873 2.3l4.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Marca: RAF. Modelo: R.7883. Color: -. Capacidad en volumen: 2.3 Litros. Materiales: Acero Inoxidable y Plástico térmico. Voltaje: 220V. Corte automático al hervir: Sí. Control de temperatura/Termómetro: No"
    },
    {
        id: "reg-03",
        nombre: "Pava Eléctrica Luo 2l",
        precioOriginal: null,
        precioMinorista: 25000,
        imagenes: [
            "images/Pava Eléctrica Luo 2l1.jpg",
            "images/Pava Eléctrica Luo 2l2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        etiqueta: "⭐ RECOMENDADO",
        descripcion: "Voltaje: 220V. Con capacidad para 2 litros. Con apagado automático. Tecnología y rapidez para tus infusiones."
    },
    {
        id: "reg-04",
        nombre: "Mini Planchita Pelo Masuya Flequillo Viaje Cartera",
        precioOriginal: null,
        precioMinorista: 6000,
        imagenes: [
            "images/Mini Planchita1.jpg",
            "images/Mini Planchita2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Marca: Masuya. Voltaje Universal: 110V - 220V (Ideal para uso internacional). Temperatura de Trabajo: 160 °C constante. Función Principal: Retoques, Flequillo, Alisado de Cabello Corto. Tamaño Ultracompacto: Aproximadamente 17 cm de largo (Máxima portabilidad)."
    },
    {
        id: "reg-05",
        nombre: "Termo De Acero Inoxidable",
        precioOriginal: null,
        precioMinorista: 10000,
        imagenes: [
            "images/Termo De Acero Inoxidable1.jpg",
            "images/Termo De Acero Inoxidable2.jpg",

        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Su diseño práctico y portátil es ideal para llevarlo fácilmente con vos a todos lados. La construcción de acero inoxidable lo hace resistente a golpes y mantiene la temperatura por más tiempo."
    },
    {
        id: "reg-06",
        nombre: "Parlante Luz Led Usb Bluetooth",
        precioOriginal: null,
        precioMinorista: 14000,
        imagenes: [
            "images/Parlante Luz Led Usb Bluetooth1.jpg",
            "images/Parlante Luz Led Usb Bluetooth2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "El parlante A012 con luz LED y conectividad Bluetooth es la solución perfecta para quienes buscan una experiencia auditiva envolvente y visualmente atractiva. Su diseño moderno y elegante se adapta a cualquier ambiente, ya sea en casa, en una reunión, en una fiesta o en la playa. Con su alimentación USB, disfrutarás de horas de música sin preocuparte por la batería."
    },
    {
        id: "reg-07",
        nombre: "Auriculares Bluetooth M10 Pro",
        precioOriginal: null,
        precioMinorista: 11000,
        imagenes: [
            "images/Auriculares Bluetooth M10 Pro1.jpg",
            "images/Auriculares Bluetooth M10 Pro2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "ecnología Bluetooth 5.2 que asegura conexión estable hasta 10 metros para mayor libertad de movimiento. Batería de 50mAh en auriculares y 2000mAh en estuche que permite hasta 5 horas de música y carga adicional. Pantalla digital LED en el estuche que muestra el nivel de batería para un control visual rápido y preciso. Función manos libres con micrófono integrado para atender llamadas sin necesidad de sacar el celular. Tecnología TWS que ofrece sonido estéreo envolvente y sincronización automática entre ambos auriculares."
    },
    {
        id: "reg-08",
        nombre: "Encendedor Chispero Electrico Cocina Horno Fexible Usb",
        precioOriginal: null,
        precioMinorista: 7000,
        imagenes: [
            "images/Encendedor Chispero Electrico Cocina Horno Fexible Usb1.jpg",
            "images/Encendedor Chispero Electrico Cocina Horno Fexible Usb2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Encendedor eléctrico reutilizable. Recargable con batería incorporada para usar más de 100veces/carga. Tapa de protección del botón para evitar encender accidentalmente. Se apaga automáticamente después de encender 7 segundos. Chispa eléctrica resistente al viento, fácil de operar y encender al aire libre. Aplica en cocina, velas, fuegos artificiales, barbacoa, deportes al exterior como campismo, senderimos etc."
    },
    {
        id: "reg-09",
        nombre: "Procesadora Eléctrica Silver Love 400w Modelo Kk-666s",
        precioOriginal: null,
        precioMinorista: 26000,
        imagenes: [
            "images/Procesadora Eléctrica Silver Love1.jpg",
            "images/Procesadora Eléctrica Silver Love2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "La Procesadora Eléctrica Silver Love KK-666S es la herramienta ideal para quienes buscan eficiencia y funcionalidad en la cocina. Con una potencia de 400 W, este electrodoméstico permite procesar ingredientes de manera rápida y efectiva, facilitando la preparación de tus recetas favoritas. Su vaso licuador tiene una capacidad de 400 mL, perfecto para porciones individuales o pequeñas preparaciones."
    },
    {
        id: "reg-10",
        nombre: "Parlante Bluetooth Rgb Inhalambrico Jsjz Jz-1190",
        precioOriginal: null,
        precioMinorista: 20000,
        imagenes: [
            "images/Parlante Bluetooth Rgb1.jpg",
            "images/Parlante Bluetooth Rgb2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "Voltaje: 220V. Tipo de parlante: altavoz bluetooth portátil cuenta con luces led rgb compatible con usb y tarjeta tf para reproducción directa de música. Con conectividad bluetooth. Tiene luces led. Lugar de colocación: escritorio y mesa y sobremesa."
    },
    {
        id: "reg-11",
        nombre: "Adaptador Enchufe Universal Viajero Ingles Europeo",
        precioOriginal: null,
        precioMinorista: 2000,
        imagenes: [
            "images/Adaptador Enchufe Universal1.jpg",
            "images/Adaptador Enchufe Universal2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Voltaje: 220V. Tipo de puerto: americano. Tipo de patas: americana. Con 1 puerto. Con 2 patas."
    },
    {
        id: "reg-12",
        nombre: "Termo Tereré Piturro 2 Litros + Vaso",
        precioOriginal: null,
        precioMinorista: 26000,
        imagenes: [
            "images/Termo Tereré1.jpg",
            "images/Termo Tereré2.jpg",
            "images/Termo Tereré3.jpg",
            "images/Termo Tereré4.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Descubre el Termo Tereré Piturro de 2 Litros, una opción ideal para quienes disfrutan de bebidas frías y calientes en cualquier momento del día. Con una capacidad de 1,9 litros, este termo es perfecto para compartir con amigos o disfrutar de una refrescante bebida en solitario. Su diseño atractivo y funcionalidad lo convierten en un accesorio esencial para tus días al aire libre."
    },
    {
        id: "reg-13",
        nombre: "Termo Sensor Led Temperatura Botella 500 Ml Acero Inoxidable",
        precioOriginal: null,
        precioMinorista: 10000,
        imagenes: [
            "images/Termo Sensor Led1.jpg",
            "images/Termo Sensor Led2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Sistema de tapa a rosca asegura un sellado hermético para mantener la temperatura sin derrames."
    },
    {
        id: "reg-14",
        nombre: "Silla Plegable Camping Taburete Portátil",
        precioOriginal: null,
        precioMinorista: 23000,
        imagenes: [
            "images/Silla Plegable Camping1.jpg",
            "images/Silla Plegable Camping2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Material de la estructura PVC reforzado y asiento de Plastico reforzado. Dimensiones: 45cm de alto x 26cm de ancho. Soporta hasta 150kg."
    },
    {
        id: "reg-15",
        nombre: "Set De Higiene Y Accesorios Para Bebé 6 Piezas",
        precioOriginal: null,
        precioMinorista: 9000,
        imagenes: [
            "images/Set De Higiene Para Bebé1.jpg",
            "images/Set De Higiene Para Bebé2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "El estuche es compacto, fácil de transportar y asegura que todos los accesorios de higiene estén bien protegidos y organizados."
    },
    {
        id: "reg-16",
        nombre: "Estabilizador Genérico Ay-49u Para Cámara Y Celular",
        precioOriginal: null,
        precioMinorista: 10000,
        imagenes: [
            "images/Estabilizador Genérico Ay-49u Para Cámara Y Celular1.jpg",
            "images/Estabilizador Genérico Ay-49u Para Cámara Y Celular2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "kit videos y fotografiás : Incluyendo un soporte de mano en forma de U, luz de vídeo mini LED, un micrófono, un soporte de teléfono y un control remoto, adecuado para smartphone/cámara, grabación de vídeo."
    },
    {
        id: "reg-17",
        nombre: "Lámpara De Emergencia Solar Recargable Para Exteriores",
        precioOriginal: null,
        precioMinorista: 23000,
        imagenes: [
            "images/Lámpara De Emergencia1.jpg",
            "images/Lámpara De Emergencia2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "Esta potente luz LED portátil que funciona con energía solar combina iluminación, carga y movilidad en un solo dispositivo, lo que la hace perfecta for trabajar al aire libre, acampar, emergencias o como fuente de energía auxiliar for el hogar. Equipado con una batería de litio de gran capacidad (4000 mAh) y un panel solar de alta eficiencia, se carga automáticamente durante el día y proporciona hasta 12 horas de iluminación continua durante la noche."
    },
    {
        id: "reg-18",
        nombre: "Tensiómetro Digital Automático De Brazo Pantalla Lcd",
        precioOriginal: null,
        precioMinorista: 12000,
        imagenes: [
            "images/Tensiómetro Digital1.jpg",
            "images/Tensiómetro Digital2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "ensiómetro automático de brazo. Mide la presión arterial y pulso. Circunferencia del brazalete mínima de 25cm y máxima de 43cm. Con indicador de error de movimiento. Incluye brazalete."
    },
    {
        id: "reg-19",
        nombre: "Inhalador nebulizador portátil inalámbrico ultrasónico Silent Usb para adultos y niños",
        precioOriginal: null,
        precioMinorista: 18000,
        imagenes: [
            "images/Inhalador nebulizador1.jpg",
            "images/Inhalador nebulizador2.jpg",
            "images/Inhalador nebulizador3.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "Nebulizador ultrasónico con frecuencia de 2,2 MHz para tratamientos efectivos. Capacidad de nebulización de 5 mL para dosis adecuadas. Tasa de nebulización de 0.2 mL/min para tratamientos eficientes. Diseño portátil y liviano, ideal para llevar a cualquier lugar. Incluye máscaras para adultos y niños, adaptándose a todas las edades. Alimentación mediante pila o USB para mayor comodidad."
    },
    {
        id: "reg-20",
        nombre: "Termo Mate Autocebante Matelisto Acero Inox",
        precioOriginal: null,
        precioMinorista: 25000,
        imagenes: [
            "images/Termo Mate Autocebante1.jpg",
            "images/Termo Mate Autocebante2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "Conserva el agua fría y caliente hasta por 12 horas. Exterior de acero inoxidable e interior de acero inoxidable."
    },
    {
        id: "reg-21",
        nombre: "Auriculares Bluetooth Inalámbricos P47 Over-ear con Micrófono y Radio",
        precioOriginal: null,
        precioMinorista: 9000,
        imagenes: [
            "images/Auriculares Bluetooth Inalámbricos P471.jpg",
            "images/Auriculares Bluetooth Inalámbricos P472.jpg",
            "images/Auriculares Bluetooth Inalámbricos P473.jpg",

        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "Bluetooth 5 para una conectividad más rápida y estable. Duración máxima de la batería de 6 horas para uso prolongado. 20 Hz - 20 kHz de respuesta en frecuencia para sonido equilibrado. Capacidad de la batería de 400 mAh, ideal para sesiones de entretenimiento. Modo manos libres para mayor comodidad al utilizar. Es a prueba de agua, protegiendo los auriculares en condiciones húmedas."
    },
    {
        id: "reg-22",
        nombre: "Taza Térmica Batidora Automática Magnética Café Té",
        precioOriginal: null,
        precioMinorista: 10000,
        imagenes: [
            "images/Taza Térmica Batidora1.jpg",
            "images/Taza Térmica Batidora2.jpg",
        ],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "Práctica, cómoda y funcional, esta taza mezcladora automática es ideal para preparar café, té, chocolatada, leche, suplementos o cualquier bebida que necesite una mezcla rápida y pareja. Su sistema de auto mezclado se activa fácilmente desde el botón ubicado en el mango, generando un movimiento interno que ayuda a integrar el contenido sin necesidad de usar cuchara."
    },





];