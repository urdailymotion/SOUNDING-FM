const CACHE_NAME = 'lubeops-cache-v1';

// Saat di-install
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('[Service Worker] Terinstal');
});

// Mengaktifkan Service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Mengatur fetch request (Bypass untuk iframe)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
