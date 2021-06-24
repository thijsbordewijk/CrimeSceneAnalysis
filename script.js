var aangevuld = document.getElementById('dossierAangevuld')

function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

var button1 = document.getElementById('button1')
var hemd = document.getElementById('hemdClue')
var tooltip1 = document.getElementById('tooltip1')

  button1.onclick = function() {
    if (hemd.style.fontFamily == 'monospace') {
      hemd.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      hemd.style.fontFamily = 'monospace';
    }
  }
  
  button1.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip1.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip1.classList.add('done');
  }, false);


var button2 = document.getElementById('button2')
var koffer = document.getElementById('kofferClue')
  
  button2.onclick = function() {
    if (koffer.style.fontFamily == 'monospace') {
      koffer.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      koffer.style.fontFamily = 'monospace';
    }
  }

  button2.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip2.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip2.classList.add('done');
  }, false);

var button3 = document.getElementById('button3')
var mes = document.getElementById('mesClue')
    
  button3.onclick = function() {
    if (mes.style.fontFamily == 'monospace') {
      mes.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      mes.style.fontFamily = 'monospace';
    }
  }

  button3.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip3.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip3.classList.add('done');
  }, false);

var button4 = document.getElementById('button4')
var zilver = document.getElementById('zilverClue')
      
  button4.onclick = function() {
    if (zilver.style.fontFamily == 'monospace') {
      zilver.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      zilver.style.fontFamily = 'monospace';
    }
  }

  button4.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip4.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip4.classList.add('done');
  }, false);

var button5 = document.getElementById('button5')
var dader = document.getElementById('daderClue')
        
  button5.onclick = function() {
    if (dader.style.fontFamily == 'monospace') {
      dader.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      dader.style.fontFamily = 'monospace';
    }
  }

  button5.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip5.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip5.classList.add('done');
  }, false);

var button6 = document.getElementById('button6')
var fiets = document.getElementById('fietsClue')
          
  button6.onclick = function() {
    if (fiets.style.fontFamily == 'monospace') {
      fiets.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      fiets.style.fontFamily = 'monospace';
    }
  }

  button6.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip6.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip6.classList.add('done');
  }, false);

var button7 = document.getElementById('button7')
var stel = document.getElementById('koffieClue')
           
  button7.onclick = function() {
    if (stel.style.fontFamily == 'monospace') {
      stel.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      stel.style.fontFamily = 'monospace';
    }
  }

  button7.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip7.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip7.classList.add('done');
  }, false);

var button8 = document.getElementById('button8')
var telefoon = document.getElementById('telefoonClue')
             
  button8.onclick = function() {
    if (telefoon.style.fontFamily == 'monospace') {
      telefoon.style.fontFamily = 'Libre Barcode 39 Extended';
    } else {
      telefoon.style.fontFamily = 'monospace';
    }
  }

  button8.addEventListener("click", function(e) {
    e.preventDefault;
    tooltip8.classList.add('done');
    aangevuld.classList.remove("success");
    
    void aangevuld.offsetWidth;
    
    aangevuld.classList.add("success");
    tooltip8.classList.add('done');
  }, false);

  var btns = Array.prototype.slice.call(document.querySelectorAll(".butArray"));
  console.log(btns)
  var pics = document.getElementById("missieVoltooid");

  // Loop over the button array
btns.forEach(function(btn){

  // Set up a click event handler for each button
  btn.addEventListener("click", function() {
    // Add or remove a CSS class that tracks the current "hit" state of the button
    this.classList.add("clicked");

    // If all the buttons have the clicked class hide the image otherwise don't
    btns.every((b) => { return b.classList.contains("clicked"); }) ?
      missieVoltooid.classList.add("hidden") : missieVoltooid.classList.remove("hidden");      
  });
});