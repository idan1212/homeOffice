var leftheader = document.querySelectorAll(".column-left")
var rightheader = document.querySelectorAll(".column-right")
var linkscontainerleft = document.querySelector(".column-left .linkscontainter")
var linkscontainerright = document.querySelector(".column-right .linkscontainter")
var switchbutton = document.querySelector('#logo')
var formLeft = document.querySelector('#form-left')
var formRight = document.querySelector('#form-right')


leftheader = leftheader[0];
rightheader = rightheader[0];

var whichcolumnisactiverightnow = "right";

// Click on right coulmn -> Switch to left column
var switchtoleftcolumn = function(){
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

// Click on left coulmn -> Switch to right column
var switchtorightcolumn = function(){
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

//'Linkit' button
var switchcontainerbutton = function () {
if (whichcolumnisactiverightnow == "right") {
    // activate the left column
    switchtoleftcolumn();
whichcolumnisactiverightnow = "left";
} else {
    // activate the right column
    switchtorightcolumn();
whichcolumnisactiverightnow = "right";
}
}



//Input field value print to console.log
  function inputChangeRight(e) {
      e.preventDefault()
      var inputContent = document.getElementById("link-input-right").value;
      var containerRight = document.querySelector(".super-active .linkscontainter");
      
      var linkBox = document.createElement('div');
      linkBox.classList.add("linkbox");
        var currentdateTime = new Date()
      var dateTime = currentdateTime.getDate() + "." + (currentdateTime.getMonth()+1) + "." + currentdateTime.getFullYear() + " ♥ " + currentdateTime.getHours() + ":" + currentdateTime.getMinutes();
      var linkBoxContent = `<div class="placeholder"></div>
                            <div class="linkname">Do I Wanna Know</div>` + `<a class="link" href="http://isthishow.com">` + inputContent + `</a>
                            <a class="trash" href="whatwhat.html">`+`</a>
                            <div class="date">` + dateTime + `</div>`
      linkBox.innerHTML = linkBoxContent;
      
      containerRight.appendChild (linkBox)

      
      //containerRight.textContent = inputContent//
   console.log(inputContent);
  }

  function inputChangeLeft(e) {
      e.preventDefault()
   console.log(document.getElementById("link-input-left").value);
  }


leftheader.addEventListener('click', switchtoleftcolumn)
rightheader.addEventListener('click', switchtorightcolumn)
switchbutton.addEventListener('click', switchcontainerbutton)
formRight.addEventListener('submit', inputChangeRight)
formLeft.addEventListener('submit', inputChangeLeft)





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