<script setup>
	import Layout from "../layout/Layout.vue";
</script>

<template>
	<Layout title="Services">
		<section class="my-6 mx-12 text-gray-800 text-center">
			<div class="flex flex-wrap justify-center mb-12">
				<div class="grow-0 shrink-0 basis-auto w-full md:w-10/12 px-3">
					<div
						class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg mb-6 rounded-lg"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light">
						<img
							src="https://mdbootstrap.com/img/new/slides/080.jpg"
							class="w-full" />
					</div>
				</div>

				<div
					class="grow-0 shrink-0 basis-auto w-full md:w-8/12 xl:w-6/12 px-3">
					<h5 class="text-lg font-bold mb-3"
						>Pre-Construction Services</h5
					>
					<p class="mb-6">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Culpa atque hic, officiis blanditiis accusantium
						veritatis ullam? Maiores atque autem velit officiis
						molestiae voluptates suscipit eligendi, vero expedita
						sequi, doloremque modi?
					</p>
					<router-link
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						:to="{ path: '/pre-construction-services' }"
						role="button"
						>Learn more</router-link
					>
				</div>
			</div>

			<div class="flex flex-wrap justify-center mb-12">
				<div class="grow-0 shrink-0 basis-auto w-full md:w-10/12 px-3">
					<div
						class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg mb-6 rounded-lg"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light">
						<img
							src="https://mdbootstrap.com/img/new/slides/080.jpg"
							class="w-full" />
					</div>
				</div>

				<div
					class="grow-0 shrink-0 basis-auto w-full md:w-8/12 xl:w-6/12 px-3">
					<h5 class="text-lg font-bold mb-3"
						>Construction Services</h5
					>
					<p class="mb-6">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Culpa atque hic, officiis blanditiis accusantium
						veritatis ullam? Maiores atque autem velit officiis
						molestiae voluptates suscipit eligendi, vero expedita
						sequi, doloremque modi?
					</p>
					<router-link
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						:to="{ path: '/construction-services' }"
						role="button"
						>Learn more</router-link
					>
				</div>
			</div>
		</section>
	</Layout>
</template>
