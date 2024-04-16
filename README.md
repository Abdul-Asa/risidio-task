# Risidio Frontend Developer Assessment - My Submission

## Overview

This project implements the design provided in the Risidio technical assessment using Next.js 14, Tailwind CSS for styling, and shadcn/ui as the component library. It features a cookie-based session for authentication and uses SQLite database managed by Drizzle ORM, hosted on TursoDb. Initially aimed for deployment on Netlify, the project is now hosted on Vercel due to integration issues with TursoDb.

## Technologies Used

- **Next.js 14**: Utilized for its SSR capabilities and efficient routing.
- **Tailwind CSS & shadcn/ui**: For styling and UI components, ensuring a consistent and responsive design.
- **SQLite & Drizzle ORM**: For database management, leveraging SQLite for storage and Drizzle ORM for database interactions.
- **TursoDb**: Hosting the SQLite database in the cloud.
- **Vercel**: Deployment platform, chosen for its compatibility with the project requirements.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Initialize the database**:
   ```bash
   npm run db:init:local
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Build and start the production server**:
   ```bash
   npm run build && npm start
   ```

## Key Features

- **Cookie-based Authentication**: Ensures users are authenticated through sessions.
- **Server Actions**: Server-side logic to interact with the SQLite database.
- **Responsive Design**: Ensures the application is usable on a variety of devices.
- **Pixel Perfect Implementation**: Follows the Figma design closely to ensure fidelity.

## Challenges & Learning Points

- **ORM Integration**: Integrating Drizzle ORM with SQLite and managing its deployment on TursoDb presented a steep learning curve.
- **Deployment Issues**: Challenges with Netlify led to a switch to Vercel, showcasing adaptability in deployment strategies.
- **Code Refinement**: Due to time constraints, some redundant code and CSS variables were not optimized as intended.

## Conclusion

This project was an invaluable opportunity to deepen my expertise in modern web technologies and adapt to various challenges, from back-end management with Drizzle ORM to precise front-end implementation. I look forward to discussing this project further during my interview.
