import { useRef } from "react";
import StarRating from "../../components/StarRating";

const ReviewSlider = ({ reviews }) => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2"
      >
        ◀
      </button>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-10"
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="min-w-[280px] border rounded-lg p-4 shadow-sm"
          >
            <p className="font-semibold">{review.reviewerName}</p>
            <StarRating rating={review.rating} size={16} />
            <p className="text-gray-600 mt-2">{review.comment}</p>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(review.date).toDateString()}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2"
      >
        ▶
      </button>
    </div>
  );
};

export default ReviewSlider;
