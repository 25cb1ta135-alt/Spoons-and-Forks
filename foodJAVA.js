let order="order";

let f11=document.getElementById("f1");
f11.onclick=()=>{
    order=order+"   =rice bowl ";
   console.log(order);
   alert(order);
}
let f22=document.getElementById("f2");
f22.onclick=()=>{
    order=order+" ,daal makhni ";
    console.log(order);
    alert(order);
}
let f33=document.getElementById("f3");
f33.onclick=()=>{
    order=order+" ,panner makhni ";
    console.log(order);
    alert(order);
}

let f44=document.getElementById("f4");
f44.onclick=()=>{
    order=order+" ,chappatis ";
    console.log(order);
    alert(order);
}
let f55=document.getElementById("f5");
f55.onclick=()=>{
    order=order+" ,palak panner ";
    console.log(order);
    alert(order);
}
let f66=document.getElementById("f6");
f66.onclick=()=>{
    order=order+" ,salad ";
    console.log(order);
    alert(order);
}
let f77=document.getElementById("f7");
f77.onclick=()=>{
    order=order+" ,icecream ";
    console.log(order);
    alert(order);
}
let f88=document.getElementById("f8");
f88.onclick=()=>{
    order=order+" ,gulab jamun ";
    console.log(order);
    alert(order);
}
let bt=document.getElementById("bt");
bt.onclick=()=>{
    localStorage.setItem('saved order', order);
    alert("your order was saved");
    
}














 

