import "./style.css";

///render start rating component

function renderStars(rating) {
  const stararray = rating.split(".");
  console.log(stararray);
  const fullStars = stararray[0];
  const hasHalfStar = stararray[1] === "5" ? true : false;
  const stars = [];

  // Render full stars
  for (let i = hasHalfStar ? 1 : 0; i <= fullStars - 1; i++) {
    stars.push(`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z" fill="#FFC633"/>
      </svg>
    `);
  }

  // Render half star if applicable
  if (hasHalfStar) {
    stars.push(`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z" fill="#FFC633"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z" fill="#FFC633" style="clip-path: inset(0 50% 0 0)"/>
      </svg>
    `);
  }
  return stars.join("");
}
// ------------------------------------new arival data -------------
let arivalData = [
  {
    image: "./public/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: "3",
    realPrice: "$160",
    discountPrice: "null",
    discount: "null",
  },
  {
    image: "./public/image2.png",
    title: "SKINNY FIT JEANS",
    rating: "4.5",
    realPrice: "$260",
    discountPrice: "$120",
    discount: "-20%",
  },
  {
    image: "./public/image3.png",
    title: "CHECKERED SHIRT",
    rating: "3.5",
    realPrice: "$120",
    discountPrice: "null",
    discount: "null",
  },
  {
    image: "./public/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  // Add more data for other cards
];

//top seling data
let topSellingsData = [
  {
    image: "./public/image1.png",
    title: "T-SHIRT WITH TAPE DETAILS",
    rating: "3",
    realPrice: "$160",
    discountPrice: "null",
    discount: "null",
  },
  {
    image: "./public/image2.png",
    title: "SKINNY FIT JEANS",
    rating: "4.5",
    realPrice: "$260",
    discountPrice: "$120",
    discount: "-20%",
  },
  {
    image: "./public/image3.png",
    title: "CHECKERED SHIRT",
    rating: "3.5",
    realPrice: "$120",
    discountPrice: "null",
    discount: "null",
  },
  {
    image: "./public/image4.png",
    title: "SLEEVE STRIPED T-SHIRT",
    rating: "4.5",
    price: "$120",
    realPrice: "$160",
    discountPrice: "130",
    discount: "-30%",
  },
  // Add more data for other cards
];

function renderData(data, type) {
  //type mean arival data or top selling data
  data.forEach((item) => {
    const container = document.querySelector(
      `${type === "arivalData" ? ".newarivals_box" : ".topsellings_box"}`
    );

    data.forEach((item) => {
      const { image, title, rating, realPrice, discountPrice, discount } = item;

      const cardHtml = `
      <div class="">
        <div class="p-3">
        <div class="image-container mb-2" style="height: 300px; border-radius:15px; background-image: url('${image}'); background-size: cover; background-position: center;"></div>
          <h4 class="item_title text-black sm:text-base lg:text-lg text-xs my-3 font-bold font-['Satoshi'] lowercase">${title}</h4>
          <div class="flex p-1">${renderStars(rating) + rating}</div>
          <div class="flex justify-between items-center flex-wrap">
            <div class="flex items-center">
              <div class="p-1 text-black text-base sm:text-xl md:text-2xl font-bold font-['Satoshi']">${realPrice}</div>
              <div class="p-1 text-md sm:text-xl md:text-2xl text-black text-opacity-40 text-base font-bold font-['Satoshi'] line-through">
                ${discountPrice === "null" ? "" : discountPrice}
              </div>
              ${
                discount === "null"
                  ? ""
                  : ` <div class="px-3.5 py-1.5 ml-1 text-md text-red-500 text-xs font-medium font-['Satoshi'] bg-red-500 bg-opacity-10 rounded-3xl">
                  ${discount}
                </div>`
              }
              
            </div>
            <div class="item__cartbtn">
              <button class="w-8 h-8 border-1 bg-black bg-opacity-50 rounded-full text-[#F0EEED] hover:text-black hover:bg-[#F0EEED] transition-all duration-300">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

      container.innerHTML += cardHtml;
    });
  });
}

// Call the function to render new arrivals
renderData(arivalData, "arivalData");
renderData(topSellingsData, "topSellingsData");
