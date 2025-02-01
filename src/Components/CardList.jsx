import React, { useState } from "react";
import RecipeReviewCard from "./Card";
import { cardData } from "../Data/CardData";

export default function CardList() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [favoriteCards, setFavoriteCards] = useState(new Set());

  const handleExpandClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleFavoriteClick = (index) => {
    setFavoriteCards((prev) => {
      const updatedFavorites = new Set(prev);
      if (updatedFavorites.has(index)) {
        updatedFavorites.delete(index);
      } else {
        updatedFavorites.add(index);
      }
      return updatedFavorites;
    });
  };

  const handleShareClick = (title) => {
    const shareLink = `https://github.com/Brahmagithubrit`;
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this project",
          text: `Hey, take a look at this awesome project: ${title}`,
          url: shareLink,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`, "_blank");
    }
  };

  const handleMoreClick = () => {
    alert("Contribute with me on this project. Visit my GitHub!");
  };

  return (
    <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative  border bg-gradient-to-r to-[#0a0d37]">
      <div className="title font-mono flex justify-center text-white text-2xl font-bold py-4">
        Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cardData.map((card, index) => (
          <RecipeReviewCard
            key={index}
            title={card.title}
            date={card.date}
            image={card.image}
            description={card.description}
            method={card.method}
            isExpanded={expandedCard === index}
            onExpandClick={() => handleExpandClick(index)}
            onFavoriteClick={() => handleFavoriteClick(index)}
            isFavorite={favoriteCards.has(index)}
            onShareClick={() => handleShareClick(card.title)}
            onMoreClick={handleMoreClick}
          />
        ))}
      </div>
    </div>
  );
}
