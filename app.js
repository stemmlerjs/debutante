angular.module('debutanteapp', ['ngRoute'])

.config(($routeProvider, $locationProvider) => {
    $routeProvider
        .when("/", { controller: 'HomeController', templateUrl: "templates/home.html" })
        .when("/track/mindyourown", { controller: 'TrackController', templateUrl: "templates/lp/mindyourown.html" })

    // by doing this, we make the browser use HTML5 and History API, no hashtags
    $locationProvider.html5Mode(true);
})