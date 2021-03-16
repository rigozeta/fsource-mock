<template>
	<div class="Accordion">
		<b-container>
			<b-row>
				<b-col lg="8" offset-lg="2">

					<div class="accordion" v-for="(accordion, index) in content" :key="index" :class="{open: activeId == accordion.id}">
						<div class="accordion-header">
							<strong>{{accordion.title}}</strong>
							<b-row>
								<b-col cols="8" md="10">
									<h5>{{accordion.intro}}</h5>
								</b-col>
								<b-col cols="2" md="2" align="right">
									<b-button class="btn-transparent" v-on:click="activeId = accordion.id"><font-awesome-icon v-bind:icon="(activeId != accordion.id ? 'plus':'minus')" size="3x"/></b-button>
								</b-col>
							</b-row>
						</div>
						<div class="accordion-description container">
							<b-row>
								<b-col md="12">
									{{accordion.description}}
								</b-col>
							</b-row>
						</div>
					</div>


				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script src="./Accordion.js"></script>
