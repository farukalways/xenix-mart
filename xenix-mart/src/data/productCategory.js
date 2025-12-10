export const AllCategory = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

export const sortingOptions = [
  "Best Selling",
  "Alphabetically A→Z",
  "Alphabetically Z→A",
  "Price Low→High",
  "Price High→Low",
  "Date Old→New",
  "Date New→Old",
];

export const sortMap = {
  "Best Selling": { field: "rating", order: "desc" },
  "Alphabetically A→Z": { field: "title", order: "asc" },
  "Alphabetically Z→A": { field: "title", order: "desc" },
  "Price Low→High": { field: "price", order: "asc" },
  "Price High→Low": { field: "price", order: "desc" },
  "Date Old→New": { field: "id", order: "asc" }, // Assuming id as date proxy
  "Date New→Old": { field: "id", order: "desc" },
};
