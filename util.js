export const rateDoctor = doctor => {
  if (doctor) {
    const rating = doctor.rating;
    const total_ratings = doctor.total_ratings;
    if (rating && total_ratings) {
      const ratingValue = rating * total_ratings;
      const newRating = Math.floor(Math.random() * 5) + 1;
      const tmpRating = (ratingValue + newRating) / (total_ratings + 1);
      doctor.rating = tmpRating.toFixed(2);
      doctor.total_ratings = total_ratings + 1;
    }
  }
};
