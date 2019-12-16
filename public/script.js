document.addEventListener('DOMContentLoaded', (event) => {
    var s = Snap("#svg")

    var rect = s.rect(100, 100, 100, 100);

    var move = function(dx,dy) {
        this.attr({
            transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
        });
    }

    var start = function() {
        this.data('origTransform', this.transform().local );
    }
    var stop = function() {
        console.log('finished dragging');
    }

    rect.drag(move, start, stop );
})