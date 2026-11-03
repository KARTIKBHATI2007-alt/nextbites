export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "paneer-tikka", title: "Paneer Tikka", emoji: "🧀", minutes: 30, difficulty: "Easy", cuisine: "Indian" },
  { id: "veg-burger", title: "Veg Burger", emoji: "🍔", minutes: 25, difficulty: "Easy", cuisine: "American" },
  { id: "pasta-alfredo", title: "Pasta Alfredo", emoji: "🍝", minutes: 40, difficulty: "Medium", cuisine: "Italian" },
  { id: "sushi-roll", title: "Sushi Roll", emoji: "🍣", minutes: 50, difficulty: "Hard", cuisine: "Japanese" },
];
