import { create } from "zustand";

const useStore = create((set) => ({
	wordsPerPage: 3,
	currentSliceStart: 0,
	currentSliceEnd: 3,
	currentPage: 0,
	increaseSliceStart: () =>
		set((state: any) => ({ currentSliceStart: state.currentSliceStart + 3 })),
	reduceSliceStart: () =>
		set((state: any) => ({ currentSliceStart: state.currentSliceStart - 3 })),
	increaseSliceEnd: () =>
		set((state: any) => ({ currentSliceEnd: state.currentSliceEnd + 3 })),
	reduceSliceEnd: () =>
		set((state: any) => ({ currentSliceEnd: state.currentSliceEnd - 3 })),
	nextPage: () => set((state: any) => ({ currentPage: state.currentPage + 1 })),
	previousPage: () =>
		set((state: any) => ({ currentPage: state.currentPage - 1 })),
}));
export default useStore;
