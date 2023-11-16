const karelPorto = "karel-porto-v1";
const assets = [
  "/",
  "/index.html",
  "src/css/styles.css",
  "src/js/main.js",
  "src/assets/img/karel.png",
  "src/assets/img/portfolio-icon.png",
  "src/assets/img/work.jpg",
  "src/assets/img/projects/project-1.png",
  "src/assets/img/projects/project-2.png",
  "src/assets/img/projects/project-3.png",
  "src/assets/img/projects/project-4.png",
  "src/assets/img/projects/project-5.png",
  "src/assets/img/projects/project-6.png",
  "src/assets/img/projects/project-7.png",
  "src/assets/img/projects/project-8.png",
  "src/assets/img/projects/project-9.png",
  "src/assets/img/projects/project-10.png",
  "src/assets/img/projects/project-11.png",
  "src/assets/img/projects/project-12.png",
  "src/assets/img/projects/project-13.png",
  "src/assets/img/projects/project-14.png",
  "src/assets/img/projects/project-15.png",
  "src/manifest/icon-192x192.png",
  "src/manifest/icon-256x256.png",
  "src/manifest/icon-384x384.png",
  "src/manifest/icon-512x512.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(karelPorto).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});