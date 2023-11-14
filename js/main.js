

const logo = document.getElementById('logo');

gsap.to(logo, {
    duration: 1, 
    x: 20, 
    scale: 2, 
    ease: "power2.inOut", 
});




(function(){

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Earbuds Model
(() => {
  console.log("IIFE Fired");

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
        tittle: "COPPER CHARGING SOCKETS",
        text: "With our earbuds, enjoy personalised audio control. To fully immerse yourself in your music or calls, adjust the volume to your preferred level.",
        image: "images/volume.png",
    },
    {
        tittle: "SILICON TIPS ",
        text: "Easily take complete control of your audio playback. You have easy access to play, pause, skip tracks, and even answer calls.",
        image:"images/control.png",
    },
    {
        tittle: "M2 CHIP F0R BETTER SOUND CLARITY",
        text: "Easily take complete control of your audio playback. You have easy access to play, pause, skip tracks, and even answer calls.",
        image:"images/plastic.png",
    },
    {
        tittle: "Charging fast",
        text: "Stay powered up and on the go. Our earbuds charge quickly, so you can spend less time waiting and more time enjoying your music or staying connected with your calls.",
        image:"images/battery.png",
    }
  ];

  //functions
  function modelLoaded() {
    console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      
      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.tittle;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;

      console.log(selected);
      console.log(infoBox.tittle);
      console.log(infoBox.text);

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      selected.appendChild(imageElement);

    })
  }

  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  function showInfo() {
  let selected = document.querySelector(`#${this.slot}`);
  gsap.to(selected, { scale: 1.1, duration: 0.3 });
  gsap.to(selected, 1, { autoAlpha: 1 });
}

function hideInfo() {
  let selected = document.querySelector(`#${this.slot}`);
  gsap.to(selected, { scale: 1, duration: 0.3 });
  gsap.to(selected, 1, { autoAlpha: 0 });
}
})();


// Scrolling

(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1950;
    canvas.height = 1080;

    const frameCount = 120;

    const images = []; 
    const buds = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = document.createElement("img");
       
        img.src = `images/salwan_buds_new_2_${(i + 1).toString().padStart(5, '0')}.jpg`;
        images.push(img);
    }
    
    gsap.to(buds, {
        frame: 120,
        snap: "frame", 
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
          start: "top top",
            end: "bottom 20",
            markers: false
        },
        onUpdate: render
    })

    images[0].addEventListener("onload", render);

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }
})();

//X-RAY view

(() => {
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;


        function onDown(){
            dragging = true;
            console.log("set to true")
        }


        function onUp(){
            dragging = false;
            console.log("set to flase")
        }


        function onMove(event) {
           
            if(dragging===true){
                   
                    let x = event.clientX - imageCon.getBoundingClientRect().left;

                    if(x < min){
                        x = min;
                    }
                    else if(x >  max){
                        x = max-15;
                    }

                    drag.style.left = x + "px";
                    left.style.width = x + "px";
            }

        }

        drag.addEventListener('mousedown',onDown);
        document.body.addEventListener('mouseup',onUp);
        document.body.addEventListener('mousemove',onMove);
})();