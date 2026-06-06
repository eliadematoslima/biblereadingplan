const CACHE_NAME = 'bible-app-v3'; // Mudamos para v3 para o celular atualizar
const ASSETS = [
  '',
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/storage.js',
  'data/traditional-plan.json',
  'data/chronological-plan.json',
  'manifest.json',
  'icon.svg',
  'icons/icon.png' // <-- Caminho correto da sua nova imagem PNG
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ativa e limpa caches antigos se você atualizar o app no futuro
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Intercepta as requisições para fazer o app funcionar offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});