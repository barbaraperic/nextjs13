import { create } from "zustand";

const useStore = create((set) => ({
	wordsPerPage: 4,
	currentSliceStart: 0,
	currentSliceEnd: 4,
	currentPage: 0,
	increaseSliceStart: () =>
		set((state: any) => ({ currentSliceStart: state.currentSliceStart + 4 })),
	reduceSliceStart: () =>
		set((state: any) => ({ currentSliceStart: state.currentSliceStart - 4 })),
	increaseSliceEnd: () =>
		set((state: any) => ({ currentSliceEnd: state.currentSliceEnd + 4 })),
	reduceSliceEnd: () =>
		set((state: any) => ({ currentSliceEnd: state.currentSliceEnd - 4 })),
	nextPage: () => set((state: any) => ({ currentPage: state.currentPage + 1 })),
	previousPage: () =>
		set((state: any) => ({ currentPage: state.currentPage - 1 })),
}));
export default useStore;
