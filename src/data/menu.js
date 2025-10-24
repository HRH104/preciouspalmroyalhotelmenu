const menu = [
  {
    id: 'appetizers',
    icon: '🍟',
    title: 'Appetizers & Light Bites',
    items: [
      { name: 'Fried Potatoes', desc: 'Golden crispy potato wedges served hot with signature seasoning', price: '₦2,000' },
      { name: 'Hot Dog', desc: 'Premium grilled sausage in artisan bun with caramelized onions', price: '₦3,500' },
      { name: 'Indomie', desc: 'Elevated instant noodles with fresh vegetables and premium spices', price: '₦3,000' },
      { name: 'Plantain Chips', desc: 'Hand-cut plantains, perfectly seasoned and crisped to perfection', price: '₦1,500' },
      { name: 'Potato Chips', desc: 'Fresh cut potato chips with rosemary and sea salt', price: '₦3,500' },
      { name: 'Sardine Can', desc: 'Premium sardines in rich tomato sauce with herbs', price: '₦4,000' },
      { name: 'Tomato Sauce', desc: 'Rich homemade tomato sauce with fresh herbs', price: '₦1,000' }
    ]
  },
  {
    id: 'breakfast',
    icon: '🍳',
    title: 'Breakfast Classics',
    items: [
      { name: 'Boiled Egg', desc: 'Farm-fresh eggs perfectly boiled to your preference', price: '₦1,500' },
      { name: 'Boiled Yam', desc: 'Fresh yam tubers boiled to perfection', price: '₦3,500' },
      { name: 'Egg Sauce', desc: 'Rich egg sauce with tomatoes and peppers', price: '₦1,500' },
      { name: 'Fried Egg', desc: 'Golden fried eggs cooked to your liking', price: '₦2,000' },
      { name: 'Fried Yam', desc: 'Crispy golden yam slices, perfectly seasoned', price: '₦4,000' },
      { name: 'Bacon', desc: 'Premium smoked bacon strips, perfectly crispy', price: '₦3,000' },
      { name: 'Coffee', desc: 'Freshly brewed premium coffee', price: '₦2,000' },
      { name: 'Custard', desc: 'Creamy custard dessert, perfectly sweetened', price: '₦1,000' },
      { name: 'Lipton Tea', desc: 'Classic tea blend, served hot', price: '₦1,000' },
      { name: 'Milk', desc: 'Fresh dairy milk, served chilled', price: '₦2,000' },
      { name: 'Oats', desc: 'Nutritious oatmeal with fresh fruits and honey', price: '₦2,500' },
      { name: 'Omelet', desc: 'Classic technique omelet with choice of premium fillings', price: '₦2,000' },
      { name: 'Pancake', desc: 'Stack of fluffy pancakes with maple syrup and butter', price: '₦3,500' },
      { name: 'Scrambled Egg', desc: 'Farm-fresh eggs cooked to creamy perfection with herbs', price: '₦3,000' },
      { name: 'Toast Bread', desc: 'Golden toasted artisan bread with premium spreads', price: '₦1,500' }
    ]
  },
  {
    id: 'mains',
    icon: '🍚',
    title: 'Signature Main Courses',
    items: [
      { name: 'Amala', desc: 'Traditional yam flour swallow, smooth and rich', price: '₦4,000' },
      { name: 'Boiled Potatoes', desc: 'Fresh potatoes boiled to perfection', price: '₦3,500' },
      { name: 'Chinese Rice', desc: 'Wok-fried rice with premium ingredients and traditional spices', price: '₦8,000' },
      { name: 'Coconut Rice', desc: 'Fragrant jasmine rice cooked in rich coconut milk', price: '₦4,500' },
      { name: 'Eba', desc: 'Traditional cassava flour swallow, perfectly prepared', price: '₦4,000' },
      { name: 'Jollof Rice', desc: "Nigeria's crown jewel - perfectly spiced and aromatic", price: '₦4,500' },
      { name: 'Macaroni', desc: 'Classic pasta with rich sauce and seasonings', price: '₦4,000' },
      { name: 'Mashed Potatoes', desc: 'Creamy mashed potatoes with butter and herbs', price: '₦4,000' },
      { name: 'Poundo Yam', desc: 'Smooth yam flour swallow, expertly prepared', price: '₦4,000' },
      { name: 'Semovita', desc: 'Premium semolina swallow, light and fluffy', price: '₦4,000' },
      { name: 'Spaghetti', desc: 'Al dente pasta with rich marinara and fresh herbs', price: '₦4,000' },
      { name: 'Wheat', desc: 'Nutritious wheat swallow, perfectly textured', price: '₦4,000' },
      { name: 'White Rice', desc: 'Premium long-grain white rice, perfectly steamed', price: '₦4,500' }
    ]
  },
  {
    id: 'proteins',
    icon: '🥩',
    title: 'Premium Proteins',
    items: [
      { name: 'Beef', desc: 'Tender beef cuts with signature marinade and spices', price: '₦8,000' },
      { name: 'Catfish', desc: 'Locally sourced catfish, grilled or fried to perfection', price: '₦8,000' },
      { name: 'Chicken', desc: 'Organic chicken prepared with traditional Nigerian spices', price: '₦7,000' },
      { name: 'Chicken Wing', desc: 'Juicy chicken wings with special seasoning', price: '₦6,000' },
      { name: 'Cow Head', desc: 'Traditional cow head delicacy, expertly prepared', price: '₦8,000' },
      { name: 'Cow Tail', desc: 'Tender cow tail with rich flavors and spices', price: '₦7,000' },
      { name: 'Dry Fish', desc: 'Premium dried fish with authentic smoky flavor', price: '₦7,000' },
      { name: 'Goat Meat', desc: 'Slow-cooked goat meat with authentic local seasonings', price: '₦7,000' },
      { name: 'Meluzer', desc: 'Premium fish selection with special preparation', price: '₦8,000' },
      { name: 'Scumbia Fish', desc: 'Premium fish fillet with lemon butter and fresh herbs', price: '₦8,000' },
      { name: 'Turkey', desc: 'Succulent turkey breast with herb crust and natural jus', price: '₦9,000' }
    ]
  },
  {
    id: 'soups',
    icon: '🍲',
    title: 'Traditional Soups',
    items: [
      { name: 'Afang Soup', desc: 'Nutritious vegetable soup from Cross River State', price: 'Market Price' },
      { name: 'Banga Soup', desc: 'Traditional palm nut soup with rich flavors', price: 'Market Price' },
      { name: 'Black Soup', desc: 'Traditional dark soup with unique spices', price: 'Market Price' },
      { name: 'Egwusi Soup', desc: 'Classic melon seed soup with assorted meat and fish', price: 'Market Price' },
      { name: 'Ogbono Soup', desc: 'Traditional draw soup with ogbono seeds', price: 'Market Price' },
      { name: 'Oha Soup', desc: 'Traditional Igbo soup with oha leaves', price: 'Market Price' },
      { name: 'Gram of Onion Soup', desc: 'Rich onion-based soup with premium ingredients', price: '₦3,300' },
      { name: 'Gram of Vegetable Soup', desc: 'Fresh vegetable soup with seasonal greens', price: '₦2,200' },
      { name: 'Vegetable Soup', desc: 'Seasonal vegetables in rich, flavorful broth', price: 'Market Price' },
      { name: 'Catfish Pepper Soup', desc: 'Fresh catfish in spicy pepper broth with local herbs', price: '₦8,000' },
      { name: 'Chicken Pepper Soup', desc: 'Tender chicken pieces in traditional pepper soup base', price: '₦8,000' },
      { name: 'Gram of Mushroom Soup', desc: 'Rich mushroom soup with earthy flavors', price: '₦2,000' },
      { name: 'Croaker Pepper Soup', desc: 'Fresh croaker fish in traditional pepper soup', price: '₦8,000' },
      { name: 'Goat Meat Pepper Soup', desc: 'Tender goat meat in spicy pepper broth', price: '₦8,000' },
      { name: 'Turkey Pepper Soup', desc: 'Aromatic turkey soup with traditional pepper spices', price: '₦9,000' }
    ]
  },
  {
    id: 'continental',
    icon: '🍽️',
    title: 'Continental Specialties',
    items: [
      { name: 'Basmati Rice', desc: 'Long-grain basmati rice with saffron and cardamom', price: '₦5,000' },
      { name: 'Chicken Curry', desc: 'Tender chicken in rich, creamy curry sauce with spices', price: '₦3,500' },
      { name: 'Chips', desc: 'Hand-cut potato chips with rosemary and sea salt', price: '₦3,500' },
      { name: 'Fried Rice', desc: 'Colorful medley of vegetables and rice, expertly seasoned', price: '₦4,500' },
      { name: 'Stir Fry Pasta', desc: 'Fusion pasta with Asian flavors and fresh vegetables', price: '₦7,000' },
      { name: 'Club Sandwich', desc: 'Triple-layer sandwich with premium meats and fresh vegetables', price: '₦9,500' }
    ]
  },
  {
    id: 'salads',
    icon: '🥗',
    title: 'Garden Fresh Salads',
    items: [
      { name: 'Grilled Chicken Salad', desc: 'Tender grilled chicken breast over mixed greens with vinaigrette', price: '₦3,000' },
      { name: 'Classic Caesar Salad', desc: 'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing', price: '₦2,000' },
      { name: 'Garden Vegetable Salad', desc: 'Fresh seasonal vegetables with house-made dressing', price: '₦1,000' }
    ]
  },
  {
    id: 'pastries',
    icon: '🧁',
    title: 'Artisan Pastries',
    items: [
      { name: 'Chicken Pie', desc: 'Tender chicken in buttery, golden pastry crust', price: '₦1,500' },
      { name: 'Chin Chin', desc: 'Crispy Nigerian snack, perfectly spiced and golden', price: '₦1,000' },
      { name: 'Cup Cake', desc: 'Moist vanilla cupcake with premium buttercream frosting', price: '₦700' },
      { name: 'Doughnut', desc: 'Fresh-made doughnut with signature glaze', price: '₦700' },
      { name: 'Egg Roll', desc: 'Crispy egg roll with savory filling', price: '₦1,000' },
      { name: 'Fiesta', desc: 'Colorful party snack with festive flavors', price: '₦1,500' },
      { name: 'Hotdog', desc: 'Classic hotdog with premium sausage', price: '₦1,500' },
      { name: 'Meatpie', desc: 'Flaky pastry filled with seasoned premium meat', price: '₦1,500' },
      { name: 'Popcorn', desc: 'Freshly popped corn with premium seasonings', price: '₦1,000' },
      { name: 'Extra Salad', desc: 'Additional fresh salad portion', price: '₦1,000' },
      { name: 'Extra Soup', desc: 'Additional soup portion', price: '₦2,000' },
      { name: 'Take Away Plate', desc: 'Disposable plate for takeaway orders', price: '₦300' }
    ]
  },
  {
    id: 'non-alcoholic',
    icon: '🥤',
    title: 'Premium Beverages',
    items: [
      { name: 'Premium Water (75cl)', desc: 'Pure spring water, large bottle', price: '₦1,000' },
      { name: 'Premium Water (50cl)', desc: 'Pure spring water, regular bottle', price: '₦600' },
      { name: 'Coca Cola (Plastic)', desc: 'Classic Coke in plastic bottle', price: '₦900' },
      { name: 'Coca Cola (Glass)', desc: 'Classic Coke in glass bottle', price: '₦600' },
      { name: 'Fanta Orange', desc: 'Refreshing orange soda', price: '₦900' },
      { name: 'Sprite Lemon-Lime', desc: 'Crisp lemon-lime soda', price: '₦900' },
      { name: 'Malt (Can)', desc: 'Premium malt drink in can', price: '₦1,200' },
      { name: 'Malt (Bottle)', desc: 'Premium malt drink in bottle', price: '₦1,000' },
      { name: 'Chivita', desc: 'Premium fruit juice blend', price: '₦3,000' },
      { name: 'Chi-Exotic', desc: 'Refreshing fruit drink', price: '₦3,000' },
      { name: '5-Alive', desc: 'Five fruit juice blend', price: '₦2,200' },
      { name: 'Hollandia', desc: 'Premium dairy milk drink', price: '₦3,200' },
      { name: 'Vita Milk', desc: 'Nutritious vitamin-enriched milk', price: '₦2,500' },
      { name: 'Fayrouz', desc: 'Sparkling apple drink', price: '₦800' }
    ]
  },
  {
    id: 'energy-drinks',
    icon: '⚡',
    title: 'Energy Boost',
    items: [
      { name: 'Predator Energy', desc: 'High-performance energy drink for maximum boost', price: '₦1,000' },
      { name: 'Monster Energy', desc: 'Premium energy drink with intense flavor', price: '₦2,000' },
      { name: 'Block Bullet', desc: 'Maximum energy boost for peak performance', price: '₦3,000' }
    ]
  },
  {
    id: 'beers',
    icon: '🍺',
    title: 'Premium Beers & Lagers',
    items: [
      { name: 'Desperados', desc: 'Tequila-flavored beer with lime', price: '₦2,000' },
      { name: 'Big Stout', desc: 'Rich dark stout with bold flavor', price: '₦3,000' },
      { name: 'Star Radler', desc: 'Refreshing beer with natural citrus', price: '₦2,500' },
      { name: 'Medium Stout', desc: 'Smooth medium-bodied stout', price: '₦2,500' },
      { name: 'Flying Fish', desc: 'Light and refreshing lager', price: '₦1,500' },
      { name: 'Trophy Stout', desc: 'Award-winning dark stout beer', price: '₦2,000' },
      { name: 'Smirnoff Ice', desc: 'Premium vodka-based refresher', price: '₦1,500' },
      { name: 'Big Williams', desc: 'Premium lager with smooth finish', price: '₦2,200' },
      { name: 'Legend', desc: 'Classic Nigerian lager', price: '₦2,000' },
      { name: 'Small Williams', desc: 'Premium lager, small bottle', price: '₦1,500' },
      { name: 'Small Legend', desc: 'Classic Nigerian lager, small bottle', price: '₦3,000' },
      { name: 'Heineken', desc: 'International premium lager', price: '₦2,500' },
      { name: '33° Beer', desc: 'Premium export lager', price: '₦1,500' },
      { name: 'Hero', desc: 'Bold and refreshing lager', price: '₦1,500' },
      { name: 'Goldberg', desc: 'Classic Nigerian lager', price: '₦1,500' },
      { name: 'Tiger', desc: 'Crisp and refreshing beer', price: '₦1,200' }
    ]
  },
  {
    id: 'wines',
    icon: '🍷',
    title: 'Curated Wine Selection',
    items: [
      { name: 'Blanc', desc: 'Crisp white wine with fresh notes', price: '₦13,000' },
      { name: 'Carlo Rossi', desc: 'Traditional Italian wine with rich flavor', price: '₦21,000' },
      { name: 'Chateau du Pape', desc: 'French premium selection with elegant finish', price: '₦20,000' },
      { name: 'Trebliriano', desc: 'Italian white wine with delicate flavor', price: '₦10,000' },
      { name: 'Dou Alvaro Btl', desc: 'Premium vintage bottle with complex notes', price: '₦32,000' },
      { name: 'Gia Cobazi', desc: 'Italian wine with smooth finish', price: '₦10,000' },
      { name: 'Lambrusco', desc: 'Sparkling Italian red wine', price: '₦7,000' },
      { name: 'De Clan', desc: 'Premium wine selection', price: '₦15,000' },
      { name: 'Toma', desc: 'Rich red wine with bold character', price: '₦21,000' },
      { name: 'Vino Spemaute', desc: 'Italian sparkling wine', price: '₦10,000' },
      { name: 'Agor (Asconi)', desc: 'Premium European wine selection', price: '₦18,000' },
      { name: 'Don Paloma', desc: 'Spanish wine with rich heritage', price: '₦12,000' },
      { name: 'Donelli', desc: 'Italian wine with traditional taste', price: '₦13,000' },
      { name: 'Donava', desc: 'Premium wine with elegant profile', price: '₦15,000' },
      { name: 'Drosty', desc: 'South African wine selection', price: '₦12,000' },
      { name: 'Four Cousins (Red, White)', desc: 'Available in Red & White varieties', price: '₦21,000' },
      { name: 'Moet Chandon Fruit', desc: 'Premium champagne for special celebrations', price: '₦165,000' },
      { name: 'Moet Chandon Rose', desc: 'Elegant rosé champagne', price: '₦120,000' },
      { name: 'Veuve', desc: 'Premium champagne selection', price: '₦132,000' }
    ]
  },
  {
    id: 'spirits',
    icon: '🥃',
    title: 'Spirits & Bitters',
    items: [
      { name: "Best Whisky Big", desc: 'Premium whisky, large bottle', price: '₦15,000' },
      { name: "Best Whisky Small", desc: 'Premium whisky, small bottle', price: '₦5,000' },
      { name: 'Black Label', desc: 'Premium Scotch whisky', price: '₦45,000' },
      { name: 'Camino Tequila', desc: 'Premium tequila with smooth finish', price: '₦35,000' },
      { name: 'Gold Label', desc: 'Ultra-premium Scotch whisky', price: '₦55,000' },
      { name: 'Jack Davids', desc: 'American whiskey with bold character', price: '₦45,000' },
      { name: 'Red Label', desc: 'Classic Scotch whisky', price: '₦25,000' },
      { name: 'Black Bullet', desc: 'Premium spirit with intense flavor', price: '₦3,000' },
      { name: 'Gordon Big', desc: 'Premium gin, large bottle', price: '₦20,000' },
      { name: 'Smirnoff Vodka Big Bottle', desc: 'Premium vodka, large bottle', price: '₦15,000' },
      { name: 'Smirnoff Vodka Medium Bottle', desc: 'Premium vodka, medium bottle', price: '₦8,000' },
      { name: "Bailey's Big", desc: 'Premium cream liqueur, large bottle', price: '₦55,500' },
      { name: 'Best Cream Big', desc: 'Premium cream liqueur, large bottle', price: '₦15,000' },
      { name: 'Best Cream Small', desc: 'Premium cream liqueur, small bottle', price: '₦5,000' },
      { name: 'Martel XO', desc: 'Ultra-premium cognac with exceptional aging', price: '₦187,000' },
      { name: 'Martin Bitters', desc: 'Premium herbal bitters', price: '₦25,000' },
      { name: 'Martini Rosso', desc: 'Classic Italian vermouth', price: '₦32,000' },
      { name: 'Bacardi', desc: 'Premium white rum', price: '₦35,000' },
      { name: 'Double Black', desc: 'Premium whisky with rich flavor', price: '₦2,000' },
      { name: 'Origin Bitters', desc: 'Traditional herbal bitters', price: '₦2,500' }
    ]
  },
  {
    id: 'cocktails',
    icon: '🍹',
    title: 'Signature Cocktails',
    items: [
      { name: 'After Glow', desc: 'Smooth cocktail with warm finish', price: 'Price on Request' },
      { name: 'Alcohol Chapman', desc: 'Nigerian favorite with premium spirits', price: '₦4,000' },
      { name: 'Chapman', desc: 'Local favorite cocktail with premium ingredients', price: '₦3,000' },
      { name: 'Frozen Margarita', desc: 'Classic tequila cocktail, perfectly frozen', price: '₦4,000' },
      { name: 'Mojito', desc: 'Refreshing rum cocktail with fresh mint and lime', price: '₦4,000' },
      { name: 'Orgasm', desc: 'Creamy layered cocktail with rich flavors', price: '₦4,000' },
      { name: 'Sex on the Beach', desc: 'Tropical paradise in a glass with premium spirits', price: '₦4,500' }
    ]
  }
]

export default menu
