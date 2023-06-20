import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FilterState {
    name: string;
    setName: (value: string) => void;
}

export const usefilterStore = create<FilterState>()(
    devtools(
            (set) => ({
                name: "",
                setName: (value)=> set((state) =>({name: value}))
            })
        
    )
)