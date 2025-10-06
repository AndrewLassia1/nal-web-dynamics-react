# NAL Web Dynamics React

A modern React-based web application for NAL Web Dynamics, specializing in web application development and software solutions. Currently features a responsive landing page showcasing services, with plans to evolve into a comprehensive file sharing platform.

## Features

### Current Features
- **Responsive Landing Page**: Clean, animated sections including Hero, Services, Why Choose Us, Software Types, Contact, and Footer.
- **Smooth Scrolling**: Seamless navigation between sections.
- **Intersection Observer Animations**: Fade-in effects on scroll for enhanced user experience.

### Planned Features
- **User Authentication**: Login and register functionality with JWT tokens.
- **File Sharing**: Users can upload, share, and download files with real-time progress tracking.
- **Real-time Updates**: See file transfer percentages and download buttons upon completion.
- **GraphQL API**: Backend powered by Apollo Server, Prisma ORM, and GraphQL for efficient data management.
- **File Upload Handling**: Using Multer for multipart file uploads.
- **Database Integration**: Prisma with a relational database for user and file data.

## Tech Stack

- **Frontend**: React 18, CSS3, HTML5
- **Backend (Planned)**: Node.js, Express, Apollo Server, GraphQL
- **Database (Planned)**: Prisma ORM with PostgreSQL/MySQL
- **Authentication (Planned)**: JSON Web Tokens (JWT)
- **File Handling (Planned)**: Multer
- **State Management**: Apollo Client for GraphQL queries/mutations

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nal-web-dynamics-react.git
   cd nal-web-dynamics-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will run on `http://localhost:4000`.

4. For production build:
   ```bash
   npm run build
   ```

## Usage

- Navigate to the landing page to explore services.
- Use the "Get in Touch" button to scroll to the contact section.
- Future: Register/login to access file sharing features, upload files, share with other users, and track download progress.

## Project Structure

```
nal-web-dynamics-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── WhyChooseUs.js
│   │   ├── SoftwareTypes.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── TODO.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is private and proprietary to NAL Web Dynamics.

## Contact

For inquiries, please visit our website or contact us through the contact form.
