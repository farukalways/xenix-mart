const StarRating = ({ rating, size = 20 }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} style={{ fontSize: size }}>
          ⭐
        </span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} style={{ fontSize: size, opacity: 0.3 }}>
          ⭐
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-500">({rating})</span>
    </div>
  );
};

export default StarRating;
