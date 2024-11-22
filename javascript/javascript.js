const stickytop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickytop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickytop.style.overflow = "hidden";
});
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const music = document.querySelector("#music");
let isPlaying = false;
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = "auto";
}
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  playAudio();
  document.querySelector(".hero").classList.add("lift");
  setTimeout(function () {
    document.querySelector(".hero").classList.add("hero-hidden");
  }, 2000);
  document.getElementById("quran").classList.add("animate");
}
function playAudio() {
  music.volume = 0.5;
  audioIconWrapper.style.display = "flex";
  music.play();
  isPlaying = true;
}
audioIconWrapper.onclick = function () {
  if (isPlaying) {
    music.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    music.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }
  isPlaying = !isPlaying;
};
disableScroll();
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, { method: "POST", body: data }).then(() => {
      alert("Konfirmasi Kehadiran Berhasil Terkirim!");
    });
  });
});
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama") || "";
const pronoun = urlParams.get("panggilan") || "Bapak/Ibu/Saudara/i";
const namaContainer = document.querySelector(".hero h4 span");

// Tambahkan spasi setelah pronoun
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");
document.querySelector("#nama").value = nama;

simplyCountdown(".simply-countdown", {
  year: 2024,
  month: 11,
  day: 30,
  hours: 8,
  minutes: 0,
  seconds: 0,
  words: {
    days: { singular: "Hari", plural: "Hari" },
    hours: { singular: "Jam", plural: "Jam" },
    minutes: { singular: "Menit", plural: "Menit" },
    seconds: { singular: "Detik", plural: "Detik" },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startTypingAnimation();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.0 }
  );
  let quranSection = document.getElementById("quran");
  observer.observe(quranSection);
  function startTypingAnimation() {
    const text =
      "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir";
    const reference = "Qs: Ar - Rum Ayat 21";
    const container = document.querySelector(".ayat");
    const referenceContainer = document.querySelector(".reference");
    container.innerHTML = "";
    let index = 0;
    function type() {
      if (index < text.length) {
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 20);
      } else {
        container.classList.add("animate");
        setTimeout(() => {
          referenceContainer.innerHTML = reference;
          referenceContainer.classList.add("animate");
        }, 500);
      }
    }
    type();
  }
});
const navLinks = document.querySelectorAll(".offcanvas-body .nav-link");
const offcanvasElement = document.getElementById("offcanvasNavbar");
const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    bsOffcanvas.hide();
  });
});
function typeText(element, text, delay) {
  return new Promise((resolve) => {
    let index = 0;
    element.innerHTML = "";
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else {
        resolve();
      }
    }
    type();
  });
}
function triggerTypingEffect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const paragraphs = entry.target.querySelectorAll("p");
      paragraphs.forEach((p) => {
        const originalText = p.innerHTML;
        typeText(p, originalText, 50);
      });
      observer.unobserve(entry.target);
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const options = { root: null, threshold: 0.5 };
  const observer = new IntersectionObserver(triggerTypingEffect, options);
  const section = document.querySelector("#home");
  if (section) {
    observer.observe(section);
  }
});
function typeText(element, text, delay) {
  return new Promise((resolve) => {
    let index = 0;
    element.innerHTML = "";
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else {
        resolve();
      }
    }
    type();
  });
}
function triggerTypingEffect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;
      const paragraphs = section.querySelectorAll("p");
      section.classList.add("animate");
      paragraphs.forEach((p) => {
        const originalText = p.innerHTML;
        typeText(p, originalText, 1);
      });
      observer.unobserve(section);
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const options = { root: null, threshold: 0.5 };
  const observer = new IntersectionObserver(triggerTypingEffect, options);
  const section = document.querySelector("#home");
  if (section) {
    observer.observe(section);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const options = { root: null, threshold: 0.5 };
  const observer = new IntersectionObserver(triggerTypingEffect, options);
  const section = document.querySelector("#home");
  if (section) {
    observer.observe(section);
  }
});
const imagesDesktop = [
  "img/slide/RJN06372.webp",
  "img/slide/RJN06394.webp",
  "img/slide/RJN06408.webp",
  "img/slide/RJN06466.webp",
  "img/slide/RJN06389.webp",
  "img/slide/RJN06436.webp",
];
const imagesMobile = [
  "img/slide/RJN06372_mobile.webp",
  "img/slide/RJN06394_mobile.webp",
  "img/slide/RJN06408_mobile.webp",
  "img/slide/RJN06466_mobile.webp",
  "img/slide/RJN06389_mobile.webp",
  "img/slide/RJN06436_mobile.webp",
];
let images = window.matchMedia("(max-width: 768px)").matches
  ? imagesMobile
  : imagesDesktop;
let currentIndex = 0;
function changeBackground() {
  const section = document.getElementById("info");
  section.style.backgroundImage = `url(${images[currentIndex]})`;
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackground, 5000);
window.onload = changeBackground;
window.addEventListener("resize", () => {
  images = window.matchMedia("(max-width: 768px)").matches
    ? imagesMobile
    : imagesDesktop;
});
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Nomor rekening berhasil disalin!");
    })
    .catch((err) => {
      console.error("Nomor rekening Gagal menyalin: ", err);
    });
}

function checkOrientation() {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent); // Deteksi perangkat mobile

  if (isLandscape && isMobile) {
    document.getElementById("landscape-warning").style.display = "flex"; // Tampilkan warning
    document.body.style.overflow = "hidden"; // Cegah scroll
  } else {
    document.getElementById("landscape-warning").style.display = "none"; // Sembunyikan warning
    document.body.style.overflow = ""; // Pulihkan scroll
  }
}

// Jalankan fungsi saat halaman dimuat
window.addEventListener("load", checkOrientation);

// Jalankan fungsi saat orientasi perangkat berubah
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
