// === CONFIG ===
// Agregá en tu HTML un botón para las novedades:
// <button id="btnNovedades">Ver solo novedades</button>

const products = [
  { id: 1, 
    title: 'Llave T 24 piezas',
     price: 3500,
     img: 'img/pieza24.jpg', 
     category: 'herramientas',
      description: 'Llave T de 24 piezas, uso profesional.' 
    },

  { id: 2, 
    title: 'Pinza  Mango antideslizante 8"',
     price: 4500,
      img: 'img/pinza.jpg', 
      category: 'herramientas',
       description: 'Pinza universal profesional 8".' 
      },

  { id: 3,
     title: 'Alicate profesional mango antideslizante de 8"',
      price: 4500, 
      img: 'img/tenaza.jpg',
       category: 'herramientas',
        description: 'Alicate de uso profesional.'
       },
  { id: 4, 
    title: 'Remachadora  4 boquillas', 
    price: 4500, 
    img: 'img/remachadora.jpg', 
    category: 'herramientas', 
    description: 'Remachadora  incluye 4 boquillas.'
   },
  { id: 5,
     title: 'Cinta métrica Calidad profesional', 
     price: 2850, 
     img: 'img/cintametrica.jpg', 
     category: 'herramientas', 
     description: 'Cinta métrica calidad profesional 5mts $2850, 7,5mts $3750, 10 mts $4750.'
     },
  { id: 6, 
    title: 'Pilas AA y AAA pack x u',
     price: 280,
      img: 'img/pilas.jpg',
       category: 'hogar', 
       description: 'Pilas  AA y AAA, ideales para dispositivos electrónicos.'
       },
  { id: 7,
     title: 'Precintos x 100 unidades', 
     price: 2900,
      img: 'img/precinto.jpg',
       category: 'hogar',
        description: 'Precintos de alta resistencia , 4.8x150/200mm.'
       },
  { id: 8, 
    title: 'Precintos de colores x 40 unidades ', 
    price: 1500, 
    img: 'img/precintosdecolores.jpg',
     category: 'hogar', 
     description: 'Precintos de colores, 3mmx 250mm.'
     },
  { id: 9,
     title: 'Pinza Pelacable 7"',
      price: 4600, 
      img: 'img/pelacable.jpg',
       category: 'herramientas', 
       description: 'Pinza pelacable de 7".' 
      },
  { id: 10,
     title: 'Aspiradora Industrial 20l (sin stock )',
      price: 85000, 
      img: 'img/aspiradora.jpg', 
      category: 'herramientas',
      description: 'Aspiradora industrial potente , funcion seco y humedo 20 litros.'
       },
  { id: 11,
     title: 'Torquimetro Digital ', 
     price: 95000, 
     img: 'img/torquimetro.jpg',
      category: 'herramientas', 
      description: ' Llave Torquimetro torsion , con llave de encastre .'
     },
  { id: 12,
     title: 'Pistola de pintura inalambrica 48v (sin stock )', 
     price: 55000, 
     img: 'img/pistoladepintura.jpg',
      category: 'herramientas', 
      description: 'Pistola de pintura inalambrica 48v,chorro ajustable para diferentes superficies .'
     },
  { id: 13,
     title: 'Baliza Led, linterna portatil 4 en 1  ', 
     price: 19000, 
     img: 'img/baliza.jpg',
      category: 'herramientas', 
      description: 'Baliza , linterna portatil , 3 modos de intermitencia, con luces LED,solar y usb , bateria portatil (power bank ) para cargar tu telefono u otros dispositivos.'
     },
  { id: 14,
     title: 'Balanza Industrial 300kg ',
      price: 180000, 
      img: 'img/Balanzaindustrial.jpg',
       category: 'herramientas',
        description: 'Balanza industrial de alta precisión, capacidad de 300kg tambien viene de 500kg $240000.'
       },
  { id: 15,
     title: 'Inflador de aire portátil ',
      price: 32000,
       img: 'img/inflador.jpg', 
       category: 'herramientas',
        description: 'Inflador de aire portátil, ideal para inflar neumáticos y otros objetos, con diferentes picos con linterna y balizas led .' 
      },
  { id: 16,
     title: 'LLave  tubo 94 Pcs de 3/8" y 1/4"',
      price: 69000, 
      img: 'img/cajade94piezas.jpg', 
      category: 'herramientas', 
      description: 'Juego de llaves de tubo de 94 piezas, incluye 3/8" y 1/4", uso profesional , acero al cromo vanadio de alta calidad, cumple normas Din e Iso.'
     },
  { id: 17,
     title: 'Llave tubo juego de 82 piezas de 1/2"y 1/4"', 
     price: 73000, 
     img: 'img/cajade82piezas.jpg', 
     category: 'herramientas', 
     description: 'Juego de llaves de tubo de 82 piezas, incluye 1/2" y 1/4", uso profesional , acero al cromo vanadio de alta calidad, cumple normas Din e Iso.',
     nuevo: true, 
    },
  { id: 18, 
    title: 'Valija de Aluminio de herramientas 187 Pcs', 
    price: 189000, 
    img: 'img/valijadealuminio.jpg',
     category: 'herramientas',
      description: 'Valija de aluminio con 187 piezas de herramientas, ideal para uso  profesional.' 
    },
  { id: 19,
     title: 'Llave de tubo de 121 piezas juego de 1/2", 1/4" y 3/8"', 
     price: 119000,
      img: 'img/caja121piezas.jpg', 
      category: 'herramientas',
       description: 'Juego de llaves de tubo de 121 piezas, incluye 1/2", 1/4" y 3/8", uso profesional , acero al cromo vanadio de alta calidad, cumple normas Din e Iso.'
       },
  { id: 20,
     title: 'Llave tubo juego de 216 piezas de 1/2"y 1/4"',
      price: 169000,
       img: 'img/cajade216piezas.jpg',
        category: 'herramientas', 
        description: 'Juego de llaves de tubo de 216 piezas, incluye 1/2" y 1/4", uso profesional , acero al cromo vanadio de alta calidad, cumple normas Din e Iso.' 
      },
  { id: 21,
     title: 'Chaleco refractario amarillo y naranja',
      price: 1750, 
      img: 'img/chaleco.jpg',
       category: 'herramientas',
        description: 'Chaleco refractario amarillo y naranja, ideal para trabajos de alta visibilidad y seguridad.'
       },
  { id: 22, 
    title: 'Trabadisco alarma Moto', 
    price: 19000, 
    img: 'img/trabamoto.jpg', 
    category: 'herramientas', 
    description: 'Trabadisco alarma para moto, ideal para seguridad y protección contra robos.' 
  },
  { id: 23,
     title: 'Rotomartillo inalabrico 21v', 
     price: 120000, 
     img: 'img/rotomartillo.jpg', 
     category: 'herramientas',
      description: 'Rotomartillo inalambrico 21v, uso profesional , perfora hormigon , metal y madera incluye 2 batrias de larga duracion y maletin .'
     },
  { id: 24, 
    title:'Zuncho  elastico 1,2 mts', 
    price: 1700,
     img: 'img/lingas.jpg',
      category: 'herramientas', 
      description: 'Zuncho elastico de 1,2 mts, ideal para asegurar cargas y objetos, fabricado en material resistente y duradero.'
     },
  { id: 25, 
    title: 'Mecha Copa 11 piezas de acero de carbono', 
    price: 10000, 
    img: 'img/mechacopa.jpg', 
    category: 'herramientas',
     description: 'Juego de mechas copa de 11 piezas, fabricadas en acero de carbono, ideales para perforar madera y yeso.'
     },
  { id: 26,
     title: 'Arrancador de autos multifuncion (Sin Stock) ',
      price: 85000,
       img: 'img/arrancadordeauto.jpg',
        category: 'herramientas', 
        description: 'Arrancador de autos multifuncion, ideal para trabajos de mecánica y mantenimiento automotriz.' 
      },
  { id: 27, 
    title: 'Linga Candado forrada', 
    price: 13500,
     img: 'img/lingacandado.jpg',
      category: 'herramientas',
       description: 'Linga Candado forrada,  ideal bicicletas y motos ' 
      },
  { id: 28,
     title: 'Hidrolavadora Portatil a bateria', 
     price: 55000,
      img: 'img/hidrolavadora.jpg',
       category: 'herramientas',
        description: 'Hidrolavadora portatil a bateria , potente , ligera y facil de usar para limpieza de autos , motos , incluye accesorios',
        nuevo: true
       },
  { id: 29,
     title: 'Juego de llave torx 9 piezas ', 
     price: 4500,
      img: 'img/juegodellave.jpg',
       category: 'herramientas', 
       description: 'Juego de llave torx 9 piezas  .' 
      },
  { id: 30, 
    title: 'Camara de seguridad wifi 360', 
    price: 32000, 
    img: 'img/camara.jpg',
     category: 'hogar', 
     description: 'Camara de seguridad wifi 360,lo conectas a un portalamparas , ideal para vigilancia y monitoreo remoto, con microfono ' 
    },
  { id: 31, 
    title: 'Vincha led de goma ', 
    price: 6500, 
    img: 'img/vinchaleddegoma.jpg',
     category: 'herramientas',
      description: 'Vincha led de goma, ideal para trabajos de mecánica y actividades al aire libre.'
     },
  { id: 32,
     title: 'Auto parlante bluetooth',
      price: 32000, 
      img: 'img/autoparlante.jpg',
       category: 'hogar', 
       description: 'Auto parlante bluetooth, con radio ,  con cargadr usb y entrada auxilliar  ideal para disfrutar de tu música en cualquier lugar.' 
      },
  { id: 33,
     title: 'Candado',
      price: 3500, 
      img: 'img/candado.jpg', 
      category: 'hogar',
       description: 'Candado de alta seguridad, ideal para proteger tus pertenencias.' 
      },
  { id: 34, 
    title: 'Vincha led resistente 1100 lumens', 
    price: 12000, 
    img: 'img/vinchaled.jpg',
     category: 'hogar',
      description: 'Vincha led 1100 lumens ,  resistente al agua, alcance 300 mts de disctancia , ideal  para mecanica o para actividades al aire libre.'
     },
  { id: 35,
     title: 'Lector de billetes falsos ',
      price: 2000, 
      img: 'img/lectordebilletes.jpg',
       category: 'hogar',
        description: 'Lector de billetes falsos, ideal para verificar la autenticidad de tus billetes.'
       },
  { id: 36, 
    title: 'Calculadora letras grandes ',
     price: 7300, 
     img: 'img/calculadora.jpg', 
     category: 'hogar',
      description: 'Calculadora de letras grandes.' 
    },
  { id: 37,
     title: 'Sistema Medidor de presion para neumaticos (sin stock)',
      price: 38000,
       img: 'img/sistematpms.jpg',
        category: 'hogar', 
        description: 'Monitor digital solar mas usb , 4 sensores externos , alrma de presion y temperatura ,kit listo para usar .' 
      },
  { id: 38,
     title: 'Camara para auto delantera y trasera full hd (sin stoc{k) ',
      price: 38000, 
      img: 'img/camaradeauto.jpg', 
      category: 'hogar', 
      description: 'Camara para auto delantera y trasera full hd , conexion wifi para visualizar y desacargr videos en tu celular , vision nocturna , funcion de reversa con angulo amplio .'
     },
  { id: 39, 
    title: 'Contadora de billetes digital  ', 
    price: 84000, 
    img: 'img/contadordebilletes.jpg',
     category: 'hogar', 
     description: 'Contadora de billetes digital, ideal para contar y verificar billetes de forma rápida y precisa.'
     },
  { id: 40,
     title: 'Sopladora aspiradora inalambrica 21 v  ', 
     price: 39500,
      img: 'img/sopladora.jpg', 
      category: 'herramientas', 
      description: 'Sopladora aspiradora inalambrica 21 v, con dos baterias .'
     },
  { id: 41, 
    title: 'Paneles Led Flexible 20x90cm (sin stock )  ',
     price: 145000, 
     img: 'img/imagenled.jpg', 
     category: 'hogar',
      description: 'Paneles Led Flexible,20x90cm , es autoadhesiva , trae un cable largo con corte y control  remoto .'
     },
  { id: 42,
     title: ' Juego de llave de tubo 12 piezas , con criquet  1/2"',
      price: 19500, 
      img: 'img/llave de tubo.jpg', 
      category: 'herramientas',
       description: ' Criquet profesional de alta resistencia , mango ergonomico antideslizante .'
       },
  { id: 43, 
    title: 'Destornillador electrico usb  de 47 piezas (Sin stock) ', 
    price: 18500, 
    img: 'img/destornilladorinhalambrico.jpg', 
    category: 'herramientas',
     description: 'Destornillador electrico usb  de 47 piezas ,kit basico para llegar a todos los rincones incluye mechas y puntas .' 
    },
  { id: 44,
     title: ' Kit destornillador 115 en 1  ', 
     price: 14000, 
     img: 'img/kitdestornillador.jpg',
      category: 'herramientas',
       description: 'Kit destornillador 115 en 1, incluye una amplia variedad de puntas y accesorios ideal para reparaciones de notebook , camaras ,smartphone , y articulos electronicos , posee puntas magneticas.' 
      },
  { id: 45, 
    title: ' Mezcladora electrica de mano   ', 
    price: 95000, 
    img: 'img/mezcladora.jpg',
     category: 'herramientas',
      description: 'Mezcladora electrica de mano, ideal para mezclar pinturas, cementos yeso o mortero.' 
    },
  { id: 46, 
    title: 'Pulidora electrica de alto rendimiento  ',
     price: 105000, 
     img: 'img/pulidora.jpg', 
     category: 'herramientas',
      description: 'Pulidora electrica de alto rendimiento, ideal para pulir  autos maderas y superficies varias , potencia y velocidad regulables para acabados profesionales.' 
    },
  { id: 47,
     title: ' Motosierra a gasolina profesional 52cc ', 
     price: 115000,
      img: 'img/motosierra.jpg', 
      category: 'herramientas',
       description: 'Motosierra a gasolina profesional 52cc, ideal para trabajos de jardinería y tala de árboles, con gran potencia y durabilidad.'
       },
  { id: 48, 
    title: ' Hacha con mango de madera   ', 
    price: 9800,
     img: 'img/hacha.jpg', 
     category: 'herramientas',
      description: 'Hacha con mango de madera, ideal para trabajos de jardinería y construcción, con hoja de acero de alta calidad.' 
    },
  { id: 49, 
    title: 'Vincha led de 5 focos  ',
     price: 8000,
      img: 'img/vinchaled5.jpg', 
      category: 'herramientas',
      description: 'Vincha led de 5 focos, ideal para trabajos de mecánica y actividades al aire libre,super potente , carga usb .' 
    },
  { id: 50,
     title: ' kit luces led para bicicletas    ',
      price: 7500,
       img: 'img/lucesdebicis.jpg', 
       category: 'herramientas',
        description: 'luz delantera y luz trasera recargables por usb .' 
      },
  { id: 51, 
    title: ' Set de mechas 8 piezas    ',
     price: 6900, 
     img: 'img/mechas.jpg', 
     category: 'herramientas', 
     description: 'Set de mechas de alta calidad, incluye 8 piezas en diferentes tamaños, ideal para perforar pared .' 
    },
  { id: 52,
     title: ' Taladro con kit de herramientas uso profesional  ', 
     price: 57000,
      img: 'img/taladrokitenmaletin.jpg', 
      category: 'herramientas', 
      description: 'Taladro atornillador inhalambrico con 2 baterias de 21 voltios , maletin con accesorios.' 
    },
  { id: 53, 
    title: ' Martillo   ', 
    price: 6900, 
    img: 'img/martillo.jpg',
     category: 'herramientas', 
     description: 'Martillo de acero forjado, ideal para trabajos de construcción y reparación.' 
    },
  { id: 54, 
    title: ' Vincha frontal led recargable usb  ', 
    price: 12000, 
    img: 'img/vinchausb.jpg',
     category: 'herramientas', 
     description: 'Vincha frontal LED recargable por USB, ialcance hasta 100 mts , iluminacion potente con varios modos , sensor de movimiento ideal para trabajos de mecánica y mantenimiento.',
     nuevo: true
     },

  { id: 55, title: ' Broca esacalonada de titanio 4 -20mm  ', price: 4800, img: 'img/broca.jpg', category: 'herramientas', description: 'Broca escalonada de titanio, ideal para perforar materiales de diferentes grosores.' },
  { id: 56, title: ' Discos flap blister x 10 unidades ', price: 8500, img: 'img/discosflap.jpg', category: 'herramientas', description: 'Discos flap, ideales para lijar y pulir superficies de metal y madera.' },
  { id: 57, title: ' Liquido refrigerante concentrado  x 1 litro', price: 4600, img: 'img/liquidorefrigerante.jpg', category: 'herramientas', description: 'Liquido refrigerante concentrado, colores rojo amarillo , verde .' },
  { id: 58, title: ' Lubricante multiuso 330 cm 3 ', price: 5500, img: 'img/lubricante.jpg', category: 'herramientas', description: 'Lubricante multiuso, ideal para evitar el oxido , lubrica y destraba .' },
  { id: 59, title: ' Kit taladro mas amoladora de alta potencia inhalambrica ', price: 156000, img: 'img/kittaladroyamoladora.jpg', category: 'herramientas', description: 'Kit de herramientas que incluye un taladro inhalámbrico con velocidad ajustable y una amoladora angular  de alta potencia, ambos inhalámbricos, incluye 2 baterías más cargador rápido.', nuevo: true },
  { id: 60, title: ' Desmalezadora a explosión 52cc ', price: 126000, img: 'img/desmalezadora.jpg', category: 'herramientas', description: 'Desmalezadora a explosión 52cc, ideal para trabajos de jardinería y mantenimiento de áreas verdes.' },
  { id: 61, title: ' Zuncho Criquet de amarre de 10 mts (sin stock)', price: 17000, img: 'img/zunchocriquet.jpg', category: 'herramientas', description: 'Zuncho Criquet de amarre de 10 mts, super reforado,  ideal para amarrar y remolcar 5 toneladas.' },
  { id: 62, title: 'Set de juego de llaves de 46 piezas ', price: 24500, img: 'img/setde46pzas.jpg', category: 'herramientas', description: 'Set de juego de llaves de 46 piezas, uso profesional , ideal para trabajos de mecánica y mantenimiento.', nuevo: true },
  { id: 63,
     title: 'Taladro de impacto con 48 voltios  ',
      price: 138000, 
      img: 'img/taladrodeimpacto.jpg', 
      category: 'herramientas', 
      description: 'Taladro de impacto con 48 voltios,  potente motor para trabajos intensos, maletín de transporte, y cuatro puntas profesionales  incluye 2 baterias de litio.',
    nuevo: true,
   },
  { id: 64, title: 'Llave criquet de 1/2 ', price: 8000, img: 'img/llavecriquet.jpg', category: 'herramientas', description: 'Llave criquet de 1/2, ideal para trabajos de mecánica y mantenimiento.' },
  { id: 65, title: 'Drone plegable 6 KHD ', price: 57000, img: 'img/drone.jpg', category: 'herramientas', description: 'Drone plegable 6 KHD, ideal para capturar imágenes aéreas y videos en alta definición, protección 360 contra golpes, ideal para principiantes, fácil de usar.', nuevo: true },
  { id: 66,
     title: 'Set de 6 destonilladores philips ', 
     price: 9000, img: 'img/destornilladorespack.jpg',
      category: 'herramientas',
       description: 'Set de 6 destonilladores philips, ideal para trabajos de precisión y mantenimiento.',
        nuevo: true 
      },

  { id: 67,
     title: 'Amoladora angular inhalambrica con 2 baterias  ', 
     price: 100000, 
     img: 'img/amoladoraangular.jpg',
      category: 'herramientas',
       description: 'Amoladora angular inhalambrica con 2 baterias, ideal para trabajos de corte y desbaste en metal y otros materiales.',
        nuevo: true 
      },
      { id: 68,
     title: 'Aspiradora y sopladora portátil  ', 
     price: 8500,
      img: 'img/aspiradoraportatil.jpg',
      category: 'herramientas',
       description: 'Aspiradora y sopladora portátil,carga usb ,  ideal para limpieza de autos, hogar u oficina , incluye accesorios para diferentes superficies.',
        nuevo: true 
      },
];

