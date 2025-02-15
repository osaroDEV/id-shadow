import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface UploadedFile {
  file: File
  progress: number
  complete: boolean
}

interface FileUploads {
  validId?: UploadedFile
  signature?: UploadedFile
}

interface UploadStore {
  uploads: FileUploads
  setFileUpload: (type: "validId" | "signature", upload: UploadedFile) => void
  removeFile: (type: "validId" | "signature") => void
  updateProgress: (type: "validId" | "signature", progress: number) => void
}

export const useUploadStore = create<UploadStore>()(
  persist(
    (set) => ({
      uploads: {},
      setFileUpload: (type, upload) =>
        set((state) => ({
          uploads: {
            ...state.uploads,
            [type]: upload,
          },
        })),
      removeFile: (type) =>
        set((state) => {
          const newUploads = { ...state.uploads }
          delete newUploads[type]
          return { uploads: newUploads }
        }),
      updateProgress: (type, progress) =>
        set((state) => ({
          uploads: {
            ...state.uploads,
            [type]: state.uploads[type]
              ? {
                  ...state.uploads[type]!,
                  progress,
                  complete: progress === 100,
                }
              : undefined,
          },
        })),
    }),
    {
      name: "upload-storage",
    },
  ),
)

