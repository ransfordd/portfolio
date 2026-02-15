/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone for our own Dockerfile.prod; static export for Coolify/Nixpacks (expects /app/dist)
  output:
    process.env.DOCKER_BUILD === "1"
      ? "standalone"
      : process.env.COOLIFY_FQDN
        ? "export"
        : undefined,
}

module.exports = nextConfig
