angular.module("gwDev")
.controller("splashCtrl", function ($scope, $location, dataFactory) {
  
    dataFactory.populateCache.then(data => {
        $scope.splashInfo = dataFactory.getSplashInfo()
    })

})