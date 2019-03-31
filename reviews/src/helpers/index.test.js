import { searchReviews, sortReviews } from './index';

const mockReview1 = {
  rating: "4.2",
  publish_date: "2016-09-05T23:25:47.642350Z",
  id: "9783221620868",
  body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  author: "Kaley Schiller"
}

const mockReview2 = {
  rating: "3.1",
  publish_date: "2015-09-05T23:25:47.642350Z",
  id: "9793364045824",
  body: "Can one desire too much of a good thing?.",
  author: "Fay Lemke"
}

const mockReview3 = {
  rating: "1.8",
  publish_date: "2017-09-05T23:25:47.642350Z",
  id: "9793364234824",
  body: "True is it that we have seen better days.",
  author: "Leslie Wammapoke"
}

describe('searchReviews', () => {
  describe('given an array of reviews', () => {

    const mockList = [mockReview1, mockReview2, mockReview1, mockReview2, mockReview1, mockReview1];
    const result1 = [mockReview1, mockReview1, mockReview1, mockReview1];
    const result2 = [mockReview2, mockReview2];

    describe('and a search term with a length less than 3', () => {
      it('returns the original list', () => {
        const result = searchReviews(mockList, "de");
        expect(JSON.stringify(result)).toEqual(JSON.stringify(mockList));
      });
    });

    describe('and a search term with a length equal to 3', () => {
      it('returns a filtered list', () => {
        const result = searchReviews(mockList, "Fay");
        expect(JSON.stringify(result)).toEqual(JSON.stringify(result2));
      });
    });

    describe('and a search term with a length greater than 3', () => {
      it('returns a filtered list', () => {
        const result = searchReviews(mockList, "Kaley");
        expect(JSON.stringify(result)).toEqual(JSON.stringify(result1));
      });
    });
  });
});


describe('sortReviews', () => {

  describe('given an empty array', () => { 
    it('returns an empty array', () => {
      expect(sortReviews([],"")).toEqual([]);
    });
  });

  describe('given an array of reviews', () => {

    const mockList = [mockReview1, mockReview2, mockReview3, mockReview2, mockReview1, mockReview1];
    const sortByRating = [mockReview3, mockReview2, mockReview2, mockReview1, mockReview1, mockReview1];
    const sortByAuthor = [mockReview2, mockReview2, mockReview1, mockReview1, mockReview1, mockReview3];
    const sortByDate = [mockReview2, mockReview2, mockReview1, mockReview1, mockReview1, mockReview3];

    describe('and a key `rating`', () => {
      it('returns an array sorted in descending order by `rating`', () => {
        const result = sortReviews(mockList, "rating");
        expect(JSON.stringify(result)).toEqual(JSON.stringify(sortByRating));
      });
    });

    describe('and a key `author`', () => {
      it('returns an array sorted in descending order by `author`', () => {
        const result = sortReviews(mockList, "author");
        expect(JSON.stringify(result)).toEqual(JSON.stringify(sortByAuthor));
      });
    });

    describe('and a key `publish_date`', () => {
      it('returns an array sorted in descending order by `publish_date`', () => {
        const result = sortReviews(mockList, "publish_date");
        expect(JSON.stringify(result)).toEqual(JSON.stringify(sortByDate));
      });
    });


    describe('and a valid key and a third operator of 1', () => {
      it('returns an array sorted in ascending order by the given key', () => {
        const result = sortReviews(mockList, "publish_date", 1);
        expect(JSON.stringify(result)).toEqual(JSON.stringify(sortByDate.reverse()));
      });
    });
  });
});