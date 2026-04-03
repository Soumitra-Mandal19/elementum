# Elementum Website Frontend

A modern, responsive React frontend built with Tailwind CSS, based on a Figma design. The project showcases a homepage with hero, features, offers, feedback, and footer sections, along with interactive hover effects

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Demo](#demo)  
3. [Technologies Used](#technologies-used)  
4. [Installation](#installation)  
5. [Running the Project](#running-the-project)  
6. [Docker Setup](#docker-setup)  
7. [Components](#components)  
8. [Folder Structure](#folder-structure)  
9. [License](#license)  

---

## Project Overview

This frontend is designed to visually match a Figma layout, featuring:

- Responsive **Hero section** with highlighted text and decorative images  
- **Feature sections** with images, text, and decorative elements (squares/triangles)  
- **Offer sections** highlighting services with hover interactions  
- **Feedback/Testimonial section** with client avatars and testimonial card  
- **Footer section** with newsletter, navigation, social links, and contact info  
- Smooth **hover animations** and interactive elements using Tailwind utility classes  

---

## Demo

Run the frontend locally at: [http://localhost:5174/](http://localhost:5174/)

---

## Technologies Used

- **React 18** – Functional components and reusable structure  
- **Tailwind CSS** – Responsive design and hover interactions  
- **Vite** – Frontend build and dev server  
- **Docker** – Containerized project submission setup  

---

## Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd frontend

Install dependencies: npm install


---

Running the Project


Start the development server:

npm run dev

Open http://localhost:5173/

in your browser.

---

Docker Setup

This project is submitted with a Docker setup for easy deployment.

Dockerfile example:

# Use official node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev"]

Steps to Run Locally Using Docker -->

Clone the repository:

git clone <your-repo-url>
cd frontend

Build and run Docker container:

docker build -t elementum-frontend .
docker run -p 5173:5173 elementum-frontend

click on 
  ➜  Local:   http://localhost:5173/ 

---

Components

Navbar

Responsive navigation bar
Hamburger menu on mobile
Hover-scale effect for menu items
Fully responsive and reusable


Hero

Central heading with highlighted and underlined words
Decorative images with absolute positioning
Responsive typography and spacing


FeatureSection

Reusable feature component
Supports square or triangle decorative elements
Image with text section, optional reverse layout
Hover effect on buttons (Read more →)


Features

Uses FeatureSection to render multiple features
Combines highlighted text, underlines, and background elements


OfferSection

Reusable offer/service component
Small description and larger title text
Arrow icon with hover-scale effect


Offers

Uses OfferSection to render multiple offers
Main heading with highlighted and underlined text


Feedback

Testimonial section with central card
Multiple decorative avatars around the content
Highlighted headings using UnderlineWord
Responsive layout


Footer

Newsletter subscription with heading, description, and subscribe button
Footer links: Company, Terms & Policies, Follow Us, Connect
Hover effects for links
Responsive design
Copyright

---

Folder Structure

frontend/
├─ public/
├─ src/
│  ├─ assets/          # Images, icons, SVGs
│  ├─ components/      # Reusable React components
│  │  ├─ Navbar.js
│  │  ├─ Hero.js
│  │  ├─ FeatureSection.jsx
│  │  ├─ Features.jsx
│  │  ├─ OfferSection.jsx
│  │  ├─ Offers.jsx
│  │  ├─ Feedback.jsx
│  │  ├─ Footer.jsx
│  │  └─ UnderlineWord.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ tailwind.config.js
└─ vite.config.js

---
License

This project is for submission purpose. All rights belong to the creator.

---

Creator

Soumitra Mandal