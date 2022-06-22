let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img')

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/xiuli.jpg'){
		myImage.setAttribute('src','images/qiuying.jpg')
	}else{
		myImage.setAttribute('src','images/xiuli.jpg')
	}
}

let myButton = document.querySelector('button');
function setUserName() {
	//首先调用了 prompt() 函数,弹出一个对话框。但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。
	let myName = prompt('请输入你的名字。');
	//调用 localStorage API，它可以将数据存储在浏览器中供后续获取。用setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它
	localStorage.setItem('name', myName);
	// textContent 属性设置为一个欢迎字符串加上这个新设置的名字。/
	myHeading.textContent = 'Mozilla 酷毙了，' + myName;
	if(!myName) {
	  setUserName();
	} 

	//  else {
	//  let storedName = localStorage.getItem('name');
	//  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
	//}

}

myButton.onclick = function(){
	setUserName();
}