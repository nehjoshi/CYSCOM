const slider = document.getElementById("nav-slider");
const nodeList = slider.children;
console.log(nodeList);

var navList = Array.prototype.slice.call(nodeList,0); 

function locateNode(arr) {
	let pos = 0;
	arr.every(item => {
	if(item.classList.length==1) {
		return false;
	} else {
		pos++;
	}
})
	return pos;
}

var delNode = navList[locateNode(navList)];
console.log(delNode);

navList.forEach(item => {
	item.onmouseenter = function(){
		delNode.classList.remove('active');
   		this.classList.add('active');
   		delNode = this;
	}
})