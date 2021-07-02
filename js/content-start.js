// (function() {
// 	console.log('这是 simple-chrome-plugin-demo 的content-script！');
// 	// console.log('这是jquery',$("#app").hide())
// 	$("#app").children(".bili-wrapper").children("#chief_recommend").hide();
// })()
// // $("#app").hide();
// console.log($('body'))
// console.log(JSON.parse(localStorage.getItem('chenyu')))
// var a = 1
// function xxx(e){
//   callback(2)
// }
console.log("start js位置")
$.post("https://manga.bilibili.com/twirp/user.v1.User/GetAutoBuyComics?device=pc&platform=web",{
	page_num: 2,
	page_size: 100
},
(data)=>{
	console.log(data)
});
$.post("https://apidoc.chenyuwulu.top/mock/86/uniapp/app/login",{
	username: 2,
	password: 100
},
(data)=>{
	console.log(data)
});
// setTimeout(()=>{
// 	let box= document.getElementsByClassName("purchased-comic-item");
// 	console.log(box[0].innerHTML)
// },2000)