const hamburgerBtn = document.querySelector("#hamburgerBtn"),
    primaryNavigation = document.querySelector("#primaryNavigation"),
    carouselContainer = document.querySelector("#carouselContainer");

const testimonials = [
    {
        name: "Anisha Li",
        quote: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
        alt: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
        image: "../images/carousel-1.png"
    },
    {
        name: "Ali Bravo",
        quote: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
        alt: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
        image: "../images/carousel-2.png"
    },
    {
        name: "Richard Watts",
        quote: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
        alt: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
        image: "../images/carousel-3.png"
    },
    {
        name:"Shanai Gough",
        quote:"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
        alt:"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
        image:"../images/carousel-4.png"
    }
]

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("open")
    primaryNavigation.classList.toggle("show")
})

function addCarouselItem(carouselItem) {
    carouselContainer.append(carouselItem)
}

function renderCarouselItems() {
    for (let i = 0; i < testimonials.length; i++) {
        const carouselItem = document.querySelector("[data-carousel-template]").content.cloneNode(true).children[0]
        const createdItem = createCarouselItem(testimonials[i], carouselItem)
        createdItem.setAttribute("data-id",i)
        addCarouselItem(createdItem)
    }
}


function createCarouselItem(item, template) {
    const { name, quote, alt, image } = item
    const img = template.children[0].children[0]
    const title = template.children[0].children[1]
    const text = template.children[0].children[2]
    img.setAttribute("src", image)
    img.setAttribute("alt", alt)
    title.textContent = name
    text.textContent = quote
    return template
}

renderCarouselItems()


$('#carouselContainer').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    mobileFirst:true,
    autoplay:true,
    dotsClass:"controls-wrapper absolute w-screen top-full hidden pt-5 lg:flex gap-3 justify-center",
    customPaging: (slider, i) => {
        return "<button class='block lg:hidden' type='button'> <img src='../images/control.svg'> </button>"
    },
    arrows:false,
    draggable:true
  });