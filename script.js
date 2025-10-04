const libros = [
  {
    codigoLibro: 'L001',
    tituloLibro: 'Cien Años de Soledad',
    autorLibro: 'Gabriel García Márquez',
    descripcionLibro: 'Una obra maestra del realismo mágico.',
    precioLibro: 120.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L002',
    tituloLibro: 'Don Quijote de la Mancha',
    autorLibro: 'Miguel de Cervantes',
    descripcionLibro: 'La gran novela clásica de la literatura española.',
    precioLibro: 95.00,
    stockLibro: 5
  },
  {
    codigoLibro: 'L003',
    tituloLibro: 'El Principito',
    autorLibro: 'Antoine de Saint-Exupéry',
    descripcionLibro: 'Una historia encantadora para niños y adultos.',
    precioLibro: 50.00,
    stockLibro: 20
  },
  {
    codigoLibro: 'L004',
    tituloLibro: '1984',
    autorLibro: 'George Orwell',
    descripcionLibro: 'Una visión distópica del futuro.',
    precioLibro: 80.00,
    stockLibro: 8
  },
  {
    codigoLibro: 'L005',
    tituloLibro: 'Rayuela',
    autorLibro: 'Julio Cortázar',
    descripcionLibro: 'Una obra que rompe las reglas de la narrativa.',
    precioLibro: 110.00,
    stockLibro: 7
  },
  {
    codigoLibro: 'L006',
    tituloLibro: 'Crimen y Castigo',
    autorLibro: 'Fiódor Dostoyevski',
    descripcionLibro: 'Una exploración profunda de la moralidad humana.',
    precioLibro: 130.00,
    stockLibro: 6
  },
  {
    codigoLibro: 'L007',
    tituloLibro: 'Orgullo y Prejuicio',
    autorLibro: 'Jane Austen',
    descripcionLibro: 'Un clásico sobre el amor y las costumbres sociales.',
    precioLibro: 85.00,
    stockLibro: 12
  },
  {
    codigoLibro: 'L008',
    tituloLibro: 'La Odisea',
    autorLibro: 'Homero',
    descripcionLibro: 'El épico viaje de Ulises de regreso a Ítaca.',
    precioLibro: 100.00,
    stockLibro: 9
  },
  {
    codigoLibro: 'L009',
    tituloLibro: 'Hamlet',
    autorLibro: 'William Shakespeare',
    descripcionLibro: 'La tragedia más famosa del dramaturgo inglés.',
    precioLibro: 75.00,
    stockLibro: 15
  },
  {
    codigoLibro: 'L010',
    tituloLibro: 'La Divina Comedia',
    autorLibro: 'Dante Alighieri',
    descripcionLibro: 'Un viaje literario por el Infierno, Purgatorio y Paraíso.',
    precioLibro: 140.00,
    stockLibro: 5
  },
  {
    codigoLibro: 'L011',
    tituloLibro: 'Los Miserables',
    autorLibro: 'Victor Hugo',
    descripcionLibro: 'Una historia de justicia, amor y redención.',
    precioLibro: 125.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L012',
    tituloLibro: 'Madame Bovary',
    autorLibro: 'Gustave Flaubert',
    descripcionLibro: 'La trágica historia de Emma Bovary.',
    precioLibro: 90.00,
    stockLibro: 8
  },
  {
    codigoLibro: 'L013',
    tituloLibro: 'Moby Dick',
    autorLibro: 'Herman Melville',
    descripcionLibro: 'La obsesión del capitán Ahab contra la gran ballena blanca.',
    precioLibro: 115.00,
    stockLibro: 6
  },
  {
    codigoLibro: 'L014',
    tituloLibro: 'El Gran Gatsby',
    autorLibro: 'F. Scott Fitzgerald',
    descripcionLibro: 'La era del jazz y el sueño americano roto.',
    precioLibro: 85.00,
    stockLibro: 11
  },
  {
    codigoLibro: 'L015',
    tituloLibro: 'Fausto',
    autorLibro: 'Johann Wolfgang von Goethe',
    descripcionLibro: 'El pacto con el diablo en busca de conocimiento y placer.',
    precioLibro: 100.00,
    stockLibro: 7
  },
  {
    codigoLibro: 'L016',
    tituloLibro: 'La Iliada',
    autorLibro: 'Homero',
    descripcionLibro: 'El poema épico de la guerra de Troya.',
    precioLibro: 85.00,
    stockLibro: 6
  },
  {
    codigoLibro: 'L017',
    tituloLibro: 'El Nombre de la Rosa',
    autorLibro: 'Umberto Eco',
    descripcionLibro: 'Un misterio medieval lleno de simbolismo.',
    precioLibro: 120.00,
    stockLibro: 9
  },
  {
    codigoLibro: 'L018',
    tituloLibro: 'Drácula',
    autorLibro: 'Bram Stoker',
    descripcionLibro: 'La obra clásica de terror y vampiros.',
    precioLibro: 95.00,
    stockLibro: 11
  },
  {
    codigoLibro: 'L019',
    tituloLibro: 'Frankenstein',
    autorLibro: 'Mary Shelley',
    descripcionLibro: 'El mito moderno del monstruo creado por el hombre.',
    precioLibro: 88.00,
    stockLibro: 7
  },
  {
    codigoLibro: 'L020',
    tituloLibro: 'La Metamorfosis',
    autorLibro: 'Franz Kafka',
    descripcionLibro: 'La historia de Gregor Samsa, convertido en insecto.',
    precioLibro: 70.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L021',
    tituloLibro: 'El Retrato de Dorian Gray',
    autorLibro: 'Oscar Wilde',
    descripcionLibro: 'Un joven cuya belleza permanece mientras su retrato envejece.',
    precioLibro: 90.00,
    stockLibro: 8
  },
  {
    codigoLibro: 'L022',
    tituloLibro: 'El Conde de Montecristo',
    autorLibro: 'Alexandre Dumas',
    descripcionLibro: 'Una épica historia de venganza y justicia.',
    precioLibro: 140.00,
    stockLibro: 12
  },
  {
    codigoLibro: 'L023',
    tituloLibro: 'Alicia en el País de las Maravillas',
    autorLibro: 'Lewis Carroll',
    descripcionLibro: 'Un clásico de la literatura fantástica infantil.',
    precioLibro: 75.00,
    stockLibro: 14
  },
  {
    codigoLibro: 'L024',
    tituloLibro: 'Las Aventuras de Tom Sawyer',
    autorLibro: 'Mark Twain',
    descripcionLibro: 'Las travesuras de Tom y Huck en el río Mississippi.',
    precioLibro: 80.00,
    stockLibro: 9
  },
  {
    codigoLibro: 'L025',
    tituloLibro: 'Viaje al Centro de la Tierra',
    autorLibro: 'Julio Verne',
    descripcionLibro: 'Una expedición increíble al interior de la Tierra.',
    precioLibro: 95.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L026',
    tituloLibro: 'Veinte Mil Leguas de Viaje Submarino',
    autorLibro: 'Julio Verne',
    descripcionLibro: 'El capitán Nemo y su submarino Nautilus.',
    precioLibro: 100.00,
    stockLibro: 11
  },
  {
    codigoLibro: 'L027',
    tituloLibro: 'La Isla Misteriosa',
    autorLibro: 'Julio Verne',
    descripcionLibro: 'Aventuras en una isla llena de secretos.',
    precioLibro: 105.00,
    stockLibro: 7
  },
  {
    codigoLibro: 'L028',
    tituloLibro: 'Harry Potter y la Piedra Filosofal',
    autorLibro: 'J.K. Rowling',
    descripcionLibro: 'El inicio de la saga mágica de Harry Potter.',
    precioLibro: 120.00,
    stockLibro: 20
  },
  {
    codigoLibro: 'L029',
    tituloLibro: 'Harry Potter y la Cámara Secreta',
    autorLibro: 'J.K. Rowling',
    descripcionLibro: 'El segundo año de Harry en Hogwarts.',
    precioLibro: 125.00,
    stockLibro: 18
  },
  {
    codigoLibro: 'L030',
    tituloLibro: 'Harry Potter y el Prisionero de Azkaban',
    autorLibro: 'J.K. Rowling',
    descripcionLibro: 'El tercer libro de la famosa saga mágica.',
    precioLibro: 130.00,
    stockLibro: 15
  },
  {
    codigoLibro: 'L031',
    tituloLibro: 'El Hobbit',
    autorLibro: 'J.R.R. Tolkien',
    descripcionLibro: 'La historia de Bilbo Bolsón y su aventura inesperada.',
    precioLibro: 140.00,
    stockLibro: 13
  },
  {
    codigoLibro: 'L032',
    tituloLibro: 'El Señor de los Anillos: La Comunidad del Anillo',
    autorLibro: 'J.R.R. Tolkien',
    descripcionLibro: 'La primera parte de la épica trilogía.',
    precioLibro: 160.00,
    stockLibro: 12
  },
  {
    codigoLibro: 'L033',
    tituloLibro: 'El Señor de los Anillos: Las Dos Torres',
    autorLibro: 'J.R.R. Tolkien',
    descripcionLibro: 'La segunda parte de la aventura en la Tierra Media.',
    precioLibro: 165.00,
    stockLibro: 11
  },
  {
    codigoLibro: 'L034',
    tituloLibro: 'El Señor de los Anillos: El Retorno del Rey',
    autorLibro: 'J.R.R. Tolkien',
    descripcionLibro: 'La conclusión épica de la trilogía.',
    precioLibro: 170.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L035',
    tituloLibro: 'El Alquimista',
    autorLibro: 'Paulo Coelho',
    descripcionLibro: 'Un viaje espiritual en busca de la leyenda personal.',
    precioLibro: 90.00,
    stockLibro: 16
  },
  {
    codigoLibro: 'L036',
    tituloLibro: 'Brida',
    autorLibro: 'Paulo Coelho',
    descripcionLibro: 'Una historia sobre magia y autodescubrimiento.',
    precioLibro: 85.00,
    stockLibro: 9
  },
  {
    codigoLibro: 'L037',
    tituloLibro: 'Once Minutos',
    autorLibro: 'Paulo Coelho',
    descripcionLibro: 'Una reflexión sobre el amor y la pasión.',
    precioLibro: 95.00,
    stockLibro: 8
  },
  {
    codigoLibro: 'L038',
    tituloLibro: 'La Sombra del Viento',
    autorLibro: 'Carlos Ruiz Zafón',
    descripcionLibro: 'Un misterio literario en la Barcelona de posguerra.',
    precioLibro: 110.00,
    stockLibro: 12
  },
  {
    codigoLibro: 'L039',
    tituloLibro: 'El Juego del Ángel',
    autorLibro: 'Carlos Ruiz Zafón',
    descripcionLibro: 'Una novela sobre un escritor atrapado en un misterio.',
    precioLibro: 115.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L040',
    tituloLibro: 'El Prisionero del Cielo',
    autorLibro: 'Carlos Ruiz Zafón',
    descripcionLibro: 'La tercera entrega de El Cementerio de los Libros Olvidados.',
    precioLibro: 120.00,
    stockLibro: 9
  },
  {
    codigoLibro: 'L041',
    tituloLibro: 'El Laberinto de los Espíritus',
    autorLibro: 'Carlos Ruiz Zafón',
    descripcionLibro: 'El cierre de la saga literaria más aclamada.',
    precioLibro: 125.00,
    stockLibro: 8
  },
  {
    codigoLibro: 'L042',
    tituloLibro: 'It',
    autorLibro: 'Stephen King',
    descripcionLibro: 'El terrorífico payaso Pennywise aterroriza a un pueblo.',
    precioLibro: 150.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L043',
    tituloLibro: 'El Resplandor',
    autorLibro: 'Stephen King',
    descripcionLibro: 'La pesadilla del Hotel Overlook.',
    precioLibro: 130.00,
    stockLibro: 11
  },
  {
    codigoLibro: 'L044',
    tituloLibro: 'Cementerio de Animales',
    autorLibro: 'Stephen King',
    descripcionLibro: 'Una novela de terror sobre la vida y la muerte.',
    precioLibro: 125.00,
    stockLibro: 7
  },
  {
    codigoLibro: 'L045',
    tituloLibro: 'Carrie',
    autorLibro: 'Stephen King',
    descripcionLibro: 'Una joven con poderes telequinéticos en busca de venganza.',
    precioLibro: 110.00,
    stockLibro: 8
  },
  {
    codigoLibro: 'L046',
    tituloLibro: 'La Chica del Tren',
    autorLibro: 'Paula Hawkins',
    descripcionLibro: 'Un thriller psicológico lleno de giros.',
    precioLibro: 100.00,
    stockLibro: 12
  },
  {
    codigoLibro: 'L047',
    tituloLibro: 'Perdida',
    autorLibro: 'Gillian Flynn',
    descripcionLibro: 'Una historia de desaparición y secretos oscuros.',
    precioLibro: 105.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L048',
    tituloLibro: 'Los Juegos del Hambre',
    autorLibro: 'Suzanne Collins',
    descripcionLibro: 'Una lucha por la supervivencia en un futuro distópico.',
    precioLibro: 120.00,
    stockLibro: 14
  },
  {
    codigoLibro: 'L049',
    tituloLibro: 'En Llamas',
    autorLibro: 'Suzanne Collins',
    descripcionLibro: 'La segunda entrega de la saga Los Juegos del Hambre.',
    precioLibro: 125.00,
    stockLibro: 12
  },
  {
    codigoLibro: 'L050',
    tituloLibro: 'Sinsajo',
    autorLibro: 'Suzanne Collins',
    descripcionLibro: 'La conclusión de la saga de Katniss Everdeen.',
    precioLibro: 130.00,
    stockLibro: 11
  },
  {
    codigoLibro: 'L051',
    tituloLibro: 'Dune',
    autorLibro: 'Frank Herbert',
    descripcionLibro: 'Una de las mejores novelas de ciencia ficción.',
    precioLibro: 160.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L052',
    tituloLibro: 'Fundación',
    autorLibro: 'Isaac Asimov',
    descripcionLibro: 'La saga de ciencia ficción más influyente de la historia.',
    precioLibro: 150.00,
    stockLibro: 9
  },
  {
    codigoLibro: 'L053',
    tituloLibro: 'Yo, Robot',
    autorLibro: 'Isaac Asimov',
    descripcionLibro: 'Una colección de relatos sobre la robótica y la humanidad.',
    precioLibro: 120.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L054',
    tituloLibro: 'Neuromante',
    autorLibro: 'William Gibson',
    descripcionLibro: 'La obra que dio origen al género ciberpunk.',
    precioLibro: 135.00,
    stockLibro: 7
  },
  {
    codigoLibro: 'L055',
    tituloLibro: 'Ready Player One',
    autorLibro: 'Ernest Cline',
    descripcionLibro: 'Una aventura en un mundo virtual lleno de referencias pop.',
    precioLibro: 140.00,
    stockLibro: 13
  },
  {
    codigoLibro: 'L056',
    tituloLibro: 'El Código Da Vinci',
    autorLibro: 'Dan Brown',
    descripcionLibro: 'Un thriller lleno de misterios religiosos.',
    precioLibro: 125.00,
    stockLibro: 15
  },
  {
    codigoLibro: 'L057',
    tituloLibro: 'Ángeles y Demonios',
    autorLibro: 'Dan Brown',
    descripcionLibro: 'La primera novela con el profesor Robert Langdon.',
    precioLibro: 120.00,
    stockLibro: 14
  },
  {
    codigoLibro: 'L058',
    tituloLibro: 'Inferno',
    autorLibro: 'Dan Brown',
    descripcionLibro: 'Un misterio ligado a la obra de Dante.',
    precioLibro: 130.00,
    stockLibro: 12
  },
  {
    codigoLibro: 'L059',
    tituloLibro: 'Origen',
    autorLibro: 'Dan Brown',
    descripcionLibro: 'Un thriller sobre ciencia y religión.',
    precioLibro: 135.00,
    stockLibro: 10
  },
  {
    codigoLibro: 'L060',
    tituloLibro: 'La Biblia',
    autorLibro: 'Varios Autores',
    descripcionLibro: 'El libro sagrado más influyente de la historia.',
    precioLibro: 200.00,
    stockLibro: 20
  },
  {
    codigoLibro: 'L061',
    tituloLibro: 'El Arte de la Guerra',
    autorLibro: 'Sun Tzu',
    descripcionLibro: 'Un tratado clásico de estrategia militar y vida.',
    precioLibro: 95.00,
    stockLibro: 18
  },
  {
    codigoLibro: 'L062',
    tituloLibro: 'Meditaciones',
    autorLibro: 'Marco Aurelio',
    descripcionLibro: 'Reflexiones filosóficas del emperador romano.',
    precioLibro: 100.00,
    stockLibro: 9
  },
  {
    codigoLibro: 'L063',
    tituloLibro: 'Así Habló Zaratustra',
    autorLibro: 'Friedrich Nietzsche',
    descripcionLibro: 'Una obra fundamental de la filosofía moderna.',
    precioLibro: 110.00,
    stockLibro: 8
  },
  {
    codigoLibro: 'L064',
    tituloLibro: 'El Manifiesto Comunista',
    autorLibro: 'Karl Marx y Friedrich Engels',
    descripcionLibro: 'Un texto político que marcó la historia.',
    precioLibro: 80.00,
    stockLibro: 15
  },
  {
    codigoLibro: 'L065',
    tituloLibro: 'La Riqueza de las Naciones',
    autorLibro: 'Adam Smith',
    descripcionLibro: 'El origen de la economía moderna.',
    precioLibro: 150.00,
    stockLibro: 7
  }
];


