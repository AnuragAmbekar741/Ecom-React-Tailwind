/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com'
        }],
    },
    async rewrites() {
        return [
            {
                source: '/pg/v1/pay',
                destination: 'https://api.phonepe.com/apis/hermes',
            }
        ]
    }
}

module.exports = nextConfig
