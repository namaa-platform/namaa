import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'نماء | منصة الحلقات المعرفية العربية',
  description: 'نموذج تجريبي لمنصة عربية تحول أفكار الكتب إلى حلقات صوتية ثرية ومسارات تعلم عملية.',
  keywords: ['نماء', 'ملخصات كتب', 'حلقات صوتية', 'ريادة أعمال', 'تسويق', 'اقتصاد', 'مسارات تعلم'],
  icons: { icon: '/favicon.svg' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'نماء | Namaa',
    description: 'أفكار الكتب… تُسمع، تُفهم، وتنمو معك.',
    images: ['/posters/platform-launch.webp'],
    locale: 'ar_EG',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F3D3A',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
