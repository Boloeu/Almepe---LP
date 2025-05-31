import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contabilidade Digital | Almepe",
  description: "Evite dores de cabeça. Vem pra Almepe!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Contabilidade Digital | Almepe</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
