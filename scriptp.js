let fn=document.getElementById("fi");
let sn=document.getElementById("si");
let btnadd=document.getElementById("adding");
let btnsub=document.getElementById("subb");
let btnclr=document.getElementById("del");
let para=document.getElementById("p1");
let last=document.getElementById("final");
function addition(){
   if (fn.value === "" || sn.value === "") {
    last.innerText = "Please value give";
    return;
    }
 let num1=fn.value;
 let num2=sn.value;
 let resultone=Number(num1);
 let resulttwo=Number(num2);
 let main=resultone+resulttwo;
 last.innerText=main+"🎊";
}
function subration(){
  if (fn.value === "" || sn.value === "") {
    last.innerText = "Please value give";
    return;
  }
  let num1=Number(fn.value);
  let num2=Number(sn.value);
  let result=num1-num2;
  last.innerText=result+"🎊";
}
function allclear(){
  let cf=fn.value="";
  let cs=sn.value="";
  last.innerText="";
}
