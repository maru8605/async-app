
import {create} from 'zustand'

// Define the store using Zustand
const useDataStore = create((set) => ({
	data: [],
	addData: (name: any) => set((state:any) => ({ data: [...state.data, { name }] })),
	clearData: () => set(() => ({ data: [] })),
}))

export default useDataStore;