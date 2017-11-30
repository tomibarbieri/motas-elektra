
var json;
var gaugechart;
var curr; // en esta variable se guarda el valor a mostrar
var time;
var state = "on";
var tension = 215; //La tensión puede variar
var consumo = [];

setTimeout(function(){
  // conexion real time con el servidor
  var id_sensor = document.getElementById('sensor-name').innerHTML;
  console.log(id_sensor);
  var es = new EventSource("http://192.168.0.238:9292/" + id_sensor);
  //var es = new EventSource("http://localhost:9292/a911");
  console.log(es);

  es.onmessage = function(e) {
    json = JSON.parse(e.data);
    console.log(json.value);
    curr = json.value;
  };

  es.onerror = function() {
    es.close();
  };
},3000)

function on() {
  //alert("ON");
  //ws.send(JSON.stringify({"relay1":1}));
};
function off() {
  //alert("OFF");
  //ws.send(JSON.stringify({"relay1":0}));
};

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }

        });


        $('#corriente_chart').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = curr;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Potencia'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Watts'
                },
                min: 0,
                max: 100,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#0000BB'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Potencia medida por segundo',
                color: '#0000BB',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: curr
                        });
                    }
                    return data;
                }())
            }],
            credits: {
              enabled: false
            },
        });
});
});
