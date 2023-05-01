import './globals.css'

export const metadata = {
  title: 'Caminho casa / trabalho',
  description: 'Caminho casa / trabalho',
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
