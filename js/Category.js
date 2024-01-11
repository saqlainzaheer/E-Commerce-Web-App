"use strict";

import { check } from "prettier";
import "../css/Category.css";
import { renderStars } from "./functions";
import axios from 'axios';


//navbar js
const togglenavbtn = document.querySelectorAll(".togglenavbtn");
const navbarsearch = document.querySelector("#navbar-search");
togglenavbtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    navbarsearch.classList.toggle("hidden");
  });
});

var currentUrl = window.location.pathname;

document.querySelectorAll(".link").forEach((link) => {
  if (link.getAttribute("href") === currentUrl) {
    link.classList.remove("unactivelink");
    link.classList.add("activelink");
    
  }
});
// navbar js end

// let  productsData=  []
// [
//   {
//       id: 1,
//       title: "sadad",
//       price: "100.00",
//       discountPercentage: "23.00",
//       discountedPrice: "77.00",
//       metaDescription: "undefined",
//       image: [
//           "uploads\\images\\1704896459101-image7.png",
//           "uploads\\images\\1704896459103-image8.png",
//           "uploads\\images\\1704896459105-image9.png",
//           "uploads\\images\\1704896459108-image10.png"
//       ],
//       catagory: [
//           {
//               id: 1,
//               product_id: 1,
//               colorname: "green",
//               color: "#000000",
//               size_small: 23,
//               size_medium: 2,
//               size_large: 3
//           }
//       ]
//   },
//   {
//       "id": 2,
//       "title": "sadad",
//       "price": "100.00",
//       "discountPercentage": "23.00",
//       "discountedPrice": "77.00",
//       "metaDescription": "undefined",
//       "image": [
//           "uploads\\images\\1704896607864-image7.png",
//           "uploads\\images\\1704896607865-image8.png",
//           "uploads\\images\\1704896607867-image9.png",
//           "uploads\\images\\1704896607869-image10.png"
//       ],
//       "catagory": [
//           {
//               "id": 1,
//               "product_id": 2,
//               "colorname": "green",
//               "color": "#b04545",
//               "size_small": 23,
//               "size_medium": 2,
//               "size_large": 3
//           },
//           {
//               "id": 2,
//               "product_id": 2,
//               "colorname": "red",
//               "color": "#b04545",
//               "size_small": 22,
//               "size_medium": 2,
//               "size_large": 3
//           }
//       ]
//   }
// ]
let Allproductdata=[
  {
        id: 1,
        title: "dream shirt",
        price: "100.00",
        discountPercentage: "23.00",
        discountedPrice: "77.00",
        metaDescription: "undefined",
        image: [
          "uploads/images/1704896459103-image8.png",
            "uploads/images/1704896459101-image7.png",
            "uploads/images/1704896459105-image9.png",
            "uploads/images/1704896459108-image10.png"
        ],
        catagory: [
            {
                id: 1,
                product_id: 1,
                colorname: "green",
                color: "#000000",
                size_small: 23,
                size_medium: 2,
                size_large: 3
            }
        ]
    },
  {
        id: 1,
        title: "tshirt ",
        price: "100.00",
        discountPercentage: "23.00",
        discountedPrice: "77.00",
        metaDescription: "undefined",
        image: [
          "uploads/images/1704896459103-image8.png",
            "uploads/images/1704896459101-image7.png",
            "uploads/images/1704896459105-image9.png",
            "uploads/images/1704896459108-image10.png"
        ],
        catagory: [
            {
                id: 1,
                product_id: 1,
                colorname: "green",
                color: "#000000",
                size_small: 23,
                size_medium: 2,
                size_large: 3
            }
        ]
    },
  {
        id: 1,
        title: "lorem ",
        price: "100.00",
        discountPercentage: "23.00",
        discountedPrice: "77.00",
        metaDescription: "undefined",
        image: [
          "uploads/images/1704896459103-image8.png",
            "uploads/images/1704896459101-image7.png",
            "uploads/images/1704896459105-image9.png",
            "uploads/images/1704896459108-image10.png"
        ],
        catagory: [
            {
                id: 1,
                product_id: 1,
                colorname: "green",
                color: "#000000",
                size_small: 23,
                size_medium: 2,
                size_large: 3
            }
        ]
    },
  {
        id: 1,
        title: "lorem",
        price: "100.00",
        discountPercentage: "23.00",
        discountedPrice: "77.00",
        metaDescription: "undefined",
        image: [
          "uploads/images/1704896459105-image9.png",
          "uploads/images/1704896459103-image8.png",
            "uploads/images/1704896459101-image7.png",
            "uploads/images/1704896459108-image10.png"
        ],
        catagory: [
            {
                id: 1,
                product_id: 1,
                colorname: "green",
                color: "#000000",
                size_small: 23,
                size_medium: 2,
                size_large: 3
            }
        ]
    },
  {
        id: 1,
        title: "lorem",
        price: "100.00",
        discountPercentage: "23.00",
        discountedPrice: "77.00",
        metaDescription: "undefined",
        image: [
          "uploads/images/1704896459108-image10.png",
          "uploads/images/1704896459103-image8.png",
            "uploads/images/1704896459101-image7.png",
            "uploads/images/1704896459105-image9.png",
        ],
        catagory: [
            {
                id: 1,
                product_id: 1,
                colorname: "green",
                color: "#000000",
                size_small: 23,
                size_medium: 2,
                size_large: 3
            }
        ]
    },
  {
        id: 1,
        title: "sadad",
        price: "100.00",
        discountPercentage: "23.00",
        discountedPrice: "77.00",
        metaDescription: "undefined",
        image: [
          "uploads/images/1704896459105-image9.png",
          "uploads/images/1704896459103-image8.png",
            "uploads/images/1704896459101-image7.png",
            "uploads/images/1704896459108-image10.png"
        ],
        catagory: [
            {
                id: 1,
                product_id: 1,
                colorname: "green",
                color: "#000000",
                size_small: 23,
                size_medium: 2,
                size_large: 3
            }
        ]
    },
  ]
  
