import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "nishat wants u to call ur reps <3",
  description: "free palestine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
