import { renderStars } from "./functions";
let topSellingsData = [
  {
    image: "/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: "3",
    realPrice: "$160",
    discountPrice: "null",
    discount: "null",
  },
  {
    image: "/image2.png",
    title: "SKINNY FIT JEANS",
    rating: "4.5",
    realPrice: "$260",
    discountPrice: "$120",
    discount: "-20%",
  },
  {
    image: "/image3.png",
    title: "CHECKERED SHIRT",
    rating: "3.5",
    realPrice: "$120",
    discountPrice: "null",
    discount: "null",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
    image: "/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  {
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
{
  /* <li><a href="#"><i class="fa fa-search"></i></a></li> */
}

function renderData(data) {
  if (!data) return;
  const container = document.querySelector("#shopitems");
  data.forEach((item) => {
    const { image, title, rating, realPrice, discountPrice, discount } = item;

    const cardHtml = `
    <div class="basis-6/12 sm:basis-4/12 lg:basis-3/12">
    <div class="p-3 product-card">
      <div class="image-container mb-2 aspect-square" style="border-radius:15px; background-image: url('${image}'); background-size: contain; background-position: center;">
  
        <!-- Product Links -->
        <ul class="product-links">
        <li><a href="#"><i class="far fa-heart"></i></a></li>
        <li><a href="#">  <i class="fa-regular fa-eye"></i></a></li>
        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
      
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
