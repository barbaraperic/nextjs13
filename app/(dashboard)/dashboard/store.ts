import { create } from "zustand";

const useStore = create((set) => ({
	dailyTasks: [],
	add: (task: String) =>
		set((state: any) => {
			const newTasks = [...state.dailyTasks, task];
			return { dailyTasks: newTasks };
		}),
	remove: (task: String) =>
		set((state: any) => {
			const newTasks = state.dailyTasks.filter((t: string) => t !== task);

			return { dailyTasks: newTasks };
		}),
}));
export default useStore;
