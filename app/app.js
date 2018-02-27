const app = angular.module("gwDev", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when("/splash", {
            templateUrl: "app/partials/splash.html",
            controller:  "splashCtrl"
        })
        .when("/projects", {
            templateUrl: "app/partials/projects.html",
            controller:  "projectsCtrl",
        })
        .when("/technologies", {
            templateUrl: "app/partials/technologies.html",
            controller:  "technologiesCtrl"
        })
        .when("/pdf", {
            templateUrl: "app/partials/pdf.html",
            controller:  "pdfCtrl"
        })
        .when("/email", {
            templateUrl: "app/partials/email.html",
            controller:  "emailCtrl"  
        })
        .otherwise("/splash");
});