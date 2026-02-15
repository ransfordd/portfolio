/** @type {import('next').NextConfig} */
const isStaticExport = process.env.COOLIFY_FQDN != null

const nextConfig = {
  // Standalone for our own Dockerfile.prod; static export for Coolify/Nixpacks (expects /app/dist)
  output:
    process.env.DOCKER_BUILD === "1"
      ? "standalone"
      : isStaticExport
        ? "export"
        : undefined,
  // Required for static export: no image optimization server, so use plain img tags
  ...(isStaticExport && {
    images: { unoptimized: true },
  }),
}

module.exports = nextConfig
