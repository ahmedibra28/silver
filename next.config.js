/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {

        serverActions: true,
    },
    images: {
        domains: ['farshaxan.blr1.cdn.digitaloceanspaces.com', 'images.unsplash.com', 'www.ecpgr.cgiar.org'],
    },
}

module.exports = nextConfig
