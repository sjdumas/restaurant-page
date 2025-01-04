import cafeImage from './images/cafe.jpg';
import { loadAddress } from './modules/address.js';

export function loadAbout() {
    const contentId = document.querySelector("#content");
    
    const banner = document.createElement("div");
    banner.className = "banner";
    const bannerHeading = document.createElement("h1");
    bannerHeading.textContent = "About Us";
    banner.appendChild(bannerHeading);

    const container = document.createElement("div");
    container.className = "container";
    
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about";

    const aboutText = document.createElement("h4");
    aboutText.textContent = "Since 1995, Supreme Subs has been serving the finest subs and sandwiches in the Philadelphia area.";

    const aboutImgContainer = document.createElement("div");
    aboutImgContainer.className = "about-img-container";
    
    const aboutImg = document.createElement("img");
    aboutImg.src = cafeImage;
    aboutImg.alt = "Cafe interior";

    aboutImgContainer.appendChild(aboutImg);
    
    const storyDiv = document.createElement("div");
    storyDiv.className = "story";
    
    const storyHeading = document.createElement("h2");
    storyHeading.textContent = "Our Story";
    
    const storyText = document.createElement("p");
    storyText.textContent = "Our founder, Alex Carter, started the business with a simple goal: to create the perfect sandwich. Alex grew up helping his family in the kitchen, learning the secrets of bold flavors, fresh ingredients, and the joy of sharing delicious food with loved ones. With those values in mind, Alex set out to build a sandwich shop where every bite felt like home. We have since expanded to multiple locations, but our commitment to quality and service remains the same.";
    
    const missionDiv = document.createElement("div");
    missionDiv.className = "mission";
    
    const missionHeading = document.createElement("h2");
    missionHeading.textContent = "Our Mission";
    
    const missionText = document.createElement("p");
    missionText.textContent = "To create the perfect sandwich experience using quality, locally sourced ingredients and exceptional service.";
    
    // Append elements
    missionDiv.appendChild(missionHeading);
    missionDiv.appendChild(missionText);
    storyDiv.appendChild(storyHeading);
    storyDiv.appendChild(storyText);
    aboutDiv.appendChild(aboutText);
    aboutDiv.appendChild(aboutImgContainer);
    aboutDiv.appendChild(storyDiv);
    aboutDiv.appendChild(missionDiv);
    aboutDiv.appendChild(loadAddress());
    
    container.appendChild(aboutDiv);
    contentId.appendChild(banner);
    contentId.appendChild(container);
}
