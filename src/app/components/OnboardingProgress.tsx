"use client"

import { usePathname } from "next/navigation"
import { Progress } from "@/components/ui/progress"

const pathnames = ["/business-type", "/contact-details", "/business-details", "/addons", "/summary", "/payment"]

export function OnboardingProgress() {
  const pathname = usePathname()
  const currentIndex = pathnames.indexOf(pathname)
  const progress = ((currentIndex + 1) / pathnames.length) * 100

  return <Progress value={progress} className="w-full h-1 absolute bottom-0 left-0" />
}