const prompt = require('prompt-sync')({ sigint: true })
const util = require('util')

let alumnos = []
let respuesta = ""

do {
  console.log("Introduce un alumno o [N]o para terminar")
  respuesta = prompt('Introduce un nombre: ')
  if(respuesta != "N"){ alumnos.push(respuesta)}
  console.table(alumnos)
} while (respuesta != 'N')

if(alumnos.length > 0){
const shuffle = parseInt(prompt('¿Cuántas veces barajamos?: '))
const parejas = prompt("¿Hacemos parejas? [S]i o [N]o: ")
let nuevoAlumnos
for (let index = 0; index < shuffle; index++) {
  nuevoAlumnos = []
  for (let i = alumnos.length; i == alumnos.length && i > 0; i--) {
    rnd = Math.floor(Math.random() * alumnos.length) + 0
    if (parejas === "S") {
      i % 2 !== 0 && i !== 1
        ? (nuevoAlumnos.push(alumnos[rnd]), nuevoAlumnos.push('|'))
        : nuevoAlumnos.push(alumnos[rnd])
    } else {
      nuevoAlumnos.push(alumnos[rnd])
    }
    alumnos.splice(rnd, 1)
  }
  
  console.log(index + 1 + " " + util.inspect(nuevoAlumnos, { breakLength: Infinity, compact: true }))
  alumnos = nuevoAlumnos.filter(alumno => alumno !== '|')
}
console.table(nuevoAlumnos)
}
