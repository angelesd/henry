// Crear un array para cada Apellido Suarez con los alumnos que tengan ese apellido. Y lo mismo para el Apellido Gimenez. ExtraCredits: Pueden crear un array por cada apellido y ahi meter todos los alumnos que tengan ese apellido.
// A los alumnos con promedio de 5 o mas, ponerles el aprobado como true, si tienen menos cambiarlo a false
// crear un array con todos los alumnos aprobados
// crear un array con SOLAMENTE los nombres de los alumnoes (ej: ["Martin", "Daniel" , "Matias" , etc] )



var alumnos = [
    {nombre: "Martin" , apellido: "Suarez" , promedio: 10 , aprobado: null},
    {nombre: "Juan" , apellido: "Perez" , promedio: 2 , aprobado: null},
    {nombre: "Daniel" , apellido: "Gimenez" , promedio: 5 , aprobado: null},
    {nombre: "Matias" , apellido: "Suarez" , promedio: 6 , aprobado: null},
    {nombre: "Mariano" , apellido: "Suarez" , promedio: 4 , aprobado: null},
    {nombre: "Gustavo" , apellido: "Perez" , promedio: 9 , aprobado: null},
    {nombre: "Emilio" , apellido: "Gimenez" , promedio: 8 , aprobado: null},
]

var arraySuarez = []
for (var i = 0; i <alumnos.length; i++){
    if (alumnos[i].apellido === "Suarez"){
        arraySuarez.push(alumnos[i])
    }
}


var arrayGimenez = []
for (var i = 0; i <alumnos.length; i++){
    if (alumnos[i].apellido === "Gimenez"){
        arrayGimenez.push(alumnos[i])
    }
}

var arrayPerez = []
for (var i = 0; i <alumnos.length; i++){
    if (alumnos[i].apellido === "Perez"){
        arrayPerez.push(alumnos[i])
    }
}

function aprobadoTrue(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i].promedio >= 5){
            array[i].aprobado = true
        } else {
            array[i].aprobado = false
        }
    }
}
aprobadoTrue(alumnos)


var arrayAprobados = []
for (var i = 0; i <alumnos.length; i++){
    if (alumnos[i].aprobado === true){
        arrayAprobados.push(alumnos[i])
    }
}

var arrayNombres = []
for (var i = 0; i <alumnos.length; i++){
    arrayNombres.push(alumnos[i].nombre)
}

console.log(arraySuarez)
console.log(arrayGimenez)
console.log(arrayPerez)
console.log(alumnos)
console.log(arrayAprobados)
console.log(arrayNombres)