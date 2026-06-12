import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="text-center max-w-md px-6">
        <h1 className="text-[10rem] font-heading font-bold text-[#5bd37c] leading-none mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold mb-2">Page Not Found</h2>
        <p className="text-muted mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href="/"
          className="inline-flex h-12 px-8 items-center justify-center rounded-full bg-foreground text-white font-medium hover:bg-[#5bd37c] transition-colors"
        >
          Back Home
        </Link>
      </div>
    </div>
  )
}
