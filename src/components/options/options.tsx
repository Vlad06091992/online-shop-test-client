import {Typography} from "../../components/ui/typography";
import {Button} from "../../components/ui/button/button.tsx";
import styles from "./options.module.scss";
import AscSortIcon from "../../assets/icons/asc-sort-icon.tsx";
import DescSortIcon from "../../assets/icons/desc-sort-icon.tsx";
import {useEffect, useState} from "react";
import {SortingFieldType, SortingOptionType} from "../../types.ts";
import {useSearchParams} from "react-router-dom";


export const Options = () => {
    const [sortingOrder, setSortingOrder] = useState<SortingOptionType>('asc')
    const [sortField, setSortingField] = useState<SortingFieldType>('price')
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams((params) => {
            params.set("sortingOption", sortingOrder)
            return params
        })
    }, [sortingOrder, setSearchParams]);


    useEffect(() => {
        setSearchParams((params) => {
            const field = params.get('sortField')
            if (field === "popularity") {
                params.delete("sortingOption")
            }
            params.set("sortField", sortField)
            return params
        })
    }, [sortField, setSearchParams])


    return (
        <div>
            <div className={styles.sorting}>
                <Button onClick={() => {
                    setSortingField('popularity')
                    setSearchParams((params) => {
                        params.set("sortField", 'popularity')
                        return params
                    })
                }} variant={'tertiary'}>
                    {/*${disabledLink ? s.disabledLink : ''}*/}
                    <Typography className={`${sortField === 'popularity' ? styles.activeSorting : ''}`} as={'span'}
                                variant={'tertiaryButton'}>
                        по популярности
                    </Typography>
                </Button>
                <Button onClick={() => {
                    setSortingField('price')

                }} variant={'tertiary'}>
                    <Typography className={`${sortField === 'price' ? styles.activeSorting : ''}`} as={'span'}
                                variant={'tertiaryButton'}>
                        по цене
                    </Typography>
                    <div className={`${sortField === 'price' ? styles.activeSorting : ''}`} onClick={
                        () => {
                            setSortingOrder((arg) => arg === "asc" ? 'desc' : 'asc')
                        }
                    }>
                        {sortingOrder === 'asc' && <AscSortIcon isActive={sortField === 'price'}/>}
                        {sortingOrder === 'desc' && < DescSortIcon isActive={sortField === 'price'}/>}
                    </div>
                </Button>
            </div>
        </div>
    )
}