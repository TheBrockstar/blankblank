// Helper Methods

// Search a list of reviews and attempt to match a search
// term against the review's author or body.
export const searchReviews = (reviews, term)  => {
  if (term.trim().length >= 3) {
    return reviews.filter(item => (item.body + " " + item.author).toLowerCase().includes(term.toLowerCase()));
  } else {
    return reviews;
  }
}


// Sort a list of reviews by a provided key
// Optional third argument to sort in ascending or descending order
export const sortReviews = (reviews, key, asc = 0) => {
  let sorted = reviews.map(review => review);

  if (reviews.length < 1) {
    return [];
  }

  // Check if it's a date or a number
  if (Date.parse(sorted[0][key])) {
    sorted.forEach(review => {review[key] = new Date(review[key])});
  } else if (Number(sorted[0][key])) {
    sorted.forEach(review => {review[key] = parseInt(review[key], 10)});
  } else {
    sorted.forEach(review => {review[key] = review[key].toLowerCase()});
  }

  sorted.sort((ra, rb) => {
    if (ra[key] > rb[key]) return 1;
    return -1;
  })

  return asc ? sorted.reverse() : sorted;
} 