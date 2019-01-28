class Avo {
	constructor (lastName = 'Almeida') {

		this.lastName = lastName;
	}
}

class Pai extends Avo {

	constructor (lastName, profession = 'Professor'){

		super(lastName); //Referente ao sobrenome da classe Avo
		this.profession = profession;
	}
}

class Filho extends Pai {

	constructor(lastName){

		super(lastName); //Referente ao sobrenome da calsse Pai
	}
}

const filho = new Filho;
console.log(filho);

const pai = new Pai;
console.log(pai);

const avo = new Avo;
console.log(avo)