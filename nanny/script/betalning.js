
function calculateText(){
 var namn=document.getElementById("id1").innerText
var price=document.getElementById("price").innerText
var quantity=document.getElementsByClassName("item_quantity")[0].value
var total=price*quantity
window.confirm("vill du hyra " + namn+   " som din barnskötare, för "+ total+"kr i "+ quantity+" timmar")

document.getElementById('id3').value=namn;
document.getElementById('id2').value=quantity;
// window.open("//ssd/Users/alexanderaspman/Documents/kravspecifikation/sida/ansök.html", "_self");
}




/*alert("total: $"+total)*/