
//  Sistema de Recompensas por Lectura en Biblioteca Escolar
// Aprendiz:  Mónica Ismelia Cañas Reyes
// Fecha: 20/06/2024
// Descripción: Este algoritmo calcula las recompensas que los estudiantes pueden ganar por leer libros en la biblioteca escolar.
// Cada libro leído otorga puntos, y al acumular ciertos puntos, los estudiantes pueden canjearlos por premios.

// ***************ENTRADAS (INPUTS)******************//
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ***************FUNCIONES BASICAS******************
// Función 1: Obtener puntos por libros leídos según el tipo de usuario
function obtenerPuntosPorLibro(tipo) {
    let puntos;
    switch (tipo.toUpperCase()) {
        case "ESTUDIANTE":
            puntos = 10;
            break;
        case "DOCENTE":
            puntos = 8;
            break;
        case "VISITANTE":
            puntos = 5;
            break;
        default:
            puntos = 0;
            console.log("❌ Tipo de estudiante no válido.");
    }
    return puntos;
}

// Función 2: Calcular puntos totales usando bucle for
function calcularPuntosTotales(puntosPorLibro, cantidadLibros) {
    let total = 0;
    console.log("\n📚 Registrando libros leídos...");
    for (let i = 1; i <= cantidadLibros; i++) {
        total += puntosPorLibro;
        console.log(`  📖 Libro ${i} registrado → +${puntosPorLibro} puntos`);
    }
    return total;
}

// Función 3: Asignar recompensa según puntos
function asignarRecompensa(puntosTotales) {
    if (puntosTotales >= 50) {
        return "🏅 Medalla de Lector";
    } else {
        return "📚 Sigue leyendo para ganar recompensas"; // ✅ Corregido
    }
}

// Función 4: Mostrar resumen final
function mostrarResumen(tipo, libros, puntosPorLibro, puntosTotales, recompensa) {
    console.log("\n🎉 RESUMEN FINAL:");
    console.log(`- Tipo de usuario: ${tipo}`);
    console.log(`- Libros leídos: ${libros}`);
    console.log(`- Puntos por libro: ${puntosPorLibro}`);
    console.log(`- Puntos totales: ${puntosTotales}`);
    console.log(`- Recompensa: ${recompensa}`);

    if (puntosTotales >= 50) {
        console.log("🌟 ¡Felicidades! Has alcanzado una meta de lectura.");
    } else {
        console.log("💪 ¡Cada libro te acerca a tu próxima recompensa!");
    }
}

// =================== PROCESO PRINCIPAL ===================

console.log("☕ Bienvenido a la Biblioteca Escolar!");
rl.question("📌 Ingresa el tipo de usuario (ESTUDIANTE, DOCENTE, VISITANTE): ", (tipo) => {
    // 🔹 SCOPE: La variable 'tipo' tiene scope local dentro de este callback
    // Solo puede usarse aquí, no afuera.

    rl.question("📖 Ingresa la cantidad de libros leídos: ", (cantidad) => {
        let librosLeidos = parseInt(cantidad);

        if (isNaN(librosLeidos)) {
            console.log("❌ Por favor, ingresa un número válido.");
            rl.close();
            return;
        }

        // 1. Obtener puntos por libro
         // 🔹 HOISTING: Aquí se usa 'obtenerPuntosPorLibro()' antes de su declaración
        // Pero funciona porque JavaScript la "eleva" al inicio del ámbito.
        let puntosPorLibro = obtenerPuntosPorLibro(tipo);

        if (puntosPorLibro === 0) {
            rl.close();
            return;
        }

        // 2. Calcular puntos totales
        let puntosTotales = calcularPuntosTotales(puntosPorLibro, librosLeidos);

        // 3. Asignar recompensa
        let recompensa = asignarRecompensa(puntosTotales);

        // 4. Mostrar resumen final
        mostrarResumen(tipo, librosLeidos, puntosPorLibro, puntosTotales, recompensa);

        // Cerrar la interfaz
        rl.close();

        // Mensaje de despedida
        console.log("\n👋 ¡Gracias por usar el sistema de recompensas y por disfrutar la lectura 📚✨");
    });
});

// *****************fin proceso principal ******************//