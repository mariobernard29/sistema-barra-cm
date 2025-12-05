document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------------------
    // PEGA AQUÍ TODO TU OBJETO "const recetas = { ... }"
    // ASEGÚRATE DE QUE LOS NOMBRES DE IMÁGENES SEAN CORRECTOS (img/...)
    // ---------------------------------------------------------
     const recetas = {
        "bebidas-sin-alcohol": {
            nombre: "Bebidas sin Alcohol",
            lista: [
                {
                    id: "limonada-natural",
                    nombre: "Limonada Natural",
                    imagen: "img/limonada-natural.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Agua Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "limonada-mineral",
                    nombre: "Limonada Mineral",
                    imagen: "img/limonada-mineral.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Agua Mineral", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "limonada-de-pepino",
                    nombre: "Limonada de Pepino",
                    imagen: "img/limonada-de-pepino.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado Pepino", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Mineral o Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "limonada-de-fresa",
                    nombre: "Limonada de Fresa",
                    imagen: "img/limonada-de-fresa.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado Fresa", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Mineral o Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "horchata-de-coco",
                    nombre: "Horchata de Coco",
                    imagen: "img/horchata-de-coco.png",
                    ingredientes: [
                        { nombre: "Concentrado Horchata", cantidad: "4", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "2", umed: "OZ" },
                        { nombre: "Calahua", cantidad: "2", umed: "OZ" },
                        { nombre: "Leche Entera", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Canela Entera", cantidad: "1", umed: "PZA" },
                        { nombre: "Coco Rayado", cantidad: "1", umed: "GRS" }
                    ],
                    preparacion: [
                        "Mezclar muy bien el concentrado de horchata.",
                        "Agregar hielo al vaso.",
                        "Agregar ingredientes y mezclar.",
                        "Decorar con canela y coco."
                    ]
                },
                {
                    id: "mocktail-de-frutos-rojos",
                    nombre: "Mocktail de Frutos Rojos",
                    imagen: "img/mocktail-de-frutos-rojos.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado Frutos Rojos", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Mineral", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Brocheta Frutos Rojos", cantidad: "TOP", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar ingredientes y mezclar.",
                        "Decorar con brocheta de frutos rojos."
                    ]
                },
                 {
                    id: "limonadas-stevia",
                    nombre: "Limonadas con stevia",
                    imagen: "img/limonada-natural.png",
                    ingredientes: [
                        { nombre: "limon", cantidad: "1.5", umed: "OZ" },
                        { nombre: "Jarabe de stevia", cantidad: "1.5", umed: "OZ" },
                        { nombre: "Agua Natural o mineral", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Consentrado frutal (de ser necesario)", cantidad: "2", umed: "OZ" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "pina-colada-sin-alcohol",
                    nombre: "Piña Colada (Sin Alcohol)",
                    imagen: "img/pina-colada-sin-alcohol.png",
                    ingredientes: [
                        { nombre: "Crema de Coco", cantidad: "2 1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "2 1/2", umed: "OZ" },
                        { nombre: "Leche Entera", cantidad: "3", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Granadina", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Incorporar los ingredientes en la licuadora junto con un vaso de hielo.",
                        "Mezclar hasta obtener una consistencia sólida.",
                        "Añadir granadina a la copa.",
                        "Verter el contenido en la copa.",
                        "Decorar con media naranja deshidratada y una hoja de hierbabuena."
                    ]
                },
                {
                    id: "clamato-preparado",
                    nombre: "Clamato Preparado",
                    imagen: "img/clamato-preparado.png",
                    ingredientes: [
                        { nombre: "Consentrado de michelada", cantidad: "4", umed: "OZ" },
                        { nombre: "Limon", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "Vaso" },
                        { nombre: "Apio", cantidad: "1", umed: "PZ" },
                        { nombre: "Clamato", cantidad: "1", umed: "TOP" }
                       
                    ],
                    preparacion: [
                        "Escarchar el vaso con limon y tajin.",
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Mezclar hasta integrar.",
                        "Decorar con apio.",
                    ]
                }
            ]
        },
        "mixologia": {
            nombre: "Mixología de la Casa",
            lista: [
                {
                    id: "caballito-de-mar",
                    nombre: "Caballito de Mar",
                    imagen: "img/caballito-de-mar.png",
                    ingredientes: [
                        { nombre: "Vodka Oso Negro", cantidad: "2", umed: "OZ" },
                        { nombre: "Concentrado Fresa", cantidad: "2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Limón Entero", cantidad: "1", umed: "PARTIDO EN 4" },
                        { nombre: "Hierbabuena", cantidad: "5", umed: "HOJAS" },
                        { nombre: "Agua Mineral", cantidad: "4", umed: "OZ" }
                    ],
                    preparacion: [
                        "Agregar un limón partido en 4, 5 hojas de hierbabuena y jarabe natural para machacar suave.",
                        "Agregar los demás ingredientes al shaker y agitar hasta que se enfríe el Boston Shake.",
                        "Agregar al tiki hielo nuevo y la bebida del shaker.",
                        "Agregar el agua mineral.",
                        "Agregar hielo molido por encima, hojas de hierbabuena y limón deshidratado para decorar."
                    ]
                },
                {
                    id: "el-pescado",
                    nombre: "El Pescado",
                    imagen: "img/el-pescado.png",
                    ingredientes: [
                        { nombre: "Mezcal Mitre", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Concentrado Frutos Rojos", cantidad: "2", umed: "OZ" },
                        { nombre: "Jarabe de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Sal de Gusano", cantidad: "1", umed: "GRS" },
                        { nombre: "Romero", cantidad: "1", umed: "PZA" },
                        { nombre: "Naranja Deshidratada", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes con hielo al Boston Shaker.",
                        "Mezclar hasta que el Boston se enfríe.",
                        "Agregar al vaso.",
                        "Decorar con naranja deshidratada con un romero cruzado."
                    ]
                },
                {
                    id: "el-tiburon",
                    nombre: "El Tiburón",
                    imagen: "img/el-tiburon.png",
                    ingredientes: [
                        { nombre: "Mezcal Mitre", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Sunset Mix", cantidad: "5", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "GRS" },
                        { nombre: "Naranja Deshidratada", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al Boston Shaker y hielo.",
                        "Mezclar hasta que el shaker esté frío.",
                        "Agregar al vaso y top de hielo molido.",
                        "Agregar 1/2 rodaja de naranja deshidratada al vaso."
                    ]
                },
                {
                    id: "la-calavera",
                    nombre: "La Calavera",
                    imagen: "img/la-calavera.png",
                    ingredientes: [
                        { nombre: "Mezcal Mitre", cantidad: "2 1/2", umed: "OZ" },
                        { nombre: "Sirope Negro", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "3", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Naranja", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Ginger Ale", cantidad: "2", umed: "OZ" },
                        { nombre: "Naranja Deshidratada", cantidad: "1", umed: "PZA" },
                        { nombre: "Hierbabuena", cantidad: "2", umed: "HOJAS" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo a excepción del Ginger Ale.",
                        "Mezclar hasta que el shaker esté frío.",
                        "Rellenar con hielo molido y agregar el Ginger Ale top.",
                        "Decorar con la naranja deshidratada y hierba buena."
                    ]
                }
            ]
        },
        "cocteleria": {
            nombre: "Coctelería de la Casa",
            lista: [
                {
                    id: "zenith-tropical",
                    nombre: "Zenith Tropical",
                    imagen: "img/zenith-tropical.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "2", umed: "OZ" },
                        { nombre: "Mix Sunset", cantidad: "5", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" },
                        { nombre: "Clara de Huevo", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Hierbabuena", cantidad: "5", umed: "HOJAS" },
                        { nombre: "Brocheta de Frutos Rojos", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo y activar la hierbabuena.",
                        "Mezclar bien para que la clara de huevo espume.",
                        "Agregar a la copa.",
                        "Decorar con la brocheta de frutos rojos."
                    ]
                },
                {
                    id: "mango-mezcal",
                    nombre: "Mango Mezcal",
                    imagen: "img/mango-mezcal.png",
                    ingredientes: [
                        { nombre: "Mezcal", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Concentrado de Mango", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Miel de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Sal de Gusano", cantidad: "1", umed: "GRS" },
                        { nombre: "Hierbabuena", cantidad: "5", umed: "HOJAS" },
                        { nombre: "Romero", cantidad: "1", umed: "PZA" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo.",
                        "Mezclar hasta que el shaker se enfríe.",
                        "Agregar al vaso old fashioned escarchado de sal de gusano y verter la mezcla.",
                        "Decorar con limón deshidratado y romero."
                    ]
                },
                 {
                    id: "margarita-de-mango",
                    nombre: "Margarita de Mango",
                    imagen: "img/margarita-de-mango.png",
                    ingredientes: [
                        { nombre: "Tequila Jose Cuervo", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Licor Controy", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Concentrado de Mango", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo.",
                        "Mezclar hasta que quede homogéneo.",
                        "Escarchar con sal y limón.",
                        "Agregar el contenido y decorar con limón deshidratado y hierbabuena."
                    ]
                },
                {
                    id: "daiquiri-sunset",
                    nombre: "Daiquiri Sunset",
                    imagen: "img/daiquiri-sunset.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado de Mango", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Naranja", cantidad: "2", umed: "OZ" },
                        { nombre: "Controy", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes a la licuadora con un vaso con hielo.",
                        "Mezclar hasta generar consistencia sólida.",
                        "Agregar a la copa el contenido.",
                        "Decorar con limón deshidratado y mango en cubos."
                    ]
                },
                {
                    id: "mojito",
                    nombre: "Mojito",
                    imagen: "img/mojito.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "2", umed: "OZ" },
                        { nombre: "Hierbabuena", cantidad: "2", umed: "OZ" },
                        { nombre: "Limón Entero", cantidad: "2", umed: "PARTIDOS EN 4" },
                        { nombre: "Agua Mineral", cantidad: "TOP", umed: "OZ" }
                    ],
                    preparacion: [
                        "Activar 5 hojas de hierbabuena y añadirlas después de macerar el limón entero, partido en 4, junto con jugo de limón, ron y jarabe natural.",
                        "Machacar suavemente, intentando aplastar el limón sin dañar las hojas de hierbabuena.",
                        "Agregar hielo triturado hasta llenar el vaso (el hielo no muy triturado)",
                        "Cubrir con agua mineral y mezclar muy bien todos los ingredientes.",
                        "Decorar con 5 hojas de hierbabuena y rodajas de limón deshidratado."
                    ]
                },
                {
                    id: "pina-colada",
                    nombre: "Piña Colada",
                    imagen: "img/pina-colada.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Crema de Coco", cantidad: "2", umed: "OZ" },
                        { nombre: "Ron Malibu", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "2", umed: "OZ" },
                        { nombre: "Leche Evaporada", cantidad: "2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Granadina", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Incorporar los ingredientes en la licuadora junto con un vaso de hielo.",
                        "Mezclar hasta obtener una consistencia sólida.",
                        "Añadir granadina a la copa.",
                        "Verter el contenido en la copa.",
                        "Decorar con media naranja deshidratada y una hoja de hierbabuena."
                    ]
                },
                {
                    id: "blue-hawaiian",
                    nombre: "Blue Hawaiian",
                    imagen: "img/blue-hawaiian.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "1", umed: "OZ" },
                        { nombre: "Crema de Coco", cantidad: "1 ", umed: "OZ" },
                        { nombre: "Licor Curacao Azul", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker.",
                        "Mezclar hasta que el shaker esté frío.",
                        "Agregar a la copa y decorar con el garnish de naranja deshidratada."
                    ]
                },
                {
                    id: "miami-beach",
                    nombre: "Miami Beach",
                    imagen: "img/miami-beach.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Licor de Melon Midori", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Naranja", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" },
                        { nombre: "Romero", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al vaso con hielo.",
                        "Mezclar los ingredientes hasta que se enfríe.",
                        "Agregar a un vaso con hielo nuevo.",
                        "Decorar con romero, una cereza enjuagada y naranja deshidratada."
                    ]
                },
                {
                    id: "carajillo",
                    nombre: "Carajillo",
                    imagen: "img/carajillo.png",
                    ingredientes: [
                        { nombre: "Licor 43", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Cafe Expreso", cantidad: "2", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielos medianos.",
                        "Mezclar los ingredientes hasta que se enfríe.",
                        "Agregar a un vaso old fashion con hielo nuevo.",
                        "Decorar con dos granos de café entero."
                    ]
                },
                {
                    id: "perla-negra",
                    nombre: "Perla Negra",
                    imagen: "img/perla-negra.png",
                    ingredientes: [
                        { nombre: "Jägermeister", cantidad: "1.5", umed: "OZ" },
                        { nombre: "Red Bull", cantidad: "250", umed: "ML" }
                    ],
                    preparacion: [
                        "Añadir el Jäger a un shot.",
                        "Colocar el shot en un vaso old fashion sin derramar el Jäger.",
                        "Verter el Red Bull frío en el vaso."
                    ]
                },
                {
                    id: "aperol-sprits",
                    nombre: "Aperol Sprits",
                    imagen: "img/aperol-sprits.png",
                    ingredientes: [
                        { nombre: "Aperol", cantidad: "2", umed: "OZ" },
                        { nombre: "Proseco", cantidad: "4", umed: "OZ" },
                        { nombre: "Limon", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" }
                    ],
                    preparacion: [
                        "Añadir los ingredientes a una copa con hielo.",
                        "Mezclar hasta que los ingredientes se integren.",
                        "Decorar con una rodaja de naranja deshidratada."
                    ]
                },
                 {
                    id: "clericot",
                    nombre: "Clericot",
                    imagen: "img/aperol-sprits.png",
                    ingredientes: [
                        { nombre: "Sour mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Agua mineral", cantidad: "4", umed: "OZ" },
                        { nombre: "Vino Tinto", cantidad: "2", umed: "OZ" },
                        { nombre: "Naranja deshidratada", cantidad: "1", umed: "PX" }
                    ],
                    preparacion: [
                        "Añadir los ingredientes esepto el vino a una copa con hielo.",
                        "Mezclar hasta que los ingredientes se integren.",
                        "Vertir el vino sin que se mezcle.",
                        "Decorar con una rodaja de naranja deshidratada."
                    ]
                },
                {
                    id: "negroni",
                    nombre: "Negroni",
                    imagen: "img/negroni.png",
                    ingredientes: [
                        { nombre: "Campari", cantidad: "1", umed: "OZ" },
                        { nombre: "Gin", cantidad: "1", umed: "OZ" },
                        { nombre: "Rosso", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "TOP" },
                        { nombre: "Piel de naranja", cantidad: "1", umed: "PZ" }
                    ],
                    preparacion: [
                        "Añadir los ingredientes a un vaso roquero.",
                        "Porner la piel de naraja en el vaso y exprimir el zumo de ella."
                    ]
                }
            ]
        }
    };
    // ---------------------------------------------------------

    const params = new URLSearchParams(window.location.search);
    const categoriaId = params.get('categoria');
    const recetaId = params.get('receta');

    // 1. Lógica para LISTA DE RECETAS (recetario-lista.html)
    const listContainer = document.getElementById('recipe-list-container');
    if (listContainer) {
        const categoria = recetas[categoriaId];
        if (categoria) {
            document.getElementById('category-title').textContent = categoria.nombre;
            
            // Generar tarjetas estilo Tailwind
            categoria.lista.forEach(receta => {
                const link = document.createElement('a');
                link.href = `recetario-detalle.html?categoria=${categoriaId}&receta=${receta.id}`;
                // Estilos de tarjeta idénticos a los inputs de la calculadora pero con hover
                link.className = `
                    block bg-white rounded-xl shadow-sm border border-gray-200 
                    overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all 
                    group cursor-pointer
                `;
                
                link.innerHTML = `
                    <div class="aspect-w-16 aspect-h-9 bg-gray-100 relative h-48 overflow-hidden">
                        <img src="${receta.imagen}" alt="${receta.nombre}" 
                             class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                             onerror="this.src='img/logo.svg';this.style.padding='20px';this.style.objectFit='contain'">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        <div class="absolute bottom-0 left-0 p-4">
                            <h3 class="text-white text-xl font-bold tracking-wide">${receta.nombre}</h3>
                        </div>
                    </div>
                    <div class="p-4 flex justify-between items-center">
                        <span class="text-sm text-gray-500 font-medium">Ver preparación</span>
                        <div class="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <i data-lucide="chef-hat" class="w-4 h-4"></i>
                        </div>
                    </div>
                `;
                listContainer.appendChild(link);
            });
            lucide.createIcons(); // Refrescar iconos
        }
    }

    // 2. Lógica para DETALLE DE RECETA (recetario-detalle.html)
    const detailContainer = document.getElementById('recipe-detail-container');
    if (detailContainer) {
        const categoria = recetas[categoriaId];
        const receta = categoria ? categoria.lista.find(r => r.id === recetaId) : null;
        
        if (receta) {
            // Configurar botón volver
            const backBtn = document.getElementById('back-link');
            backBtn.href = `recetario-lista.html?categoria=${categoriaId}`;
            
            // Títulos e Imagen
            document.getElementById('recipe-name').textContent = receta.nombre;
            const imgEl = document.getElementById('recipe-image');
            imgEl.src = receta.imagen;
            imgEl.alt = receta.nombre;
            
            // Ingredientes (Renderizado estilo tabla moderna)
            const ingredientsList = document.getElementById('ingredients-list');
            receta.ingredientes.forEach(ing => {
                const div = document.createElement('div');
                div.className = "flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:shadow-sm transition-all";
                div.innerHTML = `
                    <span class="font-medium text-gray-700 capitalize">${ing.nombre}</span>
                    <span class="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-sm">
                        ${ing.cantidad} <span class="text-xs font-normal text-gray-400 uppercase">${ing.umed}</span>
                    </span>
                `;
                ingredientsList.appendChild(div);
            });

            // Preparación (Renderizado lista de pasos)
            const methodList = document.getElementById('method-list');
            receta.preparacion.forEach((paso, index) => {
                const li = document.createElement('li');
                li.className = "flex gap-4 items-start";
                li.innerHTML = `
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                        ${index + 1}
                    </div>
                    <p class="text-gray-600 mt-1 leading-relaxed">${paso}</p>
                `;
                methodList.appendChild(li);
            });
        }
    }

});
