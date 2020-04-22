var radius = 120;//радиус
var main = document.getElementById('main');
var mainHeight = 300;// высота круга цифр
var setup = function() {
    var theta = [(Math.PI / 3), (Math.PI / 6), (Math.PI * 2), (11 * (Math.PI / 6)), (5 * (Math.PI / 3)), (3 * (Math.PI / 2)), (4 * (Math.PI / 3)), (7 * (Math.PI / 6)), Math.PI, (5 * (Math.PI / 6)), (2 * (Math.PI / 3)), (Math.PI / 2)];
    var circleArray = [];
    for (var i = 0; i < 12; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle number' + i;
        circleArray.push(circle);
        circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
        circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
        circleArray[i].style.position = "absolute";
        circleArray[i].style.backgroundColor = 'green';
        circleArray[i].textContent = (i + 1);
        circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
        circleArray[i].style.left = ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
        main.appendChild(circleArray[i]);
    }
};
setup();

setInterval(() => {
    let minhand = document.getElementById("minutehand");
    let hourhand = document.getElementById("hourhand");
    let sechand = document.getElementById("secondhand");
    let S = new Date().getSeconds() * 6;
    let M = new Date().getMinutes() * 6;
    let H = new Date().getHours() * 30;

    sechand.setAttribute("transform", "rotate(" + S + ",150,150)");
    minhand.setAttribute("transform", "rotate(" + M + ",150,150)");
    hourhand.setAttribute("transform", "rotate(" + H + ",150,150)");

}, 10);
setInterval(updateTime, 1000);

function updateTime() {
    var currTime = new Date();
    var currTimeStr = formatDateTime(currTime);
    document.getElementById('timedigit').innerHTML = currTimeStr;
}

function formatDateTime(dt) {
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();
    return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
}

function str0l(val, len) {
    var strVal = val.toString();
    while (strVal.length < len)
        strVal = '0' + strVal;
    return strVal;
}