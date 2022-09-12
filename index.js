let edades = [35,16,40,18,19,20,22,25,32,15,17]


function ordenar (arr){
  return arr.sort((a,b) => a - b)
}

function mayoresEdad (arr, age){
  ordenar(edades)
  return arr.filter(rango => rango >= age)
}

function cantidad (arr, age){
  if(arr.includes(age)){
    return arr.filter(rango => rango >= age).length
  }

  return `En total son: ${age} que son mayores de edad`

}

alert(edades)
alert(ordenar(edades))
alert(mayoresEdad(edades, 18))
alert(cantidad(edades, 18))