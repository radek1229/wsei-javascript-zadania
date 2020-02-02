var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var robotAureliusz = new Robot("Aureliusz")
robotAureliusz.sayHi("Artur")

var robotMarcin = new Robot("Marcin")
robotMarcin.isFunctional = false
robotMarcin.sayHi("Artur")
robotMarcin.changeName("Paweł")

var robotKarol = new Robot("Karol")
robotKarol.isFunctional = false
robotKarol.changeName("Mateusz")
robotKarol.fixIt()
robotKarol.sayHi("Artur")