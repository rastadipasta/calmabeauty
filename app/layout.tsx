import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://calma-beauty-zagreb.matkovimarko6.chatgpt.site';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const sans = Manrope({
  variable: '--font-sans-custom',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Calma Beauty | Kozmetički salon u Zagrebu',
  description:
    'Calma Beauty je salon za žene u Zagrebu. Tretmani lica i tijela, masaže i depilacije u prostoru posvećenom vašem miru.',
  keywords: [
    'kozmetički salon Zagreb',
    'tretmani lica Zagreb',
    'masaža Zagreb',
    'depilacija šećernom pastom Zagreb',
    'salon ljepote Dubrava',
  ],
  authors: [{ name: 'Calma Beauty' }],
  creator: 'Calma Beauty',
  publisher: 'Calma Beauty',
  applicationName: 'Calma Beauty',
  category: 'beauty',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    siteName: 'Calma Beauty',
    title: 'Calma Beauty — mjesto gdje počinje tvoj mir.',
    description:
      'Tretmani lica i tijela, masaže i depilacije u mirnom salonu za žene u Zagrebu.',
    url: siteUrl,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Calma Beauty — mjesto gdje počinje tvoj mir.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calma Beauty — mjesto gdje počinje tvoj mir.',
    description:
      'Tretmani lica i tijela, masaže i depilacije u mirnom salonu za žene u Zagrebu.',
    images: ['/og.png'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
    shortcut: '/favicon.png',
    apple: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hr">
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
