import checkImg from '../assets/images/check.svg'; // replace with the actual path to your image


var man_mode = false;

function calculate(tbl,ip){
	var marks=parseFloat(ip.value);
	if(ip.value.length==2 && ip.value!="10" && marks<=20){
		ip.value=marks=20;
	}
	if(marks>100){
		ip.value=marks=100;
	}
	if(marks>=20 && marks<=100){
		if(marks%2!=0) {
			if(marks%2<1){
				marks=marks-marks%2;
			}
			else{
				marks+=(2-marks%2);
			}
			ip.value=marks;
		}
		var diff=0;
		var l=[5,5,5,5,5];
		var w=[6,6,2,2,4];
		var lvl=(marks-marks%20)/20+Math.ceil(marks%20/20);
		l[0]=l[1]=l[2]=l[3]=l[4]=lvl;
		if(marks%20!=0){
			diff=20-marks%20;
		}
		else{
			diff=0;
		}
		while(diff){
			if(diff>=6){
				l[1]--;
				diff-=6;
			}
			if(diff>=4){
				l[4]--;
				diff-=4;
			}
			if(diff>=2 && diff<=4){
				l[2]--;
				diff-=2;
			}
			if(diff>=6){
				l[0]--;
				diff-=6;
			}
			if(diff>=2){
				l[3]--;
				diff-=2;
			}
		}
		for(var i=0;i<5;i++) for(var j=1;j<6;j++)
			tbl.children[i].children[j].innerHTML="";
		for(var i=0;i<5;i++){
			tbl.children[i].children[6-l[i] ].innerHTML=`<img class="check" src="${checkImg}">`;
			w[i]*=l[i];
		}
		w.push(marks);
		return w;
	}
	return false;
}
function check(){
	var tbl1=document.getElementById("tbl1");
	var tbl2=document.getElementById("tbl2");
	var ip1=document.getElementById("ip1");
	var ip2=document.getElementById("ip2");
	if(event.keyCode==9 || event.keyCode==16)
		return false;
	var ip = event.target || event.srcElement;
	if(ip.value){
		if(ip.value.length>=2 && ip.value!="10"){
			if(ip==ip1){
				$(ip2).focus();
			}
			else if(ip==ip2){
				$(ip).blur();
				location.replace("#result");
			}
		}
	}
	var w=[];
	if(ip1.value){
		w[0]=calculate(tbl1,ip1);
	}
	if(ip2.value){
		w[1]=calculate(tbl2,ip2);
	}
	cycle(w[0],w[1]);
	
}
function avg(tbl){
	var s=0,n=tbl.children.length;
	for(var i=0;i<n;i++){
		if(tbl.children[i].lastElementChild.firstElementChild.value){
			s+= parseInt(tbl.children[i].lastElementChild.firstElementChild.value);
		}
		else{
			return false;
		}
	}
	s/=n;
	if(s<20) s=20;
	if(s%2!=0) {
		if(s%2<1){
			s=s-s%2;
		}
		else{
			s+=(2-s%2);
		}
	}
	if(tbl==$("#tbl01")[0]){
		$("#ip1").val(s);
	}
	else{
		$("#ip2").val(s);
	}
}
function perform(){
	var tbl01=document.getElementById("tbl01");
	avg(tbl01);
	var tbl02=document.getElementById("tbl02");
	avg(tbl02);
	check();
}
function c11change(){
	var c10=parseInt($("#c10").text());
	var c11=parseInt($("#c11").val());
	var tbl01=document.getElementById("tbl01");
	var tbl02=document.getElementById("tbl02");
	var tbl3=document.getElementById("tbl3");
	if(c11 || c11==0){
		if(c11<=c10){
			c11=c10;
			$("#c11").val(c11);
		}
		var ct = tbl01.children.length;
		var pc20 = parseInt($("#c20").text());
		var pc21 = parseInt($("#c21").val());
		if($("#c21").val()==""){
			pc21=pc20+$("#tbl02").children().length-1;
		}
		var c20 = c11+1;
		$("#c20").text(c20);
		if(c11<ct){
			var diff=ct-c11;
			while(diff--){
				$("#tbl02 tr:first").before(tbl01.lastElementChild);
			}
		}
		else if(c11>=ct){
			if(c11>=pc21){
				var t=pc21-ct;
				while(t--){
					$("#tbl01").append(tbl02.firstElementChild);
				}
				$("#tbl02").append('<tr>\
					<td>'+c20+'</td>\
					<td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1"/></td>\
					</tr>');
				var diff=c11-pc21;
				var c=pc21+1;
				while(diff--){
					$("#tbl01").append('<tr>\
						<td>'+c+'</td>\
						<td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1"/></td>\
						</tr>');
					c++;
				}
			}
			else{
				var diff=c11-ct;
				while(diff--){
					$("#tbl01").append(tbl02.firstElementChild);
				}
			}
			$("input.exp").on("keyup", expkeyup);
			$("input.exp").on("change", perform);
		}

		perform();
	}
	var ct1 = tbl01.children.length;
	var ct2 = tbl02.children.length;
	tbl3.children[0].children[0].innerText="1 to "+ct1;
	tbl3.children[1].children[0].innerText=(ct1+1)+" to "+(ct1+ct2);
}
function c21change(){
	var c21=parseInt($("#c21").val());
	var tbl01=document.getElementById("tbl01");
	var tbl02=document.getElementById("tbl02");
	var tbl3=document.getElementById("tbl3");
	if(c21 || c21==0){
		var c20=parseInt($("#c20").text());
		var c21=parseInt($("#c21").val());
		if(c21<=c20){
			c21=c20;
			$("#c21").val(c21);
		}
		var tot=c21-c20+1;
		var act=tbl02.children.length;
		var diff= tot-act;
		if(diff<0){
			diff*=-1;
			while(diff--){
				tbl02.removeChild(tbl02.lastElementChild);
			}
		}
		else{
			var ct=c20+tbl02.children.length;
			while(diff--){
				$("#tbl02").append('<tr>\
					<td>'+ct+'</td>\
					<td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1"/></td>\
					</tr>');
				ct++;
			}
			$("input.exp").on("keyup", expkeyup);
			$("input.exp").on("change", perform);
		}

		perform();
	}
	var ct1 = tbl01.children.length;
	var ct2 = tbl02.children.length;
	tbl3.children[0].children[0].innerText="1 to "+ct1;
	tbl3.children[1].children[0].innerText=(ct1+1)+" to "+(ct1+ct2);
}
function expkeyup(){
	if(event.keyCode==9 || event.keyCode==16)
		return false;
	var ip = event.target || event.srcElement;
	if(ip.value){
		if(ip.value.length>=2 && ip.value!="10"){
			var next=ip.parentElement.parentElement.nextElementSibling
			if(next){
				next=next.lastElementChild.firstElementChild;
			}
			var last1=ip.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.firstElementChild;
			var last2=document.getElementById("tbl02").lastElementChild.lastElementChild.firstElementChild;
			var val = parseInt(ip.value);
			if(val<0){
				ip.value=0;
			}
			else if(val>100){
				ip.value=100;
			}
			if(ip==last2){
				$(ip).blur();
				location.replace("#result");
			}
			else if(ip==last1){
				$("#tbl02 tr input:first").focus();			
			}
			else{
				$(next).focus();
			}
		}
	}
	perform();
}
function switch_mode(){
	man_mode = !man_mode;
	$("input[type=number]").prop("disabled",man_mode);
	$("button.reset").click();
	$("#man_mode").prop("checked",man_mode);
}
function cell_check(event){
	var td= $(event.target || event.srcElement);
	if(man_mode && td[0].tagName=="TD"){
		var tr=td.parent();
		var tbl=tr.parent();
		var row=tbl.children().index(tr);
		var col=tr.children().index(td)-1;
		for(var j=1;j<6;j++){
			tbl[0].children[row].children[j].innerHTML="";
		}
		tbl[0].children[row].children[col+1].innerHTML=`<img class="check" src="${checkImg}">`;
		check_man();
	}
}
function cal_man(tbl){
	var w=[6,6,2,2,4,0];
	for(var i=0;i<5;i++){
		var tr=$(tbl.children[i]);
		var td=tr.children().children('img').parent();
		var col=tr.children().index(td)-1;
		if(col<0){
			return false;
		}
		w[i]*=(5-col);
		w[5]+=w[i];
	}
	return w;
}
function check_man(){
	var tbl1=document.getElementById("tbl1");
	var tbl2=document.getElementById("tbl2");
	var w=[];
	w[0]=cal_man(tbl1);
	w[1]=cal_man(tbl2);
	cycle(w[0],w[1]);
}
function cycle(w0,w1){
	var tbl1=document.getElementById("tbl1");
	var tbl2=document.getElementById("tbl2");
	var tbl3=document.getElementById("tbl3");
	var w=[];
	w[0]=w0,w[1]=w1;
	w[2]=[],w[3]=[];
	if(w[0]){
		for(var i=0;i<6;i++){
			tbl3.children[0].children[1+i].innerText=w[0][i];
		}
	}
	else{
		if(!man_mode){
			for(var i=0;i<5;i++) for(var j=1;j<6;j++)
				tbl1.children[i].children[j].innerHTML="";
		}
		for(var i=0;i<6;i++){
			tbl3.children[0].children[1+i].innerText="";
		}
	}
	if(w[1]){
		for(var i=0;i<6;i++){
			tbl3.children[1].children[1+i].innerText=w[1][i];
		}
	}
	else{
		if(!man_mode){
			for(var i=0;i<5;i++) for(var j=1;j<6;j++)
				tbl2.children[i].children[j].innerHTML="";
		}
		for(var i=0;i<6;i++){
			tbl3.children[1].children[1+i].innerText="";
		}
	}
	if(w[0] && w[1]){
		for(var i=0;i<6;i++){
			w[2][i]=w[0][i]+w[1][i];
			w[3][i]=w[2][i]/2;
			tbl3.children[2].children[1+i].innerText=w[2][i];
			tbl3.children[3].children[1+i].innerText=w[3][i];
		}
	}
	else{
		for(var i=0;i<6;i++){
			tbl3.children[2].children[1+i].innerText="";
			tbl3.children[3].children[1+i].innerText="";
		}
	}
}
$(document).ready(function(){
	$("#c11").focus();
	$("#c11").click();
	$("#c11").trigger('click');
	$("#c11").on("keyup",function(){
		if(event.keyCode==9 || event.keyCode==16 || event.keyCode>=37 && event.keyCode<=40)
			return false;
		var ip = event.target || event.srcElement;
		var c10=parseInt($("#c10").text());
		var c11=parseInt($("#c11").val());
		if(c11>15){
			$("#c11").val(15)
		}
		if(c11>c10){
			c11change();
		}
		if(ip.value.length>=1 && ip.value!="1"){
			$("#c21").focus();
		}
	});
	$("#c11").on("change",c11change);
	$("#c21").on("keyup",function(){
		if(event.keyCode==9 || event.keyCode==16 || event.keyCode>=37 && event.keyCode<=40)
			return false;
		var ip = event.target || event.srcElement;
		var c20=parseInt($("#c20").text());
		var c21=parseInt($("#c21").val());
		if(c21>30){
			$("#c21").val(30)
		}
		if(c21>=c20){
			c21change();
		}
		if(ip.value.length>=1 && ip.value!="1" && ip.value!="2" && ip.value!="3"){
			$("#tbl01 tr input:first").focus();
		}
	});
	$("#c21").on("change",c21change);
	$("input.exp").on("keyup", expkeyup);
	$("input.exp").on("change", perform);
	$("input.ip").on("keyup", check);
	$("input.ip").on("change", check);
	$("button.reset").on("click", function(){
		$('input').val('');
		perform();
		var tbl1=document.getElementById("tbl1");
		var tbl2=document.getElementById("tbl2");
		var tbl3=document.getElementById("tbl3");
		for(var i=0;i<5;i++) for(var j=1;j<6;j++)
			tbl1.children[i].children[j].innerHTML="";
		for(var i=0;i<5;i++) for(var j=1;j<6;j++)
			tbl2.children[i].children[j].innerHTML="";

		for(var j=0;j<4;j++) for(var i=0;i<6;i++){
			tbl3.children[j].children[1+i].innerText="";
		}
		if(man_mode){
			location.replace("#man_mode_br");
		}
		else{
			location.replace("#");
			$("#c11").focus();
		}
	});
	$("#man_mode").on("click",switch_mode);
	$("#tbl1 td").click(cell_check);
	$("#tbl2 td").click(cell_check);
	$(".instr-ref").click(function(){
		location.replace("#instructions");
	});
	$(".man-mode-ref").click(function(){
		location.replace("#man_mode_br");
	});
});