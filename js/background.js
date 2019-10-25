// console.log($('body'))
// console.log('这个是存在storage里面的',JSON.parse(localStorage.getItem('upname')))

chrome.tabs.onUpdated.addListener(function (){
  chrome.tabs.query({
    active:true,
    url:"https://www.bilibili.com/*"
  }, function (e){
    // console.log('这是B站的返回',e)
    // console.log(this)
    sendMessageToContentScript({cmd:localStorage.getItem('upname')}, function(response){});
  })
})
// 向content-script主动发送消息
function sendMessageToContentScript(message, callback){
	getCurrentTabId((tabId) =>{
		chrome.tabs.sendMessage(tabId, message, function(response)
		{
			if(callback) callback(response);
		})
	})
}
// chrome.contextMenus.create({
// 	title: "触发",
// 	onclick: function(){
//     getCurrentTabId((tabId) =>{
//       chrome.tabs.executeScript(tabId, {
//         code: '$("#app").children(".bili-wrapper").children("#chief_recommend").hide()'
//       })
//       // chrome.tabs.get(tabId,function(e) {
//       //   console.log(e)
//       // })
//       // chrome.tabs.getCurrent(function (e){
//       //   console.log('这是获取当前标签下的',e)
//       // })

//       // chrome.tabs.executeScript({
//       //   code: '$("#app").hide();'
//       // })
//     })
// 	}
// })

function getCurrentTabId(callback){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    if(callback) callback(tabs.length ? tabs[0].id: null);
    // console.log('这是tabs',tabs)
  })
}



// //-------------------- 右键菜单演示 ------------------------//
// chrome.contextMenus.create({
// 	title: "测试右键菜单",
// 	onclick: function(){
// 		chrome.notifications.create(null, {
// 			type: 'basic',
// 			iconUrl: 'img/icon.png',
// 			title: '这是标题',
// 			message: '您刚才点击了自定义右键菜单！'
// 		});
// 	}
// });
// chrome.contextMenus.create({
// 	title: '使用度娘搜索：%s', // %s表示选中的文字
// 	contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
// 	onclick: function(params)
// 	{
// 		// 注意不能使用location.href，因为location是属于background的window对象
// 		chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
// 	}
// });



// //-------------------- badge演示 ------------------------//
// /*(function()
// {
// 	var showBadge = false;
// 	var menuId = chrome.contextMenus.create({
// 		title: '显示图标上的Badge',
// 		type: 'checkbox',
// 		checked: false,
// 		onclick: function() {
// 			if(!showBadge)
// 			{
// 				chrome.browserAction.setBadgeText({text: 'New'});
// 				chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
// 				chrome.contextMenus.update(menuId, {title: '隐藏图标上的Badge', checked: true});
// 			}
// 			else
// 			{
// 				chrome.browserAction.setBadgeText({text: ''});
// 				chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 0]});
// 				chrome.contextMenus.update(menuId, {title: '显示图标上的Badge', checked: false});
// 			}
// 			showBadge = !showBadge;
// 		}
// 	});
// })();*/

// // 监听来自content-script的消息
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
// 	console.log('收到来自content-script的消息：');
// 	console.log(request, sender, sendResponse);
// 	sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
// });

// $('#test_cors').click((e) => {
// 	$.get('https://www.baidu.com', function(html){
// 		console.log( html);
// 		alert('跨域调用成功！');
// 	});
// });

// $('#get_popup_title').click(e => {
// 	var views = chrome.extension.getViews({type:'popup'});
// 	if(views.length > 0) {
// 		alert(views[0].document.title);
// 	} else {
// 		alert('popup未打开！');
// 	}
// });

// // 获取当前选项卡ID
// function getCurrentTabId(callback)
// {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
// 	{
// 		if(callback) callback(tabs.length ? tabs[0].id: null);
// 	});
// }

// // 当前标签打开某个链接
// function openUrlCurrentTab(url)
// {
// 	getCurrentTabId(tabId => {
// 		chrome.tabs.update(tabId, {url: url});
// 	})
// }

// // 新标签打开某个链接
// function openUrlNewTab(url)
// {
// 	chrome.tabs.create({url: url});
// }

// // omnibox 演示
// chrome.omnibox.onInputChanged.addListener((text, suggest) => {
// 	console.log('inputChanged: ' + text);
// 	if(!text) return;
// 	if(text == '美女') {
// 		suggest([
// 			{content: '中国' + text, description: '你要找“中国美女”吗？'},
// 			{content: '日本' + text, description: '你要找“日本美女”吗？'},
// 			{content: '泰国' + text, description: '你要找“泰国美女或人妖”吗？'},
// 			{content: '韩国' + text, description: '你要找“韩国美女”吗？'}
// 		]);
// 	}
// 	else if(text == '微博') {
// 		suggest([
// 			{content: '新浪' + text, description: '新浪' + text},
// 			{content: '腾讯' + text, description: '腾讯' + text},
// 			{content: '搜狐' + text, description: '搜索' + text},
// 		]);
// 	}
// 	else {
// 		suggest([
// 			{content: '百度搜索 ' + text, description: '百度搜索 ' + text},
// 			{content: '谷歌搜索 ' + text, description: '谷歌搜索 ' + text},
// 		]);
// 	}
// });

// // 当用户接收关键字建议时触发
// chrome.omnibox.onInputEntered.addListener((text) => {
//     console.log('inputEntered: ' + text);
// 	if(!text) return;
// 	var href = '';
//     if(text.endsWith('美女')) href = 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=' + text;
// 	else if(text.startsWith('百度搜索')) href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + text.replace('百度搜索 ', '');
// 	else if(text.startsWith('谷歌搜索')) href = 'https://www.google.com.tw/search?q=' + text.replace('谷歌搜索 ', '');
// 	else href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + text;
// 	openUrlCurrentTab(href);
// });

// // 预留一个方法给popup调用
// function testBackground() {
// 	alert('你好，我是background！');
// }

// // 是否显示图片
// var showImage;
// chrome.storage.sync.get({showImage: true}, function(items) {
// 	showImage = items.showImage;
// });
// // web请求监听，最后一个参数表示阻塞式，需单独声明权限：webRequestBlocking
// chrome.webRequest.onBeforeRequest.addListener(details => {
// 	// cancel 表示取消本次请求
// 	if(!showImage && details.type == 'image') return {cancel: true};
// 	// 简单的音视频检测
// 	// 大部分网站视频的type并不是media，且视频做了防下载处理，所以这里仅仅是为了演示效果，无实际意义
// 	if(details.type == 'media') {
// 		chrome.notifications.create(null, {
// 			type: 'basic',
// 			iconUrl: 'img/icon.png',
// 			title: '检测到音视频',
// 			message: '音视频地址：' + details.url,
// 		});
// 	}
// }, {urls: ["<all_urls>"]}, ["blocking"]);