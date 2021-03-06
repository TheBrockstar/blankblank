# Front End Coding Assessment

It’s worth mentioning that we care about testing our code here at Podium, and it would be beneficial for you to demonstrate how you test in the challenge as well.

Shakespeare has been getting a lot of reviews recently about his plays. So far he has managed to build a backend API to serve them, but he doesn’t have the chops to finish out the UI. That’s where you come in, your task is to build a client side app for Shakespeare’s API. The **design** of the application is up to you.

### Client Documentation

**Components**

- **App**
    - Root parent component
    - Contains Header, Footer, and View child components
    - View child component handles routing with react-router
- **ReviewList**
    - Displays a List of Reviews and a Toolbar for sorting and searching that list.
    - Connects the sort/search options set in Toolbar to the List component
    - Contains ReviewCard, List, and ToolBar child components
    - ReviewCard presents a single item of data passed through props
    - List Consumes the API response below and maps over the array of reviews, rendering a ReviewCard component for each review.
    - Toolbar allows Search and Sort functionality
- **ReviewPage**
    - Consumes an API response to render a single review.
    - Contains no child components

**Helper Functions**


- **searchReviews(_array_ reviews, _string_ term)**
    - Searches a list of reviews and returns a list of reviews whose author or body contains the a given search term.
- **sortReviews(_array_ reviews, _string_ key, ?[_boolean_ asc])**
    - Sorts a list of reviews by a given key, and orders the sort in ascending or descending order depending on the option asc parameter.
    - Can sort by Number, Date, and String datatypes.
- **paginateReviews(_array_ reviews, _integer_ page, ?[_integer_ num])**
    - Simulates pagination of a list of reviews by returning a slice of the list based on a provided page number and an optional number of reviews per page.

**Styling**

Styling is primarily implemented through styled-components, with a `Style.js` file housing the styled component for each parent component in that component's folder.

Global styles are few and use both styled-components, and raw css. They are found in the "globalStyles" folder.

This project uses the Eric Meyer CSS Reset. 

**Testing**

Tests are located with the units that they are most closely associated with. Each parent component has a [component name].test.js file.

Helper functions, collectively, have their own test file at helpers.test.js in the helpers folder.

Testing can be run with `yarn test` while inside the client folder "reviews"

### API Documentation

**Authentication:**

- Authentication is done by passing your API token using the **x-api-key** header. The value of this header will contain nothing more than just the token value.
- Your authentication token is: ```H3TM28wjL8R4#HTnqk?c```

**Endpoints:**

Two endpoints exist for this API.

1. **Reviews Index**

    - **GET** [https://shakespeare.podium.com/api/reviews](https://shakespeare.podium.com/api/reviews)
    - Response looks like this:
```
  [
    {
        "rating": 0.8,
        "publish_date": "2016-09-05T23:25:47.642350Z",
        "id": "9783221620868",
        "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "author": "Kaley Schiller"
    },
    {
        "rating": 3.2,
        "publish_date": "2016-09-04T23:25:47.642388Z",
        "id": "9793364045824",
        "body": "Can one desire too much of a good thing?.",
        "author": "Fay Lemke"
    },
    {
        "rating": 4.1,
        "publish_date": "2016-09-03T23:25:47.642545Z",
        "id": "9784620626604",
        "body": "How bitter a thing it is to look into happiness through another man's eyes!",
        "author": "Tatyana Olson"
    }
]
```


2. **Reviews Show**

    - **GET** [https://shakespeare.podium.com/api/reviews/:id](https://shakespeare.podium.com/api/reviews/:id)
    - Response looks like this:
```
{
    "rating": 0.8,
    "publish_date": "2016-09-05T23:25:47.642350Z",
    "id": "9783221620868",
    "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "author": "Kaley Schiller"
}
```
