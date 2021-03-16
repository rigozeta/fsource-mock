<template>
	<div class="Resources">
		<b-container class="resources-section">
			<b-row>
				<b-col lg="8" offset-lg="2">
					<b-row>
						<b-col lg="7">
							<h3>{{content.title}}</h3>
							<div v-html="content.description"></div>

							<b-row class="country-list" v-for="(country, index) in content.countries" :key="index">
								<b-col md="4" class="mobile-strong">{{country[0]}}</b-col>
								<b-col md="8">{{country[1]}}</b-col>
							</b-row>
						</b-col>

						<b-col lg="5" class="download-resources">
							<strong>DOWNLOADABLE RESOURCES</strong>
							<hr class="hr-red" />
							<a class="btn btn-secondary" :href="content.downloadUrl"><font-awesome-icon icon="arrow-down" /> 20201 lipsum outlook</a>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script src="./Resources.js"></script>
