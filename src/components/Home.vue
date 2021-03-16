<template>
	<div class="Home">
		<!-- Desktop header quick links -->
		<b-container class="d-none d-lg-block">
			<b-row>
				<b-col class="header-links">
					<b-nav align="right">
						<b-nav-item active><a href="#"><font-awesome-icon icon="chevron-left" /> Join Us</a></b-nav-item>
						<b-nav-item><a href="#"><font-awesome-icon icon="user" /> Sign In</a></b-nav-item>
						<b-nav-item><a href="#"><font-awesome-icon icon="draw-polygon" /> Support Us</a></b-nav-item>
						<b-nav-item><a href="#"><font-awesome-icon icon="phone-alt" />  Contact</a></b-nav-item>
					</b-nav>
				</b-col>
			</b-row>
		</b-container>

		<!-- Nav -->
		<b-container>
			<b-row>
				<b-col md="12">
					<b-navbar toggleable="lg" type="light" variant="light">
						<b-navbar-brand href="#"><img alt="Page logo" src="../assets/Frame.png" /></b-navbar-brand>

						<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

						<b-collapse id="nav-collapse" is-nav>
							<b-navbar-nav class="ml-auto">
								<b-nav-item href="#">Research and policy</b-nav-item>
								<b-nav-item href="#">Membership</b-nav-item>
								<b-nav-item href="#">Parojects and partnerships</b-nav-item>
								<b-nav-item href="#">Events and programs</b-nav-item>
								<b-nav-item href="#">News and resources</b-nav-item>
								<b-nav-item href="#">About</b-nav-item>
								<b-nav-item href="#">
									<font-awesome-icon icon="search" />
								</b-nav-item>
							</b-navbar-nav>
						</b-collapse>
					</b-navbar>
				</b-col>
			</b-row>

		</b-container>

		<!-- Main Hero -->
		<section class="hero-container">
			<b-container class="fs-hero">
				<b-row>
					<b-col lg="12">
						<b-jumbotron :header="pageContent.title" :lead="pageContent.subtitle"></b-jumbotron>
					</b-col>
				</b-row>
			</b-container>
		</section>


		<b-container>
			<b-row>
				<b-col lg='6' offset-lg='3'>
					<p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi facilisis molestie est a ultrices. Proin elementum,lorem et dignissim tempus,ligula arcu pellentesque sapien,a imperdiet ex velit at urna. Quisque ac nisi turpis. Fusce ultricies
						elit quis dui vulputate,eu maximus enim molestie. Suspendisse potenti. </p>
					<ul>
						<li>Undertaking research to understand the most important issues Australia faces.</li>
						<li>Creating platforms to inform,stimulate ideas and promote debate of critical issues.</li>
						<li>Facilitating collaboration to inspire innovative and progressive policy solutions.</li>
						<li>Influencing decision makers by delivering compelling evidence and recommendations and advocating in support of our positions.</li>
					</ul>
					<p>Ut sit amet urna massa. Aliquam egestas metus quis elit volutpat malesuada. Integer efficitur porta commodo. Orci varius natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Ut sed consectetur diam,non rutrum sem. Sed
						non euismod lorem. </p>
					<p>roin tincidunt sapien libero,nec dictum odio aliquet quis. Ut interdum arcu ut odio dictum,sit amet porta ipsum sagittis. </p>
				</b-col>
			</b-row>
		</b-container>

		<section class="divider"></section>

		<About />
		<Resources />
		<Accordion />

		<b-container>
			<b-row class="more-links">
				<b-col md="6">
					<div class="more-container">
						<b-card class="mb-2 text-white more-card">
							<b-card-text>
								<h4 class="key-title">2019/20 Annual Report</h4>
							</b-card-text>
							<b-button href="#" variant="primary">Read More</b-button>
						</b-card>
					</div>
				</b-col>
				<b-col md="6">
					<div class="more-container">
						<b-card class="mb-2 text-white more-card">
							<b-card-text>
								<h3 class="key-title">I am a title in a red box on two lines</h3>
							</b-card-text>
							<b-button href="#" variant="primary">Read More</b-button>
						</b-card>
					</div>
				</b-col>
			</b-row>
		</b-container>

		<footer class="footer">
			<b-container>
				<b-row>
					<b-col lg="7" offset-lg="1" offset-sm="0"><p>We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging.</p></b-col>
					<b-col lg="3">
						<strong>Telephone</strong> +61 3 9123 4561<br />
						<strong>Email</strong> <a href="mailto:info@logo.com.au">info@logo.com.au</a>

						<b-list-group>
							<b-list-group-item href="#">Terms and conditions</b-list-group-item>
							<b-list-group-item href="#">Events Policy</b-list-group-item>
							<b-list-group-item href="#">Careers</b-list-group-item>
							<b-list-group-item href="#">Contact</b-list-group-item>
						</b-list-group>
					</b-col>
				</b-row>
				<hr />
				<b-row>
					<b-col lg="7" offset-lg="1">
						<strong>Stay up to date</strong>
						<p>Subscribe to get the latest news and insights from our weekly update and research releases.</p>
						<b-form>
							<b-row class="form-row">
								<b-col md="6">
									<b-form-input v-model="contactForm.fname" type="text" placeholder="First Name*" required></b-form-input>
								</b-col>
								<b-col md="6">
									<b-form-input v-model="contactForm.lname" type="text" placeholder="Last Name*" required></b-form-input>
								</b-col>
							</b-row>
							<b-row class="form-row">
								<b-col md="12">
									<b-form-input v-model="contactForm.email" type="email" placeholder="Email*" required></b-form-input>
								</b-col>
							</b-row>
							<b-row class="form-row">
								<b-col md="12">
									<b-form-input v-model="contactForm.company" type="text" placeholder="Company"></b-form-input>
								</b-col>
							</b-row>
							<b-row class="form-row">
								<b-col md="6">
									<b-form-checkbox v-model="contactForm.agree" class="customCheck" value="true" unchecked-value="false">Etiam vel orci vel massa accumsan aliquam. Nunc sit amet placerat . Read our terms and conditions</b-form-checkbox>
								</b-col>
								<b-col md="6">
									<b-button variant="secondary" size="lg">Subscribe</b-button>
								</b-col>
							</b-row>
						</b-form>
					</b-col>
					<b-col lg="3">
						<strong>Twitter feed</strong>
						<b-media>
							<template #aside>
								<b-img blank blank-color="#ccc" rounded="circle" width="32" alt="placeholder"></b-img>
							</template>

							<h5 class="mt-0 feed-title">LOGO</h5>
							<p class="feed-tag">@logo_news</p>
							<p class="feed-content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis molestie est a ultrices. Proin elementum, lorem et dignissim tempus, ligula arcu pellentesque sapien, a imperdiet ex velit at urna. Quisque ac nisi turpis. Fusce ultricies elit quis dui vulputate, eu maximus enim molestie.
							</p>
						</b-media>
					</b-col>
				</b-row>

				<b-row>
					<b-col md="5" offset-md="1">ABN 123 456 789 | &copy; 2020 LOGO | Privacy and data collection</b-col>
					<b-col md="5">
						<b-nav align="right">
							<b-nav-item><a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" /></a></b-nav-item>
							<b-nav-item><a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a></b-nav-item>
							<b-nav-item><a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" /></a></b-nav-item>
							<b-nav-item><a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" /></a></b-nav-item>
							<b-nav-item><a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" /></a></b-nav-item>
						</b-nav>
					</b-col>
				</b-row>

			</b-container>
		</footer>

	</div>
</template>

<script src="./Home.js"></script>
<style src="./Home.css"></style>
