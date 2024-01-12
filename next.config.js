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
                destination: 'https://api-preprod.phonepe.com/apis/pg-sandbox',
            }
        ]
    }
}

module.exports = nextConfig
