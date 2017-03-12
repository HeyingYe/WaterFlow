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
                $scope.repeatFinish("img",5);
            }
        }
    }
})
globalApp.directive("more",function(){
    return {
        restrict:"E",
        replace:false,
        templateUrl:"html/Imglist.html?_"+Math.random(),
        controller:function($scope,$http){

        }
    }
})