async function callProductsApi() {
  try {
    const response = await axios.get('http://localhost:5000/productsn');
    console.log('Products API Result:', response.data.products);
    // Allproductdata.push( response.data.products);
    response.data.products.map(item=>Allproductdata.push(item));

    ///////---------------------------------------------------------------------------------------------------------------
   
    renderData(Allproductdata);
    

  } catch (error) {
    console.error('Error calling Products API:', error.message);
  }
}
callProductsApi();


// filters data

const filterData = [
  {
    clotheTypeFilter: ["Shirts", "Shorts", "T-Shirts", "Hodie", "Jeans"],
    sizeFilter: [
      "XX-Small",
      "X-Small",
      "Small",
      "Medium",
      "Large",
      "X-Large",
      "2X-Large",
    ],
    dressStyleFilter: ["Casual", "Formal", "Party", "Gym"],
  },
];

function renderClotheTypeFilter(data) {
  const container = document.querySelector("#clotheTypeFilter");
  data[0]?.clotheTypeFilter?.forEach((item, index) => {
    const filterItem = `
    <label
       class="filterFirst flex justify-between items-center p-2 my-1 rounded-md hover:bg-zinc-100  font-['Satoshi'] text-black text-opacity-60"
       for=${item}>
        <input type="radio" id=${item} name=${`clotheType`} ${
      index === 0 ? "checked" : ""
    }>
        <span class="text-base font-normal font-['Satoshi'] ">${item}</span>
        <i class="fa-solid fa-angle-right"></i>
    </label>
    `;
    container.innerHTML += filterItem;
  });
}
renderClotheTypeFilter(filterData);

