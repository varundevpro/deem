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
    "url": "webpack-runtime-cebeb5c8d8ff25001566.js"
  },
  {
    "url": "framework-11c502cb296d783e31f7.js"
  },
  {
    "url": "styles.687ac9c793a1e9f72c0a.css"
  },
  {
    "url": "app-dd41322c9130a93b66c1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "115a16f666358f14851b0cac4302117b"
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
    "revision": "f13711e686757fab5423ac5447b09fc9"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "component---src-templates-quote-jsx-da585279b8c189e63243.js"
  },
  {
    "url": "page-data/anon-1/page-data.json",
    "revision": "0ba8dc929d77058f0d2a3540280bf51d"
  },
  {
    "url": "page-data/batman-1/page-data.json",
    "revision": "e0c84da406831c43f42f02b746397063"
  },
  {
    "url": "page-data/batman-10/page-data.json",
    "revision": "706e39948fc1abede7df3a2091a083ee"
  },
  {
    "url": "page-data/batman-11/page-data.json",
    "revision": "e4c73b64b1a62523c5799cbde0ca62bd"
  },
  {
    "url": "page-data/batman-2/page-data.json",
    "revision": "820dd80080fc22a8d546a9ab5c2d3572"
  },
  {
    "url": "page-data/batman-3/page-data.json",
    "revision": "2b5726abc11a7aa71d4db63baf823dae"
  },
  {
    "url": "page-data/batman-4/page-data.json",
    "revision": "fad7e13aedd723c77c8e124eb1db867c"
  },
  {
    "url": "page-data/batman-5/page-data.json",
    "revision": "13651b1e64e43611ba6b8514e3e3acec"
  },
  {
    "url": "page-data/batman-6/page-data.json",
    "revision": "84b704f62b058007416a0e07091de1b6"
  },
  {
    "url": "page-data/batman-7/page-data.json",
    "revision": "6fbecb467b7a3d8920900f160344464d"
  },
  {
    "url": "page-data/batman-8/page-data.json",
    "revision": "6f7d9aff72cec5bb084099d4d8e5b5d9"
  },
  {
    "url": "page-data/batman-9/page-data.json",
    "revision": "92948e1b7d355222b37e9790d39ad29e"
  },
  {
    "url": "page-data/dark-knight-1/page-data.json",
    "revision": "8fce150b6f417cf3e356adeda1ef30c7"
  },
  {
    "url": "page-data/dark-knight-2/page-data.json",
    "revision": "1dc2fe256075010dc2f39b120151bff7"
  },
  {
    "url": "page-data/dark-knight-3/page-data.json",
    "revision": "7f580a0617a163ffbc3786a907daf61e"
  },
  {
    "url": "page-data/dark-knight-4/page-data.json",
    "revision": "5d3e58284d67b4009c511bdad34cf35b"
  },
  {
    "url": "page-data/dark-knight-5/page-data.json",
    "revision": "14ec937fef502499059547eb789a992b"
  },
  {
    "url": "page-data/dark-knight-6/page-data.json",
    "revision": "95138607090c63f8cb366ed37d454642"
  },
  {
    "url": "page-data/dark-knight-7/page-data.json",
    "revision": "dba9e4f7c1782e64af9a19bd13497f48"
  },
  {
    "url": "page-data/dr-strange-1/page-data.json",
    "revision": "65ecf73b56f90d345a0829a1a5efd064"
  },
  {
    "url": "page-data/dr-strange-2/page-data.json",
    "revision": "8db571b93372bbe91619b5fd137261a0"
  },
  {
    "url": "page-data/dr-strange-3/page-data.json",
    "revision": "4ddca74c2e27ebb1bfc3aeea470f2095"
  },
  {
    "url": "page-data/dr-strange-4/page-data.json",
    "revision": "fa6359e76e4af9363bfc65e131dc72f4"
  },
  {
    "url": "page-data/dr-strange-5/page-data.json",
    "revision": "5bb89e2dfffb9562719a69267488afe5"
  },
  {
    "url": "page-data/fear-street-1/page-data.json",
    "revision": "c075f7dcaca1b731c1d0f12eedc3c602"
  },
  {
    "url": "page-data/fear-street-2/page-data.json",
    "revision": "76d37f06d82c6e62f9aca71c40609093"
  },
  {
    "url": "page-data/frank-1/page-data.json",
    "revision": "210a7702cd5085fa7ad19839f0213dff"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0def1d91c1deca665a3a6e521d654f46"
  },
  {
    "url": "page-data/interstellar-1/page-data.json",
    "revision": "3eaec28be64b860fd67ffb7f4cc5a818"
  },
  {
    "url": "page-data/interstellar-2/page-data.json",
    "revision": "7bc221b5c71dc70d915146d0a6ba2f4e"
  },
  {
    "url": "page-data/interstellar-3/page-data.json",
    "revision": "325076305d50c55231a4290cee682ae9"
  },
  {
    "url": "page-data/interstellar-4/page-data.json",
    "revision": "c479f3a404c1d27875c7539c59b0f6f6"
  },
  {
    "url": "page-data/interstellar-5/page-data.json",
    "revision": "3630a1676ae3ebfbdf365735302679ba"
  },
  {
    "url": "page-data/interstellar-6/page-data.json",
    "revision": "816e49c3160295d7b71e355335338c90"
  },
  {
    "url": "page-data/joker-1/page-data.json",
    "revision": "29150e7de13d8bb852017c701c685947"
  },
  {
    "url": "page-data/joker-10/page-data.json",
    "revision": "edb1e5da94c0e2d61e78f4b77bc4e309"
  },
  {
    "url": "page-data/joker-11/page-data.json",
    "revision": "de8b6a8ecfdf4d56d54ba81e1d41a009"
  },
  {
    "url": "page-data/joker-12/page-data.json",
    "revision": "3edc74b49802d9d2b8bc9d518720ac63"
  },
  {
    "url": "page-data/joker-13/page-data.json",
    "revision": "64f95a0118802f738ea18503d4723246"
  },
  {
    "url": "page-data/joker-14/page-data.json",
    "revision": "ce0c0f160785756328b46331b8269062"
  },
  {
    "url": "page-data/joker-2/page-data.json",
    "revision": "2a7c4e9fbba0e19975317a1256e46a21"
  },
  {
    "url": "page-data/joker-3/page-data.json",
    "revision": "73ca7733bc9da85a81a4743bfc1d18ce"
  },
  {
    "url": "page-data/joker-4/page-data.json",
    "revision": "42287848f69b5d94cf1cb36690f3e5eb"
  },
  {
    "url": "page-data/joker-5/page-data.json",
    "revision": "9aef3aca299000a36b9dd62dcb04e5ce"
  },
  {
    "url": "page-data/joker-6/page-data.json",
    "revision": "b201554501abb4b41a3c7609c686900e"
  },
  {
    "url": "page-data/joker-7/page-data.json",
    "revision": "09bec2c35e8d7dbc94581f96cfc5fead"
  },
  {
    "url": "page-data/joker-8/page-data.json",
    "revision": "750cadd9a4bb7186e313cf5fafc1a88d"
  },
  {
    "url": "page-data/joker-9/page-data.json",
    "revision": "e00daa250c40128fecf1fb61ba38184e"
  },
  {
    "url": "page-data/shang-chi-1/page-data.json",
    "revision": "7597d17cf6eaf0b698d32b1b9e8a163d"
  },
  {
    "url": "page-data/shang-chi-2/page-data.json",
    "revision": "73b6d9d739a7db49ad2bb0f34542422d"
  },
  {
    "url": "page-data/superman-1/page-data.json",
    "revision": "d0a71a8b6bc6423fe73d3404f5fdd297"
  },
  {
    "url": "page-data/superman-2/page-data.json",
    "revision": "092854b6a083ce6622198fc4c571bc12"
  },
  {
    "url": "page-data/thanos-1/page-data.json",
    "revision": "b19819f36802f5d67002e3101fd52935"
  },
  {
    "url": "page-data/thanos-2/page-data.json",
    "revision": "ea34f20243642565d485987fd4c8a77d"
  },
  {
    "url": "page-data/thanos-3/page-data.json",
    "revision": "716e1da5acb05241d2f447a8360fa206"
  },
  {
    "url": "page-data/thor-1/page-data.json",
    "revision": "fb0141c1117b48587b2dcc5187cdbd8c"
  },
  {
    "url": "page-data/wonder-woman-1/page-data.json",
    "revision": "e3c9136480f40c17c55f22368eeeb7f0"
  },
  {
    "url": "page-data/wonder-woman-2/page-data.json",
    "revision": "fda8595bdf44968f394269cab06748f5"
  },
  {
    "url": "page-data/wonder-woman-3/page-data.json",
    "revision": "55c5583590a07e1f44e5718d2063e1b1"
  },
  {
    "url": "page-data/wonder-woman-4/page-data.json",
    "revision": "ff83e656cf18abb3d6c9e46370a84692"
  },
  {
    "url": "page-data/wonder-woman-5/page-data.json",
    "revision": "c366527bdd50a8a50c0db8d4c484e0bb"
  },
  {
    "url": "page-data/wonder-woman-6/page-data.json",
    "revision": "45dc83d1db00748c2ed2c1666dfac5e4"
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
  if (!resources || !(await caches.match(`/app-dd41322c9130a93b66c1.js`))) {
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
