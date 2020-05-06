import { registerRoute } from "workbox-routing"
import { NetworkFirst } from "workbox-strategies"
import {precacheAndRoute} from 'workbox-precaching';
import {ExpirationPlugin} from 'workbox-expiration';

registerRoute(/https:\/\/jsonplaceholder\.typicode\.com/, new NetworkFirst({
  networkTimeoutSeconds: 3,
  cacheName: 'users',
  plugins: [
    new ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 5*60
    })
  ]
}))

// workbox.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST)
