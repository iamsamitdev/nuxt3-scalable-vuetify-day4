// import createVuetify 
import { createVuetify } from "vuetify"

// import custom icons from helpers
import { aliases, custom } from "~/helpers/customIcons"

// import themes from helpers
import { LIGHT_THEME, lightTheme, DARK_THEME, darkTheme } from "~/helpers/themes"

// import defaults from helpers
import { defaults } from "~/helpers/defaults"

// create vuetify instance
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({

        // enable ssr for rendering
        ssr: true,

        // default vuetify components
        defaults,

        // theme options
        theme: {
            defaultTheme: LIGHT_THEME,
            themes: {
                lightTheme,
                darkTheme,
            },
            // add color variations
            variations: {
                colors: ["primary", "secondary"],
                lighten: 3,
                darken: 3,
            }
        },
        // icons options
        icons: {
            defaultSet: "custom",
            aliases,
            sets: {
                custom,
            },
        },
    })

    // add vuetify to nuxt app
    nuxtApp.vueApp.use(vuetify)
})