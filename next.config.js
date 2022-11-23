/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['links.papareact.com', 'platform-lookaside.fbsbx.com', 'photos.app.goo.gl', 'appstraveler.com']
    },
    experimental: {
        appDir: true
    }
}