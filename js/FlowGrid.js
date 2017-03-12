var FlowGrid = angular.module("FlowGrid",[]);
FlowGrid.factory("minIndex",function(){
	return {
		getMinIndex:function(val,arr){
			 for(var i in arr){
			 	if(arr[i] == val){
			 		return i;
			 	}
			 }			   
		}
	}
})
FlowGrid.service("waterFall",["minIndex",function(minIndex){
	this.grid = function(item,cols){
		var ImgArr = $(item);
		var ImgWidth = Math.floor($("body").width() / cols);
		$("img").width(ImgWidth);
		var heightArr = [];
		for(var i = 0;i<ImgArr.length;i++){
			var ImgHeight = ImgArr[i].offsetHeight;
			if(i<cols){
				//存储第一排的高度位置
				heightArr.push(ImgHeight);
			}else{
				//定位
				var minImgHeight = Math.min.apply(this,heightArr);
				var minImgIndex = minIndex.getMinIndex(minImgHeight,heightArr);
				ImgArr[i].style.position = "absolute";
				ImgArr[i].style.top = minImgHeight + "px";
				ImgArr[i].style.left = minImgIndex * ImgWidth + "px";
				heightArr[minImgIndex] += ImgHeight;
			}
		}
	}
}])
