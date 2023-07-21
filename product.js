////// POP UP PRODUCT CARD //////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const productCard = document.querySelectorAll(".product-card");

const product1Data = {
  pDescription:
    "به طور کلی، سیستم مکان‌یابی و ذخیره اطلاعات رهاورد قادر است به پروتکل‌های استاندارد مورد استفاده در صنایع خودرو‌سازی و منطبق با استاندارد‌های SAE نظیر CAN-BUS و KLINE در خودرو‌های مختلف متصل شود تا تمامی اطلاعات طبقه‌بندی شده را علاوه بر یک حافظه خارجی(SD-Card)، در یک سرور مرکزی ذخیره‌ نماید.",
  pName: "برد الکترونیکی هوشمند رهاورد پایه",
  pImage: "./img/products/shid.png",
  pOption1Title: "ردیابی آنلاین",
  pOption1Text: "ردیابی آنلاین بر اساس تنظیمات و الگوریتم هوشمند ثبت اطلاعات",
  pOption2Title: "تحلیل رفتار راننده",
  pOption2Text:
    "محاسبه پارامترهای رفتار راننده، مانند: ترمز، شتاب و گردش ناگهانی شدید",
  pOption3Title: "پنل مدیریت",
  pOption3Text: "مدیریت ناوگان و مانیتورینگ سلامت خودرو از طریق پنل مدیریت",
  pOption4Title: "هشدار و اعلانات",
  pOption4Text: "ارسال موقعیت و اعلام وضعیت بحرانی",
  pOption5Title: "ورودی و خروجی کاربردی",
  pOption5Text:
    "پشتیبانی از ورودی آنالوگ، دیجیتال و سریال برای ارتباط با دستگاه‌ها.",
  pOption6Title: "مقاومت بالا",
  pOption6Text: "تحمل دما از منفی ۴۰ تا مثبت ۷۵ و رطوبت از ۵ درصد تا ۸۰",
  pOption7Title: "حافظه خارجی",
  pOption7Text:
    "دارای حافظه ذخیره‌سازی خارجی اطلاعات با میزان ظرفیت 32 گیگابایت",
  pOption8Title: "ارتباط با ECU خودرو",
  pOption8Text: "Read/Write CAN-BUS(J1939)",
};

