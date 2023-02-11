import { DefaultsInstance } from "vuetify/lib/framework.mjs"

export const defaults: DefaultsInstance = {
    VAppBar: {
        elevation: 0,
    },
    VBtn: {
        variaint: "flat", // flat, outlined, contained, text
        height: "38",
        rounded: "lg", // sm, lg, xl
        size: "small", // small, medium, large
    },
    VTextField: {
        color: "primary",
        variant: "outlined", // outlined, filled, flat
        density: "comfortable", // compact, default, comfortable
    },
}