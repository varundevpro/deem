/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c743e6bafcb42eccb85d.js"
  },
  {
    "url": "styles.687ac9c793a1e9f72c0a.css"
  },
  {
    "url": "framework-11c502cb296d783e31f7.js"
  },
  {
    "url": "app-efc66b7cedf563a08ef4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fddc453a5c1cd3cac6148ddb8dd286fd"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-1d8df30d050d33a356f9.js"
  },
  {
    "url": "polyfill-1c2b382f46d0f4229da4.js"
  },
  {
    "url": "component---src-pages-404-js-6610c03b22fadb6ccc4b.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "517e1f8ce5610edb94d7dea4bede4428"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "038698dad26d85c1144a533581e682d4"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "component---src-templates-quote-jsx-109e687d186e5157ccb1.js"
  },
  {
    "url": "page-data/fear-street-1/page-data.json",
    "revision": "13a16710c56ce1c29fd044a4da1f36ea"
  },
  {
    "url": "page-data/frank-1/page-data.json",
    "revision": "36569c5995e0811646c0540db6d5e723"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0def1d91c1deca665a3a6e521d654f46"
  },
  {
    "url": "page-data/interstellar-1/page-data.json",
    "revision": "a8a141c21d85cac7eee1348565504de0"
  },
  {
    "url": "page-data/interstellar-2/page-data.json",
    "revision": "44104328295474109af76f1e2b0b427d"
  },
  {
    "url": "page-data/interstellar-3/page-data.json",
    "revision": "35c3cdf956cd51e7c83cce157ca63748"
  },
  {
    "url": "page-data/interstellar-4/page-data.json",
    "revision": "7528ddaead5a47522986affe08a916ad"
  },
  {
    "url": "page-data/interstellar-5/page-data.json",
    "revision": "8d8b4214cb8721c94974485db75869e5"
  },
  {
    "url": "page-data/interstellar-6/page-data.json",
    "revision": "e319f3077a5ffc429dc6d7a5bd3cd256"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b6fe807214a7c618bdc1492076231927"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-efc66b7cedf563a08ef4.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