// REFERENCIAS
const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter');
const btnNovedades = document.getElementById('btnNovedades');

// ESTADO DE FILTROS
let currentCategory = 'all';     // 'all' | 'herramientas' | 'hogar'
let currentSearch = '';
let showOnlyNew = false;         // toggle de “Ver solo novedades”

// FORMATO DE PRECIO
function formatPrice(num) {
  return '$' + Number(num).toLocaleString('es-AR');
}

// UI: CARD
function createCard(product) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.category = product.category;

  card.innerHTML = `
    <div class="thumb" style="position:relative">
      ${product.nuevo ? '<span class="badge">NOVEDAD</span>' : ''}
      <img src="${product.img}" alt="${product.title}">
    </div>
    <div class="body">
      <div class="title">
        <span>${product.title}</span>
        <span class="price">${formatPrice(product.price)}</span>
      </div>
      <p class="meta">${product.description}</p>
    </div>
    <div class="actions">
      <button class="btn-ver">Ver</button>
    </div>
  `;

  const btn = card.querySelector('.btn-ver');
  const meta = card.querySelector('.meta');

  btn.addEventListener('click', () => {
    meta.classList.toggle('visible');
    btn.textContent = meta.classList.contains('visible') ? 'Ocultar' : 'Ver';
  });

  return card;
}

