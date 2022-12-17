let pokemons = [
  {
    id: 1,
    name: "charmander",
    type: "fire",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 2,
    name: "squirtle",
    type: "water",
    base_damage: 9,
    base_hp: 14,
    speed: 26,
  },
  {
    id: 3,
    name: "bulbasaur",
    type: "leaf",
    base_damage: 8,
    base_hp: 16,
    speed: 26,
  },
  {
    id: 4,
    name: "pikachu",
    type: "electric",
    base_damage: 12,
    base_hp: 8,
    speed: 32,
  },
  {
    id: 5,
    name: "pidgey",
    type: "air",
    base_damage: 10,
    base_hp: 10,
    speed: 35,
  },
  {
    id: 6,
    name: "goldeen",
    type: "water",
    base_damage: 9,
    base_hp: 12,
    speed: 32,
  },
  {
    id: 7,
    name: "bellsprout",
    type: "leaf",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 8,
    name: "magnemite",
    type: "electric",
    base_damage: 9,
    base_hp: 14,
    speed: 30,
  },
  {
    id: 9,
    name: "ponyta",
    type: "fire",
    base_damage: 12,
    base_hp: 18,
    speed: 36,
  },
  {
    id: 10,
    name: "evee",
    type: "normal",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
];

const resultado = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
// EJERCICIOS
//1. Ordernar los pokemons por base_damage de menor a mayor.
const ordenarPorBaseDamage = pokemons.sort((a, b) => {
  return a.base_damage - b.base_damage;
});
//console.log(ordenarPorBaseDamage);

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
const ordenarPorAtributo = (atributo) => {
  if (typeof pokemons[0][atributo] === "string") {
    return pokemons.sort((a, b) => {
      console.log(a[atributo].localeCompare(b[atributo]));
      return a[atributo].localeCompare(b[atributo]);
    });
  } else if (typeof pokemons[0][atributo] === "number") {
    return pokemons.sort((a, b) => {
      return a[atributo] - b[atributo];
    });
  } else {
    return "Por favor utiliza un atributo válido";
  }
};

console.log(ordenarPorAtributo("id"));
//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
const filtrarPorTipo = (atributo, valor) => {
  return pokemons.filter((pokemon) => pokemon[atributo] === valor);
};

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
const pokemonMaster = {
  id: 1,
  name: "Ash",
  created_date: "01/01/2021",
  pokemon: [],
};
//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
const agregarPokemon = () => {
  const pokemonAleatorio = Math.floor(Math.random() * pokemons.length);
  pokemonMaster.pokemon.push(pokemons[pokemonAleatorio]);
};
//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
const agregarDaño = () => {
  pokemons.forEach((pokemon) => {
    pokemon.min_damage = Math.floor(Math.random() * 2) + 1;
    pokemon.max_damage = Math.floor(Math.random() * 3) + 3;
  });
};
agregarDaño();
console.log(pokemons);
//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
const calcularDaño = (pokemon) => {
  return (
    pokemon.base_damage +
    Math.floor(Math.random() * (pokemon.max_damage - pokemon.min_damage + 1)) +
    pokemon.min_damage
  );
};
console.log(calcularDaño(pokemons[0]));

//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
agregarPokemon();
agregarPokemon();
agregarPokemon();
const ordenarPorDaño = (pokemon) => {
  pokemon.sort((a, b) => {
    return calcularDaño(b) - calcularDaño(a);
  });
};

ordenarPorDaño(pokemonMaster.pokemon);
console.log(pokemonMaster.pokemon);
//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
const lista = document.createElement("ul");
resultado.appendChild(lista);
pokemons.forEach((pokemon) => {
  const item = document.createElement("li");
  item.textContent = pokemon.name;
  lista.appendChild(item);
});

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.
//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name./
const tabla = document.createElement("table");
tabla.classList.add("table");
tabla.classList.add("table-striped");
resultado2.appendChild(tabla);
const encabezados = document.createElement("thead");
encabezados.classList.add("thead-dark");
const tr = document.createElement("tr");
for (const key in pokemons[0]) {
  const th = document.createElement("th");
  th.textContent = key;
  th.style.cursor = "pointer";
  th.addEventListener("click", (e) => {
    ordenarPorAtributo(key);
    tabla.innerHTML = "";
    tabla.append(encabezados);
    construirCuerpo();
  });
  tr.append(th);
}
encabezados.append(tr);
tabla.append(encabezados);

construirCuerpo();
function construirCuerpo() {
  const cuerpo = document.createElement("tbody");
  for (const index in pokemons) {
    const tr = document.createElement("tr");
    for (const key in pokemons[index]) {
      const td = document.createElement("td");
      td.textContent = pokemons[index][key];
      tr.append(td);
    }
    cuerpo.append(tr);
  }
  tabla.append(cuerpo);
}
