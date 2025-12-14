document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  });
});


const jFileInput = document.querySelector("#j-file-input");
const jFileLabel = document.querySelector(".j-hero-file-label");
const jFileResult = document.querySelector(".j-hero-file-rezult");
const jPreviewImg = jFileResult?.querySelector("img");
const jCloseBtn = jFileResult?.querySelector(".icon-jClose");

if (!jFileInput || !jFileLabel || !jFileResult || !jPreviewImg || !jCloseBtn) {
  console.warn("j-file elements not found");
} else {
  jFileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      jPreviewImg.src = e.target.result;
    };

    reader.readAsDataURL(file);

    jFileLabel.style.display = "none";
    jFileResult.style.display = "flex";
  });

  jCloseBtn.addEventListener("click", function () {
    jFileInput.value = "";
    jPreviewImg.src = "";

    jFileResult.style.display = "none";
    jFileLabel.style.display = "flex";
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const jTextarea = document.querySelector(".j-hero-textarea-label textarea");
  const jStartCount = document.querySelector(".j-start-count");
  const jMaxCount = document.querySelector(".j-max-count");
  const jCounter = document.querySelector(".j-textarea-length");

  const J_MAX = 500;
  const jDefaultPlaceholder = "Что вы хотите нарисовать?";

  if (!jTextarea || !jStartCount || !jMaxCount || !jCounter) return;

  jTextarea.placeholder = jDefaultPlaceholder; 
  jStartCount.textContent = "0";
  jMaxCount.textContent = String(J_MAX);

  const jUpdate = () => {
    const len = jTextarea.value.length;

    jStartCount.textContent = String(len);

    if (len > 0) {
      jTextarea.placeholder = "";
    } else {
      jTextarea.placeholder = jDefaultPlaceholder;
    }

    if (len > J_MAX) {
      jCounter.classList.add("is-error");
      jTextarea.classList.add("is-error");
    } else {
      jCounter.classList.remove("is-error");
      jTextarea.classList.remove("is-error");
    }
  };

  jTextarea.addEventListener("input", jUpdate);

  jUpdate();
});


document.addEventListener("DOMContentLoaded", () => {
  const jSelects = document.querySelectorAll(".j-hero-select");

  if (!jSelects.length) return;

  jSelects.forEach((jSelect) => {
    const jHeader = jSelect.querySelector(".j-hero-select-header");
    if (!jHeader) return;

    jHeader.addEventListener("click", (e) => {
      e.stopPropagation();

      jSelects.forEach((item) => {
        if (item !== jSelect) {
          item.classList.remove("active");
        }
      });

      jSelect.classList.toggle("active");
    });

    jSelect.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  document.addEventListener("click", () => {
    jSelects.forEach((jSelect) => {
      jSelect.classList.remove("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const jStyleSelect = document.querySelector(".j-hero-select-style");
  if (!jStyleSelect) return;

  const jHeader = jStyleSelect.querySelector(".j-style-select-header p");
  const jItems = jStyleSelect.querySelectorAll(".j-style-sub-block ul li");

  if (!jHeader || !jItems.length) return;

  jItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      jItems.forEach((el) => el.classList.remove("active"));

      item.classList.add("active");

      const text = item.querySelector("span")?.textContent;
      if (text) {
        jHeader.textContent = `Стиль: ${text}`;
      }

      jStyleSelect.classList.remove("active");
    });
  });
});

document.querySelector(".j-examples-media") &&
document.addEventListener("DOMContentLoaded", () => {
  const media = document.querySelector(".j-examples-media");
  const btn = media.querySelector(".j-examples-btn");
  const text = btn.querySelector("span");

  btn.addEventListener("click", () => {
    const isActive = media.classList.contains("active");

    if (isActive) {
      media.classList.remove("active");
      text.textContent = "Показать больше";

      media.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    } else {
      media.classList.add("active");
      text.textContent = "Показать меньше";
    }
  });
});

