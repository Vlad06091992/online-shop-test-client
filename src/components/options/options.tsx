import {Typography} from "../../components/ui/typography";
import {Button} from "../../components/ui/button/button.tsx";
import styles from "./options.module.scss";
import AscSortIcon from "../../assets/icons/asc-sort-icon.tsx";
import DescSortIcon from "../../assets/icons/desc-sort-icon.tsx";
import {useState} from "react";

type Sorting = 'asc' | 'desc'
type SortingBy = 'price' | 'popularity'

export const Options = () => {
    const [sort, setSorting] = useState<Sorting>('asc')
    const [sortType, setSortingType] = useState<SortingBy>('price')
    return (
        <div>
            <div className={styles.sorting}>
                <Button onClick={() => {
                    console.log('popularity')
                    setSortingType('popularity')
                }} variant={'tertiary'}>
                    {/*${disabledLink ? s.disabledLink : ''}*/}
                    <Typography className={`${sortType === 'popularity' ? styles.activeSorting : ''}`} as={'span'}
                                variant={'tertiaryButton'}>
                        по популярности
                    </Typography>
                </Button>
                <Button onClick={() => {
                    console.log('price')
                    setSortingType('price')
                }} variant={'tertiary'}>
                    <Typography className={`${sortType === 'price' ? styles.activeSorting : ''}`} as={'span'}
                                variant={'tertiaryButton'}>
                        по цене
                    </Typography>
                    <div className={`${sortType === 'price' ? styles.activeSorting : ''}`} onClick={
                        () => {
                            setSorting(sort === "asc" ? 'desc' : 'asc')
                            console.log(sort)
                        }

                    }>
                        {sort === 'asc' && <AscSortIcon isActive={sortType === 'price'}/>}
                        {sort === 'desc' && < DescSortIcon isActive={sortType === 'price'}/>}
                    </div>

                </Button>
            </div>

        </div>
    )
}