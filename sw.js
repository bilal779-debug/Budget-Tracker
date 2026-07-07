self.addEventListener('install', (e) => {
    self.skipWaiting(); // Force update
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // PWA Install ka option laane ke liye fetch event lazmi hota hai, 
    // bhale hum cache na bhi use kar rahe hon.
});
