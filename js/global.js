var globalApp = angular.module("globalApp",[]);

globalApp.value("column",5);//列数
//自定义指令
globalApp.directive("pic",function(){
	return {
		restrict:'E',
		templateUrl:"html/Imglist.html?_"+Math.random(),
		replace:true,
	}
})
globalApp.directive('repeatFinish', function () {
    return {
    	restrict: 'A',
        link: function ($scope, element, attrs) {
            if ($scope.$last === true) {    
                window.onresize = function(){
                    $scope.repeatFinish("img",5);
                }
                $scope.repeatFinish("img",5);
            }
        }
    }
})
// globalApp.directive("more",function(){
//     return {
//         restrict:"E",
//         templateUrl:"html/Imglist.html?_"+Math.random(),
//         replace:true,
//         controller:function($scope,$http){

//         }
//     }
// })
globalApp.service("resur",function(){
    this.resur = function(num){
        if(num <= 1){
            return 1;
        }else{
            return num * arguments.callee(num - 1);
        }
    }
})