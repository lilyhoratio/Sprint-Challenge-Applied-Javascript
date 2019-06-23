class Carousel {
    constructor(carousel) {
        this.carousel = carousel
        this.leftButton = this.carousel.querySelector(".left-button")
        this.rightButton = this.carousel.querySelector(".right-button")
        this.carouselImages = this.carousel.querySelectorAll(".carousel img")
        this.currentIndex = 0
        this.lastIndex = this.carouselImages.length - 1

            // style.display approach
        this.carouselImages[this.currentIndex].style.display = "block"

            // classList approach - why isn't adding the "img-show" class working?
        // console.log(this.carouselImages[this.index].classList.add("img-show"))

        // How to trigger keydown event only if user has clicked on carouselImages element first?
        // let carouselClicked = false;

        this.carouselImages.forEach( image => {
            image.addEventListener("click", () => {
                console.log(event);
                window.addEventListener("keydown", (event) => {           
                    if (event.key == "ArrowLeft") {
                        this.loopLeft(event)
                    }
                    if (event.key == "ArrowRight") {
                        this.loopRight(event)
                    }
                })
            })
        })

        this.rightButton.addEventListener("click", () => this.loopRight())
        this.leftButton.addEventListener("click", () => this.loopLeft())
    }
    loopRight(){ 
        // When invoked, 1) set all images to display="none", 
        // 2) add one to index to select next image
        // 3) and set next image to display="block"
    
            // classList approach
        // this.carouselImages.forEach(img => img.classList.remove("img-show"))
        
            // style.display approach
        Array.from(this.carouselImages).forEach(img => img.style.display = "none")
        // document.querySelectorAll(".carousel img").forEach(img => img.style.display = "none") // better to use this.carouselImages or reselect from document?
        
        if (this.currentIndex < this.lastIndex) {
            // Add one to the index, until the last image
            this.currentIndex += 1
        } else if (this.currentIndex == this.lastIndex) { // a=12 returns 12 // truthy
            // When current index is last index, restart index to 0
            this.currentIndex = 0;
        }

        this.carouselImages[this.currentIndex].style.display = "block"
    }

    loopLeft(){
        Array.from(this.carouselImages).forEach(img => img.style.display = "none")
        if (this.currentIndex > 0) {
            this.currentIndex -= 1
        } else if (this.currentIndex == 0) {  
            this.currentIndex = this.lastIndex
        }
        this.carouselImages[this.currentIndex].style.display = "block"
    }
}

const carousel = new Carousel(document.querySelector(".carousel"))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

