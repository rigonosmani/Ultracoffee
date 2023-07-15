import heroimg from "../assets/hero.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";
import product16 from "../assets/product16.png";
import product17 from "../assets/product17.png";
import product18 from "../assets/product18.png";
import product19 from "../assets/product19.png";
import product20 from "../assets/product20.png";
import product21 from "../assets/product21.png";
import product22 from "../assets/product22.png";
import product23 from "../assets/product23.png";
import product24 from "../assets/product24.png";
import product25 from "../assets/product25.png";
import product26 from "../assets/product25.png";
import product27 from "../assets/product27.png";
import product28 from "../assets/product28.png";
import product29 from "../assets/product29.png";
import product30 from "../assets/product30.png";
import product31 from "../assets/product31.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Fuel your dreams with coffee. ",
  subtitle: "Discover coffee perfection right in our town",
  img: heroimg,
  img1: hero1,
  img2: hero2,
  img3: hero3,
  btntext: "Explore Product",

  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "BRAZIL SANTOS",
      text: "MEDIUM",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "BALI BLUE",
      text: "MED-DARK",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "BLEND+",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
      title: "MOCHA",
      text: "MEDIUM",
    },
    {
      id: "0M0x2",
      title: "BALI BLUE",
      text: "MED-DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "GUATEMALA",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "COSTARICA",
      text: "MED-LIGHT",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "COLUMBIA TASTE",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "BRAZIL SANTOS",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "HONDURAS",
      text: "MED-DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "CARAMEL",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "CINNAMON HAZELNUT",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "MEXIVAN CHOCOLATE",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "CHOCOLATE HAZELNUT",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "150",
      color: "from-slate-900 to-white",
      shadow: "shadow-lg shadow-back-200",
    },
    {
      id: "0M0x12",
      title: "HAZELNUT",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product13,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "FRENCH VANILLA",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product14,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "SWEET ESPRESSO BLEND",
      text: "LIGHT",
      rating: "5+",
      btn: "Buy Now",
      img: product15,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "COLD BREW",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product16,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "MAX COFFEE BLEND",
      text: "MED-LIGHT",
      rating: "5+",
      btn: "Buy Now",
      img: product17,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "AFRICAN ESPRESSO",
      text: "MED-DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product18,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "BLEND+",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product19,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "BREAKFAST BLEND",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product20,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "COWBOY BLEND",
      text: "MED-DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product21,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "6 BEAN ESPRESSO",
      text: "DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product22,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "ITALIAN ROAST",
      text: "DARK-ITALIAN",
      rating: "5+",
      btn: "Buy Now",
      img: product23,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "WHISKEY BARREL AGED",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product24,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "TANZANIA",
      text: "MED-LIGHT",
      rating: "5+",
      btn: "Buy Now",
      img: product25,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "COWBOY BLEND",
      text: "MED-DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product21,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "PERU DECAF SWISS WAT",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product27,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "PAPUA NEW GUINEA",
      text: "MED-DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product28,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "NICARAGUA",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product29,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "MEXICO",
      text: "MEDIUM",
      rating: "5+",
      btn: "Buy Now",
      img: product30,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x12",
      title: "HONDURAS",
      text: "MED-DARK",
      rating: "5+",
      btn: "Buy Now",
      img: product31,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

const story = {
  title: "Top Stories",
  news: [
    {
      title: "Alex Taylor",
      text: "I can't start my day without a visit to Ultra Coffee. The moment I walk through the door, I'm greeted by the friendly staff who know my name and always have a smile.",
      img: product1,
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "MorningCaffeineBoost",
      btn: "Read More",
    },
    {
      title: "Casey Jordan",
      text: "I've been a loyal customer of Ultra Coffee for years, and it never fails to impress. The cozy atmosphere, combined with the intoxicating aroma of freshly roasted beans, creates the perfect ambiance for enjoying a cup of their expertly brewed coffee.",
      img: product3,
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "CoffeeLoversUnite",
      btn: "Read More",
    },
    {
      title: "Riley Harper",
      text: "When it comes to coffee, Ultra Coffee sets the bar high. The quality of their beans and the precision in their brewing methods result in a consistently outstanding cup of coffee.",
      img: product13,
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "FuelYourPassionWithCoffee",
      btn: "Read More",
    },
    {
      title: "Charlie Avery",
      text: "There's something truly special about Ultra Coffee. The moment I step inside, I'm transported to a cozy, welcoming space that feels like a second home. The attention to detail in their coffee preparation is exceptional, and the baristas' passion shines through in every cup. ",
      img: product12,
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "CoffeeAddictLife",
      btn: "Read More",
    },
    {
      title: "Taylor Morgan",
      text: "There's something truly special about Ultra Coffee. The moment I step inside, I'm transported to a cozy, welcoming space that feels like a second home. The attention to detail in their coffee preparation is exceptional, and the baristas' passion shines through in every cup. ",
      img: product4,
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "SipAndSavor",
      btn: "Read More",
    },
    {
      title: "Jordan Cameron",
      text: "I've been on a quest to find the best coffee in town, and I can confidently say that Ultra Coffee reigns supreme. From the first sip, I knew I had discovered something extraordinary.",
      img: product5,
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "AwakeWithCoffee",
      btn: "Read More",
    },
    {
      title: "Sam Parker",
      text: "Ultra Coffee has completely transformed my coffee-drinking experience. Their dedication to sourcing the finest beans and their meticulous roasting process results in a cup of coffee that is simply unparalleled. It's smooth, rich, and full of flavor.",
      img: product3,
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "BrewingInspiration",
      btn: "Read More",
    },
    {
      title: "Jamie Riley",
      text: "I consider myself a coffee aficionado, and Ultra Coffee has become my go-to destination for the perfect cup. The moment I walk into their cozy shop, I'm greeted by the inviting aroma of freshly brewed coffee.",
      img: product7,
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "CoffeeObsessed",
      btn: "Read More",
    },
    {
      title: "Morgan Tyler",
      text: "As a busy professional, I rely on Ultra Coffee to fuel my productivity and keep me going throughout the day. Their coffee is like a burst of energy in every sip. It's smooth, bold, and never fails to deliver that much-needed boost.",
      img: product9,
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "CaffeineRushMode",
      btn: "Read More",
    },
  ],
};

const footerAPI = {
  titles: [
    { title: "About Ultra" },
    { title: "Get Help" },
    { title: "Company" },
  ],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "Jouneral" },
      { link: "Send Us Feeback" },
    ],
  ],
};

export {
  heroapi,
  footerAPI,
  story,
  sneaker,
  highlight,
  toprateslaes,
  popularsales,
};
