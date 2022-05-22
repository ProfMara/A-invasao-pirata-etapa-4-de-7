class Barco {

    constructor(x, y, d) {
        this.diametro = d;
        this.body = Bodies.circle(x, y, d/2 - 5);
        this.imagem = loadImage("./assets/boat.png");
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.imagem, 0, 0, this.diametro, this.diametro)
        pop();
    }
}