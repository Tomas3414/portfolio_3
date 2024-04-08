/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com']
    },
    async rewrites() {
        return [
            {source: '/(W|w)eb', destination: '/web'},
            {source: '/Web/:path*', destination: '/web/:path*'},
            {source: '/(F|f)lutter', destination: '/flutter'},
            {source: '/Flutter/:path*', destination: '/flutter/:path*'},
            {source: '/(P|p)rojects', destination: '/projects'},
            {source: '/(B|b)lossoms', destination: '/blossoms'}
        ]
    }
}

module.exports = nextConfig
