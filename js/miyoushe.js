// setTimeout(() => {
//   let html='<div style="position: fixed;left: 200px;top: 200px;color: #000000;background: #66ccff;width: 200rpx;height: 200rpx;">按钮</div>'
//   $("#__nuxt").append(html)
//   console.log("注入成功")
//   $(".header__avatar").on("click",(e)=>{
//     console.log("触发了这个点击")
//     alert("click");
//   })
// }, 500);
console.log("注入成功")
// $(‘#mainmenu’).on(‘click’, ‘a’, function)
setTimeout(() => {
  $(".header__avatar").on("click",(e)=>{
    setTimeout(() => {
      $(".mhy-account-flow-tabs").find("div").eq(1).on("click",(e)=>{
        let html='<div style="color: #ffffff;background: #66ccff;width: 100%;height: 50px;font-size:18px;text-align: center;line-height: 50px;cursor:pointer;border-radius: 4px;margin-top:20px;">注入帐号密码</div>'
        $(".mhy-login-button").append(html)
      })
    }, 0);
  })
}, 500);
chrome.runtime.onMessage.addListener((res)=>{
  // upname = JSON.parse(res)
  // uparray = upname
  console.log(res)
})