class Carousel {
    constructor(carousel) {
        this.carousel = carousel
        this.leftButton = this.carousel.querySelector(".left-button")
        this.rightButton = this.carousel.querySelector(".right-button")
        this.carouselImages = this.carousel.querySelectorAll(".carousel img")
        this.index = 0
        this.lastIndex = this.carouselImages.length - 1

            // 1st way - Set the first image's styling to display = "block"
        this.carouselImages[this.index].style.display = "block"

            // 2nd way - why isn't adding the "img-show" class working?
        // console.log(this.carouselImages[this.index].classList.add("img-show"))
        // console.log(this.carouselImages[this.index].classList)

        this.rightButton.addEventListener("click", event => this.loopRight(event));
        this.leftButton.addEventListener("click", event => this.loopLeft(event));
    }
    loopRight(){ 
        // When invoked, set all images to display="none", add one to index to select next image
        // and set next image to display="block"

        // console.log("here!")

            // Set all images to none display
        // document.querySelectorAll(".carousel img").forEach(img => img.style.display = "none")
    
            // 1st way - 
        // this.carouselImages.forEach(img => img.classList.toggle("img-show")) // remove? add .img-show if it doens't exist, remove if it does exist
        
            // 2nd way - 
        Array.from(this.carouselImages).forEach(img => img.style.display = "none")

        // Add one to the index, until the last image
        if (this.index < this.lastIndex) {
            this.index += 1
        }

        this.carouselImages[this.index].style.display = "block"
    }
    loopLeft(){
        console.log("here!")
        let imageArr = Array.from(this.carouselImages)
        console.log(imageArr);
        // console.log(imageArr.forEach(img => img.src)) // what is the best way to find available methods on element to find img src?

        console.log("ARRAY", Array.from(this.carouselImages).reverse());

        // added reverse() to iterate backwards from the carouselImages array (start at last image?)
        // Array.from(this.carouselImages).reverse().forEach(img => img.style.display = "none")
        
        // this.index += 1
        // this.carouselImages[this.index].style.display = "block"
    }
}

class Image {
    // constructor(image) {
    //     this.image = image
    // }
    // selectImg() {

    // }
}

const carousel = new Carousel(document.querySelector(".carousel"))
// new Carousel(carousel))
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

