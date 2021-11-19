$("#mihuyou_daoru").on("click",()=>{
  $("#file_id").change((e)=>{
    readWorkbookFromLocalFile(e.target.files[0],(info)=>{
      var sheet = XLSX.utils.sheet_to_json(info.Sheets.Sheet1)
      localStorage.setItem('mihuyou_account_array', JSON.stringify(sheet))
      get_mihuyou_account_array()
    })
  })
  $("#file_id").click()
})
$('#mihuyou_daochu').on('click', () => {
	var table2 = document.querySelector("#table2");
	var sheet = XLSX.utils.table_to_sheet(table2); //将一个table对象转换成一个sheet对象
	openDownloadDialog(sheet2blob(sheet), '配置信息.xlsx');
})

get_mihuyou_account_array()
function get_mihuyou_account_array() {
	let array = localStorage.getItem('mihuyou_account_array')
	array = JSON.parse(array)
	let html = ''
	$.each(array, function (index, value) {
		html += "<tr><td>" + value["邮箱帐号"] + "</td><td>" + value["帐号密码"] + "</td><td>" + value["邮箱密码"] + "</td></tr>"
	})
	$("#mihuyou_tdbo").html(html);
}
function readWorkbookFromLocalFile(file, callback) {
	var reader = new FileReader()
	reader.onload = function(e) {
		var data = e.target.result
		var workbook = XLSX.read(data, {type: 'binary'})
		if(callback) callback(workbook)
	}
	reader.readAsBinaryString(file)
}





































$(function() {//需要初次打开运行
	get_upname_list()
})

$('#ceshi').click((e)=>{
	localStorage.setItem('chenyu',JSON.stringify({
			a:1,
			b:2
		})
	);
  // chrome.storage.sync.set({'chenyu': '123456789'}, function() {
  //   // 通知保存完成。
  //     console.log(chrome.storage.sync.get('chenyu'))
  // });
	// chrome.tabs.query({
	// 		active: true, 
	// 		currentWindow: true
	// 	}, 
	// 	function(tabs){
	// 	if(callback) callback(tabs.length ? tabs[0].id: null);
	// 	// console.log(tabs)
	// })
	// executeScriptToCurrentTab('document.body.style.backgroundColor="red";console.log(111111111)')
	// getCurrentTabId((tabId) =>{
	// 	chrome.tabs.executeScript(tabId, {
	// 		code: '$("#app").children(".bili-wrapper").children("#chief_recommend").hide();'
	// 	});
	// });
})

$('#getname').click((e)=>{
	console.log(JSON.parse(localStorage.getItem('chenyu')))
})

$('#remote').click((e)=>{
	localStorage.removeItem('upname')
	$("#tablede").html('');
})


$('#insert').click((e)=>{
	var name = $("#upname").val()
	set_upname(name)
	console.log($("#upname").val())
})
$(document).on('click', '.deleteupname', (e)=>{
	console.log(e)
	var upname = JSON.parse(localStorage.getItem('upname'))
	upname.splice(e.target.dataset.index,1)
	localStorage.setItem('upname', JSON.stringify(upname))
	get_upname_list()
 })


function set_upname(x) {
	var upname = localStorage.getItem('upname')
	let x_array = x.split(" ")
	if(upname){
		upname = JSON.parse(upname)
		if(x_array.length>0){
			$.each(x_array,function(index,value){
				var a =0
				$.each(upname,function(k,v){
					if(value ==v){
						// alert('已经有了')
						a=1
					}
				})
				if(a==0){
					upname.push(value)
					localStorage.setItem('upname', JSON.stringify(upname))
				}
			})
		} else{
			var a =0
			$.each(upname,function(k,v){
				if(value ==v){
					// alert('已经有了')
					a=1
				}
			})
			if(a==0){
				upname.push(value)
				localStorage.setItem('upname', JSON.stringify(upname))
			}
		}
	} else{
		upname = []
		if(x_array.length>0){
			$.each(x_array,function(index,value){
				upname.push(value)
			})
		} else{
			upname.push(x)
		}
		localStorage.setItem('upname', JSON.stringify(upname))
	}
	get_upname_list()
}

function get_upname_list() {
	let upname = localStorage.getItem('upname')?JSON.parse(localStorage.getItem('upname')):[]
	let html =''
	if(upname.length==0){
		html+='<div style="width:100%;text-align: center;">暂无信息</div>'
		$('#remote').hide()
	} else{
		$.each(upname,function(index,value){
			html+='<div class="row" style="padding-top:10px;padding-bottom:10px;">'
			html+='<div class="col-8" style="line-height: 38px;">'+ value +'</div>'
			html+='<button type="button" data-index="'+ index +'" class="btn btn-secondary col-4 deleteupname">删除</button>'
			html+='</div>'
		})
		$('#remote').show()
	}
	$("#tablede").html(html);
} //获取到本地存储里的up名字列表