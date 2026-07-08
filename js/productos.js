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
        precioOriginal: 4000, // Tachado estilo Mercado Libre
        precioMinorista: 2000, // Precio actual
        talles: ["M", "L", "XL", "XXL"],
        imagenes: [
            "../images/Bombacha de Señora con Encaje1.jpg",
            "../images/Bombachas encaje FRENTE.png",
            "../images/Bombacha encaje DORSAL.png"
        ],
        categoria: "mujer",
        subcategoria: "bombachas",
        descripcion: "Diseño de encaje de alta calidad, tiro alto y corte clásico."
    },
    {
        id: "prod-b2",
        nombre: "Culote de Algodón",
        precioOriginal: null, // Sin oferta (solo muestra $2500)
        precioMinorista: 2500,
        talles: ["S", "M", "L"],
        imagenes: [
            "../images/Culote de Algodón1.png",
            "../images/Culote de Algodón2.png",
            "../images/Culote algodon FRENTE.png", 
            "../images/Culote algodon DORSAL.png"
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
            "../images/Culote de Encaje1.jpg",
            "../images/Culote encaje FRENTE.png",
            "../images/Culote encaje DORSAL.png"
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
            "../images/Less de Algodón1.jpg",
            "../images/Less de Algodón2.jpg",
            "../images/Less algodon FRENTE.png",
            "../images/Less algodon DORSAL.png"
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
            "../images/Less de Algodón y Puntilla0.1.jpg",
            "../images/Less de Algodón y Puntilla1.jpg",
            "../images/Less de Algodón y Puntilla2.jpg",
            "../images/Less algodon y puntilla FRENTE.png",
            "../images/Less algodon puntilla DORSAL.png"
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
            "../images/Less de Algodón en Talles Especiales1.png",
            "../images/Less de Algodón en Talles Especiales2.png",
            "../images/Less Frente.png", 
            "../images/Less Dorsal.png"
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
            "../images/Less Regulables3.png", 
            "../images/Less Regulables1.jpeg", 
            "../images/Less Regulables2.jpeg",
            "../images/Less regulable FRENTE.png"
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
            "../images/Bombachas de Algodon con detalles de encaje1.jpg",
            "../images/Bombachas-de-Algodon-con-detalles-de-encaje1 (1).png",
            "../images/Bombachas-de-Algodon-con-detalles-de-encaje1.png",
            "../images/Bombachas-de-Algodon-con-detalles-de-encaje3.png"
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
            "../images/Less Calvin Klein1.jpeg",
            "../images/Less Calvin Klein2.png"
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
        imagenes: ["../images/Vedetina1.jpg"],
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
        imagenes: ["../images/Boxers Dama con Faja0.1.png"],
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
        imagenes: ["../images/Smart Sexi1.png"],
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
        imagenes: ["../images/Culote Less Con Faja0.1.png"],
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
        imagenes: ["../images/Red Velvet0.jpeg"],
        categoria: "mujer",
        subcategoria: "conjuntos",
        etiqueta: "🔥 IMPERDIBLE",
        descripcion: "La sofisticación del encaje se combina con un diseño tipo longline para ofrecerte un ajuste impecable."
    },
    {
        id: "conj-02",
        nombre: "Combo Alo - Remera + top + calza + medias",
        precioOriginal: 35000,
        precioMinorista: 25000,
        talles: ["S", "M", "L"],
        imagenes: ["../images/Combo Alo - Remera + top + calza + medias1.jpg"],
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
        imagenes: ["../images/Conjunto D'lirio con tazas desmontables1.png"],
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
        imagenes: ["../images/Conjunto Persefone1.jpg"],
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
        imagenes: ["../images/Conjunto Roma FRENTE.png"],
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
        imagenes: ["../images/Calza (Lycra)1.png"],
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
        imagenes: ["../images/Conjunto Top + Calza (Negro)1.png"],
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
        imagenes: ["../images/Conjunto Top + Pollera Pantalon0.1.png"],
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
        imagenes: ["../images/Conjunto Vicblack1.png"],
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
        imagenes: ["../images/Conjunto Deportivo1.jpeg"],
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
        imagenes: ["../images/Sports Bell1.jpg"],
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
        imagenes: ["../images/Medias-Alo-dama.jpg"],
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
        imagenes: ["../images/medias-femenina.png"],
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
        imagenes: ["../images/medias-femenina2.png"],
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
        imagenes: ["../images/medias-femenina-sport.png"],
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
            "../images/Boxer uomo1.jpg",
            "../images/Boxer uomo2.jpg"
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
        imagenes: ["../images/Boxers Niño1.jpg"],
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
        imagenes: ["../images/Slip Algodón Clásico1.png"],
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
        imagenes: ["../images/medias-hombres.png"],
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
        imagenes: ["../images/medias-hombre.sport.png"],
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
        imagenes: ["../images/Bombacha-juvenil.jpg"],
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
        imagenes: ["../images/Conjunto Inicial Nena1.jpeg"],
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
        imagenes: ["../images/Topcito-inicial-nena1.png"],
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
        imagenes: ["../images/Slip Niño1.jpg"],
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
        imagenes: ["../images/Medias-escolares-blanca.jpg"],
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
        imagenes: ["../images/Medias con orejita1.1.png"],
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
        imagenes: ["../images/medias-niñas.png"],
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
        imagenes: ["../images/Medias Niña1.png"],
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
        imagenes: ["../images/Medias Niño1.png"],
        categoria: "ninos",
        subcategoria: "medias",
        descripcion: "Diseño urbano infantil, suaves y resistentes."
    },

    // ==========================================
    //   SECCIÓN: REGALERÍA / ELECTRO / HOGAR
    // ==========================================
    {
        id: "reg-parlante-01",
        nombre: "Parlante Bluetooth Portátil",
        precioOriginal: 16000,
        precioMinorista: 12500,
        imagenes: ["../images/parlante-ejemplo.jpg"],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        etiqueta: "🔥 NUEVO",
        descripcion: "Sonido potente de alta fidelidad, luces LED integradas y batería de larga duración."
    },
    {
        id: "reg-luces-01",
        nombre: "Luces LED Decorativas Rgb",
        precioOriginal: null,
        precioMinorista: 6800,
        imagenes: ["../images/luces-rgb.jpg"],
        categoria: "regaleria",
        subcategoria: "tecnologia",
        descripcion: "Tira de luces LED con control remoto, ideales para ambientar habitaciones."
    },
    {
        id: "reg-termo-01",
        nombre: "Termo de Acero Inoxidable 1L",
        precioOriginal: 24000,
        precioMinorista: 18500,
        imagenes: ["../images/termo-acero.jpg"],
        categoria: "regaleria",
        subcategoria: "hogar",
        etiqueta: "⭐ RECOMENDADO",
        descripcion: "Mantiene el agua fría o caliente por más de 12 horas. Práctico tapón cebador."
    },
    {
        id: "reg-botella-01",
        nombre: "Botella Deportiva Motivacional",
        precioOriginal: null,
        precioMinorista: 3500,
        imagenes: ["../images/botella-motivacional.jpg"],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Con marcas de tiempo para hidratación, libre de BPA y tapa hermética antivuelco."
    },
    {
        id: "reg-vaso-01",
        nombre: "Vaso Térmico con Sorbete",
        precioOriginal: null,
        precioMinorista: 5200,
        imagenes: ["../images/vaso-termico.jpg"],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Ideal para café helado o infusiones calientes. Cómodo agarre ergonómico."
    },
    {
        id: "reg-encendedor-01",
        nombre: "Encendedor Eléctrico Plasma USB",
        precioOriginal: 5800,
        precioMinorista: 4500,
        imagenes: ["../images/encendedor-plasma.jpg"],
        categoria: "regaleria",
        subcategoria: "hogar",
        descripcion: "Recargable vía USB, antiviento, ideal para la cocina o camping."
    }
];