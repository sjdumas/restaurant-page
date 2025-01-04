import sandwichImage from "./images/sandwich.jpg";
import sandwich2Image from "./images/sandwich-2.jpg";
import sandwich3Image from "./images/sandwich-3.jpg";
import sandwich4Image from "./images/sandwich-4.jpg";
import sandwich5Image from "./images/sandwich-5.jpg";
import { loadAddress } from "./modules/address.js";

export function loadHome() {
	const contentId = document.querySelector("#content");

	const banner = document.createElement("div");
	banner.className = "banner welcome-banner";

	const bannerHeading = document.createElement("h1");
	bannerHeading.textContent = "Welcome to Supreme Subs";

	const bannerText = document.createElement("h3");
	bannerText.textContent =
		"Enjoy the freshest ingredients and perfectly crafted sandwiches made just for you.";

	const ctaButton = document.createElement("button");
	ctaButton.className = "cta-btn";
	ctaButton.textContent = "Order Now";

	const container = document.createElement("div");
	container.className = "container";

	const contentDiv = document.createElement("div");
	contentDiv.className = "welcome";

	const tagline = document.createElement("h2");
	tagline.textContent =
		"Where every bite gives you the ultimate sub experience";

	const leadDiv = document.createElement("div");
	leadDiv.className = "lead";

	const textDiv = document.createElement("div");
	textDiv.className = "text";

	const leadHeading = document.createElement("h3");
	leadHeading.textContent =
		"Our subs and sandwiches are made with the freshest ingredients and are sure to satisfy your hunger.";

	const leadText = document.createElement("p");
	leadText.textContent =
		"We have a variety of subs and sandwiches to choose from. We also offer a selection of sides and drinks to complete your meal.";

	const leadSubHeading = document.createElement("h4");
	leadSubHeading.textContent =
		"Stop by today to experience the best food in town!";

	const leadImg = document.createElement("img");
	leadImg.src = sandwichImage;
	leadImg.alt = "A delicious sandwich";

	const featuresDiv = document.createElement("div");
	featuresDiv.className = "features";

	const featuresHeading = document.createElement("h2");
	featuresHeading.textContent = "Why Choose Us";

	const featuresList = document.createElement("div");
	featuresList.className = "features-list";

	const features = [
		{
			title: "Fresh Ingredients",
			desc: "Locally sourced, premium quality ingredients daily",
			icon: "fa-leaf",
		},
		{
			title: "Custom Orders",
			desc: "Build your perfect sandwich exactly how you like it",
			icon: "fa-utensils",
		},
		{
			title: "Fast Service",
			desc: "Quick preparation without compromising quality",
			icon: "fa-bolt",
		},
	];

	features.forEach((feature) => {
		const featureItem = document.createElement("div");
		featureItem.className = "feature-item";

		const icon = document.createElement("i");
		icon.className = `fas ${feature.icon}`;

		const featureTitle = document.createElement("h3");
		featureTitle.textContent = feature.title;

		const featureDesc = document.createElement("p");
		featureDesc.textContent = feature.desc;

		featureItem.appendChild(icon);
		featureItem.appendChild(featureTitle);
		featureItem.appendChild(featureDesc);
		featuresList.appendChild(featureItem);
	});

	const ctaDiv = document.createElement("div");
	ctaDiv.className = "cta-section";

	const ctaHeading = document.createElement("h2");
	ctaHeading.textContent = "Ready to Experience Supreme Subs?";

	const ctaText = document.createElement("h4");
	ctaText.textContent = "Visit us today or place your order online!";

	const orderButton = document.createElement("button");
	orderButton.className = "order-btn";
	orderButton.textContent = "Order Online";

	const gallerySection = document.createElement("div");
	gallerySection.className = "gallery-section";

	const galleryHeading = document.createElement("h2");
	galleryHeading.textContent = "Featured Items";

	const galleryDesc = document.createElement("h4");
	galleryDesc.textContent =
		"Discover our most popular and delicious creations";

	const foodGallery = document.createElement("div");
	foodGallery.className = "food-gallery";

	const galleryImages = [
		{ src: sandwich2Image, alt: "Philly Cheesesteak" },
		{ src: sandwich3Image, alt: "Club Sandwich" },
		{ src: sandwich4Image, alt: "Supreme Special" },
		{ src: sandwich5Image, alt: "Cheese & Turkey Melt" },
	];

	galleryImages.forEach((img) => {
		const imgContainer = document.createElement("div");
		imgContainer.className = "gallery-item";

		const image = document.createElement("img");
		image.src = img.src;
		image.alt = img.alt;

		const caption = document.createElement("h4");
		caption.textContent = img.alt;

		imgContainer.appendChild(image);
		imgContainer.appendChild(caption);
		foodGallery.appendChild(imgContainer);
	});

	// Append elements to the DOM
    gallerySection.appendChild(galleryHeading);
	gallerySection.appendChild(galleryDesc);
	gallerySection.appendChild(foodGallery);

	container.appendChild(contentDiv);
	contentDiv.appendChild(tagline);
	contentDiv.appendChild(leadDiv);

	leadDiv.appendChild(textDiv);
	leadDiv.appendChild(leadImg);
	textDiv.appendChild(leadHeading);
	textDiv.appendChild(leadText);
	textDiv.appendChild(leadSubHeading);

	banner.appendChild(bannerHeading);
	banner.appendChild(bannerText);
	banner.appendChild(ctaButton);

	featuresDiv.appendChild(featuresHeading);
	featuresDiv.appendChild(featuresList);
	ctaDiv.appendChild(ctaHeading);
	ctaDiv.appendChild(ctaText);
	ctaDiv.appendChild(orderButton);

	contentDiv.appendChild(featuresDiv);
	contentDiv.appendChild(gallerySection);
	contentDiv.appendChild(ctaDiv);
	contentDiv.appendChild(loadAddress());

	container.appendChild(contentDiv);
	contentId.appendChild(banner);
	contentId.appendChild(container);
}
