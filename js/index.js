var indexApp = angular.module("indexApp",["FlowGrid","globalApp"]);
//配置路由映射表
// indexApp.config(function($stateProvider,$urlRouterProvider){
//     $stateProvider.state('more',{
//         url:'/more',
//         templateUrl:'html/more.html?' + Math.random()
//     })
// })

indexApp.controller("Imglist",["$scope","$http","column","waterFall",function($scope,$http,column,waterFall){
	$http.get("imglist.json").success(function(res){
		console.log(res)
		$scope.arrImg = res;
	})
	$scope.more = function(){
		$(".listImg").append("<pic></pic>");

	}
	$scope.repeatFinish = function(item,cols){
		setTimeout(function(){
			waterFall.grid(item,cols);
		})
	}
}])
