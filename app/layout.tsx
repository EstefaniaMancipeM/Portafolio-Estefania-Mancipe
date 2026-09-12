import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Estefania Mancipe Montañez | Full Stack Junior',
 description: 'Portafolio de Estefania Mancipe: VidaFit, Mis pendientes y modelado con Java. Interfaces, lógica y trabajo en equipo.',
 icons: { icon: '/icon.svg' },
 robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="es"><body>{children}</body></html>;
}
