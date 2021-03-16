import About from './About/About.vue'
import Resources from './Resources/Resources.vue'
import Accordion from './Accordion/Accordion.vue'

export default {
	name: 'Home',
	components: {About, Resources, Accordion},
	data() {
		return {
			// activeAccordionIdx: 1,
			// accordionCount: 2
			pageContent: {
				title: "ABOUT US",
				subtitle: "Independence, informed debate, policy influence and reach.",
			},

			contactForm: {
				lname: "",
				fname: "",
				email: "",
				company: ""
			}
		}
	}
}
