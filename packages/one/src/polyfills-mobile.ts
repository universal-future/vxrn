// --------------- global -------------------
// for react-navigation/native NavigationContainer

globalThis['global'] = globalThis

// --------------- structuredClone -------------------

import structuredClone from '@ungap/structured-clone'
globalThis['structuredClone'] ||= structuredClone

// --------------- structuredClone -------------------

globalThis['requestAnimationFrame'] ||= setTimeout

// --------------- Symbol.asyncIterator -------------------

import '@azure/core-asynciterator-polyfill'

// --------------- URL -------------------

import 'core-js/actual/url'
import 'core-js/actual/url-search-params'

// import URLPolyfill from 'url-parse'
// try {
//   new URL(`https://tamagui.dev/test`).pathname
// } catch {
//   globalThis['URL'] = URLPolyfill
// }

// --------------- Promise.withResolver -------------------

import { promiseWithResolvers } from './utils/promiseWithResolvers'
Promise.withResolvers ||
  // @ts-ignore
  (Promise.withResolvers = promiseWithResolvers)
