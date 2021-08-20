# Blue Coding Exercise

## Setup and initialization

Run `npm install` to install the required packages.

Run `npm start` to start the dev server.

On the Chrome browser page, set the window to responsive mode to display the menu correctly

## About the implementation

I've created 4 services to implement the core functionalities of the required app:

1. Api Service: Responsible for querying the Giphy API.
2. Display Service: Responsible for displaying the lightbox and controlling the navigation.
3. History Service: Responsible for controlling and caching the search history.
4. Search Service: Responsible for controlling the current active search

The view components are separeted in 3 modules:

1. Home Module: Responsible to display the Home Page
2. History Module: Responsible to display the Search History Page
3. Gif Module: Resposible to rendering the GIFs components

## Improvements

Of course a lot of improvements could be done in this app, but due to time constraints I couldn't finish polishing the UI and also a few improvements for the performance of the app is missing.

For example: I could cache the results per page so the app doesn't need to redo the http call every time the user navigates between the result pages.
