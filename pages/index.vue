<script setup lang="ts">

	useHead({
		title: 'Sign In',
		meta: [
		{ 
			name: 'description', 
			content: 'Sign In Nuxt 3, IT Genius Engineering' 
		},
		{
			name: 'keywords',
			content: 'Sign In, Nuxt 3, Learning Nuxt 3'
		},
		],
	})

	// ref const for email and password
	const email = ref('')
	const password = ref('')

	// useFormRules() for email and password
	const { ruleEmail, rulePassLen, ruleRequired } = useFormRules()

	// useRoute() for redirect
	const router = useRouter()

	// submit form
	const submit = async () => {

		// console.log(ruleEmail(email.value))
		
		// check form is valid
		if (ruleRequired(email.value) == true && ruleEmail(email.value) == true && rulePassLen(password.value) == true) {

			// console.log(email.value, password.value)

			// useRuntimeConfig() for get env
			const config = useRuntimeConfig()
			const STRAPI_URL: string = config.strapi.url

			// login strapi with usefetch()
			const { data, error } = await useFetch(`${STRAPI_URL}/auth/local`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"identifier": email.value,
					"password": password.value
				}),
			})

			// check error
			if (error.value != null) { // error
				
				if(error.value.status === 400){
					console.log('Login failed! Please check your email and password.')
				}else{
					console.log('Request failed:', error.value.message)
				}

			}else{ // success

				// console.log((data as { value: { jwt: string } }).value.jwt)
				// set token to localStorage
				localStorage.setItem('token', (data as { value: { jwt: string } }).value.jwt)

				// redirect to dashboard
				await router.push({path:'/backend/dashboard'})

			}

		}

	}

	
</script>

<template>
	<VContainer fluid class="fill-height pa-0">
		<VRow no-gutters align="center" justify="center" class="fill-height">
            <VCol class="hidden-sm-and-down fill-height" md="6" lg="6">
				<VImg
					src="https://wallpaper.dog/large/5557744.jpg"
					cover
					class="h-100 rounded-xl rounded-ts-0 rounded-bs-0 d-flex align-center justify-center"
				>
					<div class="text-center w-50 text-white mx-auto">
						<h1 class="mb-4">ยินดีต้อนรับการกลับมาของคุณ</h1>
						<p>
							ยินดีต้อนรับสู่ระบบจัดการสินค้า ขอเชิญคุณเข้าสู่ระบบเพื่อสัมผัสประสบการณ์การจัดการสินค้าที่สะดวกรวดเร็วและแม่นยำ เริ่มการทำงานของคุณได้วันนี้ พร้อมกับเรา!
						</p>
					</div>
				</VImg>
			</VCol>
			<VCol cols="12" md="6" lg="6" sm="6">
				<VRow no-gutters align="center" justify="center">
					<VCol cols="12" md="6" class="pa-3">
						<h1>เข้าสู่ระบบ</h1>
						<p class="text-medium-emphasis">ป้อนอีเมล์และรหัสผ่านสำหรับเข้าใช้งาน</p>

						<VForm @submit.prevent="submit" class="mt-7">
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="email">Email</label>
								<VTextField
									v-model="email"
									:rules="[ruleRequired, ruleEmail]"
									prepend-inner-icon="fluent:mail-24-regular"
									id="email"
									name="email"
									type="email"
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="password">Password</label>
								<VTextField
									v-model="password"
									:rules="[ruleRequired, rulePassLen]"
									prepend-inner-icon="fluent:password-20-regular"
									id="password"
									name="password"
									type="password"
								/>
							</div>
							<div class="mt-5">
								<VBtn type="submit" block min-height="44" class="gradient primary">Sign In</VBtn>
							</div>
						</VForm>
						<p class="text-center mt-10">
							<span
								>ยังไม่ได้เป็นสมาชิก ?
								<NuxtLink to="/signup" class="font-weight-bold text-primary"
									>ลงทะเบียนที่นี่</NuxtLink
								></span
							>
						</p>
					</VCol>
				</VRow>
			</VCol>
		</VRow>
	</VContainer>
</template>

<style scoped>

</style>