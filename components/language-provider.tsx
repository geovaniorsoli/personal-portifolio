"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react"

import {
  getDictionary,
  locales,
  type Dictionary,
  type Locale,
} from "@/lib/i18n/dictionaries"

const STORAGE_KEY = "locale"
const DEFAULT_LOCALE: Locale = "pt-BR"

const listeners = new Set<() => void>()

function detectBrowserLocale(): Locale {
  const browserLanguages = window.navigator.languages ?? [window.navigator.language]
  const isPortuguese = browserLanguages.some((lang) =>
    lang.toLowerCase().startsWith("pt")
  )
  return isPortuguese ? "pt-BR" : "en-US"
}

function readStoredLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored && locales.includes(stored as Locale)
    ? (stored as Locale)
    : detectBrowserLocale()
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE
}

function subscribe(callback: () => void) {
  listeners.add(callback)
  window.addEventListener("storage", callback)
  return () => {
    listeners.delete(callback)
    window.removeEventListener("storage", callback)
  }
}

function writeStoredLocale(locale: Locale) {
  window.localStorage.setItem(STORAGE_KEY, locale)
  listeners.forEach((listener) => listener())
}

interface LanguageContextValue {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    readStoredLocale,
    getServerSnapshot
  )

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    writeStoredLocale(next)
  }, [])

  const toggleLocale = useCallback(() => {
    const current = readStoredLocale()
    const nextIndex = (locales.indexOf(current) + 1) % locales.length
    writeStoredLocale(locales[nextIndex])
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t: getDictionary(locale),
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
