import { loadAddress } from './modules/address.js';

export function loadContact() {
    const contentId = document.querySelector("#content");
    
    // Banner (full width)
    const banner = document.createElement("div");
    banner.className = "banner";
    const bannerHeading = document.createElement("h1");
    bannerHeading.textContent = "Contact Us";
    banner.appendChild(bannerHeading);
    
    // Container
    const container = document.createElement("div");
    container.className = "container";
    
    // Contact content
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";

    const contactText = document.createElement("p");
    contactText.textContent = "Have a question or comment? Send us a message!";

    const contactForm = document.createElement("form");
    contactForm.className = "contact-form";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "Your Name";
    nameInput.required = true;

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Your Email";
    emailInput.required = true;

    const messageInput = document.createElement("textarea");
    messageInput.id = "message";
    messageInput.placeholder = "Your Message";
    messageInput.required = true;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";

    // Append text to form before form elements
    contactForm.appendChild(contactText);

    // Append form elements
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageInput);
    contactForm.appendChild(submitButton);

    // Append elements to contact div
    contactDiv.appendChild(contactText);
    contactDiv.appendChild(contactForm);

    // Append address to contact div
    contactDiv.appendChild(loadAddress());

    // Append to container
    container.appendChild(contactDiv);

    // Final append to content
    contentId.appendChild(banner);
    contentId.appendChild(container);
}
