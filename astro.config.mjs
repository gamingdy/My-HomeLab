import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
    site: "https://docs.home.gamingdy.fr",
    integrations: [
        starlight({
            title: "My HomeLab",
            social: {
                github: "https://github.com/gamingdy/My-HomeLab",
            },
            logo: {
                light: "./src/assets/favicon.png",
                dark: "./src/assets/favicon.png",
                replacesTitle: false,
            },
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Example Guide", link: "/guides/example/" },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
    ],
});
