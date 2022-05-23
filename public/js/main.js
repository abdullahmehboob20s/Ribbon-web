const phones = document.querySelectorAll(".phone");
var phonesArr = Array.from(phones);

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--screen-height", `${window.innerHeight}px`);
};

for (let i = 0; i < phonesArr.length; i++) {
  phonesArr[i].addEventListener("mouseover", () => {
    phonesArr.forEach((elem) => {
      elem.classList.remove("active");
      elem.classList.remove("active-2");
    });

    if (phonesArr.indexOf(phonesArr[i]) === 0) {
      phonesArr[2].classList.add("active-2");
    } else if (phonesArr.indexOf(phonesArr[i]) === 2) {
      phonesArr[0].classList.add("active-2");
      // phonesArr[0].style.marginRight = "-5%";
    } else {
      phonesArr[2].classList.remove("active-2");
    }

    phonesArr[i].classList.add("active");
  });
}

window.addEventListener("resize", documentHeight);
documentHeight();
