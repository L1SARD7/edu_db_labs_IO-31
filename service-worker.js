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
    "revision": "9f1ce08e491541826d376bc6e53119d2"
  },
  {
    "url": "assets/css/0.styles.3a22cd68.css",
    "revision": "9c9a073dbe06f493713c76603d8a53c0"
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
    "url": "assets/js/10.30b887d3.js",
    "revision": "9861f1acd35b8cdae58c97c641a020c0"
  },
  {
    "url": "assets/js/11.c1b62882.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.11bba4da.js",
    "revision": "8165d096f44471c49f02f9d4c968093e"
  },
  {
    "url": "assets/js/13.e56cff29.js",
    "revision": "329392e254b7c42877bdd9be0419daf3"
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
    "url": "assets/js/16.661e4f26.js",
    "revision": "2006a0b9a036558324a00ffd8dd8a28f"
  },
  {
    "url": "assets/js/17.f55b1329.js",
    "revision": "81ade835c2f67b7fbbab8fba59257969"
  },
  {
    "url": "assets/js/18.a9120d17.js",
    "revision": "31ed1a87e525a452d24e47375124e100"
  },
  {
    "url": "assets/js/19.686fa5bc.js",
    "revision": "a1d406c08ce6406bb14e2bc2a775469b"
  },
  {
    "url": "assets/js/2.efb7e016.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.bbbf61e5.js",
    "revision": "8324680597c392480049be4f62019062"
  },
  {
    "url": "assets/js/21.eb4292d6.js",
    "revision": "119146331bb5e3944ac820d0a7def36a"
  },
  {
    "url": "assets/js/22.909f659d.js",
    "revision": "47d554a97e128b0233b73b129d514360"
  },
  {
    "url": "assets/js/23.d4537753.js",
    "revision": "b0dba7b917f3acf2add1dff09d0635f8"
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
    "url": "assets/js/6.c2160e41.js",
    "revision": "52d18539e934aaf4d345354d67942f01"
  },
  {
    "url": "assets/js/7.1f827184.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
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
    "url": "assets/js/app.178ab882.js",
    "revision": "7b468f2a16580818d52ee1f05d839e48"
  },
  {
    "url": "conclusion/index.html",
    "revision": "55d7dd18bd62d894123e94256761e46f"
  },
  {
    "url": "design/index.html",
    "revision": "3c465709e833cf11ea5838d8c1f9faeb"
  },
  {
    "url": "index.html",
    "revision": "c6abcd0094aeabab942f5bd1677ee349"
  },
  {
    "url": "intro/index.html",
    "revision": "ff2067b3b5845eb309c28eb529473503"
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
    "revision": "d02c211552e546490885f2d2f7d8d6a9"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "97961f3ccb60b73cc690802281904c64"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2a90f1ca0bc9f1240f0b8ece48433a33"
  },
  {
    "url": "software/index.html",
    "revision": "53ce5c09b6d6e062c74dab24f70b0a37"
  },
  {
    "url": "test/index.html",
    "revision": "eae21bd49dac13a9a0f60530d66572c7"
  },
  {
    "url": "use cases/index.html",
    "revision": "23984a240d8323bb00b686b72f9b52b2"
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
