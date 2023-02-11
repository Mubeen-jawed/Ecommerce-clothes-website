//sproduct img script

let largeImg = document.querySelector("#large-img");
let smallImg = document.querySelectorAll("#small-img");
if(smallImg && smallImg.length){
smallImg[0].addEventListener("click", function(){
  largeImg.setAttribute("src",smallImg[0].getAttribute('src'))
  
  smallimgActive(0)
  smallimgUnactive(1)
  smallimgUnactive(2)
  smallimgUnactive(3)
})

smallImg[1].addEventListener("click", function(){
  largeImg.setAttribute("src",smallImg[1].getAttribute('src'))

  smallimgActive(1)
  smallimgUnactive(3)
  smallimgUnactive(2)
  smallimgUnactive(0)
})

smallImg[2].addEventListener("click", function(){
  largeImg.setAttribute("src",smallImg[2].getAttribute('src'))
  
  smallimgActive(2)
  smallimgUnactive(1)
  smallimgUnactive(3)
  smallimgUnactive(0)
})

smallImg[3].addEventListener("click", function(){
  largeImg.setAttribute("src",smallImg[3].getAttribute('src'))

  smallimgActive(3)
  smallimgUnactive(1)
  smallimgUnactive(2)
  smallimgUnactive(0)
})
}

function smallimgActive (arrayList) {
  smallImg[arrayList].classList.add("active-sproduct-small-img")
}

function smallimgUnactive (arrayList) {
  smallImg[arrayList].classList.remove("active-sproduct-small-img")
}

//product add to cart button

let cartButton = document.querySelector(".all-product-btn")
let cartContainer = document.querySelector(".cart-container-1 table")
let order = document.querySelector(".table-order").innerHTML;


cartButton.addEventListener("click", function() {
  alert("Added To Cart")

  cartContainer.appendChild(order)

})




