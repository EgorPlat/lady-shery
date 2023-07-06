import Link from 'next/link';
import { FooterInfo } from './constants';
import s from './footer.module.scss';

export default function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.title}>{FooterInfo.mainText}</div>
            <Link href="/about" className={s.footerLink}>О нас</Link>
            <Link href="" className={s.footerLink}>Обратная связь</Link>
            <Link href="" className={s.footerLink}>Контакты</Link>
        </div>
    )
}