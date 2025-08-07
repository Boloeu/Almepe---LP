import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contabilidade Digital | Almepe",
  description:
    "Especialistas em contabilidade digital para empresas e pessoas físicas. Atendimento ágil, seguro e eficiente.",
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
        <meta
          name="description"
          content="Especialistas em contabilidade digital para empresas e pessoas físicas. Atendimento ágil, seguro e eficiente."
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11105298288"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11105298288');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
