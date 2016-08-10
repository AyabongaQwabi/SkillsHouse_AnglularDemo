    var self = studios;
    studios.controller('error',['$scope','$location','$http',
        function($scope,$location,$http) {
            console.log('---on error control')
            console.log(self.apiError)
            $scope.apiError=self.apiError
        }
    ])
