/** @type {import('next').NextConfig} */

const cacheConfig = [
  {
    urlPattern: /\/_next\/image\?url=.+$/i,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'next-image',
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60 // 24 hours
      }
    }
  },
  {
    urlPattern: /\.(?:mp3|wav|ogg)$/i,
    handler: 'CacheFirst',
    options: {
      rangeRequests: true,
      cacheName: 'static-audio-assets',
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60 // 24 hours
      }
    }
  },
  {
    urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'static-image-assets',
    }
  },
];

const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: true,
  register: true,
  runtimeCaching: cacheConfig
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  // env: {
  //   basePath: basePath,
  // },
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
});

// const nextConfig = {
//   webpack(config, options) {
//     if (!options.isServer) {
//       const workboxPlugin = new InjectManifest({
//         swSrc: "./src/service-worker/index.ts",
//         swDest: "../public/service-worker.js",
//         // In dev, exclude everything.
//         // This avoids irrelevant warnings about chunks being too large for caching.
//         // In non-dev, use the default `exclude` option, don't override.
//         ...(options.dev ? { exclude: [/./] } : undefined),
//       })
//       if (options.dev) {
//         // Suppress the "InjectManifest has been called multiple times" warning by reaching into
//         // the private properties of the plugin and making sure it never ends up in the state
//         // where it makes that warning.
//         // https://github.com/GoogleChrome/workbox/blob/v6/packages/workbox-webpack-plugin/src/inject-manifest.ts#L260-L282
//         Object.defineProperty(workboxPlugin, "alreadyCalled", {
//           get() {
//             return false
//           },
//           set() {
//             // do nothing; the internals try to set it to true, which then results in a warning
//             // on the next run of webpack.
//           },
//         })
//       }
//       config.plugins.push(workboxPlugin)
//     }
//     return config
//   }
// }

// const cacheConfig = [
//   {
//     urlPattern: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
//     handler: 'CacheFirst',
//     options: {
//       cacheName: 'google-fonts-webfonts',
//       expiration: {
//         maxEntries: 4,
//         maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
//       }
//     }
//   },
//   {
//     urlPattern: /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'google-fonts-stylesheets',
//       expiration: {
//         maxEntries: 4,
//         maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-font-assets',
//       expiration: {
//         maxEntries: 4,
//         maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-image-assets',
//       expiration: {
//         maxEntries: 64,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\/_next\/image\?url=.+$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'next-image',
//       expiration: {
//         maxEntries: 64,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:mp3|wav|ogg)$/i,
//     handler: 'CacheFirst',
//     options: {
//       rangeRequests: true,
//       cacheName: 'static-audio-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:mp4)$/i,
//     handler: 'CacheFirst',
//     options: {
//       rangeRequests: true,
//       cacheName: 'static-video-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:js)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-js-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:css|less)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-style-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\/_next\/data\/.+\/.+\.json$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'next-data',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:json|xml|csv)$/i,
//     handler: 'NetworkFirst',
//     options: {
//       cacheName: 'static-data-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: ({ url }) => {
//       const isSameOrigin = self.origin === url.origin
//       if (!isSameOrigin) return false
//       const pathname = url.pathname
//       // Exclude /api/auth/callback/* to fix OAuth workflow in Safari without impact other environment
//       // Above route is default for next-auth, you may need to change it if your OAuth workflow has a different callback route
//       // Issue: https://github.com/shadowwalker/next-pwa/issues/131#issuecomment-821894809
//       if (pathname.startsWith('/api/auth/')) return false
//       if (pathname.startsWith('/api/')) return true
//       return false
//     },
//     handler: 'NetworkFirst',
//     method: 'GET',
//     options: {
//       cacheName: 'apis',
//       expiration: {
//         maxEntries: 16,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       },
//       networkTimeoutSeconds: 10 // fall back to cache if api does not response within 10 seconds
//     }
//   },
//   {
//     urlPattern: ({ url }) => {
//       const isSameOrigin = self.origin === url.origin
//       if (!isSameOrigin) return false
//       const pathname = url.pathname
//       if (pathname.startsWith('/api/')) return false
//       return true
//     },
//     handler: 'NetworkFirst',
//     options: {
//       cacheName: 'others',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       },
//       networkTimeoutSeconds: 10
//     }
//   },
//   {
//     urlPattern: ({ url }) => {
//       const isSameOrigin = self.origin === url.origin
//       return !isSameOrigin
//     },
//     handler: 'NetworkFirst',
//     options: {
//       cacheName: 'cross-origin',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 60 * 60 // 1 hour
//       },
//       networkTimeoutSeconds: 10
//     }
//   }
// ];

// const basePath = process.env.NODE_ENV === 'production' ? '/pwa-nextjs' : '';
// const basePath = '/pwa-nextjs';

// module.exports = withPWA({
//   reactStrictMode: true,
//   swcMinify: true,
//   productionBrowserSourceMaps: true,
//   env: {
//     basePath: basePath,
//   },
//   basePath: basePath,
//   images: {
//     unoptimized: true,
//   },
//   optimizeFonts: false,
// })
