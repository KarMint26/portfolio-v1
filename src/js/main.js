// PWA SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

/* SHOW PROJECT DATA */
const projects = [
  {
    id: 1,
    imgUrl: "./src/assets/img/projects/project-1.png",
    imgAlt: "project-1",
    href: "https://karmint26.github.io/plag-ai",
  },
  {
    id: 2,
    imgUrl: "./src/assets/img/projects/project-2.png",
    imgAlt: "project-2",
    href: "https://summarizer-openai.vercel.app",
  },
  {
    id: 3,
    imgUrl: "./src/assets/img/projects/project-3.png",
    imgAlt: "project-3",
    href: "https://vue-meals-site.vercel.app",
  },
  {
    id: 4,
    imgUrl: "./src/assets/img/projects/project-4.png",
    imgAlt: "project-4",
    href: "https://react-api-cnn.netlify.app",
  },
  {
    id: 5,
    imgUrl: "./src/assets/img/projects/project-5.png",
    imgAlt: "project-5",
    href: "https://react-api-music-anime.netlify.app",
  },
  {
    id: 6,
    imgUrl: "./src/assets/img/projects/project-6.png",
    imgAlt: "project-6",
    href: "https://baikmu-web.vercel.app",
  },
  {
    id: 7,
    imgUrl: "./src/assets/img/projects/project-7.png",
    imgAlt: "project-7",
    href: "https://go-trav-site.netlify.app",
  },
  {
    id: 8,
    imgUrl: "./src/assets/img/projects/project-8.png",
    imgAlt: "project-8",
    href: "https://depublic-pwa.vercel.app",
  },
  {
    id: 9,
    imgUrl: "./src/assets/img/projects/project-9.png",
    imgAlt: "project-9",
    href: "https://travel-chatbot-smkdev.netlify.app",
  },
  {
    id: 10,
    imgUrl: "./src/assets/img/projects/project-10.png",
    imgAlt: "project-10",
    href: "https://karmint26.github.io/Jquery-Simon-Game",
  },
  {
    id: 11,
    imgUrl: "./src/assets/img/projects/project-11.png",
    imgAlt: "project-11",
    href: "https://karl-films.netlify.app",
  },
  {
    id: 12,
    imgUrl: "./src/assets/img/projects/project-12.png",
    imgAlt: "project-12",
    href: "https://coder-site-clones.netlify.app",
  },
  {
    id: 13,
    imgUrl: "./src/assets/img/projects/project-13.png",
    imgAlt: "project-13",
    href: "https://carls-bookshelf.netlify.app",
  },
  {
    id: 14,
    imgUrl: "./src/assets/img/projects/project-14.png",
    imgAlt: "project-14",
    href: "https://karmint26.github.io/TravelAgentDemonSlayer",
  },
  {
    id: 15,
    imgUrl: "./src/assets/img/projects/project-15.png",
    imgAlt: "project-15",
    href: "https://tranquilmind.my.id",
  },
];

const projectWrapper = document.getElementById("project__wrapper");

const showProjects = () => {
  for (const project of projects) {
    const link = document.createElement("a");
    link.setAttribute("href", project.href);
    link.setAttribute("target", "_blank");
    link.classList.add("project__img", project.id);

    const image = document.createElement("img");
    image.setAttribute("src", project.imgUrl);
    image.setAttribute("alt", project.imgAlt);

    link.appendChild(image);

    projectWrapper.append(link);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  showProjects();
});

/* MENU SHOW */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .project__img, .contact__input", { interval: 200 });
