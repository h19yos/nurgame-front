import React from "react";

const Lesson: React.FC = () => {
    const lessons = [
        "Lesson 1 - Introduction",
        "Lesson 2 - Basics",
        "Lesson 3 - Advanced Techniques",
        "Lesson 4 - Practical Examples",
        "Lesson 5 - Summary",
        "Lesson 6 - Lorem ipsum dolor",
    ];

    const reviews = [
        {
            name: "Andrew Nicoby",
            comment: "Great lesson, very informative!",
        },
        {
            name: "Alice Watson",
            comment: "Well explained with clear examples.",
        },
    ];

    return (
        <div className="lesson">
            {/* Video Section */}
            <div className="lesson__video-section">
                <video
                    controls
                    className="lesson__video"
                    src="path_to_video.mp4"
                    poster="path_to_poster.jpg"
                ></video>
                <div className="lesson__details">
                    <h2>Lesson 6 - Lorem ipsum dolor</h2>
                    <p>
                        This lesson covers advanced concepts in digital marketing, providing
                        in-depth knowledge on mastering the online landscape.
                    </p>
                </div>
            </div>

            {/* Lessons List */}
            <div className="lesson__sidebar">
                <h3>Lessons</h3>
                <ul className="lesson__list">
                    {lessons.map((lesson, index) => (
                        <li key={index} className="lesson__list-item">
                            <span>{lesson}</span>
                            <input type="checkbox" className="lesson__checkbox" />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Reviews Section */}
            <div className="lesson__reviews">
                <h3>Reviews</h3>
                {reviews.map((review, index) => (
                    <div key={index} className="lesson__review">
                        <strong>{review.name}</strong>
                        <p>{review.comment}</p>
                    </div>
                ))}
                <form className="lesson__form">
          <textarea
              placeholder="Leave a comment"
              className="lesson__textarea"
          ></textarea>
                    <button type="submit" className="lesson__submit-button">
                        Publish review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Lesson;
