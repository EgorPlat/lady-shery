'use client';
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import MenuHeader from '@/components/menuHeader/menuHeader'
import './globals.css'
import { useEffect } from 'react'
import { getCategorys } from '@/store/category'
import { checkIsMobile } from '@/helper/checkIsMobile';

/*export const metadata = {
  title: 'Lady Shery - Главная',
  description: 'Оффициальный магазин Lady Shery',
  keywords: ['Lady Shery', 'Lady', 'Shery', 'Главная', 'Интернет магазин', 'Магазин', 'магазин']
}
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    getCategorys();
    checkIsMobile();
  }, []);
  
  return (
    <html lang="en">
      <body>
        <div className='layoutHeader'>
          <Header />
          <MenuHeader />
        </div>
        <div className='childrenContent'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
