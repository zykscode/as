import '#/styles/globals.css';
import '#/styles/style.scss';

import { Inter as FontSans } from 'next/font/google';

import { Analytics } from '#/components/analytics';
import { SiteFooter } from '#/components/site-footer';
import { TailwindIndicator } from '#/components/tailwind-indicator';
import { ThemeProvider } from '#/components/theme-provider';
import SiteHeader from '#/components/ui/header';
import { Toaster } from '#/components/ui/toaster';
import { siteConfig } from '#/config/site';
import { absoluteUrl, cn } from '#/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Blog',
  ],
  authors: [
    {
      name: 'zyk',
      url: 'https://shadcn.com',
    },
  ],
  creator: 'zyk',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/og.jpg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@zykson',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-primary flex flex-col  min-h-screen duration-500 transition-colors font-sans scroll-smooth text-primaryFg antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <SiteHeader /> */}
          {children}
          <Analytics />
          <Toaster />
          <TailwindIndicator />
          {/* <SiteFooter links={siteConfig.links} />
        */} 
       </ThemeProvider>
      </body>
    </html>
  );
}
