import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tighter">404</h2>
      <p className="text-xl text-neutral-500 mb-10 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </button>
      </Link>
    </div>
  )
}
