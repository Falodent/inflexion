import { create } from "zustand";
import { persist } from "zustand/middleware";

// types
import { FullContentType } from "@/types/content";

interface ContentStore {
  offset: number;
  contents: FullContentType[];
  setContents: (data: FullContentType[]) => void;
  setOffset: (data: number) => void;
  clearContents: () => void;
}

export const useContentStore = create<ContentStore>()(
  persist(
    (set) => ({
      offset: 0,
      contents: [],
      setContents: (data) => set(() => ({ contents: data })),
      setOffset: (data) => set(() => ({ offset: data })),
      clearContents: () => set({ contents: [] }),
    }),
    {
      name: "content-store",
    }
  )
);
