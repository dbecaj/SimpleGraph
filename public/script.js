document.addEventListener('DOMContentLoaded', (event) => {
    var s = Snap("#svg")

    var rect = s.rect(100, 100, 100, 100);
    rect.attr({
        fill: "#66FF66"
    })
    var connectPoints =  [s.circle(100, 150, 5), s.circle(150, 200, 5), s.circle(200, 150, 5), s.circle(150, 100, 5)]
    connectPoints.forEach(point => {
        point.attr({
            fill: "#ffff76",
            stroke: "#FF4C4C",
            strokeWidth: 3,
            visibility: "hidden"
        });

        point.drag((dx, dy) => {}, () => {}, () => { console.log("Top of the morning to you!") })
    })
    var resizePoints = [s.circle(102, 102, 4), s.circle(102, 198, 4), s.circle(198, 198, 4), s.circle(198, 102, 4)]
    resizePoints.forEach(point => {
        point.attr({
            fill: "#ff0000",
            visibility: "hidden"
        });

        point.drag((dx, dy) => {}, () => {}, () => { console.log("Top of the morning to you!") })
    })
    var box = s.group(rect, ...connectPoints, ...resizePoints)

    var move = function(dx,dy) {
        box.attr({
            transform: box.data('origTransform') + (box.data('origTransform') ? "T" : "t") + [dx, dy]
        });
    }

    var start = function() {
        box.data('origTransform', box.transform().local );
    }
    var stop = function() {
        console.log('finished dragging');
    }

    rect.drag(move, start, stop);
    box.mouseover(() => {
        console.log("mouse over")
        connectPoints.forEach(point => {
            point.attr({
                visibility: "visible"
            })
        })
        resizePoints.forEach(point => {
            point.attr({
                visibility: "visible"
            })
        })
    })
    box.mouseout(() => {
        console.log("mouse out")
        connectPoints.forEach(point => {
            point.attr({
                visibility: "hidden"
            })
        })
        resizePoints.forEach(point => {
            point.attr({
                visibility: "hidden"
            })
        })
    })
})