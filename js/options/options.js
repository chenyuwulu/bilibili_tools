function getupname() {
	let upname = localStorage.getItem('upname')
	upname = JSON.parse(upname)
	console.log(upname)
	let html = ''
	$.each(upname, function (index, value) {
		html += "<tr><td>" + value + "</td></tr>"
	})
	$("#tdbo").html(html);
}
getupname()

$('#daochu').on('click', () => {
	// console.log(shuzu)
	// var sheet = XLSX.utils.aoa_to_sheet(shuzu)
	// console.log(sheet)
	// openDownloadDialog(sheet2blob(sheet), '导出.xlsx')
	var table1 = document.querySelector("#table1");
	var sheet = XLSX.utils.table_to_sheet(table1); //将一个table对象转换成一个sheet对象
	openDownloadDialog(sheet2blob(sheet), '配置信息.xlsx');
})

$('#files').on('change', (e) => {
	console.log(e.target.files)
	readWorkbookFromLocalFile(e.target.files[0],(x)=>{
		let sheetNames = x.SheetNames; // 工作表名称集合
    let worksheet = x.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
		let html_data = XLSX.utils.sheet_to_json(worksheet)
		console.log(html_data)
		let html = ''
		$.each(html_data, function (index, value) {
			html += "<tr><td>" + value.up姓名 + "</td></tr>"
			set_upname(value.up姓名)
		})
		$("#tdbo").html(html);
	})
})

function readWorkbookFromLocalFile(file, callback) {
	var reader = new FileReader();
	reader.onload = function (e) {
		var data = e.target.result;
		var workbook = XLSX.read(data, {
			type: 'binary'
		});
		if (callback) callback(workbook);
	};
	reader.readAsBinaryString(file);
}
function set_upname(x) {
	var upname = localStorage.getItem('upname')
	let x_array = []
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
				if(x ==v){
					a=1
				}
			})
			if(a==0){
				upname.push(x)
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
}