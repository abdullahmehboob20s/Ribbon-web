// const phones = document.querySelectorAll(".phones div");
// var phonesArr = Array.from(phones);

// for (let i = 0; i < phonesArr.length; i++) {
//   phonesArr[i].addEventListener("mouseover", () => {
//     phonesArr.forEach((elem) => {
//       elem.classList.remove("active");
//       elem.classList.remove("active-2");
//     });

//     if (phonesArr.indexOf(phonesArr[i]) === 0) {
//       phonesArr[2].classList.add("active-2");
//     } else if (phonesArr.indexOf(phonesArr[i]) === 2) {
//       phonesArr[0].classList.add("active-2");
//     } else {
//       phonesArr[2].classList.remove("active-2");
//     }

//     phonesArr[i].classList.add("active");
//   });
// }

var boxes = gsap.utils.toArray(".phone");
var activeElement = boxes[1];

boxes.forEach(function (box) {
  box.animation = gsap.fromTo(
    box,
    { zIndex: -1, scale: 1, opacity: 0.5, y: "30px" },
    {
      scale: 1.4,
      zIndex: 100,
      y: "-50px",
      opacity: 1,
      duration: 0.4,
      paused: true,
      ease: "none",
    }
  );

  if (box === activeElement) {
    box.animation.play();
  }

  box.addEventListener("mouseover", function () {
    if (box === boxes[0]) {
      console.log("Box 1");
    }
    if (box === boxes[2]) {
      console.log("Box 3");
    }

    box.animation.play();

    boxes.forEach(function (box) {
      box.classList.remove("active");
    });

    box.classList.add("active");

    if (box !== activeElement) {
      activeElement.animation.reverse();
      activeElement = box;
    }
  });
});
