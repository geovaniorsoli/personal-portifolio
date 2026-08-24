"use client"

import { useEffect } from "react"
import LogRocket from "logrocket"

export function LogRocketProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return
    LogRocket.init("bapx9g/portfolio")
  }, [])

  return null
}
