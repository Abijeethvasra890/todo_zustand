import {create} from "zustand";
//zustand state management - Central state management
const store = (set) =>({
    items: [],
    setItems: (newItems) => set({ items: newItems }),
    itemName: '',
    setItemName: (newItemName) => set({ itemName: newItemName }),
    itemDesc: '',
    setItemDesc: (newItemDesc) => set({ itemDesc: newItemDesc }),
    dueDate: '',
    setDueDate: (newDueDate) => set({ dueDate: newDueDate }),
    createdDate: '',
    setCreatedDate: (newCreatedDate) => set({ createdDate: newCreatedDate }),
    priority: 'P0',
    setPriority: (newPriority) => set({ priority: newPriority }),
 })

 export const useStore = create(store);
