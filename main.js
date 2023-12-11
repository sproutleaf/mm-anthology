const pos = { x: 0, y: 0 };
const saveCursorPosition = function (x, y) {
    pos.x = x;
    pos.y = y;
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
}

document.addEventListener('mousemove', e => {
    saveCursorPosition(e.clientX, e.clientY);
});

$("#catalog > *").mouseenter(function () {
    $("#words").css("visibility", "visible");
    let txt = $(this).find("p").text();
    $("#words").html(txt);
}).mouseleave(function () {
    $("#words").css("visibility", "hidden");
});