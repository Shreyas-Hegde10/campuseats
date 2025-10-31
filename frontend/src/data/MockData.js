export default mockMenuItems = [
  {
    id: '1',
    name: 'Cheese Pizza Slice',
    price: 2.75,
    diningHallId: '1',
    diningHallName: 'Centro',
    category: 'lunch',
    distance: 0.3,
    isCheap: true,
    tags: ['vegetarian'],
    nutritionalInfo: {
      calories: 280,
      allergens: ['dairy', 'gluten']
    },
    image: '/api/placeholder/400/300'
  },
  {
    id: '2',
    name: 'Veggie Burger',
    price: 4.50,
    diningHallId: '2',
    diningHallName: 'Centro',
    category: 'lunch',
    distance: 0.2,
    isCheap: true,
    tags: ['vegetarian', 'vegan'],
    nutritionalInfo: {
      calories: 420,
      allergens: ['gluten']
    },
    image: '/api/placeholder/400/300'
  },
  {
    id: '3',
    name: 'Greek Yogurt Parfait',
    price: 3.25,
    diningHallId: '3',
    diningHallName: 'Centro',
    category: 'breakfast',
    distance: 0.8,
    isCheap: true,
    tags: ['vegetarian'],
    nutritionalInfo: {
      calories: 180,
      allergens: ['dairy']
    },
    image: '/api/placeholder/400/300'
  },
  {
    id: '4',
    name: 'Chicken Rice Bowl',
    price: 6.50,
    diningHallId: '1',
    diningHallName: 'Centro',
    category: 'dinner',
    distance: 0.3,
    isCheap: false,
    tags: ['halal'],
    nutritionalInfo: {
      calories: 520,
      allergens: []
    },
    image: '/api/placeholder/400/300'
  },
  {
    id: '5',
    name: 'Vegetable Stir Fry',
    price: 5.25,
    diningHallId: '2',
    diningHallName: 'Centro',
    category: 'dinner',
    distance: 0.2,
    isCheap: false,
    tags: ['vegan', 'gluten-free'],
    nutritionalInfo: {
      calories: 320,
      allergens: ['soy']
    },
    image: '/api/placeholder/400/300'
  },
  {
    id: '6',
    name: 'Oatmeal with Fruit',
    price: 2.99,
    diningHallId: '3',
    diningHallName: 'Centro',
    category: 'breakfast',
    distance: 0.8,
    isCheap: true,
    tags: ['vegan', 'gluten-free'],
    nutritionalInfo: {
      calories: 210,
      allergens: []
    },
    image: '/api/placeholder/400/300'
  }
];

export const dietaryOptions = [
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥦', description: 'No meat, poultry, or fish' },
  { id: 'vegan', label: 'Vegan', icon: '🌱', description: 'No animal products' },
  { id: 'glutenFree', label: 'Gluten-Free', icon: '🌾', description: 'No wheat, barley, or rye' },
  { id: 'dairyFree', label: 'Dairy-Free', icon: '🥛', description: 'No milk, cheese, or yogurt' },
  { id: 'halal', label: 'Halal', icon: '☪️', description: 'Prepared according to Islamic law' },
  { id: 'nutFree', label: 'Nut-Free', icon: '🥜', description: 'No nuts or nut products' },
];