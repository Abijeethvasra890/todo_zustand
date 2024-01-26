import {create} from "zustand";
//zustand state management - Central state management
const store = (set) =>({
    items: [],
    setItems: (newItems) => set({ items: newItems }),
    itemName: '',
    setItemName: (newItemName) => set({ itemName: newItemName }),
    itemDesc: '',
    setItemDesc: (newItemDesc) => set({ itemDesc: newItemDesc }),
 })

 export const useStore = create(store);
