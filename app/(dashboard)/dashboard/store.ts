import { create } from "zustand";

const useStore = create((set) => ({
	counter: 0,
	showDailyTask: false,
	setShowDailyTask: (boolean: boolean) =>
		set((state: any) => ({ showDailyTask: boolean })),
	increment: () => set((state: any) => ({ counter: state.counter + 1 })),
	decrement: () => set((state: any) => ({ counter: state.counter - 1 })),
}));
export default useStore;
