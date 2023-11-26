import {Typography} from "../../components/ui/typography";
import {Button} from "../../components/ui/button/button.tsx";
import styles from "./options.module.scss";
import AscSortIcon from "../../assets/icons/asc-sort-icon.tsx";
import DescSortIcon from "../../assets/icons/desc-sort-icon.tsx";
import {useEffect, useState} from "react";
import {SortOrderType,SortByType} from "../../types.ts";
import {useSearchParams} from "react-router-dom";


export const Options = () => {
    const [sortOrder, setSortOrder] = useState<SortOrderType>('asc')
    const [sortBy, setSortingField] = useState<SortByType>('price')
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams((params) => {
            params.set("sortOrder", sortOrder)
            return params
        })
    }, [sortOrder, setSearchParams]);


    useEffect(() => {
        setSearchParams((params) => {
            const field = params.get('sortBy')
            if (field === "popularity") {
                params.delete("sortOrder")
            }
            params.set("sortBy", sortBy)
            return params
        })
    }, [sortBy, setSearchParams])


    return (
        <div>
            <div className={styles.sorting}>
                <Button onClick={() => {
                    setSortingField('popularity')
                    setSearchParams((params) => {
                        params.set("sortBy", 'popularity')
                        return params
                    })
                }} variant={'tertiary'}>
                    {/*${disabledLink ? s.disabledLink : ''}*/}
                    <Typography className={`${sortBy === 'popularity' ? styles.activeSorting : ''}`} as={'span'}
                                variant={'tertiaryButton'}>
                        по популярности
                    </Typography>
                </Button>
                <Button onClick={() => {
                    setSortingField('price')

                }} variant={'tertiary'}>
                    <Typography className={`${sortBy === 'price' ? styles.activeSorting : ''}`} as={'span'}
                                variant={'tertiaryButton'}>
                        по цене
                    </Typography>
                    <div className={`${sortBy === 'price' ? styles.activeSorting : ''}`} onClick={
                        () => {
                            setSortOrder((arg) => arg === "asc" ? 'desc' : 'asc')
                        }
                    }>
                        {sortOrder === 'asc' && <AscSortIcon isActive={sortBy === 'price'}/>}
                        {sortOrder === 'desc' && < DescSortIcon isActive={sortBy === 'price'}/>}
                    </div>
                </Button>
            </div>
        </div>
    )
}