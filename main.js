 var keys = document.querySelectorAll(".key"),
 note = document.querySelector(".nowplaying"),
 hints = document.querySelectorAll(".hints");

 var saveObj={};
var saveAudio=0;
var arraySave=[];

var i=0;

 var vid = document.getElementById("bgvid"); 

window.addEventListener("keydown", function(x){

    var color = document.querySelector(`.key[data-key="${x.keyCode}"]`);
    var originalColor = getComputedStyle(color).borderColor; 
   

 var audio = document.querySelector(`audio[data-key="${x.keyCode}"]`),
 key = document.querySelector(`.key[data-key="${x.keyCode}"]`);
 if(saveAudio===1){saveObj["K"+x.keyCode]=x.keyCode;
 arraySave=(Object.values(saveObj)) ;
}
 
 if (!key) return;
 var keyNote = key.getAttribute("data-note");
 note.innerHTML = keyNote;
 audio.currentTime = 0;
 audio.play();
 vid.play();

 color.style.borderColor = "rgba(230, 255, 0, 0.35)";
     setTimeout(function(){
        color.style.borderColor = originalColor;
      }, 350);

});



    $('.key').click(function() {    

      var a = $(this).attr('data-key');
      audio = document.querySelector(`audio[data-key="${a}"]`),
      key = document.querySelector(`.key[data-key="${a}"]`);

      var color = document.querySelector(`.key[data-key="${a}"]`);
      if(saveAudio===1){saveObj["K"+a]=a;
      arraySave=(Object.values(saveObj)) ;
    }

      var originalColor = getComputedStyle(color).borderColor; 
      var keyNote = key.getAttribute("data-note");
      note.innerHTML = keyNote;
      audio.currentTime = 0;
      audio.play();
      vid.play();
      color.style.borderColor = "rgba(230, 255, 0, 0.35)";
      setTimeout(function(){
        color.style.borderColor = originalColor;
       }, 350);

      
     
     });
