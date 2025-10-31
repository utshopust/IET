import React from "react"; // Added import for React to use React.memo
import { REVIEWS } from "../constants";

// The Reviews component displays customer testimonials.
const Reviews = () => {
  // 💡 Improvement: Added a check for missing data
  if (!REVIEWS || !REVIEWS.reviews || REVIEWS.reviews.length === 0) {
    return null;
  }

  const reviewData = REVIEWS.reviews;

  return (
    <section 
    // className="max-w-7xl mx-auto border-b-2" 
     className="relative max-w-7xl mx-auto py-4 overflow-hidden
    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full 
    before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"
    id="reviews">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Customer Reviews
        </h2>
        <p className="max-w-2xl mb-12 text-center mx-auto text-neutral-600">
          {REVIEWS.text}
        </p>
        <div className="flex flex-wrap justify-center">
          {reviewData.map((review, index) => {
            // 💡 Improvement: Destructuring for cleaner variable usage
            const { review: reviewText, image, name, title } = review;

            // 💡 Improvement: More stable key combining name and index
            const key = name ? `${name}-${index}` : `review-${index}`;

            return (
              // 💡 Improvement: Using <figure> for semantic correctness
              <figure
                key={key}
                // Added subtle hover effect and shadow
                className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-8 m-2 max-w-xs shadow-lg transition duration-300 hover:shadow-xl"
              >
                {/* 💡 Improvement: Using <blockquote> for the quote */}
                <blockquote className="mb-4 italic text-center text-gray-700">
                  {reviewText}
                </blockquote>
                {/* 💡 Improvement: Using <figcaption> for the citation details */}
                <figcaption className="flex items-center mt-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border border-gray-200"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {name}
                    </p>
                    <p className="text-xs text-neutral-500">{title}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 💡 Improvement: Used React.memo for performance optimization
export default React.memo(Reviews);
