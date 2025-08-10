

// Contact Information
export const TELEPHONE = "786-314-6121";
export const EMAIL = "salvacorp@gmail.com";
export const WHATSAPP_NUMBER = "17863146121"; // US format for WhatsApp
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_URL = `tel:${TELEPHONE}`;
export const EMAIL_URL = `mailto:${EMAIL}`;

// URLs
export const PROJECTS_URL = "/projects";
export const HOME_URL = "/";
export const ABOUT_URL = "/about-tulio-salvatierra-web-development-services-chicago";
export const CONTACT_URL = "/#contact";
export const PD_URL = "/project/:id";

// Social Media URLs
export const GITHUB_URL = "https://www.github.com/tulio-salvatierra";
export const LINKEDIN_URL = "https://www.linkedin.com/in/tulio-salvatierra/";
export const UPWORK_URL = "https://www.upwork.com/freelancers/tulio";
export const PORTFOLIO_URL = "https://tuliosalvatierra.com";

// Contact Information for Display
export const CONTACT_INFO = {
  phone: {
    display: TELEPHONE,
    url: PHONE_URL,
    whatsapp: WHATSAPP_URL
  },
  email: {
    display: EMAIL,
    url: EMAIL_URL
  },
  location: "Chicago, IL",
  services: [
    "Custom Web Development",
    "E-commerce Solutions", 
    "Mobile Applications",
    "IT Support & Consulting"
  ],
  approach: [
    "Chicago-based developer",
    "Full-stack expertise", 
    "Design-focused solutions",
    "Reliable support"
  ]
};

// Note: Removed MENU_ITEMS array since it references undefined icons
// This can be re-added once proper icon imports are available