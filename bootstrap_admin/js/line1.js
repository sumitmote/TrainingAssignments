window.onload = function () {

    var chart = new CanvasJS.Chart("line1", {
        animationEnabled: true,
        exportEnabled: true,
        title:{
            text: "US Unemployement Rate"
        },
        axisY:{ 
            title: "Percentage",
            interval: .2,
            suffix: "%",
            valueFormatString: "#.0"
        },
        data: [{
            type: "stepLine",
            yValueFormatString: "#0.0\"%\"",
            xValueFormatString: "MMM YYYY",
            markerSize: 5,
            dataPoints: [
                { x: new Date(2016, 0), y: 4.9 },
                { x: new Date(2016, 1), y: 4.9 },
                { x: new Date(2016, 2), y: 5.0 },
                { x: new Date(2016, 3), y: 5.0, indexLabel: "Highest", indexLabelFontColor: "#C24642" },
                { x: new Date(2016, 4), y: 4.7 },
                { x: new Date(2016, 5), y: 4.9 },
                { x: new Date(2016, 6), y: 4.9 },
                { x: new Date(2016, 7), y: 4.9 },
                { x: new Date(2016, 8), y: 4.9 },
                { x: new Date(2016, 9), y: 4.8 },
                { x: new Date(2016, 10), y: 4.6 },
                { x: new Date(2016, 11), y: 4.7 },
                { x: new Date(2017, 0), y: 4.8 },
                { x: new Date(2017, 1), y: 4.7 },
                { x: new Date(2017, 2), y: 4.5 },
                { x: new Date(2017, 3), y:4.4 },
                { x: new Date(2017, 4), y:4.3 },
                { x: new Date(2017, 5), y:4.4 }
            ]
        }]
    });
    chart.render();
    
    }