import main1 from 'public/main1.jpg';
import main2 from 'public/main2.jpg';
import sales from 'public/sales.png';
import shorts from 'public/shorts.jpg';
import news from 'public/new.jpg';
import CustomSlider from '@/components-ui/CustomSlider/CustomSlider'
import Image from 'next/image';
import s from './page.module.scss'

export default function Home() {
  return (
    <div className={s.home}>
      <div className={s.title}>Актуальные и новые коллекции</div>
      <div className={s.blockSlider}>
        <Image 
          className={s.mainImage}
          src={main1} 
          alt="Главное изображение" 
        />
        <Image 
          className={s.mainImage}
          src={main2} 
          alt="Главное изображение" 
        />
      </div>
      <div className={s.blockScroll}>
        <div className={s.centerContainer}>
          <Image 
            className={s.mainScrollImage}
            src={sales} 
            alt="Категория" 
          />
          Акции
        </div>
        <div className={s.centerContainer}>
          <Image 
            className={s.mainScrollImage}
            src={shorts} 
            alt="Категория" 
          />
          Шорты
        </div>
        <div className={s.centerContainer}>
          <Image 
            className={s.mainScrollImage}
            src={news} 
            alt="Категория" 
          />
          Новое
        </div>
      </div>
    </div>
  )
}
