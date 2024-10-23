const inp = document.querySelector("input")
// inp.value=1
const subtotal = document.querySelector(".subtotal")

const remove = document.querySelector(".delete_btn")
const product = document.querySelector(".cart_bottom")

const cartsubtotal = document.querySelector(".cartsubtotal")
// const subtotalCart = document.querySelector("#subtotal")
const total = document.querySelector(".total")





const fdata = async () => {
    const data = await fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889")
    // console.log(data);

    const res = await data.json()
    console.log(res);
    console.log(res.items[0].handle);


    //! get image from the fetched result 
    const imageUrl = res.items[0].image;
    document.getElementById('apiImage').src = imageUrl;

    //! get title from the fetched result
    const product_title = res.items[0].product_title
    document.getElementById("sofaName").innerHTML = product_title

    //! get product price from the fetched result
    const product_price = res.items[0].price
    document.getElementById("productPrice").innerHTML = product_price

    inp.addEventListener("change", () => {
        // console.log(inp.value*product_price);
        subtotal.innerText = `Rs.${inp.value * product_price}`
        cartsubtotal.innerText = `Rs.${inp.value * product_price}`
        // subtotalCart.innerText = `Rs.${inp.value*product_price}`
        total.innerText = ` Rs.${inp.value * product_price}`
    })

    remove.addEventListener("click", () => {
        removeModal.style.display = "block"
        // product.style.display="none"
        // cartsubtotal.innerHTML="0"
        // total.innerHTML="0"

    })
    const removeModal = document.getElementById("removeModal");

    const confirmRemove = document.getElementById("confirmRemove");
    const cancelRemove = document.getElementById("cancelRemove");
    cancelRemove.addEventListener("click",()=>{
        removeModal.style.display = "none"
    })
    confirmRemove.addEventListener("click",()=>{
        removeModal.style.display = "none"
        product.style.display="none"
        cartsubtotal.innerHTML="0"
        total.innerHTML="0"
    })
    
    
    const checkoutModal = document.getElementById("checkoutModal");
    

    const confirmCheckout = document.getElementById("confirmCheckout");
    confirmCheckout.addEventListener("click",()=>{
        checkoutModal.style.display="none"
    })
    const cancelCheckout = document.getElementById("cancelCheckout");
    cancelCheckout.addEventListener("click",()=>{
        checkoutModal.style.display="none"
    })
    
    const checkout = document.querySelector(".checkout")
    checkout.addEventListener("click", () => {
        checkoutModal.style.display="block"
    })

}
fdata()
setTimeout(fdata,3000)