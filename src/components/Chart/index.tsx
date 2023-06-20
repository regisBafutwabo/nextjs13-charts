"use client";
import { Suspense } from 'react';

import dynamic from 'next/dynamic';
import {
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import Loading from '@app/loading';
import { DataType } from '@typings/chart-data';

const BarChart = dynamic(() => (
    import("recharts").then(recharts => recharts.BarChart)
), { ssr: false });

type ChartProps = {
    data: DataType[];
    name: string;
}

export const Chart = ({data, name}: ChartProps) => {
    
    return ( 
        <div className="flex flex-col py-4">
            <h3 className="text-xl text-center font-bold capitalize">{name}</h3>
            <Suspense fallback={<Loading/>}>
                <BarChart width={800} height={800} data={data}>
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis dataKey="step" />
                    <YAxis dataKey="value" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </Suspense>
        </div>
  );
};