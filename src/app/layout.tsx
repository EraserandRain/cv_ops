import type { Metadata } from "next"
import "./style/globals.css"
import "./style/print.css"
import "./style/phone.css"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "姜盛乾个人简历_运维开发工程师_202403",
  description: "Personal resume",
}

export default function RootLayout({ children }:
  Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
