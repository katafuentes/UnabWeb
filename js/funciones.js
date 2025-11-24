//alert("hola mundo");
const miBotón = document.getElementById("toggle");
//alert(miBotón);

function themeChange() {
    const miBody = document.getElementsByTagName("body")[0];
    //alert(miBody) ;
if(miBody.classList.contains("dark")) {
miBody.classList.remove("dark")
}else{
 miBody.classList.add("dark");
}
}

miBotón.addEventListener("click", themeChange);