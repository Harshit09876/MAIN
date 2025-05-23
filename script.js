let loginform=document.querySelector(".login-form");
document.querySelector("#login-btn").onclick=()=>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active')
}


let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
searchform.classList.toggle('active');
loginform.classList.remove('active');

}


// const btncart = document.querySelector("#shoping-cart");
// const cart = document.querySelector(".cart");
// const btnclose = document.querySelector("#cart-close")
// btncart.addEventListener("click",()=>{
//     cart.classList.add("cart-active");
// });


// btnclose.addEventListener("click",()=>{
//     cart.classList.remove("cart-active");
// });

// document.addEventListener("DOMContentLoaded",loadfood);
// function loadfood(){
//     loadcontent();

// }

// function loadcontent(){
//     let btnremove=document.querySelectorAll(".cart-remove");
//     btnremove.forEach((btn)=>{
//         btn.addEventListener("click",removeitem);
//     });

//     let qtyelements=document.querySelectorAll(".cart-quantity");
//     qtyelements.forEach((input)=>{
//         input.addEventListener("change",changeqty);
//     });

//     let cartbtns=document.querySelectorAll(".btn");
//     cartbtns.forEach((btn)=>{
//         btn.addEventListener("click",addcart);
//     });

//     updatetotal();

// }
// function removeitem(){
//     if(confirm("are you sure want to remove!")){
//         let title=this.parentElement.querySelector(".cart-food-title").innerHTML;
//         itemlist=itemlist.filter(el=>el.title!=title);
//         this.parentElement.remove();
//         loadcontent();

//     }

// }

// function changeqty(){
//     if(isNaN(this.value)||this.value<1){
//         this.value=1

//     }
//     loadcontent();
// }


// let itemlist=[];
// function addcart(){
//     let food=this.parentElement;
//     let title=food.querySelector(".food-title").innerHTML;
//     let price=food.querySelector(".price").innerHTML;
//     let imgsrc=food.querySelector(".food-img").src
//     let newproduct={title,price,imgsrc}
//     if(itemlist.find((el)=>el.title==newproduct.title)){
//         alert("product alredy added in the cart");
//         return;

//     }
//     else{
//         itemlist.push(newproduct);

//     }
//     let newproductelement=creatcartproduct(title,price,imgsrc);
//     let element=document.createElement("div");
//     element.innerHTML=newproductelement;
//     let cartbasket=document.querySelector(".cart-content");
//     cartbasket.append(element);
//     loadcontent();


// }


// function creatcartproduct(title,price,imgsrc){
//     return `
//     <div class="cart-box">
//   <img src="${imgsrc}" class="cart-img">
//   <div class="detail-box">
//     <div class="cart-food-title">${title}</div>
//     <div class="price-box">
//       <div class="cart-price">${price}</div>
//       <div class="cart-amt">${price}</div>
//     </div>
//     <input type="number" value="1" class="cart-quantity">
//   </div>
//   <ion-icon type="trash" class="cart-remove"></ion-icon>
// </div>

//     `;


// }


// function updatetotal(){
//     const cartitems = document.querySelectorAll(".cart-box");
//     const totalvalue  = document.querySelector(".total-price");
//     let total = 0
//     cartitems.forEach(product => {
//         let priceelement = document.querySelector(".cart-price");
//         let price = parseFloat(priceelement.innerHTML.replace("Rs.",""));
//         let quantity = document.querySelector(".cart-quantity").value
//         total = total+(price*quantity);
//         product.querySelector(".cart-amt").innerHTML="Rs"+(price*quantity);
//     });
//     totalvalue.innerHTML="Rs."+total;
//     const cartcount = document.querySelector(".cart-count")
//     let count = itemlist.length
//     cartcount.innerHTML=count
//     if (count==0){
//         cartcount.style.display="none";

//     }
//     else{
//         cartcount.style.display="block";
//     }


// }














const btnCart=document.querySelector('#cart-btn');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
  //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  
  let cartBtns=document.querySelectorAll('.btn');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}


//Remove Item
function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];

//Add Cart
function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.food-title').innerHTML;
 let price=food.querySelector('.price').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;
 //console.log(title,price,imgSrc);
 
 let newProduct={title,price,imgSrc}

 //Check Product already Exist in Cart
 if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
 }else{
  itemList.push(newProduct);
 }


let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}


function createCartProduct(title,price,imgSrc){

  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}





