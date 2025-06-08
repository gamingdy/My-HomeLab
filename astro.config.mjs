import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";
import catppuccin from "@catppuccin/starlight";

export default defineConfig({
    site: "https://docs.home.gamingdy.fr",
    integrations: [
        starlight({
            title: "My HomeLab",
            customCss: ["./src/style/custom.css"],
            lastUpdated: true,
            social: [
                {
                    icon: "github", label: "GitHub",
                    href: "https://github.com/gamingdy/My-HomeLab"
                }
            ],
            favicon: "./src/assets/favicon.png",
            logo: {
                src: "./src/assets/favicon.png",
                replacesTitle: false,
            },
            plugins: [starlightLinksValidator(), starlightImageZoom(), catppuccin({
                dark: {flavor: "mocha", accent: "mauve"},
                light: {flavor: "latte", accent: "mauve"}
            })],
            expressiveCode: {
                // Replace the default themes with a custom set of bundled themes:
                // "dracula" (a dark theme) and "solarized-light"
                themes: ['catppuccin-mocha', 'material-theme-lighter'],
                removeUnusedThemes: true,
            },
            head: [
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
                    autogenerate: {directory: "tools"},
                },
            ],
        }),
    ],
});
