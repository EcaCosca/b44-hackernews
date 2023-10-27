# Web Development Lesson: Building Hacker News with React, Vite, and Axios

## Introduction

Welcome to the documentation for our web development lesson on building a dynamic web application using React, Vite, useState, useEffect, fetch, and Axios. In this lesson, you will learn how to create a Hacker News clone with search functionality by leveraging the Hacker News API. Below, you'll find a detailed overview of the concepts and resources covered in this lesson.

## Table of Contents

1. **API Overview**
   - Understanding the Hacker News API structure.
   - Exploring various API endpoints for fetching news data.
   - Practice with the Fake Store API for testing and experimentation.

2. **Fetching Data with JavaScript**
   - Overview of JavaScript fetch API for making asynchronous requests.
   - Properly handling API responses and errors in JavaScript.
   - Visualizing JSON data using the [JSON Viewer Pro Chrome extension](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc).

3. **Vite Documentation**
   - Introduction to Vite as a fast and efficient frontend build tool.
   - Setting up a development environment with Vite for React applications.

4. **React Hooks API Reference**
   - Understanding the useState and useEffect hooks in React functional components.
   - Managing component state and performing side effects with hooks.

5. **Material-UI Documentation**
   - [Material-UI](https://mui.com/)
   - [Material-UI Components](https://mui.com/components/)

6. **Postman API Platform**
   - Introduction to Postman as a powerful API development and testing tool.
   - Streamlining API testing and collaboration using Postman.

7. **List of HTTP Status Codes**
   - Understanding common HTTP status codes and their meanings.
   - Handling different server responses in web applications.

8. **Handling Errors with Axios**
   - Strategies for handling errors in API requests using Axios.
   - Implementing robust error handling mechanisms for web applications.
  


### Code Samples

```javascript
const post = { created_at: "2021-09-16T12:16:14Z" };

console.log(
  "Posted on " +
    post.created_at.split("T")[0].split("-").reverse().join("/") +
    " at " +
    post.created_at.split("T")[1].split("Z")[0]
);
console.log(post.created_at.split("T")[0].split("-").reverse().join("/"));
```


## JavaScript Methods Used

### 1. `split()`
   - **Description**: Splits a string into an array of substrings based on a specified separator.
   - **Usage**: `string.split(separator)`
   - **Example**: `"2021-09-16T12:16:14Z".split("T")` returns `["2021-09-16", "12:16:14Z"]`.

### 2. `reverse()`
   - **Description**: Reverses the order of elements in an array.
   - **Usage**: `array.reverse()`
   - **Example**: `[1, 2, 3].reverse()` returns `[3, 2, 1]`.

### 3. `join()`
   - **Description**: Joins all elements of an array into a string.
   - **Usage**: `array.join(separator)`
   - **Example**: `["12", "16", "2021"].join("/")` returns `"12/16/2021"`.

### 4. `console.log()`
   - **Description**: Outputs a message to the console.
   - **Usage**: `console.log(message)`
   - **Example**: `console.log("Hello, World!")` prints `Hello, World!` to the console.

### External Tools and Extensions

- [JSON Viewer Pro Chrome Extension](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc)
- [Postman API Platform](https://www.postman.com/)
  - [Postman Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode)

### Additional Links

- [Hacker News API Documentation](https://hn.algolia.com/api)
- [GitHub Repository for Hacker News Clone](https://github.com/EcaCosca/b44-hackernews)
- [Web Development Lesson - Hacker News](https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/%f0%9f%94%a8-hacker-news/)

---
