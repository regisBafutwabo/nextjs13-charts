"use client";
import { useMemo } from 'react';

import { Chart } from '@components/Chart';
import { usefilterStore } from '@store/filterState';
import { DataType } from '@typings/chart-data';

type ChartsListProps = {
    uniqueNames: string[];
    data: DataType[];
}
export const ChartsList = ({uniqueNames, data}: ChartsListProps) => {
    const {name} = usefilterStore();

    const filteredNames = useMemo(()=>name ? uniqueNames.filter(value => value.includes(name)) : uniqueNames,[name, uniqueNames])

    return (
        <>
            {name && filteredNames.length === 0 ? 
                <p className="text-center">Oops!! no data found with the substring of <span className="font-bold italic">{name}</span></p>
                : 
                name && filteredNames.length>0 ? 
                    filteredNames.map(name => {
                        const filteredData = data.filter((entry) => entry.name === name);
                        return <Chart key={name} data={filteredData} name={name}/>
                    }) 
                :
                    uniqueNames.map(name => {
                        const filteredData = data.filter((entry) => entry.name === name);
                        return <Chart key={name} data={filteredData} name={name}/>
                    })
            }
        </>
    );
};