import './globals.css'

export const metadata = {
  title: 'Hudson Medical Suppliers | Quality Medical Supplies, Direct Pricing',
  description: 'From exam gloves to mobility aids. Fast shipping, bulk discounts, no hassle.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