// APLICA FILTROS + ORDEN (actualizado)
function getFilteredAndSorted() {
  let list = products;

  // categoría
  if (currentCategory !== 'all') {
    list = list.filter(p => p.category === currentCategory);
  }

  // novedades
  if (showOnlyNew) {
    list = list.filter(p => p.nuevo === true);
  }

  // búsqueda
  if (currentSearch) {
    const term = currentSearch.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
  }

  // 🔽 Primero los productos nuevos, luego los demás, todos ordenados por precio
  return [...list].sort((a, b) => {
    if (a.nuevo && !b.nuevo) return -1;
    if (!a.nuevo && b.nuevo) return 1;
    return a.price - b.price;
  });
}

// RENDER
function render() {
  const list = getFilteredAndSorted();
  grid.innerHTML = '';
  if (!list.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;color:#777;">No se encontraron productos.</p>';
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(p => frag.appendChild(createCard(p)));
  grid.appendChild(frag);
}

// EVENTOS
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    render();
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.filter || 'all';
    render();
  });
});

if (btnNovedades) {
  btnNovedades.addEventListener('click', () => {
    showOnlyNew = !showOnlyNew;

    // Quita el estado activo de los filtros de categoría si se activa "novedades"
    if (showOnlyNew) {
      filterButtons.forEach(b => b.classList.remove('active'));
      currentCategory = 'all';
      btnNovedades.classList.add('active');
      btnNovedades.textContent = 'Ver todo';
    } else {
      btnNovedades.classList.remove('active');
      btnNovedades.textContent = 'Ver solo novedades';
    }

    render();
  });
}



