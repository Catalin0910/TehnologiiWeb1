

class Robot {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}

const r0 =  new Robot('ordinary robot')
r0.move();

