import s from './page.module.scss'

export default function Home() {
  return (
    <div className={s.home}>
      <div className={s.block}>
        <div className={s.infoBlock}>
          Картинка 1
        </div>
        <div className={s.infoBlock}>
          Картинка 2
        </div>
      </div>
    </div>
  )
}