function renderDressStyleFilter(data) {
  const container = document.querySelector("#dressStyleFilter");
  data[0]?.dressStyleFilter?.forEach((item, index) => {
    console.log(index, typeof index);
    const filterItem = `
    <label
       class="filterFirst flex justify-between items-center p-2 my-1 rounded-md hover:bg-zinc-100  font-['Satoshi'] text-black text-opacity-60"
       for=${item}>
        <input type="radio" id=${item} name=${`dressStyle`} ${
      index === 0 ? "checked" : ""
    }>
        <span class="text-base font-normal font-['Satoshi'] ">${item}</span>
        <i class="fa-solid fa-angle-right"></i>
    </label>
    `;
    container.innerHTML += filterItem;
  });
}

renderDressStyleFilter(filterData);

function renderSizeFilter(data) {
  const container = document.querySelector("#sizeFilter");
  data[0]?.sizeFilter?.forEach((item, index) => {
    const filterItem = `
    <label  for="${item}"
       class="selectCheck py-[6px] px-[12px] hover:bg-black hover:text-white font-['Satoshi'] text-black text-opacity-60 rounded-3xl  bg-zinc-100">
       <input class="hidden" type="checkbox" id="${item}" name="size">
       <span class="text-base font-normal font-['Satoshi'] ">${item}</span>
    </label>    
    `;
    container.innerHTML += filterItem;
  });
}
renderSizeFilter(filterData);

///cart open
const cartData = [];

function renderData(data) {
console.log(data);
if (!data) return;
const container = document.querySelector("#shopitems");
data.forEach((item) => {
const cartdata = JSON.stringify(item);
const {id, image , title,price, discountedPrice, discountPercentage } =
 item;
console.log(cartdata);
console.log( typeof discountedPrice);
console.log(image[0]);
const cardHtml = `
       <div class="basis-6/12 sm:basis-4/12 lg:basis-3/12">
        <div class="p-3 product-card">
         <div class="image-container mb-2 aspect-square" style="border-radius:15px; background-image: url('http://localhost:5000/${image[0]}'); background-size: contain; background-position: center;">

   <!-- Product Links -->
   <ul class="product-links">
   <li><a href="#"><i class="far fa-heart"></i></a></li>
   <li><a href="#"> <i class="quickview fa-regular fa-eye" data-clickproductid=${id}></i></a></li>
   <li>
   <button ">
   <a href="#"><i class="addtocartbtn cart__btn fa fa-shopping-cart" data-key='${cartdata}'></i></a>
   </button>
   </li>
   </ul>
    </div>
      <h4 class="item_title text-black text-[0.75rem] sm:text-base mt-3 font-bold font-['Satoshi']">${title}</h4>
      <div class="flex pt-1">${renderStars("4.0") + 4.0}</div>
         <div class="flex justify-between items-center flex-wrap">
   <div class="flex items-center flex-wrap">
     <div class="pl-0 p-1  text-black text-base sm:text-xl font-bold font-['Satoshi']">${discountedPrice }</div>
     <div class="p-1 text-md sm:text-xl text-black text-opacity-40 text-base font-bold font-['Satoshi'] line-through">
       ${price === "null" ? "" : price}
     </div>
     ${
       discountPercentage === "null"
         ? ""
         : ` <div class="px-2.5 py-[2px]  text-xs text-red-500 font-medium font-['Satoshi'] bg-red-500 bg-opacity-10 rounded-3xl">
             -${discountPercentage.split(".")[0]}%
           </div>`
     }
   </div>
  
             </div>
            </div>
        </div>

 `;

   container.innerHTML += cardHtml;
 });
}





const cartBtn = document?.querySelector(".cartbtn");
const Cartmodal = document?.querySelector("#cartmodal");
const cartCloseBtn = document?.querySelector("#cart__close__btn");
cartBtn.addEventListener("click", function (e) {
e.preventDefault();
Cartmodal.classList.remove("hidden");

const cartData = JSON.parse(localStorage.getItem("cartData"));
renderCartData(cartData);
});

cartCloseBtn.addEventListener("click", function (e) {
e.preventDefault();
Cartmodal.classList.add("hidden");
});

//view box open close

