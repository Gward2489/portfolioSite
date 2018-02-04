angular.module("gwDev")
.controller("projectsCtrl", function ($window, $scope, $location, dataFactory) {

    $scope.projects = dataFactory.getProjects()

    $scope.linkTo = function (url) {
        $window.open(url)
    }
})