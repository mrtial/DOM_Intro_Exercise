document.addEventListener("DOMContentLoaded", function(){

// 1.Change the greeting from "Hello, There!" to "Hello, World!".
  var greeting = document.getElementById('greeting');
  greeting.innerText = "Hello, World!";

// 2.Set the background color of each <li> to yellow.
  var li=document.getElementsByTagName('li');
  for (var i=0;i<li.length;i++){
      li[i].style.backgroundColor='yellow';
  }

// Create an image tag, set its src attribute to 
// http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, 
// and append the to the #greeting div.
  var newImg = document.createElement('img');
  newImg.src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";

  greeting.appendChild(newImg);

// Add the class of selected to an <li> when it is clicked. Remove it from any other 
// lis as well.
  
  var pre = document.getElementsByClassName('selected');
  var changePic = document.querySelectorAll('img');
  var essentials = document.getElementById('essentials');

  essentials.addEventListener('click',function(event){
    if(pre.length>0){
      pre[0].classList.remove('selected');
    }
      event.target.classList.add('selected');

      // Change the image to be the most recently clicked food item.
      var newPic = pre[0].innerText;
      
      changePic[1].src="./images/"+newPic+".jpeg";
    
  });


// When the gray div is moused over, it's removed from the DOM.

    var gray = document.getElementById('ghosting');
    gray.addEventListener('mouseover',function(){
      gray.parentNode.removeChild(gray);
    });


// When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
    
    var orange = document.getElementById('resize');

    orange.addEventListener('mouseover',function(){
      orange.style.width="400px";
    });

    orange.addEventListener('mouseout',function(){
      orange.style.width="200px";
    });


// When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.

    var button = document.getElementById('reset');

    button.addEventListener('click',function(){
      pre[0].classList.remove('selected');
      changePic[1].src="./images/panic.jpeg";

    });


// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"

    addEventListener("keypress", function(event){
      if (event.which>47 && event.which<58){
        alert("I HATE NUMBERZZZ!");}
    });



// BONUS: If someone types the Konami Code, the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"

    var inpute="";
    var konami="38384040373937396665";

    addEventListener("keydown",function(event){
      inpute+=String(event.which);
      console.log(event.which);
      console.log(inpute);


      if(inpute==konami){
        alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
        inpute="";
        }

      // setTimeout(function(){inpute="";},2000);

    });

      
  

});