"use strict";

import { check } from "prettier";
import "../css/Category.css";
import { renderStars } from "./functions";

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
    console.log(currentUrl);
  }
});
// navbar js end

let topSellingsData = [
  {
    id: 1,
    image: ["/image1.png","/image1.png"],
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: "3",
    realPrice: "$160",
    discountPrice: "null",
    discount: "null",
    catagory:[{red:{small:4,medium:2,large:5 },  green:{small:5,medium: 2,large:0}}]
  },
  {
    id: 2,
    image: "/image2.png",
    title: "SKINNY FIT JEANS",
    rating: "4.5",
    realPrice: "$260",
    discountPrice: "$120",
    discount: "-20%",
  },
  {
    id: 3,
    image: "/image3.png",
    title: "CHECKERED SHIRT",
    rating: "3.5",
    realPrice: "$120",
    discountPrice: "null",
    discount: "null",
  },
  {
    id: 4,
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    id: 5,
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    id: 6,
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    id: 7,
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    id: 8,
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    id: 9,
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  // Add more data for other cards
];

const cartData = [];

function renderData(data) {
  if (!data) return;
  const container = document.querySelector("#shopitems");
  data.forEach((item) => {
    const cartdata = JSON.stringify(item);
    const { image, title, rating, realPrice, discountPrice, discount, id } =
      item;
    console.log(cartdata);

    const cardHtml = `
    <div class="basis-6/12 sm:basis-4/12 lg:basis-3/12">
    <div class="p-3 product-card">
      <div class="image-container mb-2 aspect-square" style="border-radius:15px; background-image: url('${image}'); background-size: contain; background-position: center;">
  
        <!-- Product Links -->
        <ul class="product-links">
        <li><a href="#"><i class="far fa-heart"></i></a></li>
        <li><a href="#"> <i class="quickview fa-regular fa-eye"></i></a></li>
        <li>
        <button ">
        <a href="#"><i class="addtocartbtn cart__btn fa fa-shopping-cart" data-key='${cartdata}'></i></a>
        </button>
        </li>
        </ul>
      </div>
      <h4 class="item_title text-black text-[0.75rem] sm:text-base mt-3 font-bold font-['Satoshi']">${title}</h4>
      <div class="flex pt-1">${renderStars(rating) + rating}</div>
      <div class="flex justify-between items-center flex-wrap">
        <div class="flex items-center flex-wrap">
          <div class="pl-0 p-1  text-black text-base sm:text-xl font-bold font-['Satoshi']">${realPrice}</div>
          <div class="p-1 text-md sm:text-xl text-black text-opacity-40 text-base font-bold font-['Satoshi'] line-through">
            ${discountPrice === "null" ? "" : discountPrice}
          </div>
          ${
            discount === "null"
              ? ""
              : ` <div class="px-2.5 py-[2px]  text-xs text-red-500 font-medium font-['Satoshi'] bg-red-500 bg-opacity-10 rounded-3xl">
                  ${discount}
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

// Call the function to render new arrivals

renderData(topSellingsData);

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
    productViewModal.classList.remove("hidden");
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

///reander cart data

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



