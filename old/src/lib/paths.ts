const { PUBLIC_URL } = process.env;

const paths = [
  {
    800: `${PUBLIC_URL}/images/800/05.png`,
    250: `${PUBLIC_URL}/images/250/05.png`,
    footnote: ['Premio mejor primer actor', 'Círculo de críticos de teatro'],
    year: 1978,
  },
  {
    800: `${PUBLIC_URL}/images/800/06.png`,
    250: `${PUBLIC_URL}/images/250/06.png`,
    footnote: ['Las Pantuflas.', 'Director: Romeo Costea'],
    year: 1983,
  },
  {
    800: `${PUBLIC_URL}/images/800/08.png`,
    250: `${PUBLIC_URL}/images/250/08.png`,
    footnote: null,
    year: 1956,
  },
  {
    800: `${PUBLIC_URL}/images/800/09.png`,
    250: `${PUBLIC_URL}/images/250/09.png`,
    footnote: ['El rincón del malo.', ' Autor: Gilberto Pinto'],
    year: 1956,
  },
  {
    800: `${PUBLIC_URL}/images/800/10.png`,
    250: `${PUBLIC_URL}/images/250/10.png`,
    footnote: ['El extraño viaje de Simón el malo'],
    year: 1970,
  },

  {
    800: `${PUBLIC_URL}/images/800/12.png`,
    250: `${PUBLIC_URL}/images/250/12.png`,
    footnote: ['El tirano Aguirre'],
    year: 1956,
  },
  {
    800: `${PUBLIC_URL}/images/800/13.png`,
    250: `${PUBLIC_URL}/images/250/13.png`,
    footnote: ['Cantaclaro'],
    year: 1957,
  },
  {
    800: `${PUBLIC_URL}/images/800/14.png`,
    250: `${PUBLIC_URL}/images/250/14.png`,
    footnote: ['1er. aniversario de Televisa'],
    year: 1953,
  },
  {
    800: `${PUBLIC_URL}/images/800/15.png`,
    250: `${PUBLIC_URL}/images/250/15.png`,
    footnote: [
      'Juego de niños, de Ruiz Iriarte.',
      'Programa: Teatro del hogar',
      'Una escena con Aldo Monti, Ciro Medina, Liliana Durán y Reyna Hidalgo',
    ],
    year: 1956,
  },
  {
    800: `${PUBLIC_URL}/images/800/16.png`,
    250: `${PUBLIC_URL}/images/250/16.png`,
    footnote: ['Shubert', 'Programa especial para TV'],
    year: 1956,
  },
  {
    800: `${PUBLIC_URL}/images/800/17.png`,
    250: `${PUBLIC_URL}/images/250/17.png`,
    footnote: ['Telenovela en Televisa'],
    year: 1957,
  },
  {
    800: `${PUBLIC_URL}/images/800/18.png`,
    250: `${PUBLIC_URL}/images/250/18.png`,
    footnote: ['Piar de Ali Lasser', 'Dirección: Romeo Costea'],
    year: 1975,
  },
  {
    800: `${PUBLIC_URL}/images/800/19.png`,
    250: `${PUBLIC_URL}/images/250/19.png`,
    footnote: [
      'Dulce pajaro de juventud de Tenesse Williams',
      'Dirección: Romeo Costea',
    ],
    year: 1988,
  },
  {
    800: `${PUBLIC_URL}/images/800/20.png`,
    250: `${PUBLIC_URL}/images/250/20.png`,
    footnote: ['La Mandrágora de Nicólas Maquiavelo'],
    year: 1965,
  },
  {
    800: `${PUBLIC_URL}/images/800/21.png`,
    250: `${PUBLIC_URL}/images/250/21.png`,
    footnote: [
      'Todos los días son sábados',
      'Dirección: Enver Cordido',
      'Guión: Salvador Garmendia',
    ],
    year: 1977,
  },
  {
    800: `${PUBLIC_URL}/images/800/22.png`,
    250: `${PUBLIC_URL}/images/250/22.png`,
    footnote: ['Teatro del hogar', 'Televisa'],
    year: 1958,
  },
  {
    800: `${PUBLIC_URL}/images/800/23.png`,
    250: `${PUBLIC_URL}/images/250/23.png`,
    footnote: ['Las Pantuflas.', 'Director: Romeo Costea'],
    year: 1983,
  },
  {
    800: `${PUBLIC_URL}/images/800/24.png`,
    250: `${PUBLIC_URL}/images/250/24.png`,
    footnote: ['Telenovela', 'Televisa'],
    year: 1958,
  },
  {
    800: `${PUBLIC_URL}/images/800/25.png`,
    250: `${PUBLIC_URL}/images/250/25.png`,
    footnote: ['Teatro del hogar', 'Televisa'],
    year: 1958,
  },
  {
    800: `${PUBLIC_URL}/images/800/26.png`,
    250: `${PUBLIC_URL}/images/250/26.png`,
    footnote: ['Teatro del hogar', 'Televisa'],
    year: 1958,
  },
  {
    800: `${PUBLIC_URL}/images/800/27.png`,
    250: `${PUBLIC_URL}/images/250/27.png`,
    footnote: ['Ha llegado un inspector de John Boynton Priestley'],
    year: 1960,
  },
  {
    800: `${PUBLIC_URL}/images/800/28.png`,
    250: `${PUBLIC_URL}/images/250/28.png`,
    footnote: null,
    year: 1948,
  },
  {
    800: `${PUBLIC_URL}/images/800/29.png`,
    250: `${PUBLIC_URL}/images/250/29.png`,
    footnote: null,
    year: 1958,
  },
  {
    800: `${PUBLIC_URL}/images/800/30.png`,
    250: `${PUBLIC_URL}/images/250/30.png`,
    footnote: [
      'Todos los días son sábados',
      'Dirección: Enver Cordido',
      'Guión: Salvador Garmendia',
    ],
    year: 1977,
  },
  {
    800: `${PUBLIC_URL}/images/800/31.png`,
    250: `${PUBLIC_URL}/images/250/31.png`,
    footnote: [
      'Trampa para un hombre solo de Robert Thomas',
      'Dirección: Gilberto Pinto',
      'Bárbara Teyde en la foto',
    ],
    year: 1975,
  },
  {
    800: `${PUBLIC_URL}/images/800/32.png`,
    250: `${PUBLIC_URL}/images/250/32.png`,
    footnote: ['El extraño viaje de Simón el malo'],
    year: 1970,
  },
  {
    800: `${PUBLIC_URL}/images/800/33.png`,
    250: `${PUBLIC_URL}/images/250/33.png`,
    footnote: [
      'Madame Pompinette',
      'Dirección: Isaac Chocrón',
      'Guión: José Gabriel Nuñez',
    ],
    year: 1978,
  },
  {
    800: `${PUBLIC_URL}/images/800/34.png`,
    250: `${PUBLIC_URL}/images/250/34.png`,
    footnote: ['El extraño viaje de Simón el malo', 'Con Eva Blanco'],
    year: 1970,
  },
  {
    800: `${PUBLIC_URL}/images/800/35.png`,
    250: `${PUBLIC_URL}/images/250/35.png`,
    footnote: [
      'Madame Pompinette',
      'Dirección: Isaac Chocrón',
      'Guión: José Gabriel Nuñez',
    ],
    year: 1978,
  },
  {
    800: `${PUBLIC_URL}/images/800/36.png`,
    250: `${PUBLIC_URL}/images/250/36.png`,
    footnote: [
      'Todos los días son sábados',
      'Dirección: Enver Cordido',
      'Guión: Salvador Garmendia',
    ],
    year: 1977,
  },
  {
    800: `${PUBLIC_URL}/images/800/37.png`,
    250: `${PUBLIC_URL}/images/250/37.png`,
    footnote: [
      'Todos los días son sábados',
      'Dirección: Enver Cordido',
      'Guión: Salvador Garmendia',
    ],
    year: 1977,
  },

  {
    800: `${PUBLIC_URL}/images/800/42.png`,
    250: `${PUBLIC_URL}/images/250/42.png`,
    footnote: [
      'Pedido de mano de Anton Chejov',
      'Primera obra de teatro donde actuó',
    ],
    year: 1948,
  },

  {
    800: `${PUBLIC_URL}/images/800/48.png`,
    250: `${PUBLIC_URL}/images/250/48.png`,
    footnote: [
      'Todos los días son sábados',
      'Dirección: Enver Cordido',
      'Guión: Salvador Garmendia',
    ],
    year: 1977,
  },
  {
    800: `${PUBLIC_URL}/images/800/49.png`,
    250: `${PUBLIC_URL}/images/250/49.png`,
    footnote: [
      'Madame Pompinette',
      'Dirección: Isaac Chocrón',
      'Guión: José Gabriel Nuñez',
    ],
    year: 1978,
  },
  {
    800: `${PUBLIC_URL}/images/800/50.png`,
    250: `${PUBLIC_URL}/images/250/50.png`,
    footnote: [
      'Madame Pompinette',
      'Dirección: Isaac Chocrón',
      'Guión: José Gabriel Nuñez',
    ],
    year: 1978,
  },
  {
    800: `${PUBLIC_URL}/images/800/51.png`,
    250: `${PUBLIC_URL}/images/250/51.png`,
    footnote: [
      'Madame Pompinette',
      'Dirección: Isaac Chocrón',
      'Guión: José Gabriel Nuñez',
    ],
    year: 1978,
  },
  {
    800: `${PUBLIC_URL}/images/800/52.png`,
    250: `${PUBLIC_URL}/images/250/52.png`,
    footnote: [
      'Madame Pompinette',
      'Dirección: Isaac Chocrón',
      'Guión: José Gabriel Nuñez',
    ],
    year: 1978,
  },
  {
    800: `${PUBLIC_URL}/images/800/53.png`,
    250: `${PUBLIC_URL}/images/250/53.png`,
    footnote: [
      'Madame Pompinette',
      'Dirección: Isaac Chocrón',
      'Guión: José Gabriel Nuñez',
    ],
    year: 1978,
  },

  {
    800: `${PUBLIC_URL}/images/800/55.png`,
    250: `${PUBLIC_URL}/images/250/55.png`,
    footnote: [
      'Trampa para un hombre solo de Robert Thomas',
      'Dirección: Gilberto Pinto',
      'Bárbara Teyde en la foto',
    ],
    year: 1975,
  },
  {
    800: `${PUBLIC_URL}/images/800/56.png`,
    250: `${PUBLIC_URL}/images/250/56.png`,
    footnote: [
      'Trampa para un hombre solo de Robert Thomas',
      'Dirección: Gilberto Pinto',
      'Bárbara Teyde en la foto',
    ],
    year: 1975,
  },

  {
    800: `${PUBLIC_URL}/images/800/58.png`,
    250: `${PUBLIC_URL}/images/250/58.png`,
    footnote: ['Programa: Teatro del hogar'],
    year: 1956,
  },

  {
    800: `${PUBLIC_URL}/images/800/60.png`,
    250: `${PUBLIC_URL}/images/250/60.png`,
    footnote: [
      'Dulce pajaro de juventud de Tenesse Williams',
      'Dirección: Romeo Costea',
    ],
    year: 1988,
  },

  {
    800: `${PUBLIC_URL}/images/800/63.png`,
    250: `${PUBLIC_URL}/images/250/63.png`,
    footnote: [
      'Dulce pajaro de juventud de Tenesse Williams',
      'Dirección: Romeo Costea',
    ],
    year: 1988,
  },

  {
    800: `${PUBLIC_URL}/images/800/77.png`,
    250: `${PUBLIC_URL}/images/250/77.png`,
    footnote: [
      'Trampa para un hombre solo de Robert Thomas',
      'Dirección: Gilberto Pinto',
      'Bárbara Teyde en la foto',
    ],
    year: 1975,
  },

  {
    800: `${PUBLIC_URL}/images/800/87.png`,
    250: `${PUBLIC_URL}/images/250/87.png`,
    footnote: null,
    year: 1946,
  },
  {
    800: `${PUBLIC_URL}/images/800/88.png`,
    250: `${PUBLIC_URL}/images/250/88.png`,
    footnote: null,
    year: 1958,
  },
  {
    800: `${PUBLIC_URL}/images/800/89.png`,
    250: `${PUBLIC_URL}/images/250/89.png`,
    footnote: [
      'Pedido de mano de Anton Chejov',
      'Primera obra de teatro donde actuó',
    ],
    year: 1948,
  },

  {
    800: `${PUBLIC_URL}/images/800/93.png`,
    250: `${PUBLIC_URL}/images/250/93.png`,
    footnote: [
      'Trampa para un hombre solo de Robert Thomas',
      'Dirección: Gilberto Pinto',
      'Bárbara Teyde en la foto',
    ],
    year: 1975,
  },
  {
    800: `${PUBLIC_URL}/images/800/94.png`,
    250: `${PUBLIC_URL}/images/250/94.png`,
    footnote: [
      'Todos los días son sábados',
      'Dirección: Enver Cordido',
      'Guión: Salvador Garmendia',
    ],
    year: 1977,
  },
  {
    800: `${PUBLIC_URL}/images/800/95.png`,
    250: `${PUBLIC_URL}/images/250/95.png`,
    footnote: [
      'Todos los días son sábados',
      'Dirección: Enver Cordido',
      'Guión: Salvador Garmendia',
    ],
    year: 1977,
  },
  {
    800: `${PUBLIC_URL}/images/800/96.png`,
    250: `${PUBLIC_URL}/images/250/96.png`,
    footnote: [
      'Dulce pajaro de juventud de Tenesse Williams',
      'Dirección: Romeo Costea',
    ],
    year: 1988,
  },
  {
    800: `${PUBLIC_URL}/images/800/97.png`,
    250: `${PUBLIC_URL}/images/250/97.png`,
    footnote: ['El tirano Aguirre'],
    year: 1956,
  },
  {
    800: `${PUBLIC_URL}/images/800/98.png`,
    250: `${PUBLIC_URL}/images/250/98.png`,
    footnote: null,
    year: 1980,
  },
  {
    800: `${PUBLIC_URL}/images/800/99.png`,
    250: `${PUBLIC_URL}/images/250/99.png`,
    footnote: [
      'Trampa para un hombre solo de Robert Thomas',
      'Dirección: Gilberto Pinto',
      'Bárbara Teyde en la foto',
    ],
    year: 1975,
  },

  {
    800: `${PUBLIC_URL}/images/800/101.png`,
    250: `${PUBLIC_URL}/images/250/101.png`,
    footnote: [
      'Pedido de mano de Anton Chejov',
      'Primera obra de teatro donde actuó',
    ],
    year: 1948,
  },

  {
    800: `${PUBLIC_URL}/images/800/04.png`,
    250: `${PUBLIC_URL}/images/250/04.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/07.png`,
    250: `${PUBLIC_URL}/images/250/07.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/11.png`,
    250: `${PUBLIC_URL}/images/250/11.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/38.png`,
    250: `${PUBLIC_URL}/images/250/38.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/39.png`,
    250: `${PUBLIC_URL}/images/250/39.png`,
    footnote: ['Telenovela en Televisa'],
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/40.png`,
    250: `${PUBLIC_URL}/images/250/40.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/41.png`,
    250: `${PUBLIC_URL}/images/250/41.png`,
    footnote: ['Telenovela en Televisa'],
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/43.png`,
    250: `${PUBLIC_URL}/images/250/43.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/44.png`,
    250: `${PUBLIC_URL}/images/250/44.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/45.png`,
    250: `${PUBLIC_URL}/images/250/45.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/46.png`,
    250: `${PUBLIC_URL}/images/250/46.png`,
    footnote: ['Telenovela en Televisa'],
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/47.png`,
    250: `${PUBLIC_URL}/images/250/47.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/54.png`,
    250: `${PUBLIC_URL}/images/250/54.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/57.png`,
    250: `${PUBLIC_URL}/images/250/57.png`,
    footnote: ['George Dandin o el marido confundido de Molière'],
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/59.png`,
    250: `${PUBLIC_URL}/images/250/59.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/61.png`,
    250: `${PUBLIC_URL}/images/250/61.png`,
    footnote: ['Con Aura Rivas'],
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/62.png`,
    250: `${PUBLIC_URL}/images/250/62.png`,
    footnote: ['Con Eva Blanco'],
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/64.png`,
    250: `${PUBLIC_URL}/images/250/64.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/65.png`,
    250: `${PUBLIC_URL}/images/250/65.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/66.png`,
    250: `${PUBLIC_URL}/images/250/66.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/68.png`,
    250: `${PUBLIC_URL}/images/250/68.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/69.png`,
    250: `${PUBLIC_URL}/images/250/69.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/70.png`,
    250: `${PUBLIC_URL}/images/250/70.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/71.png`,
    250: `${PUBLIC_URL}/images/250/71.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/72.png`,
    250: `${PUBLIC_URL}/images/250/72.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/73.png`,
    250: `${PUBLIC_URL}/images/250/73.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/75.png`,
    250: `${PUBLIC_URL}/images/250/75.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/78.png`,
    250: `${PUBLIC_URL}/images/250/78.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/79.png`,
    250: `${PUBLIC_URL}/images/250/79.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/80.png`,
    250: `${PUBLIC_URL}/images/250/80.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/81.png`,
    250: `${PUBLIC_URL}/images/250/81.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/82.png`,
    250: `${PUBLIC_URL}/images/250/82.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/83.png`,
    250: `${PUBLIC_URL}/images/250/83.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/84.png`,
    250: `${PUBLIC_URL}/images/250/84.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/85.png`,
    250: `${PUBLIC_URL}/images/250/85.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/86.png`,
    250: `${PUBLIC_URL}/images/250/86.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/90.png`,
    250: `${PUBLIC_URL}/images/250/90.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/91.png`,
    250: `${PUBLIC_URL}/images/250/91.png`,
    footnote: ['INCIBA'],
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/92.png`,
    250: `${PUBLIC_URL}/images/250/92.png`,
    footnote: null,
    year: null,
  },
  {
    800: `${PUBLIC_URL}/images/800/100.png`,
    250: `${PUBLIC_URL}/images/250/100.png`,
    footnote: null,
    year: null,
  },
];

export default paths;
