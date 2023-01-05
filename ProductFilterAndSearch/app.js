let products = {
    data:[{
        productName:"Tshirt For Everyone",
        category:"T-SHIRT",
        price:"9500",
        image:"images/tshirt01.png",
    },
    {
        productName:"Hoodie For Man",
        category:"TOP-WEAR",
        price:"11000",
        image:"images/Rhoodie.png",
    },
    {
        productName:"Hoodie For Girl",
        category:"TOP-WEAR",
        price:"11000",
        image:"images/GHoodie.png",
    },
    {
        productName:"Smart watch For Girl",
        category:"WATCH",
        price:"40000",
        image:"images/smartwatch.jpg",
    },
    {
        productName:"G-SHOCK",
        category:"WATCH",
        price:"150000",
        image:"images/G-SHOCK.jpg",
    },
    {
        productName:"Coat Pant",
        category:"TOP-WEAR",
        price:"950000",
        image:"images/coatPant.png",
    },
    {
        productName:"Puma Sneaker",
        category:"SNEAKER",
        price:"130000",
        image:"images/pumaSneaker.jpg",
    },
    {
        productName:"Ipanema Slipper",
        category:"SLIPPER",
        price:"40000",
        image:"images/ipanemaSlipper.png",
    },
    {
        productName:"School Bag",
        category:"BAG",
        price:"32000",
        image:"images/schoolBag.png",
    },
    {
        productName:"HandBag For Lady",
        category:"BAG",
        price:"95000",
        image:"images/HandBag.jpg",
    },
    {
        productName:"Travel Bag",
        category:"BAG",
        price:"950000",
        image:"images/travelBag.png",
    },{
        productName:"Tshirt For Sport",
        category:"T-SHIRT",
        price:"20000",
        image:"images/sportTshirt.jpg",
    },{
        productName:"Sneaker For Sport",
        category:"SNEAKER",
        price:"9500",
        image:"images/nikeSport.png",
    },{
        productName:"Nike T-shirt",
        category:"T-SHIRT",
        price:"20000",
        image:"images/TshirtDesign.png",
    },
    {
        productName:"Ipanema Pink and Blue Flip Flops",
        category:"SLIPPER",
        price:"40000",
        image:"images/ipanemaSlipper02.png",
    },
],
    
};
for(let i of products.data){
    let card = document.createElement("div");

    card.classList.add("card", i.category, "hide");
    // card.hidden("div");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-conatiner");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let pName = document.createElement("h5");
    pName.classList.add("product-name");
    pName.innerText = i.productName.toUpperCase();
    container.appendChild(pName);
    // card.appendChild(container);
    let price = document.createElement("h5");
    price.classList.add("product-price");
    price.innerText = i.price+ " MMK";
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
function filterProduct(value){
let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            // console.log(true);
            button.classList.add("active");
        }else{
            // console.log(false);
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
    if (value == "all"){
        element.classList.remove("hide");
    }else{
        console.log(false);
        if(element.classList.contains(value)){
            element.classList.remove("hide");
        }else{
            element.classList.add("hide");
        }
    }
});
}
document.getElementById("search").addEventListener("click", () => {
   let searchInput = document.getElementById("search-input").value;
   let elements = document.querySelectorAll(".product-name");
   let cards = document.querySelectorAll(".card");
   elements.forEach((element, index) => {
    if(element.innerText.includes(searchInput.toUpperCase())){
        cards[index].classList.remove("hide");
    }else{
        cards[index].classList.add("hide");
    }
   })
})
window.onload = () =>{
    filterProduct("all");
}

// let slideIndex = [1,1];
// let slideId = ["slide"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }
