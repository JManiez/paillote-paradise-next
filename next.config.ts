import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  images: { unoptimized: false },
  typescript: { ignoreBuildErrors: true },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }]
  },
  async redirects() {
    return [
      { source: '/piscine', destination: '/piscine-transats', permanent: true },
      { source: '/soiree', destination: '/soirees', permanent: true },
      { source: '/evenements', destination: '/soirees', permanent: true },
      { source: '/prive', destination: '/privatisation', permanent: true },
      { source: '/privatiser', destination: '/privatisation', permanent: true },
    ]
  },
}
export default nextConfig
