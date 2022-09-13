let arrayEdades = [];

function ordenar(arr) {
	return arr.sort((a, b) => a - b);
}

function mayoresEdad(arrayEdades, age) {
	ordenar(arrayEdades);
	return arrayEdades.filter((rango) => rango >= age);
}

function cantidad(arrayEdades, age) {
	if (arrayEdades.includes(age)) {
		return arrayEdades.filter((rango) => rango >= age).length;
	}
}

let saludo = () => {
	alert(
		"Este programa ordena edades, te muestra los mayores de edad y cuenta cuantos son mayores de edad "
	);
};

pedirEdades = () => {
	for (let i = 0; i <= 4; i++) {
		arrayEdades[i] = parseInt(prompt(`Dame la edad ${i + 1}`));
	}
};

saludo();
pedirEdades();

alert(`Edades Introducidas ${arrayEdades}`);
alert(`Arreglo ordenado ${ordenar(arrayEdades)}`);

alert(`Mayores edad ${mayoresEdad(arrayEdades, 18)}`);
alert(`Cuantos Mayores edad ${cantidad(arrayEdades, 18)}`);
