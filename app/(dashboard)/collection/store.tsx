import { create } from "zustand";

const useStore = create((set) => ({
	wordsPerPage: 10,
	currentSliceStart: 0,
	currentSliceEnd: 10,
	currentPage: 0,
	increaseSliceStart: () =>
		set((state: any) => ({ currentSliceStart: state.currentSliceStart + 10 })),
	reduceSliceStart: () =>
		set((state: any) => ({ currentSliceStart: state.currentSliceStart - 10 })),
	increaseSliceEnd: () =>
		set((state: any) => ({ currentSliceEnd: state.currentSliceEnd + 10 })),
	reduceSliceEnd: () =>
		set((state: any) => ({ currentSliceEnd: state.currentSliceEnd - 10 })),
	nextPage: () => set((state: any) => ({ currentPage: state.currentPage + 1 })),
	previousPage: () =>
		set((state: any) => ({ currentPage: state.currentPage - 1 })),
}));
export default useStore;