const product2Data = {
  pDescription:
    "به طور کلی، سیستم مکان‌یابی و ذخیره اطلاعات رهاورد قادر است به پروتکل‌های استاندارد مورد استفاده در صنایع خودرو‌سازی و منطبق با استاندارد‌های SAE نظیر CAN-BUS و KLINE در خودرو‌های مختلف متصل شود تا تمامی اطلاعات طبقه‌بندی شده را علاوه بر یک حافظه خارجی(SD-Card)، در یک سرور مرکزی ذخیره‌ نماید.",
  pName: "  برد الکترونیکی هوشمند رهاورد Pro",

  pOption1Title: "ردیابی آنلاین",
  pOption1Text: "ردیابی آنلاین بر‌اساس تنظیمات و الگوریتم هوشمند ثبت اطلاعات",
  pOption2Title: "تحلیل رفتار راننده",
  pOption2Text:
    "محاسبه پارامترهای رفتار راننده، مانند: ترمز، شتاب و گردش ناگهانی شدید",
  pOption3Title: "داشبورد حرفه ای مدیریت ناوگان",
  pOption3Text:
    "در این داشبور فوق پیشرفته، داده‌ها به صورت دقیق ضبط و ارسال می‌شوند. همچنین با استفاده از هوش مصنوعی بسیاری از فرایند‌ها به صورت خودکار انجام می‌شوند.",
  pOption4Title: "مقاومت بالا",
  pOption4Text: "تحمل دما از منفی ۴۰ تا مثبت ۷۵ و رطوبت از ۵ درصد تا ۸۰",
  pOption5Title: "ورودی و خروجی کاربردی",
  pOption5Text:
    "پشتیبانی از ورودی آنالوگ، دیجیتال و سریال برای ارتباط با دستگاه‌ها.",

  pOption6Title: "هشدار و اعلانات",
  pOption6Text:
    "در صورت بروز حادثه، رهاورد اطلاعات جغرافیایی، نوع خودرو و ... را به مراجع امدادی برای هرچه سریعتر و هوشمندتر شدن فرایند ارسال می‌نماید.",
  pOption7Title: "حافظه خارجی",
  pOption7Text:
    "دارای حافظه ذخیره‌سازی خارجی اطلاعات با میزان ظرفیت 32 گیگابایت",
  pOption8Title: "ارتباط با ECU خودرو",
  pOption8Text:
    "Read/Write CAN-BUS(J1939),\nRead/Write K-Lin,\nRead/Write Line,\nTwo Read/Write Mode Bus(J1708)",
};
const product3Data = {
  pDescription:
    "سیستم نظارت بر گلخانه هوشمند، یک راه حل مبتنی بر هوش مصنوعی برای کشاورزان است که از تکنیک مدولاسیون LoRaWAN استفاده می‌کند. این سیتم داده‌هایی مانند دما، رطوبت، رطوبت خاک و شدت نور را جمع‌آوری می‌کند و بینشی در مورد سلامت محصول ارائه می‌دهد.",
  pName: "برد Green House",
  pImage: "./img/products/greenhouse-1.png",
  pOption1Title: "عدم نیاز به سرور local",
  pOption1Text:
    "استفاده از سیستم عامل real-time تعبیه شده با کارایی بالا. ارائه سیستم مبتنی بر cloud توسط Agri-cloud که از دستگاهای سخت‌افزاری پشتیبانی می‌کند.",
  pOption2Title: "سازگار با استاندارد‌های اصلی IOT",
  pOption2Text: "پشتیبانی از شبکه باند پهن از طریق wi-fi 2G، 3G، 4G و zigbee",
  pOption3Title: "رابط کاربری ساده",
  pOption3Text: "رابط کاربری شخصی سازی شده که ساده و مورد پسند مشتری می‌باشد",
  pOption4Title: "ایمنی و قابلیت اطمینان",
  pOption4Text:
    "سیستم گواهینامه امنیتی PKI برای کنترل دسترسی، احراز هویت امنیتی و رمزگذذاری کانال",
  pOption5Title: "کیفیت بالا و نگهداری آسان",
  pOption5Text:
    "کیفیت بالای قطعاتی که توسط HKGT با یکپارچگی بالا توسعه یافته اند.قابل نگهداری آسان ",
  pOption6Title: "پشتیبانی از دسترسی چند پلتفرمی",
  pOption6Text:
    "مدیریت و نظارت بر داده‌ها و دستگاه‌ها از طریق تلفن همراه، پد‌ها یا کامپیوتر‌ها",
  pOption7Title: "سازگار با محیط",
  pOption7Text:
    "دستگاه‌ها ضد گرد و غبار، ضد آب، سازگار با باران و رطوبت و محیط نامناسب کشاورزی هستند",
  pOption8Title: "پشتیبانی از توسعه ثانویه",
  pOption8Text: "پشتیبانی از توسعه ثانویه، ادغام عمیق با سایر سیستم‌های موجود",
};
// Function to set the button data when a button is clicked
function product1() {
  console.log("product1 Executed");
  setProductData(product1Data);
}

function product2() {
  console.log("product2 Executed");

  setProductData(product2Data);
}

function product3() {
  console.log("product3 Executed");

  setProductData(product3Data);
}
function product4() {
  console.log(product1Data);

  setProductData(product1Data);
}

// Function to set the button data
function setProductData(data) {
  document.querySelector(".p-description").innerHTML = data.pDescription;
  document.querySelector(".p-name").innerHTML = data.pName;
  const productImg = document.querySelector(".p-det-img");
  productImg.src = data.pImage;

  document.querySelector(".p-option1-title").innerHTML = data.pOption1Title;
  document.querySelector(".p-option1-text").innerHTML = data.pOption1Text;
  document.querySelector(".p-option2-title").innerHTML = data.pOption2Title;
  document.querySelector(".p-option2-text").innerHTML = data.pOption2Text;
  document.querySelector(".p-option3-title").innerHTML = data.pOption3Title;
  document.querySelector(".p-option3-text").innerHTML = data.pOption3Text;
  document.querySelector(".p-option4-title").innerHTML = data.pOption4Title;
  document.querySelector(".p-option4-text").innerHTML = data.pOption4Text;
  document.querySelector(".p-option5-title").innerHTML = data.pOption5Title;
  document.querySelector(".p-option5-text").innerHTML = data.pOption5Text;
  document.querySelector(".p-option6-title").innerHTML = data.pOption6Title;
  document.querySelector(".p-option6-text").innerHTML = data.pOption6Text;
  document.querySelector(".p-option7-title").innerHTML = data.pOption7Title;
  document.querySelector(".p-option7-text").innerHTML = data.pOption7Text;
  document.querySelector(".p-option8-title").innerHTML = data.pOption8Title;
  document.querySelector(".p-option8-text").innerHTML = data.pOption8Text;
}
console.log("productCard");

const showModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < productCard.length; i++) {
  productCard[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  } else {
    console.log(event);
  }
});
