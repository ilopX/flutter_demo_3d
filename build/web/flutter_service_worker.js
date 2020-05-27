'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e06b26aef90b821c40b488cd1182fcf9",
"assets/assets/brain.mtl": "e8fc0e2652fba3c8acbc393a69eaf256",
"assets/assets/brain.obj": "ac8e771b05ee1072e5956ccd7c95160d",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "f740793849f46fc81c82a0de5e068f96",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a46fe98ea4b123d0814bba82a3eac976",
"/": "a46fe98ea4b123d0814bba82a3eac976",
"main.dart.js": "e1d0b3a385456ac66ff6512ef1b40d76",
"manifest.json": "0fcd431a68c826b0134295a06d0ed190"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
