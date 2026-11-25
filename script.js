//complete this code
class Person {
	let name;
	let age;
	
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	getName(){
		return this.name;
	}
	setName(name){
		this.name = name;
	}
}

class Student extends Person {
	super(name, age);
	function study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	super(name, age);
	function teach(){
		console.log(`${name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
