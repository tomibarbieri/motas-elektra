
var es = new EventSource("http://192.168.0.239:9292/a911");
es.onmessage = function(e) {
  //var newElement = document.createElement("li");
  console.log(e.data);
  //newElement.textContent = "message: " + e.data;
  //eventList.appendChild(newElement);
}
var opts = {
    lines: 12,
    angle: 0,
    lineWidth: 0.4,
    pointer: {
        length: 0.75,
        strokeWidth: 0.042,
        color: '#1D212A'
    },
    limitMax: 'false',
    colorStart: '#1ABC9C',
    colorStop: '#1ABC9C',
    strokeColor: '#F0F3F3',
    generateGradient: true
};
//Gauge 1
var target = document.getElementById('foo'),
    gauge = new Gauge(target).setOptions(opts);

gauge.maxValue = 600;
gauge.animationSpeed = 32;
gauge.set(320);
gauge.setTextField(document.getElementById("gauge-text"));
