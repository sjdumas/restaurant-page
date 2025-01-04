import { loadAddress } from './modules/address.js';

export function loadMenu() {
    const contentId = document.querySelector("#content");
    
    const banner = document.createElement("div");
    banner.className = "banner";
    const bannerHeading = document.createElement("h1");
    bannerHeading.textContent = "Our Menu";
    banner.appendChild(bannerHeading);

    const container = document.createElement("div");
    container.className = "container";
    
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    const menuItems = {
        Subs: [
            { name: "Italian Supreme", price: "12.99", desc: "Salami, pepperoni, ham, provolone" },
            { name: "Veggie Delight", price: "10.99", desc: "Fresh vegetables, mozzarella" },
            { name: "Meatball Marina", price: "11.99", desc: "Homemade meatballs, marinara sauce" },
            { name: "Philly Cheesesteak", price: "13.99", desc: "Sliced beef, onions, peppers, cheese" }
        ],
        Sandwiches: [
            { name: "Club Classic", price: "11.99", desc: "Turkey, bacon, lettuce, tomato" },
            { name: "BLT Supreme", price: "9.99", desc: "Crispy bacon, lettuce, tomato" },
            { name: "Grilled Chicken", price: "10.99", desc: "Marinated chicken breast" },
            { name: "Tuna Melt", price: "10.99", desc: "House-made tuna salad, melted cheese" }
        ],
        Sides: [
            { name: "French Fries", price: "4.99", desc: "Crispy and seasoned" },
            { name: "Potato Salad", price: "3.99", desc: "Homemade daily" },
            { name: "Coleslaw", price: "3.99", desc: "Fresh and creamy" },
            { name: "Onion Rings", price: "5.99", desc: "Beer battered, golden brown" }
        ],
        Drinks: [
            { name: "Fountain Drinks", price: "2.99", desc: "Free refills" },
            { name: "Iced Tea", price: "2.99", desc: "Sweet or unsweet" },
            { name: "Bottled Water", price: "1.99", desc: "Pure spring water" },
            { name: "Milkshakes", price: "4.99", desc: "Vanilla, chocolate, or strawberry" }
        ]
    };

    // Create container for menu categories
    const menuCategoriesContainer = document.createElement("div");
    menuCategoriesContainer.className = "menu-categories-container";

    Object.entries(menuItems).forEach(([category, items]) => {
        const categorySection = document.createElement("div");
        categorySection.className = "menu-category";

        const categoryHeading = document.createElement("h2");
        categoryHeading.textContent = category;
        categorySection.appendChild(categoryHeading);

        const itemsList = document.createElement("ul");
        itemsList.className = "menu-items";

        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.className = "menu-item";

            const itemName = document.createElement("h4");
            itemName.textContent = item.name;

            const itemPrice = document.createElement("span");
            itemPrice.className = "price";
            itemPrice.textContent = `$${item.price}`;

            const itemDesc = document.createElement("p");
            itemDesc.textContent = item.desc;

            listItem.appendChild(itemName);
            listItem.appendChild(itemPrice);
            listItem.appendChild(itemDesc);
            itemsList.appendChild(listItem);
        });

        categorySection.appendChild(itemsList);
        menuCategoriesContainer.appendChild(categorySection);
    });

    // Append categories container and address separately
    menuDiv.appendChild(menuCategoriesContainer);
    menuDiv.appendChild(loadAddress());
    
    container.appendChild(menuDiv);
    contentId.appendChild(banner);
    contentId.appendChild(container);
}
