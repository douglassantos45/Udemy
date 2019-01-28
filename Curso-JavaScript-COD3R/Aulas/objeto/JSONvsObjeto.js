const obj = {
	a: 1,
	b: 2,
	c: 3,

	soma() {
		return a + b + c}
	}

console.log(obj);

//Convertendo valores para JSON, ele ignora a Function. JSON não é executável, apenas transforma valores em texto para que outras linguagens possam recuperar os valores

console.log(JSON.stringify(obj)); // Transformando valores do OBJ para formato String


//Convertendo JSON para valores

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{"d": true, "e": [], "f": {}, "h": 1.5}')); // Convertendo JSON para outros valores, como boolean, array, Objeto e valores floot
