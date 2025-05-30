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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1c97e3cd65803b161fc6ac30df11244"
  },
  {
    "url": "assets/css/0.styles.a03266c8.css",
    "revision": "bf0b2e9fa21117d4c7bd4415f413a840"
  },
  {
    "url": "assets/img/relation-scheme.20ba90eb.png",
    "revision": "20ba90eb67941266053afbb875899899"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c96805eb.js",
    "revision": "b22b63070c54e1cb3bfe064c260395b3"
  },
  {
    "url": "assets/js/11.c1b62882.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.a1d194a2.js",
    "revision": "b0fc96e2fcc359029129abe511ccb84c"
  },
  {
    "url": "assets/js/13.9bd0d7fb.js",
    "revision": "0d1ea43f8cf40323cbe06dc2c4db8cdb"
  },
  {
    "url": "assets/js/14.e77244b9.js",
    "revision": "7e6e78346124412195991dd1ef11bfae"
  },
  {
    "url": "assets/js/15.5c650a86.js",
    "revision": "21e30b797528e6510270412867bde0ba"
  },
  {
    "url": "assets/js/16.25f9bae9.js",
    "revision": "6345de28aa634ce454d935423600c6a5"
  },
  {
    "url": "assets/js/17.3e5fd2e0.js",
    "revision": "cc6cef4f5a6c0ebcc8bf76035f140ee9"
  },
  {
    "url": "assets/js/18.a0dfaf3e.js",
    "revision": "c0473a3f4261e211b1c30cb5fedc26f1"
  },
  {
    "url": "assets/js/19.aebefa05.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.efb7e016.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.355773c9.js",
    "revision": "2b5572b4dd2233f0d1e8480433fc286d"
  },
  {
    "url": "assets/js/21.37f08ff3.js",
    "revision": "67d6d3ce2db3b4938f38c38908c1d6dc"
  },
  {
    "url": "assets/js/22.94183885.js",
    "revision": "b991d4b80ca3ca3ca5297a2a4d7fedc9"
  },
  {
    "url": "assets/js/23.948d7c87.js",
    "revision": "8f23b66f3080080ad34fe06764b52b62"
  },
  {
    "url": "assets/js/24.3b758c16.js",
    "revision": "d3fe937448936f4b3411ee445459ec9d"
  },
  {
    "url": "assets/js/26.a388051f.js",
    "revision": "9052f0ce80ac768f33661d8b7dc67bcd"
  },
  {
    "url": "assets/js/3.11bf8a91.js",
    "revision": "9d2b51430537848cac2ea5124482a938"
  },
  {
    "url": "assets/js/4.be72248a.js",
    "revision": "668bc91fb4500762c33bec844d358f72"
  },
  {
    "url": "assets/js/5.01993805.js",
    "revision": "6d5176ba3b4c2fa125c6a9aeb57b6aa7"
  },
  {
    "url": "assets/js/6.e97f0869.js",
    "revision": "106b32c6f4126739dcbba2721a32a6ac"
  },
  {
    "url": "assets/js/7.1a66e06c.js",
    "revision": "8c02bd53007cf633c6475e24ceb02dde"
  },
  {
    "url": "assets/js/8.ecbf9340.js",
    "revision": "a323d6e61a5078e66e9a97db0719672c"
  },
  {
    "url": "assets/js/9.a50bcd73.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.329d86d5.js",
    "revision": "531189c01f9f4cb093b865886679abaa"
  },
  {
    "url": "conclusion/index.html",
    "revision": "57a0111faf1238d80693ef8020711acc"
  },
  {
    "url": "design/index.html",
    "revision": "d49e023ebcba429eaf4c81293f014bf4"
  },
  {
    "url": "index.html",
    "revision": "fc55e4e5ab48a8ccec32fd223efa25ef"
  },
  {
    "url": "intro/index.html",
    "revision": "0c17cfc05af83b2231449414a3c58798"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a7caded753761070c6fbcd7e903fd787"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "239947e4d4902fb0cc139f7d1e74adb2"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c6995e86e6b1b34749bbbca0c9ecd7ff"
  },
  {
    "url": "software/index.html",
    "revision": "d67595f9d09f5cf7cf41374eca140042"
  },
  {
    "url": "test/index.html",
    "revision": "102408b86d92c56afa98473614c001fe"
  },
  {
    "url": "use cases/index.html",
    "revision": "d82ff05dc9fa9aae2d4a7b905a5d919b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
