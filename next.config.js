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
                source: '/api/phonepe',
                destination: 'https://api.phonepe.com/apis/hermes/pg/v1/pay',
            }
        ]
    }
}

module.exports = nextConfig


