let cart = [];

function increaseQty(btn){
    let qty = btn.parentElement.querySelector(".qty");
    qty.innerText++;
}

function decreaseQty(btn){
    let qty = btn.parentElement.querySelector(".qty");
    if(qty.innerText > 1){
        qty.innerText--;
    }
}

document.addEventListener("click", function(e){
    if(e.target.classList.contains("add-to-cart")){
        let card = e.target.parentElement;
        let name = e.target.dataset.name;
        let price = e.target.dataset.price;
        let size = card.querySelector(".size").value;
        let qty = card.querySelector(".qty").innerText;
        let img = card.querySelector("img").src; // get image URL

        if(size == ""){
            alert("Select Size");
            return;
        }

        cart.push({name, price, size, qty, img});
        alert("Added to Cart");
    }
});

function checkout(){
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello, I want to order:%0A";

    cart.forEach(item => {
        // Format: Name (Size) xQty - ₦Price
        // Include image link
        message += `${item.name} (${item.size}) x${item.qty} - ₦${item.price*item.qty}%0A`;
        message += `Image: ${item.img}%0A%0A`;
    });

    // Replace with your WhatsApp number
    let url = `https://wa.me/2349161267396?text=${message}`;
    window.open(url, "_blank");
}