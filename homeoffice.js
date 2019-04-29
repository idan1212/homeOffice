var leftheader = document.querySelectorAll(".column-left")
var rightheader = document.querySelectorAll(".column-right")
var linkscontainerleft = document.querySelector(".column-left .linkscontainter")
var linkscontainerright = document.querySelector(".column-right .linkscontainter")



leftheader = leftheader[0];
rightheader = rightheader[0];

var leftheaderclickhandler = function(){
    var leftcolumn = document.querySelector(".column-left")
    leftcolumn.classList.remove("non-active");
    leftcolumn.classList.add("super-active");
    var rightcolumn = document.querySelector(".column-right")
    rightcolumn.classList.remove("super-active");
    rightcolumn.classList.add("non-active");
    var rightheader = document.querySelector(".header")
    rightheader.classList.add("header-red");
    rightheader.classList.remove("header-yellow");

    
    linkscontainerleft.classList.add("scroll");
    linkscontainerleft.classList.remove("noscroll");
    linkscontainerright.classList.remove("scroll");
    linkscontainerright.classList.add("noscroll");

    console.log ("Hello world")
}

var rightheaderclickhandler = function(){
    var rightcolumn = document.querySelector(".column-right")
    rightcolumn.classList.remove("non-active");
    rightcolumn.classList.add("super-active");
    var leftcolumn = document.querySelector(".column-left")
    leftcolumn.classList.remove("super-active");
    leftcolumn.classList.add("non-active");
    var leftheader = document.querySelector(".header")
    leftheader.classList.add("header-yellow");
    leftheader.classList.remove("header-red");

    
    linkscontainerright.classList.add("scroll");
    linkscontainerright.classList.remove("noscroll");
    linkscontainerleft.classList.remove("scroll");
    linkscontainerleft.classList.add("noscroll");

  
    

}

leftheader.addEventListener('click', leftheaderclickhandler)
rightheader.addEventListener('click', rightheaderclickhandler)



/*

console.log("Hello World");

var elements = document.querySelectorAll("#supermodule dt")
var n = elements.length

for (var counter = 0; counter < n; counter++) {
    elements[counter].addEventListener('click', function(event){
        
        
        var answer = event.target.nextElementSibling
        console.log(answer)
        answer.classList.toggle("hidden")
    })
}
 */