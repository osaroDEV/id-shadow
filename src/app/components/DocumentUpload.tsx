"use client"

import { useRef } from "react"
import { UploadCloud, X } from "lucide-react"
import { useUploadStore } from "../../../lib/store/uploadStore"
import type React from "react"

export default function DocumentUpload() {
  const { uploads, setFileUpload, removeFile, updateProgress } = useUploadStore()
  const validIdInputRef = useRef<HTMLInputElement>(null)
  const signatureInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (type: "validId" | "signature", file: File) => {
  
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB")
      return
    }


    if (!file.type.match(/^image\/(jpeg|png)$/)) {
      alert("Only PNG and JPG files are allowed")
      return
    }


    setFileUpload(type, {
      file,
      progress: 0,
      complete: false,
    })

    for (let progress = 0; progress <= 100; progress += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      updateProgress(type, progress)
    }
  }

  const renderUploadSection = (
    type: "validId" | "signature",
    title: string,
    inputRef: React.RefObject<HTMLInputElement | null>,
  ) => (
    <div className="bg-neutral-50 w-full py-4 px-[1.125rem] flex flex-col rounded-[.5rem]">
      <div className="flex items-center justify-between">
        <div className="w-[10.375rem] h-[2.8125rem] flex items-center gap-1">
          <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-neutral-200 flex items-center justify-center">
            <UploadCloud className="text-neutral-500" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-500">{title}</h3>
            <span className="text-xs font-medium text-neutral-400">PNG, JPG | 10MB max.</span>
          </div>
        </div>
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          accept="image/png,image/jpeg"
          onChange={(e) => e.target.files?.[0] && handleFileSelect(type, e.target.files[0])}
        />
        <button
          className="w-[4.375rem] h-[2.5rem] underline text-sm text-blue-500"
          onClick={() => inputRef.current?.click()}
        >
          Upload
        </button>
      </div>
      {uploads[type] && (
        <div className="mt-2">
          <div className="flex items-center justify-between text-sm">
            <span>{uploads[type]?.file.name}</span>
            <button onClick={() => removeFile(type)}>
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="w-full h-2 bg-neutral-200 rounded-full mt-1">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-200"
              style={{ width: `${uploads[type]?.progress}%` }}
            />
          </div>
          <span className="text-xs text-neutral-500">
            {uploads[type]?.complete ? "Upload complete" : `${Math.round(uploads[type]?.progress || 0)}%`}
          </span>
        </div>
      )}
    </div>
  )

  return (
    <div className="">
      <hr className="m-[2rem_auto_2rem_auto] w-full border border-neutral-200" />
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-base font-semibold mr-4 text-neutral-900">Identification</h3>
        <div className="flex flex-col gap-2">
          {renderUploadSection("validId", "Upload Valid ID", validIdInputRef)}
          {renderUploadSection("signature", "Upload Signature", signatureInputRef)}
        </div>
      </div>
    </div>
  )
}

