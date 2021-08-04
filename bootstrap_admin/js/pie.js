window.onload = function () {

    var chart = new CanvasJS.Chart("pie1", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Item Wise Sell"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                { y: 26, name: "TV", exploded: true },
                { y: 20, name: "Mobile" },
                { y: 5, name: "Jeans" },
                { y: 3, name: "T-Shirts" },
                { y: 7, name: "Accesories" },
                { y: 17, name: "Headphones" },
                { y: 22, name: "Laptop"}
            ]
        }]
    });
    chart.render();
    }
    
    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();
    
    }