    studios.controller('find',['$scope','$location','$http',
        function($scope,$location,$http) {
            $scope.studios=[
                {
                    'name': 'Breaking Point Records',
                    'contact': '0739961910',
                    'location':{city:'cape town',suburb:'Nyanga',street:'10 Msobomvu Drive'}
                },
                {
                    'name': 'Voice to Voice Records',
                    'contact': '0213443532',
                    'location':{city:'cape town',suburb:'Khayelitsha',street:'132 Khaya Street'}
                }
            ];
            console.log($scope.studios)

            $scope.searchtext;
            $scope.search = function(){
                console.log($scope.searchtext)
            }
        }
    ])
