"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicos", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "FAQ", href: "#faq" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/almepe-colorido-icone.png"
            alt="Almepe Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="font-mono text-lg font-bold text-foreground hidden sm:inline">
            Almepe
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}

          <Link href="/redirect-fale-conosco" className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-almepe-red-dark font-semibold px-5">
              Fale Conosco
            </Button>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/redirect-fale-conosco"
              onClick={() => setMobileOpen(false)}
              className="mt-2"
            >
              <Button className="w-full bg-accent text-accent-foreground hover:bg-almepe-red-dark font-semibold">
                Fale Conosco
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
