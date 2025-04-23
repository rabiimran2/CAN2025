document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".card-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const link = button.getAttribute("data-link");
      if (link) {
        window.open(link, "_blank");
      }
    });
  });
});

const content = document.querySelector(".content");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

nextBtn.addEventListener("click", () => {
  content.scrollBy({ left: content.clientWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  content.scrollBy({ left: -content.clientWidth, behavior: "smooth" });
});
content.addEventListener("scroll", updateButtons);

function updateButtons() {
  const scrollLeft = content.scrollLeft;
  const maxScrollLeft = content.scrollWidth - content.clientWidth;

  prevBtn.style.display = scrollLeft <= 0 ? "none" : "block";
  nextBtn.style.display = scrollLeft >= maxScrollLeft - 1 ? "none" : "block";
}

// تشغيل أولي عند تحميل الصفحة
// تشغيل أولي عند تحميل الصفحة
window.addEventListener("load", () => {
  // حدد المدينة التي تريد أن تظهر أولاً (مثلاً Casablanca = index 1)
  const cities = document.querySelectorAll(".city");
  cities[0].scrollIntoView({ behavior: "auto", inline: "start" });

updateButtons();
});
