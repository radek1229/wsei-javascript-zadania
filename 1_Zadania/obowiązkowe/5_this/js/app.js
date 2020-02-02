//zadanie 0
const car = {
    brand: 'Seat',
    color: 'Srebrny',
    numberOfkilometers: 0,
    printCarInfo: function () {
        console.log(this.brand + ' ' + this.color + ' ' + this.numberOfkilometers + 'km')
    },
    drive: function (km) {
        this.numberOfkilometers += km
    }
}
car.printCarInfo()
car.drive(20)
car.printCarInfo()

//zadanie 1
car.technicalReview = ['2017-04-21', '2018-04-21', '2019-04-21']
car.addTechnicalReview = (review) => {
    car.technicalReview.push(review)
}

console.log(car.technicalReview)
car.addTechnicalReview('2020-04-21')
console.log(car.technicalReview)

//zadanie 3
const stairs = {
    step: 0,
    up: function () {
        this.step++
    },
    down: function () {
        this.step--
    },
    printStep: function () {
        console.log(this.step)
    }
}
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();