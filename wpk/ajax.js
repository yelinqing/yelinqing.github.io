
	function createXMLHttpRequest(){  
		if(window.XMLHttpRequest){  
			XMLHttpReq = new XMLHttpRequest();            
		}else if(window.ActiveXObject){ //IE浏览器  
			try{  
				XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");  
			}catch(e){  
				try{  
					XMLHttpReq  = new ActiveXObject("Microsoft.XMLHTTP");  
				}catch(e){  
				}  
			}  
		}         
	}  
	  
	//发送请求  
	function sendRequest(url, method,issync, param, callname){   
		//创建XMLHttpRequest对象  issync true 为异步，false 为 同步
		createXMLHttpRequest();   
		if("get" == method.toLowerCase()){  
			url = encodeURI(encodeURI(url));  
		}  
		//设置请求信息  
		XMLHttpReq.open(method, url, issync);  

		if("post" == method.toLowerCase()){  
			XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
		}  
		//设置处理完成后要调用的方法名  
		XMLHttpReq.onreadystatechange = callname;  
		//发送请求  
		XMLHttpReq.send(param);  
	}   	  	  	  
	  
	//以下代码根据自己的需求来做  
	var XMLHttpReq = false;  
				  
	function page(url,method,issync){  
		//设置提交方式  

		//参数              
		var param ="";  
		//调用  
		if(issync)
			setTimeout(function(){sendRequest(url, method,issync, param, display)},5000)
			//setTimeout(function(){alert("aaa")},50000)
		else
		  sendRequest(url, method,issync, param, display);
	}  
	//回调函数  
	function display(){  
		if(XMLHttpReq.readyState == 4){  
			
			if(XMLHttpReq.status == 200){  
			

				disposal(XMLHttpReq.responseText);  
			}  
		}  
	}  
	//处理  
	function disposal(result){ 
		
		var div = document.createElement('div');
		div.innerHTML = result;
		document.body.appendChild(div);

	

	}  