const shopitembox = document?.querySelector("#shopitems");
const productViewCloseBtn = document?.querySelector("#productviewclosebtn");
const productViewModal = document?.querySelector("#productviewmodal");
shopitembox.addEventListener("click", function (e) {
e.preventDefault();
const viewBtn = e.target.classList.contains("quickview");
//  handl product view click
if (viewBtn) {
const clickproductid=e.target.dataset.clickproductid;
console.log(viewBtn,clickproductid)

productViewModal.classList.remove("hidden");



quickViewDatarender(Allproductdata,clickproductid);


}

const cartBtn = e.target.classList.contains("cart__btn");
if (!cartBtn) return;

const cartitem = JSON.parse(e.target.dataset.key);

// Check if the item with the same id is already in the cartData array
const isAlreadyInCart = cartData.some((item) => item.id === cartitem.id);

if (!isAlreadyInCart) {
cartData.push(cartitem);
// Store the entire cartData array in local storage
localStorage.setItem("cartData", JSON.stringify(cartData));
console.log(cartData);
} else {
alert("Item is already in the cart");
}
});

productViewCloseBtn.addEventListener("click", function (e) {
e.preventDefault();
productViewModal.classList.add("hidden");
});
//
function quickViewDatarender(products, id) {
  const product = products.find((p) => p.id === Number(id));

  if (product) {
    // Get the modal container
    const modalContainer = document.querySelector('#productviewdata');
    const { id, image, metaDescription, title, price, discountedPrice, discountPercentage, catagory } =
      product;
    modalContainer.innerHTML = `
      <!-- Your existing HTML code -->
      
<h3 class="text-black text-4xl font-bold font-['Integral CF'] mb-1">${title} </h3>

<span class="flex gap-1 mb-3 items-center">
  <span
      class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
          <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <p class="whitespace-nowrap text-sm">In Stock</p>
  </span>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
      <path
          d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z"
          fill="#FFC633" />
  </svg> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
      fill="none">
      <path
          d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z"
          fill="#FFC633" />
  </svg> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
      fill="none">
      <path
          d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z"
          fill="#FFC633" />
  </svg> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
      fill="none">
      <path
          d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z"
          fill="#FFC633" />
  </svg></span>
<div class="flex flex-row gap-2  items-center mb-5">


  <div class=" text-black text-3xl font-bold font-['Satoshi']">${discountedPrice}</div>
  <div class="text-black text-opacity-30 text-3xl font-bold font-['Satoshi'] line-through">
     ${price}
  </div>


  <div
      class="px-2.5 py-[2px]   bg-red-500 bg-opacity-10 rounded-3xl text-red-500 text-base font-medium font-['Satoshi']">
      -${discountPercentage}%
  </div>
</div>
<p class=" text-black text-opacity-60 text-base font-normal font-['Satoshi'] mb-5 max-w-[500px]">
  ${metaDescription}
</p>

<hr>
<div>
  <p class="text-black text-opacity-60 text-base font-normal font-['Satoshi'] my-3">Select
      Colors
  </p>
  <div class="">
  
      <div class="flex flex-wrap mb-2 gap-3">
      ${catagory.map(item => `
      <label for="${item.id}"
          class="colorcheck w-8 h-8 border border-gray-500 rounded-full items-center justify-center flex" style="background:${item.color}">
          <input class="" type="checkbox" id='${item.id}' name="color" checked>
          <svg class="colorsvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              viewBox="0 0 16 16" fill="bg-gray-600">
              <path
                  d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z" />
          </svg>
      </label>`
  ).join('')}
         


      </div>
  </div>
</div>


<hr>
<div class="">
  <p class="text-black text-opacity-60 text-base font-normal font-['Satoshi'] my-3">Choose
      Size
  </p>

  <div class="mb-3">
      <label for="l"
          class="selectCheck py-[6px] px-[12px] hover:bg-black hover:text-white font-['Satoshi'] text-black text-opacity-60 rounded-3xl  bg-zinc-100">
          <input class="hidden" type="checkbox" id="l" name="size">
          <span class="text-base font-normal font-['Satoshi'] ">Small</span>
      </label>
      <label for="l"
          class="selectCheck py-[6px] px-[12px] hover:bg-black hover:text-white font-['Satoshi'] text-black text-opacity-60 rounded-3xl  bg-zinc-100">
          <input class="hidden" type="checkbox" id="l" name="size">
          <span class="text-base font-normal font-['Satoshi'] ">Medium</span>
      </label>
      <label for="l"
          class="selectCheck py-[6px] px-[12px] hover:bg-black hover:text-white font-['Satoshi'] text-black text-opacity-60 rounded-3xl  bg-zinc-100">
          <input class="hidden" type="checkbox" id="l" name="size">
          <span class="text-base font-normal font-['Satoshi'] ">Large</span>
      </label>
  </div>
</div>
<hr>

      <div class="flex flex-wrap my-3 gap-2">
        <div class="w-44 h-12 px-5 py-4 bg-zinc-100 rounded-3xl justify-between items-center inline-flex">
          <button id="plusButton" class="plus p-6 relative ">+</button>
          <span id="counter" class="counter text-black text-base font-medium font-['Satoshi']">1</span>
          <button id="minusButton" class="minus p-6  relative ">-</button>
        </div>
  
        <div class="flex justify-center items-center">
          <button id="addToCartBtn" data-key='${product}' class="text-white rounded-3xl bg-black h-12 px-20 cart__btn">
            Add to Cart
          </button>
        </div>
      </div>
    `;

    // Increment button functionality
    const plusButton = document.getElementById('plusButton');
    const counter = document.getElementById('counter');
    plusButton.addEventListener('click', () => {
      const currentCount = parseInt(counter.innerText, 10);
      counter.innerText = currentCount + 1;
    });

    // Decrement button functionality
    const minusButton = document.getElementById('minusButton');
    minusButton.addEventListener('click', () => {
      const currentCount = parseInt(counter.innerText, 10);
      if (currentCount > 1) {
        counter.innerText = currentCount - 1;
      }
    });

    // Add to Cart button functionality
    const addToCartBtn = document.getElementById('addToCartBtn');
   
  }
}

