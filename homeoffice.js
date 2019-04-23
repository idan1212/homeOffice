var leftheader = document.querySelectorAll(".columnheadernotactive")
var rightheader = document.querySelectorAll(".columnheaderactive")

leftheader = leftheader[0];
rightheader = rightheader[0];

var leftheaderclickhandler = function(){
    var leftcolumn = document.querySelectorAll(".columnnotactive")
    leftcolumn = leftcolumn[0];
    leftcolumn.classList.remove("non-active");
    leftcolumn.classList.add("super-active");
    var rightcolumn = document.querySelectorAll (".columnactive")
    rightcolumn = rightcolumn[0];
    rightcolumn.classList.remove("super-active");
    rightcolumn.classList.add("non-active");
    var rightheader = document.querySelectorAll(".header")
    rightheader = rightheader[0];
    rightheader.classList.add("header-red");

    
    console.log ("Hello world")
}

var rightheaderclickhandler = function(){
    var leftcolumn = document.querySelectorAll(".columnnotactive")
    leftcolumn = leftcolumn[0];
    leftcolumn.classList.remove("super-active");
    leftcolumn.classList.add("non-active");
    var rightcolumn = document.querySelectorAll (".columnactive")
    rightcolumn = rightcolumn[0];
    rightcolumn.classList.remove("non-active");
    rightcolumn.classList.add("super-active");
    var leftheader = document.querySelectorAll(".header")
    leftheader = leftheader[0];
    leftheader.classList.add("header-yellow");

    
    console.log ("Hello world")
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