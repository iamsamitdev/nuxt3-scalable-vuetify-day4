// Create a custom hook to use form rules

export const useFormRules = () => {
    return {
        ruleRequired: (value: string) => !!value || 'This field is required',
        ruleEmail: (value: string) => {
            const pattern =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return pattern.test(value) || "Enter a valid email";
        },
        rulePassLen: (v: string) => (!!v && v.length >= 6) || "Password must be 6 chars or more",
    }
}