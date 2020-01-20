const $top_header = $("#app").children(".bili-header-m") //获取顶部的dom元素
const $nav_menu = $top_header.children(".nav-menu")
//顶部元素和主体元素的分界线

const $wrapper = $("#app").children(".bili-wrapper") //获取中间主要内容的dom元素
const $chief_recommend = $wrapper.children("#chief_recommend") //获取到首页推荐dom
const $recommend_module = $chief_recommend.children(".recommend-module") //获取到首页推荐右侧dom
const $prev = $recommend_module.children(".prev") //昨日按钮
const $next = $recommend_module.children(".next") //一周按钮

const $home_popularize = $wrapper.children("#home_popularize")
const $bili_live = $wrapper.children("#bili_live")
function recommend_module_clear(x){
  $recommend_module.children("div").each(function(index,value){
    var $div = $(value)
    var upmingcheng = $div.find(".author").html().replace("up主：","")
    console.log(upmingcheng)
    $.each(x,function(i,v){
      if(upmingcheng == v){
        $div.hide()
      }
    })
  })
}//用于将在列表内的成员去除
// $prev.click()
// $prev.click()
// $prev.click()
// var uparray = []
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  upname = JSON.parse(request.cmd)
  uparray = upname
  recommend_module_clear(upname)

  $prev.on('click',(e) => {
    setTimeout(function(){ 
      recommend_module_clear(upname)
    }, 100)
    // $recommend_module.children("div").hide()
    console.log('这里是点了左边')
  })//昨日按钮点击触发
  $next.click((e) => {
    setTimeout(function(){ 
      recommend_module_clear(upname)
    }, 100)
  })//一周按钮点击触发
})


// $(document).ready(function(){
//   $('body').on('click', '#app .bili-wrapper .recommend-module .prev', function(){
//     console.log(uparray)
//     recommend_module_clear(uparray)
//   })
//   $('body').on('click', '#app .bili-wrapper .recommend-module .next', function(){
//     console.log(uparray)
//     recommend_module_clear(uparray)
//   })
// })
$('#app .gg-floor-module').remove() //删除掉页面内广告条类名的元素
$('#app .bili-wrapper .sub-channel-m .r-con .mobile-link-l').remove()//删除掉页面内的右侧下载app的二维码
// $('#app .bili-wrapper .report-scroll-module .gg-floor-module').hide() //屏蔽广告条
// $('#app .bili-wrapper .channel-m .gg-floor-module').hide()

// $('#app .bili-wrapper #bili_bangumi .bangumi-module .gg-floor-module').hide() //屏蔽广告条
// $('#app .bili-header-m .nav-menu .nav-wrapper .fl ul .mobile').hide() //屏蔽下载APP
// $('#app .bili-header-m .nav-menu .nav-wrapper .fl ul .loc-menu').hide() //屏蔽漫画
// $('#app .bili-header-m .nav-menu .nav-wrapper ul .buy').hide() //屏蔽会员购
function top_menu_left(){
  setTimeout(()=>{ 
    const nav_menu_left_arr = $('#app .bili-header-m .nav-menu .nav-wrapper-left ul').children()
    $.each(nav_menu_left_arr,function(key,value){
      // console.log(nav_menu_left_arr)
      if(value.textContent == '70年'){
        $(value).hide()
      }
    })
   }, 100)
  
}
top_menu_left()







//这里是新篇章
setTimeout(() => {
  $('#app #bili_live img').remove() //删除掉页面内广告条类名的元素
  console.log("这里执行的是我信获取到的")
}, 1000);