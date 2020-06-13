///<reference path="enviroment_angular_libs/angular.js" />
///<reference path="enviroment_angular_libs/angular-route.js" />


//imports dos controllers para evitar verbosidade no código;
import buttonController from './controllers/buttonController.js'
import registerController from './controllers/formController.js'
import databaseController from './controllers/databaseController.js'

const mainApp = angular.module('mainApp',['ngRoute'])

const routeConfig = ($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: 'src/components/formComponent.html',
        controller: 'form-controller'
    })
    .when('/database', {
        templateUrl: 'src/components/databaseComponent.html',
        controller: 'database-controller'
    })
    .otherwise({
        redirectTo: '/'
    })
    $locationProvider.html5Mode(true)
}

mainApp.config(routeConfig)
mainApp.controller('button-controller', buttonController);
mainApp.controller('form-controller', registerController);
mainApp.controller('database-controller', databaseController);

