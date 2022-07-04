let alumnos = [];
let lista = "";
let rnd;
let total = alumnos.length + 1;

for (let i = alumnos.length; i == alumnos.length && i > 0; i--) {
  rnd = Math.floor(Math.random() * alumnos.length) + 0;
  i % 2 !== 0
    ? (lista += `<tr><td><strong>${total - i}</strong></td> <td> ${
        alumnos[rnd]
      }</td></tr><tr><td></td> <td></td></tr>`)
    : (lista += `<tr><td><strong>${total - i}</strong></td> <td> ${
        alumnos[rnd]
      }</td></tr>`);
  alumnos.splice(rnd, 1);
  console.log(alumnos);
}

document.getElementById("alumnos").innerHTML = `<table>${lista}</table>`;
