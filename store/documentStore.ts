import { create } from "zustand";


export interface Document {
  fileName: string;
  fileIcon: string;
  size: string;
  verified?: boolean;
}

interface DocumentState {
  documents: Document[];
  setDocuments: (docs: Document[]) => void;
  addDocument: (doc: Document) => void;
  removeDocument: (index: number) => void;
}


const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],

  setDocuments: (docs: Document[]) => set({ documents: docs }),

  addDocument: (doc: Document) =>
    set((state) => ({ documents: [...state.documents, doc] })),

  removeDocument: (index: number) =>
    set((state) => ({
      documents: state.documents.filter((_, i) => i !== index),
    })),
}));

export default useDocumentStore;