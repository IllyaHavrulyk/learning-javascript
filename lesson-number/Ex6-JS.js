function random(min, max) {
    min -= 0.5;
    max += 0.5
    return Math.round(Math.random() * (max - min) + min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5)); 