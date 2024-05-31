import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";

export default defineConfig({
    site: "https://docs.home.gamingdy.fr",
    integrations: [
        starlight({
            title: "My HomeLab",
            customCss: ["./src/style/custom.css"],
            social: {
                github: "https://github.com/gamingdy/My-HomeLab",
            },
            favicon: "./src/assets/favicon.png",
            logo: {
                src: "./src/assets/favicon.png",
                replacesTitle: false,
            },
            plugins: [starlightLinksValidator(), starlightImageZoom()],
            head: [
                // Example: add Fathom analytics script tag.
                {
                    tag: "script",
                    attrs: {
                        src: "https://track.gamingdy.fr/script.js",
                        "data-website-id": "2746f417-63df-4cf5-a57d-9b980e9f7e22",
                        defer: true,
                        "data-domains": "docs.home.gamingdy.fr",
                    },
                },
            ],
            sidebar: [
                {
                    label: "Tools",
                    autogenerate: { directory: "tools" },
                },
            ],
        }),
    ],
});
