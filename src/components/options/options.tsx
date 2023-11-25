import {Typography} from "../../components/ui/typography";
import {Button} from "../../components/ui/button/button.tsx";
import styles from "./options.module.scss";
import AscSortIcon from "../../assets/icons/asc-sort-icon.tsx";
import DescSortIcon from "../../assets/icons/desc-sort-icon.tsx";
import {useEffect, useState} from "react";
import {SortingOptionType, SortingFieldType} from "../../types.ts";
import {useSearchParams} from "react-router-dom";
import {store} from "../../store/store.ts";


export const Options = () => {
    const [sortingOrder, setSortingOrder] = useState<SortingOptionType>('asc')
    const [sortField, setSortingField] = useState<SortingFieldType>('price')
    const [searchParams, setSearchParams] = useSearchParams();

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

console.log(searchParams.entries())

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
                            console.log(sortingOrder)
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