// Function to handle adding the product to the cart


///reander cart data
plus.addEventListener("click",function(){
  console.log("cc")
  add();
  count.innerHTML=countvalue;
})

function renderCartData(data) {
if (!data) return;
const container = document.querySelector("#cartRenderDiv");
data.forEach((item) => {
const { image, title, rating, realPrice, discountPrice, discount, id } =
 item;
console.log(item);

const cardHtml = `
<li class="flex items-center gap-4">
<img src="${image}" alt="" class="h-16 w-16 rounded object-cover" />

<div>
   <h3 class="cartitemttitle text-sm text-gray-900">${title}</h3>

   <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
       <div>
           <dt class="inline">Size:</dt>
           <dd class="inline">XXS</dd>
       </div>

       <div>
           <dt class="inline">Color:</dt>
           <dd class="inline">White</dd>
       </div>
   </dl>
   <h3 class="text-sm text-gray-900">120$</h3>
</div>

<div class="flex flex-1 items-center justify-end gap-2 mr-2  ">
   <div class="flex items-center rounded-full border border-gray-200 ">
       <label for="Line1Qty" class="sr-only"> Quantity </label>
       <button type="button"
           class="h-6 w-6 leading-10 text-gray-600 transition hover:opacity-75  flex justify-center items-center">
           &minus;
       </button>
       <input type="number" min="1" value="1" id="Line1Qty"
           class="h-6 w-6 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
       <button type="button"
           class="h-6 w-6 leading-10 text-gray-600 transition hover:opacity-75 flex justify-center items-center">
           &plus;
       </button>
   </div>

   <button class="text-gray-600 transition hover:text-red-600 ">
       <span class="sr-only">Remove item</span>

       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
           <path stroke-linecap="round" stroke-linejoin="round"
               d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
       </svg>
   </button>
</div>
</li>`;

container.innerHTML += cardHtml;
});
}




