# 🎬 Movie App with React Router

A dynamic React application that allows users to browse, filter, and add their favorite movies and TV shows. Features detailed movie pages with embedded trailers and seamless navigation using React Router.

## ✨ Features

### Core Features
- **Display Movies** - View movies with posters, titles, descriptions, and star ratings
- **Filter Movies** - Filter by title (search) and minimum rating
- **Add New Movies** - Add custom movies with all required attributes including trailer links
- **Movie Details Page** - Dedicated page for each movie with full description
- **Embedded Trailers** - Watch movie trailers directly in the app
- **Navigation** - Smooth routing between home page and movie details
- **Responsive Design** - Works on desktop, tablet, and mobile devices

### New Features (React Router Integration)
- 🎯 **Clickable Movie Cards** - Click any movie to view its details page
- 📝 **Full Movie Descriptions** - Complete synopsis on dedicated page
- 🎥 **Embedded Trailers** - YouTube videos embedded directly in movie details
- 🔙 **Working Back Button** - Navigate back to home page from any movie
- 🔗 **Dynamic Routes** - Each movie has its own unique URL
- ✨ **Better UX** - No page reloads during navigation

## 🎯 Components

### Core Components
1. **MovieCard** - Displays individual movie information with link to details
2. **MovieList** - Renders a grid of MovieCard components
3. **Filter** - Provides title search and rating filter inputs
4. **AddMovie** - Form for adding new movies with trailer links

### Page Components (New)
5. **HomePage** - Main page displaying all movies with filters
6. **MovieDetailsPage** - Dedicated page showing full movie details and trailer

## 🚀 Technologies Used

- **React 18** - Frontend library
- **React Router DOM v6** - Navigation and routing
- **React Hooks** - useState for state management
- **CSS3** - Custom styling and animations
- **JavaScript (ES6+)** - Modern JavaScript features

## 📋 Movie Attributes

Each movie in the app includes:
- **id** - Unique identifier
- **title** - Name of the movie/show
- **description** - Full plot summary
- **posterURL** - Image URL for the movie poster
- **rating** - Rating from 1 to 5 stars
- **trailerLink** - YouTube embed link for the movie trailer

## 🛠️ Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Step to run movie app**
```bash
cd movie-app
npm install
npm start