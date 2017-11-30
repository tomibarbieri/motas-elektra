var app = angular.module('elektra', []);

app.controller('home', function($scope, $http) {

    $http({
        method:'GET',
        url: 'http://192.168.0.238:9292/sensor',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(response){

        console.log(response);
        $scope.aulas_server = response.data;

    }, function(response){
        console.log("problemas de conexion");
    });

    // get full aulas from server
    $scope.aulas = [{
      'name': 'Aula 1'
    },{
      'name': 'Aula 2'
    },{
      'name': 'Aula 3'
    }];

  /*  $http({
        method:'GET',
        url: 'localhost:9292/sensor',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(response){
        $scope.motas_server = response.data;
        console.log(response);
    }, function(response){
        console.log("problemas de conexion");
    });
*/
    // get full motas from server
    $scope.motas = [{
      'name': 'Mota 1'
    },{
      'name': 'Mota 2'
    },{
      'name': 'Mota 3'
    },{
      'name': 'Mota 4'
    },{
      'name': 'Mota 5'
    }];


})

.controller('aulas', function($scope) {

    $http({
        method:'GET',
        url: 'localhost:9292/places',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(response){
        $scope.aulas_server = response.data;
        console.log(response);
    }, function(response){
        console.log("problemas de conexion");
    });
    // get full aulas from server
    $scope.aulas = [{
      'name': 'Aula 1',
      'cant_motas': 3,
      'last_month': 233,
      'last_update_time': '12:22',
      'state': 'Si'
    },{
      'name': 'Aula 2',
      'cant_motas': 4,
      'last_month': 233,
      'last_update_time': '12:22',
      'state': 'Si'
    },{
      'name': 'Aula 3',
      'cant_motas': 1,
      'last_month': 233,
      'last_update_time': '12:22',
      'state': 'Si'
    },{
      'name': 'Aula 4',
      'cant_motas': 2,
      'last_month': 233,
      'last_update_time': '12:22',
      'state': 'No'
    },{
      'name': 'Aula 5',
      'cant_motas': 7,
      'last_month': 233,
      'last_update_time': '12:22',
      'state': 'No'
    }];

})

.controller('motas', function($scope) {

    // get full motas from server
    $scope.motas = [{
      'name': 'Mota 1',
      'sensors': 3,
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendida'
    },{
      'name': 'Mota 2',
      'sensors': 2,
      'place': 'Aula 1',
      'last_update_time': '12:10',
      'state': 'Encendida'
    },{
      'name': 'Mota 3',
      'sensors': 4,
      'place': 'Aula 4',
      'last_update_time': '11:00',
      'state': 'Encendida'
    },{
      'name': 'Mota 44',
      'sensors': 3,
      'place': 'Aula 2',
      'last_update_time': '11:34',
      'state': 'Encendida'
    },{
      'name': 'Mota 22',
      'sensors': 2,
      'place': 'Aula 3',
      'last_update_time': '09:45',
      'state': 'Encendida'
    }];

})

.controller('aula', function($scope) {

    // get current_place from parameter
    $scope.current_place = 'Aula 1';

    // get motas for place from server
    $scope.motas = [{
      'name': 'Mota 1',
      'sensors': 3,
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendida'
    },{
      'name': 'Mota 2',
      'sensors': 2,
      'place': 'Aula 1',
      'last_update_time': '12:10',
      'state': 'Encendida'
    }];

})

.controller('mota', function($scope) {

    // get current_place from parameter
    $scope.current_mota = 'Mota 1';

    // get motas for place from server
    $scope.sensors = [{
      'name': 'Sensor 1',
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    },{
      'name': 'Sensor 2',
      'place': 'Aula 1',
      'mota': 'Mota 1',
      'last_update_time': '12:10',
      'state': 'Encendido'
    }];

})


.controller('sensores', function($scope,$http) {

    // get motas for place from server

    $http({
        method:'GET',
        url: 'http://192.168.0.238:9292/sensor',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(response){

        console.log(response.data);
        $scope.sensors_server = response.data;

    }, function(response){
        console.log("problemas de conexion");
    });

    $scope.sensors = [{
      'name': 'Sensor 1',
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    },{
      'name': 'Sensor 2',
      'place': 'Aula 1',
      'mota': 'Mota 1',
      'last_update_time': '12:10',
      'state': 'Encendido'
    },{
      'name': 'Sensor 3',
      'place': 'Aula 1',
      'mota': 'Mota 1',
      'last_update_time': '10:54',
      'state': 'Encendido'
    },{
      'name': 'Sensor 4',
      'place': 'Aula 1',
      'mota': 'Mota 1',
      'last_update_time': '09:19',
      'state': 'Encendido'
    },{
      'name': 'Sensor 5',
      'place': 'Aula 1',
      'mota': 'Mota 1',
      'last_update_time': '08:00',
      'state': 'Encendido'
    }];

})


.controller('sensor', function($scope) {

    // get current_sensor from parameter
    $scope.current_sensor = 'Sensor 1';

    // get sensor for mota from server
    $scope.sensor = {
      'name': 'Sensor 1',
      'id' : 'a911',
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    };

})


.controller('estadistica', function($scope) {

    // get current_sensor from parameter
    $scope.current_sensor = 'Sensor 1';

    // http://192.168.0.238:9292/sensor/a911/lapse/from/2016-08-01T01:00:00+03:00/to/2016-08-01T03:00:00+03:00/precision/hour

    $scope.sensors = [{
      'name': 'Sensor 1',
      'id': 1,
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    },{
      'name': 'Sensor 22',
      'id': 2,
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    },{
      'name': 'Sensor 3',
      'id': 3,
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    },{
      'name': 'Sensor 4',
      'id': 4,
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    }]

})


;
