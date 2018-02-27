angular.module("gwDev")
.controller("technologiesCtrl", function ($scope, $location, dataFactory) {

    $scope.tech = dataFactory.getTech()
    let techRow = []
    let counter = 0
    $scope.techArray = []
    
    $scope.tech.forEach(techObj => {
        techRow.push(techObj)
        counter ++
        if (counter % 5 === 0){
            $scope.techArray.push(techRow)
            techRow = []
        }
    });
})