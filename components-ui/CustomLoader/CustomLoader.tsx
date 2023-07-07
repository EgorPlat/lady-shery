import s from './CustomLoader.module.scss';

export const CustomLoader = () => {
    return (
        <div className={s.customLoaderWrapper}>
            <div className={s.customLoader}></div>
        </div>
    )
}