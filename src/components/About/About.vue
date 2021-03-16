<template>
	<div class="About">
		<b-container class="slider">
			<div class="slide-box">
				<b-row>
					<b-col md="4" v-for="(card, index) in content" :key="index">
						<b-card class="mb-2 text-white key-value-box">
							<b-card-text>
								<span class="key-title-small">{{card.subtitle}}</span>
								<h4 class="key-title">{{card.title}}</h4>
								<hr />
								{{card.content}}
							</b-card-text>

							<b-button :href="card.url" variant="primary">Read More</b-button>
						</b-card>
					</b-col>
				</b-row>
			</div>

		</b-container>
	</div>
</template>

<script src="./About.js"></script>