const contenedor = document.getElementById('contenedor-libros');
const buscador = document.getElementById('buscador');

// Función para renderizar libros
function mostrarLibros(librosFiltrados) {
  contenedor.innerHTML = '';
  if (librosFiltrados.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron libros.</p>';
    return;
  }

  librosFiltrados.forEach((libro, index) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.style.opacity = "0"; // animación inicial
    tarjeta.style.transform = "translateY(20px)";
    tarjeta.innerHTML = `
      <h3>${libro.tituloLibro}</h3>
      <p><strong>Autor:</strong> ${libro.autorLibro}</p>
      <p>${libro.descripcionLibro}</p>
      <p><strong>Precio:</strong> Q${libro.precioLibro.toFixed(2)}</p>
      <p><strong>Stock:</strong> 
        <span style="color:${libro.stockLibro < 5 ? 'red' : 'green'}">
          ${libro.stockLibro} unidades
        </span>
      </p>
      <button class="btn-comprar">🛒 Comprar</button>
    `;

    // Delay para animación de entrada
    setTimeout(() => {
      tarjeta.style.transition = "all 0.5s ease";
      tarjeta.style.opacity = "1";
      tarjeta.style.transform = "translateY(0)";
    }, index * 120);

    contenedor.appendChild(tarjeta);
  });

  // Evento para botones de compra
  document.querySelectorAll(".btn-comprar").forEach(boton => {
    boton.addEventListener("click", () => {
      alert("✅ Gracias por tu compra en Letras Mágicas 📚");
    });
  });
}

// Mostrar todos los libros al inicio
mostrarLibros(libros);

// Buscador (por título y autor)
buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = libros.filter(libro =>
    libro.tituloLibro.toLowerCase().includes(texto) ||
    libro.autorLibro.toLowerCase().includes(texto)
  );
  mostrarLibros(filtrados);
});

// ===== Menú hamburguesa =====
const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// ---------- Filtrar libros por precio (opcional) ----------
function filtrarLibros(precioMax) {
  const filtrados = libros.filter(libro => libro.precio <= precioMax);
  mostrarLibros(filtrados);
}


// ===== Activar enlace del menú según scroll =====
const secciones = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 120; // compensar altura del nav

  secciones.forEach(seccion => {
    if (scrollPos >= seccion.offsetTop && scrollPos < seccion.offsetTop + seccion.offsetHeight) {
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === seccion.id) {
          link.classList.add("active");
        }
      });
    }
  });
});
