import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Camote | Elegir qué comer ya no es yuca 🍠',
  description: '¿Qué comer hoy en Perú? Camote te resuelve el almuerzo o cena en segundos sin rodeos. Recomendaciones de restaurantes y delivery según tu mood :v',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍠</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFFDF9] text-[#261C14] antialiased selection:bg-[#FF6F00] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
