angular.module('debutanteapp', ['ngRoute'])

.config(($routeProvider, $locationProvider) => {

    $routeProvider
        .when("/", { controller: 'HomeController', templateUrl: "templates/home.html" })

        // Asides
        .when("/theenodes", { controller: 'AsideController', templateUrl: "templates/asides/thenodes.html" })

        // Tracks
        .when("/track/mindyourown", { controller: 'TrackController', templateUrl: "templates/lp/mindyourown.html" })
        .when("/track/waste", { controller: 'TrackController', templateUrl: "templates/lp/waste.html" })
        .when("/track/domainknowledge", { controller: 'TrackController', templateUrl: "templates/lp/domainknowledge.html" })
        .when("/track/watchclosely", { controller: 'TrackController', templateUrl: "templates/lp/watchclosely.html" })
        .when("/track/man", { controller: 'TrackController', templateUrl: "templates/lp/man.html" })
        .when("/track/fuckyou", { controller: 'TrackController', templateUrl: "templates/lp/fuckyou.html" })

    // by doing this, we make the browser use HTML5 and History API, no hashtags
    $locationProvider.html5Mode(true);
})

/*
 * ===============================
 * Components
 * ===============================
 */

.component('divider', {
    template: '<div class="divider"></div>',
    bindings: {
        name: "<"
    }
})
.component('return', {
    template: '<a href="/" class="return"><<<<<<</a>'
})
