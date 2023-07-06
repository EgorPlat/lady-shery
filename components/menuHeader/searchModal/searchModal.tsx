import { ISelectOptions } from '@/interfaces/reactSelect';
import s from './searchModal.module.scss';
import Select, { SingleValue } from 'react-select';

export default function SearchModal(props: { 
    options: ISelectOptions[],
    handleChangeSearchSelectValue: (vaue: SingleValue<ISelectOptions>) => void
    handleCloseSearchModal: () => void
}) {
    return (
        <div className={s.searchModalWrapper} onClick={(e) => {
            props.handleCloseSearchModal();
            e.stopPropagation();
        }}>
            <div className={s.selectWrapper} onClick={(e) => e.stopPropagation()}>
                <Select
                    placeholder="Название товара, категории или раздела"
                    className={s.searchSelect}
                    onChange={(value) => props.handleChangeSearchSelectValue(value)}
                    options={props.options}
                />
            </div>
        </div>
    )
}