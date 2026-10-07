const menuBtn = document.querySelector(".lb1d1p2");
const backBtn = document.querySelector(".backpositionbtn");
const lb1 = document.querySelector(".lb1");
const lb2 = document.querySelector(".lb2");
const newlb = document.querySelector(".newlb");
const right =document.querySelector(".right");

newlb.classList.add("hidden");

menuBtn.addEventListener("click", () => {
    lb1.classList.add("hidden");
    lb2.classList.add("hidden");
    newlb.classList.remove("hidden");
    right.classList.add("expand")
});

backBtn.addEventListener("click", () => {
    lb1.classList.remove("hidden");
    lb2.classList.remove("hidden");
    newlb.classList.add("hidden");
    right.classList.remove("expand")
})

const mediaQuery = window.matchMedia("(max-width: 1500px)");

handleScreen(mediaQuery); // Check when page loads
mediaQuery.addEventListener("change", handleScreen); // Check when resized

function handleScreen(e) {
    if (e.matches) {
        menuBtn.click();   // Automatically clicks the button
    }
    else{
        backBtn.click();
    }
}



function responsiveHide(selector, breakpoint) {
    const element = document.querySelector(selector);
    const mediaQuery = window.matchMedia(`(max-width:${breakpoint}px)`);

    function handleScreen(e) {
        element.classList.toggle("hidden", e.matches);
    }

    // Check when page loads
    handleScreen(mediaQuery);

    // Check when screen size changes
    mediaQuery.addEventListener("change", handleScreen);
}


// Use the same function for everything
responsiveHide(".nav2", 1000);
responsiveHide(".nav3d1", 600);
responsiveHide(".nav3d2", 600);
responsiveHide("#fb1box4", 680);
responsiveHide("#fb1box3", 545);
responsiveHide("#phid1", 570);
responsiveHide("#phid2", 475);


function height_res(selector, breakpoint) {
    const element = document.querySelector(selector);
    const mediaQuery = window.matchMedia(`(max-height: ${breakpoint}px)`);

    function handleScreen(e) {
        element.classList.toggle("hidden", e.matches);
    }

    handleScreen(mediaQuery);

    mediaQuery.addEventListener("change", handleScreen);
}

height_res(".secondlast", 880);





const audio = new Audio();
const cards = document.querySelectorAll(".maincontent");
let currentSong = null;

cards.forEach(card => {

    const playBtn = card.querySelector(".purpleplay");
    const pauseBtn = card.querySelector(".PauseCircle");

    card.addEventListener("click", () => {

        // If clicking the SAME song
        if (currentSong === card) {

            if (!audio.paused) {
                // Pause
                audio.pause();

                pauseBtn.classList.add("hidden");
                playBtn.classList.remove("hidden");

            } else {
                // Resume
                audio.play();

                playBtn.classList.add("hidden");
                pauseBtn.classList.remove("hidden");
            }

            return;
        }

        // If another song was playing, reset it
        if (currentSong) {

            currentSong.querySelector(".purpleplay").classList.remove("hidden");
            currentSong.querySelector(".PauseCircle").classList.add("hidden");

        }

        // Play new song
        const song = card.dataset.song;

        audio.src = song;
        audio.play();

        // Change buttons
        playBtn.classList.add("hidden");
        pauseBtn.classList.remove("hidden");

        // Remember this song
        currentSong = card;

    });

});


