
var json;
var gaugechart;
var curr;
var time;
var state = "on";
var tension = 215; //La tensión puede variar
var consumo = [];

//Web Socket comunication
//Connect to server
//var ws = new WebSocket("ws://192.168.43.125:8888/websocket");


//var es = new EventSource("http://192.168.0.239:9292/a911");
//var es = new EventSource("http://localhost:9292/a911");
/*es.onmessage = function(e) {
  //var newElement = document.createElement("li");
  console.log(e.data);
  //newElement.textContent = "message: " + e.data;
  //eventList.appendChild(newElement);
}*/
//console.log(ws);

//Open the socket and say hi
/*ws.onopen = function() {
  ws.send("Hello, world");
};*/

//Receive message form server
/*ws.onmessage = function (evt) {
  console.log("EVTDATA: " + evt.data);
  //json = JSON.parse(evt.data);
  //console.log(json);

  json = JSON.parse(evt.data);
  console.log("JSON:" + json);
  curr = json.data;
  state = json.estado;
  //timestamp = json.timestamp;
  console.log("curr: " + curr);

  curr = parseFloat(curr);

};*/


function on() {
  //alert("ON");
  ws.send(JSON.stringify({"relay1":1}));
};
function off() {
  //alert("OFF");
  ws.send(JSON.stringify({"relay1":0}));
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
