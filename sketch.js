var Drop = function() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.grav = map(this.z, 0, 20, 0, 0.2);
    this.leng = map(this.z, 0 , 20, 10, 20);
    this.yspeed = this.grav + map(this.z, 0, 20, 1, 20);
};

Drop.prototype.fall = function() {
    this.y = this.y + this.yspeed;
    if(this.y > height) {
        this.y = random(-200, 100);
    }
};

Drop.prototype.show = function() {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(218, 22, 22); //98, 71, 247
    line(this.x, this.y, this.x, this.y + this.leng);
};

var d = new Array(500);

function setup() {
    createCanvas(1350, 1000);
    for(let i = 0; i < d.length; i++) {
        d[i] = new Drop();
    }
}

function draw() {
    background(230, 230, 250);
    for(let i = 0; i < d.length; i++) {
        d[i].fall();
        d[i].show();
    }
}

