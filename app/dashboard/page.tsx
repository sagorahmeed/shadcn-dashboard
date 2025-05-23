'use client'

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardHome() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") return <p>Loading...</p>
  if (status === "unauthenticated") return null

  return <div>Welcome, {session?.user?.name}</div>
}
