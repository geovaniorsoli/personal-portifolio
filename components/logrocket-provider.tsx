"use client"

import { useEffect } from "react"

export function LogRocketProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return

    const init = () => {
      import("logrocket").then(({ default: LogRocket }) => {
        LogRocket.init("bapx9g/portfolio")
      })
    }

    const ric = window.requestIdleCallback
    if (typeof ric === "function") {
      const id = ric(init, { timeout: 4000 })
      return () => window.cancelIdleCallback?.(id)
    }

    const timeoutId = window.setTimeout(init, 2000)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return null
}
