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
    "url": "webpack-runtime-fefa7cab94954a05cca8.js"
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
    "revision": "cdf68952e9aac5eb04d5cfa570b6699a"
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
    "revision": "64544297ec5f15f26a67314073dc3ae3"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "component---src-templates-quote-jsx-109e687d186e5157ccb1.js"
  },
  {
    "url": "page-data/anon-1/page-data.json",
    "revision": "c6752d8d4766cb17b7b4c42f08083352"
  },
  {
    "url": "page-data/fear-street-1/page-data.json",
    "revision": "c075f7dcaca1b731c1d0f12eedc3c602"
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
    "revision": "70e840d20b89d98281c79d705f2a4eff"
  },
  {
    "url": "page-data/joker-14/page-data.json",
    "revision": "31c219ba89c4b2c070c471bb0fea9211"
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
    "url": "page-data/thanos-1/page-data.json",
    "revision": "992c9528118e859f9ade5b3364393433"
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
    "revision": "f3c3fe43eb2785178cfedffe8b314012"
  },
  {
    "url": "page-data/wonder-woman-1/page-data.json",
    "revision": "dedad202345fb49b13fcbb5a700a62c0"
  },
  {
    "url": "page-data/wonder-woman-2/page-data.json",
    "revision": "06deae09499fd8788e72e80fe0043079"
  },
  {
    "url": "page-data/wonder-woman-3/page-data.json",
    "revision": "b57a0bf3e57b84ef80198001b0c4b7d5"
  },
  {
    "url": "page-data/wonder-woman-4/page-data.json",
    "revision": "fbcad62f49df5c96aafa4f69be397355"
  },
  {
    "url": "page-data/wonder-woman-5/page-data.json",
    "revision": "1e49af27b9f31a47173af58a7d45cc90"
  },
  {
    "url": "page-data/wonder-woman-6/page-data.json",
    "revision": "92900fe5378f3557222091dec3886372"
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
