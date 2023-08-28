import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

const pd = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pd',
});

export const metadata: Metadata = {
  title: 'Galleria',
  description:
    'This is a solution to the "Galleria slideshow site" challenge on Frontend Mentor',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={pd.variable}>{children}</body>
    </html>
  );
}
