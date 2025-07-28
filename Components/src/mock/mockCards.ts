import type { Card } from "../types/card";

export const mockCards: Card[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Card Title ${index + 1}`,
  description: `This is a description for Card ${
    index + 1
  }. It contains a short summary of the content or purpose of the card.`,
}));
