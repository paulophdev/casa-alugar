import './globals.css'

export const metadata = {
  title: 'A procura de uma casa para alugar',
  description: 'A procura de uma casa para alugar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-gray-900 text-gray-200'>{children}</body>
    </html>
  )
}
