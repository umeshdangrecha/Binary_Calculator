let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnDiv = document.getElementById("btnDiv");
let btnMul = document.getElementById("btnMul");
let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");
let btn1 = document.getElementById("btn1");
let btn0 = document.getElementById("btn0");
let res = document.getElementById("res");





let checkFirst = false;
let s = "";
btnClr.addEventListener('click',()=>{
  res.innerHTML="";
  checkFirst = false;
  s="";
});

btn1.addEventListener('click',()=>{
  res.innerHTML+="1";
  checkFirst= true;
  s+="1";
});

btn0.addEventListener('click',()=>{
  res.innerHTML+="0";
  checkFirst=true;
  s+="0";
});

btnSum.addEventListener('click',()=>{
  if(checkFirst){
    res.innerHTML+="+";
    checkFirst=false;
    s+="+";
  }
});

btnSub.addEventListener('click',()=>{
  if(checkFirst){
    res.innerHTML+="-";
    checkFirst=false;
    s+="-";
  }
});

btnMul.addEventListener('click',()=>{
  if(checkFirst){
    res.innerHTML+="*";
    checkFirst=false;
    s+="*";
  }
});

btnDiv.addEventListener('click',()=>{
  if(checkFirst){
    res.innerHTML+="/";
    checkFirst=false;
    s+="/";
  }
});

// ([0-9]+)([+-*/])([0-9]+)
btnEql.addEventListener('click',()=>{
  let re=new RegExp("^(\\d+)([/+*-])(\\d+)$");
  console.log(s);
  let arr = re.exec(s);

  let a = convertBinaryToDecimal(arr[1]);
  let b =convertBinaryToDecimal(arr[3]);
  let c;

  switch(arr[2]){
    case '+':c=a+b;break;
    case '*':c=a*b;break;
    case '-':c=a-b;break;
    case '/':c=a/b;break;
  }

  res.innerHTML = c.toString(2);
  s=c.toString(2);
});


function convertBinaryToDecimal(n){
  let i;
  let len = n.length;
  let x=0;
  for(i = len-1; i>=0 ;i--){
    x=x+Math.pow(2,len-i-1)*n[i];
  }
  return x;
}
