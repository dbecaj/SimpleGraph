SVG.on(document, 'DOMContentLoaded', () => {
    //var draw = SVG().addTo('drawing').size(300, 300)
    //var rect = draw.rect(100, 100).attr({ fill: '#f06' })
    var draw = SVG().addTo('#drawing').size(300, 300)
    var rect = draw.rect(100, 100).attr({ fill: '#f06' })
})