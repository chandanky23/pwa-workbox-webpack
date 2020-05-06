import { registerRoute } from "workbox-routing"
import { NetworkFirst } from "workbox-strategies"
import {precacheAndRoute} from 'workbox-precaching';

registerRoute(/https:\/\/jsonplaceholder\.typicode\.com/, new NetworkFirst())

// workbox.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST)
