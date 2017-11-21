var app = angular.module('elektra', []);

app.controller('home', function($scope) {

    // get full aulas from server
    $scope.aulas = [{
      'name': 'Aula 1'
    },{
      'name': 'Aula 2'
    },{
      'name': 'Aula 3'
    }];

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

.controller('sensores', function($scope) {

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
      'mota': 'Mota 1',
      'place': 'Aula 1',
      'last_update_time': '12:22',
      'state': 'Encendido'
    };

})


.controller('estadistica', function($scope) {

    // get current_sensor from parameter
    $scope.current_sensor = 'Sensor 1';

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
