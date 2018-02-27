// Imports
angular.module("gwDev")
    // naming the factory, passing in appropriate angular methods
    .factory("dataFactory", function ($http, $timeout, $location, $route) {
    
        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },
            "populateCache": {
                value: $http.get('../../data/portfolioData.JSON')
                        .then(response => {
                        console.log(response)
                        this.cache = response
                        return response
                    })
            },
            "getSplashInfo": {
                value: () => this.cache.data.splash,
                writable: false
            },
            "getProjects": {
                value: () => this.cache.data.projects,
                writable: true
            },
            "getTech": {
                value: () => this.cache.data.technologies,
                writable: true
            }
        })
    })