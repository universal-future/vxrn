// react-native-web doesn't implement Appearance.setColorScheme
// and doesn't support Appearance being different from the prefers-color-scheme
// but its common to want to have a way to force override the scheme
// this implements a setColorScheme and getColorScheme that can override system

import { useIsomorphicLayoutEffect } from '@vxrn/use-isomorphic-layout-effect'
import { useState } from 'react'
import { Appearance } from 'react-native'

export type ColorSchemeName = 'light' | 'dark'
export type ColorSchemeSetting = ColorSchemeName | 'system'
export type ColorSchemeListener = (setting: ColorSchemeSetting, current: ColorSchemeName) => void

const listeners = new Set<ColorSchemeListener>()

let currentSetting: ColorSchemeSetting = 'system'
let currentName: ColorSchemeName = 'light'

// only runs once a hook is used to ensure it SSRs safely
let isListening = false
function startWebMediaListener() {
  if (isListening) return
  isListening = true
  getWebIsDarkMatcher()?.addEventListener?.('change', (val) => {
    if (currentSetting === 'system') {
      update(getSystemColorScheme())
    }
  })
}

export function setColorScheme(next: ColorSchemeSetting) {
  update(next)
}

export function getColorScheme(): ColorSchemeName {
  return currentName
}

export function onColorSchemeChange(listener: ColorSchemeListener) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useColorScheme() {
  const [state, setState] = useState(getColorScheme())

  useIsomorphicLayoutEffect(() => {
    startWebMediaListener()
    return onColorSchemeChange((setting, val) => setState(val))
  }, [])

  return [state, setColorScheme] as const
}

if (process.env.TAMAGUI_TARGET === 'native') {
  Appearance.addChangeListener((next) => {
    if (currentSetting === 'system') {
      if (next.colorScheme) {
        update(next.colorScheme)
      }
    }
  })

  const cur = Appearance.getColorScheme()
  if (cur && currentSetting === 'system') {
    currentName = cur
  }
}

export function useColorSchemeSetting() {
  const [state, setState] = useState(getColorSchemeSetting())

  useIsomorphicLayoutEffect(() => {
    startWebMediaListener()
    return onColorSchemeChange(() => setState(getColorSchemeSetting()))
  }, [])

  return [state, setColorScheme] as const
}

// internals

const getColorSchemeSetting = (): ColorSchemeSetting => {
  return currentSetting
}

const getWebIsDarkMatcher = () =>
  typeof window !== 'undefined' ? window.matchMedia?.('(prefers-color-scheme: dark)') : null

function getSystemColorScheme() {
  if (process.env.TAMAGUI_TARGET === 'native') {
    return Appearance.getColorScheme() || 'light'
  }
  return getWebIsDarkMatcher()?.matches ? 'dark' : 'light'
}

function update(setting: ColorSchemeSetting) {
  const next = setting === 'system' ? getSystemColorScheme() : setting

  if (next !== currentName || currentSetting !== setting) {
    currentSetting = setting
    currentName = next

    if (process.env.TAMAGUI_TARGET === 'native') {
      Appearance.setColorScheme(next)
    }

    listeners.forEach((l) => l(currentSetting, currentName))
  }
}
