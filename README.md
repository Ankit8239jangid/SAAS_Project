
# Swiggy Clone

A responsive food delivery web application that replicates the core features of the Swiggy platform, built using React.js, Tailwind CSS, Redux, React Router, and REST APIs. The project includes features like dynamic restaurant and menu listings, real-time data fetching, secure user authentication, and performance optimization with Shimmer UI.

## Features

- **Restaurant Listings**: Displays a dynamic list of restaurants fetched from live REST APIs.
- **Menu Listings**: Provides detailed menus for each restaurant with item descriptions, pricing, and availability.
- **Search and Filter**: Users can search for restaurants or dishes and apply filters to refine results.
- **User Authentication**: Secure login and registration system using Google authentication.
- **Cart and Order Management**: Users can add items to the cart, view orders, and proceed to checkout.
- **Performance Optimization**: Utilized Shimmer UI for improving perceived load times during data fetches.
- **Responsive Design**: The application is fully responsive and works on all device sizes.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux for handling global state
- **Routing**: React Router for navigating between pages
- **APIs**: Live REST APIs for fetching restaurant and menu data
- **Authentication**: Google authentication integrated with Supabase
- **UI Components**: Material-UI (ReduxUI) for consistent and modular UI components

## Project Structure

```bash
.
├── public
│   └── index.html
├── src
│   ├── components
│   ├── pages
│   ├── context
│   ├── store
│   ├── hooks
│   ├── utils
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
