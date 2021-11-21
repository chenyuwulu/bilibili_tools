let account_arr = []
setTimeout(() => {
  $(".header-user__avatar").on("click",(e)=>{
    setTimeout(() => {
      $(".mhy-account-flow-tabs").find("div").eq(1).on("click",(e)=>{
        let html='<div class="add_acount" style="color: #ffffff;background: #66ccff;width: 100%;height: 50px;font-size:18px;text-align: center;line-height: 50px;cursor:pointer;border-radius: 4px;margin-top:20px;">注入帐号密码</div>'
        $(".mhy-login-button").append(html)
        $(".add_acount").on("click",(res)=>{
          $(".mhy-account-flow-password-login").find("input").eq(0).focus()
          // setTimeout(() => {
          //   $(".mhy-account-flow-password-login").find("input").eq(0).val(1111)
          // }, 100);
          // $(".mhy-account-flow-password-login").find("input").eq(1).focus()
          // $(".mhy-account-flow-password-login").find("input").eq(1).val(account_arr[0]["邮箱密码"])
        })
      })
    }, 200);
  })
},500);
chrome.runtime.onMessage.addListener((res)=>{
  account_arr = JSON.parse(res)
  console.log(account_arr)
  $(".add_acount").on("click",(res)=>{
    console.log(1111)
    // $(".input-container").val(account_arr[0]["邮箱帐号"])
  })
})