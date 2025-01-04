export function loadAddress() {
	const addressContainer = document.createElement("div");
	addressContainer.className = "address-container";

	const separator = document.createElement("hr");
	separator.className = "address-separator";

	const addressDiv = document.createElement("div");
	addressDiv.className = "address";

	const addressInfo = [
		{ text: "Supreme Subs", className: "business-name" },
		{ text: "1234 Main Street", className: "street"},
		{ text: "Philadelphia, PA 56789", className: "location" },
		{ text: "Phone: (555) 123-4567", className: "phone" },
		{ text: "Hours: Mon-Sun 10am-10pm", className: "hours" },
	];

	addressInfo.forEach((info) => {
		const span = document.createElement("span");
		span.textContent = info.text;
		span.className = info.className;
		addressDiv.appendChild(span);
	});

	addressContainer.appendChild(separator);
	addressContainer.appendChild(addressDiv);

	return addressContainer;
}
