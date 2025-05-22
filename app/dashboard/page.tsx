// ✅ CORRECT
'use client'

import { useSession } from "next-auth/react"

export default function DashboardHome() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>
  if (!session) return <p>Please login to access the dashboard.</p>

  return <div>Welcome, {session.user?.name}</div>
}
