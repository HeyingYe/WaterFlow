var indexApp = angular.module("indexApp",["ui.router","FlowGrid","globalApp"]);
//配置路由映射表
// indexApp.config(function($stateProvider,$urlRouterProvider){
//     $stateProvider.state('more',{
//         url:'/more',
//         templateUrl:'html/more.html?' + Math.random()
//     })
// })
indexApp.controller("Imglist",["$scope","$http","column","waterFall",function($scope,$http,column,waterFall){
	var arr = [];
	$http.get("imglist.json").success(function(res){
		for(var i=0;i<res.length;i++){
			arr.push(res[i])
		}
		$scope.arrImg = arr;
	})
	$scope.more = function(){
		$http.get("imglist.json").success(function(res){
			for(var i=0;i<res.length;i++){
				arr.push(res[i])
			}
			console.log(arr);
			$scope.arrImg = [];
			$scope.arrImg = arr;
			// $scope.$apply();
			// console.log($scope.arrImg);
		})
	}
	$scope.repeatFinish = function(item,cols){
		setTimeout(function(){
			waterFall.grid(item,cols);
		},200)
	}
}])
