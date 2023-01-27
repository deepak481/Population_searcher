## **Task**

Using React, build a single-page web application where the user can search locations and get population information.

## General **Requirements**

- Create a hook-based React application using Typescript. You may use CSS helpers like SCSS, Less, or CSS-in-JS, but you may not use component libraries in this project.
- Use a third-party API to search for locations ([Search - Nominatim Documentation](https://nominatim.org/release-docs/latest/api/Search/)).
- The application should be responsive and work on all browsers.
- Include a README that details how your application works and how to run your application.
- Your code should be clean and well organized.
- The application should strictly be a frontend application. A backend server is not necessary and discouraged.

## **User Stories**

- As a user, I can search for locations using an input field and view a list of results that is filtered to show only administrative boundaries (hint: type should be “administrative”).
- As a user, I can view an interactive map that defaults to Boston, MA on page load.
- As a user, I can select a search result and view the location on the map with the boundaries of the polygon visible.
- As a user, when I click on a search result, I can view the location’s population and the year the population data.
- As a user, I can share my findings with someone else with a share button that copies the link to clipboard.
- As a user, I can visit the link of the app shared to me by my friend and I should see the same search query, results, and selected result on the page.
- As a user, I can view my recent searches and clicking on one should return me to that search.

## **Note**
- Used random function for generating dummy population figure coz i couldn't found any particular API.
