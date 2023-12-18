import "./style.css";
import { renderStars } from "./src/js/functions";

// ------------------------------------new arival data -------------
let arivalData = [
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
  // Add more data for other cards
];

//top seling data
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
  // Add more data for other cards
];

function renderData(data, type) {
  const container = document.querySelector(
    `${type === "arivalData" ? ".newarivals_box" : ".topsellings_box"}`
  );

  data.forEach((item) => {
    const { image, title, rating, realPrice, discountPrice, discount } = item;

    const cardHtml = `
      <div>
        <div class="p-3">
          <div class="image-container mb-2 aspect-square" style="border-radius:15px; background-image: url('${image}'); background-size: contain; background-position: center;"></div>
          <h4 class="item_title text-black text-[0.75rem] sm:text-base lg:text-lg my-3 font-bold font-['Satoshi']">${title}</h4>
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
}

// Call the function to render new arrivals
renderData(arivalData, "arivalData");
renderData(topSellingsData, "topSellingsData");

$(function () {
  $(".topsellings_box ").slick({
    autoplay: true,
    autoplaySpeed: 1200,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "90px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".newarivals_box").slick({
    centerMode: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1500,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "90px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
