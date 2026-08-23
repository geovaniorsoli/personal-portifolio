const SCROLL_TARGET_KEY = "scrollTarget"

export function goToSection(sectionId: string, pathname: string, push: (href: string) => void) {
  if (pathname === "/") {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    return
  }
  sessionStorage.setItem(SCROLL_TARGET_KEY, sectionId)
  push("/")
}

export function consumePendingScrollTarget(): string | null {
  const target = sessionStorage.getItem(SCROLL_TARGET_KEY)
  if (target) sessionStorage.removeItem(SCROLL_TARGET_KEY)
  return target
}
