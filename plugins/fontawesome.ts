// plugins/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solid icons
import { 
  faHome, faUser, faBriefcase, faCode, faEnvelope, 
  faBars, faTimes, faPaperPlane, faEye, faDownload,
  faLaptopCode, faLightbulb, faCheck, faRocket,
  faProjectDiagram, faUsers, faCalendarAlt, faTrophy,
  faComments, faPhone, faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

// Brand icons
import { 
  faGithub, faLinkedin, faTwitter, faDribbble 
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  faHome, faUser, faBriefcase, faCode, faEnvelope, 
  faBars, faTimes, faPaperPlane, faEye, faDownload,
  faLaptopCode, faLightbulb, faCheck, faRocket,
  faProjectDiagram, faUsers, faCalendarAlt, faTrophy,
  faComments, faPhone, faMapMarkerAlt,
  faGithub, faLinkedin, faTwitter, faDribbble
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})