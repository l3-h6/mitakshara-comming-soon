import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-5xl font-bold mb-4">Mitakshara Institute of Law</h1>
      <p className="text-xl mb-8">Website Coming Soon</p>
      <div className="space-y-2 text-center">
        <p>📍 Kathmandu, Bagmati Province, Nepal</p>
        <p>Email: info@mitaksharalaw.edu.np</p>
        <p>Phone: +977-1-XXXXXXX</p>
      </div>
      <footer className="mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mitakshara Institute of Law. All rights reserved.
      </footer>
    </main>
  )
}
