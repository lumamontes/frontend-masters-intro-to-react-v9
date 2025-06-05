# Padre Gino's Pizza App 🍕

A modern pizza ordering application built with React 18/19, showcasing real-world development practices and modern React ecosystem tools.

## 📋 Project Overview

This project is part of a comprehensive React course from Frontend Masters focused on building real-world applications with modern APIs in React 18 and 19. The application demonstrates:

- Component UI development with JSX
- React hooks, effects, and portals
- User-driven event handling
- Modern React ecosystem integration
- Testing fundamentals and best practices
- Performance optimizations

## 🚀 Features

- **Pizza Ordering System**: Browse and order pizzas from Padre Gino's
- **Past Orders**: View order history
- **Contact Page**: Get in touch with the restaurant
- **Pizza of the Day**: Special daily offerings
- **Shopping Cart**: Add and manage pizza orders
- **Responsive Design**: Modern and accessible UI

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library with modern hooks and features
- **React DOM 18.3.1** - DOM rendering
- **Vite 5.4.2** - Fast build tool and development server

### Routing & State Management
- **TanStack Router 1.65.0** - Type-safe routing
- **TanStack React Query 5.59.13** - Server state management

### Development Tools
- **ESLint 9.28.0** - Code linting with React-specific rules
- **Prettier 3.5.3** - Code formatting
- **TypeScript Support** - Via route tree generation

### Testing Framework
- **Vitest 2.1.3** - Fast unit testing
- **Testing Library React 16.0.1** - React component testing utilities
- **Playwright 1.48.0** - End-to-end browser testing
- **Happy DOM 15.7.4** - Lightweight DOM implementation for testing

### Development Experience
- **TanStack Router DevTools** - Router debugging
- **TanStack Query DevTools** - Query debugging
- **Vitest UI** - Interactive test runner
- **Coverage Reports** - Code coverage analysis

## 📦 Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with interactive UI
- `npm run coverage` - Generate test coverage report
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
src/
├── routes/           # Application routes
│   ├── __root.jsx   # Root layout
│   ├── index.lazy.jsx    # Home page
│   ├── order.lazy.jsx    # Order page
│   ├── past.lazy.jsx     # Past orders
│   └── contact.lazy.jsx  # Contact page
├── api/             # API utilities
├── __tests__/       # Test files
├── components/      # Reusable components
│   ├── Cart.jsx
│   ├── Header.jsx
│   ├── Modal.jsx
│   ├── Pizza.jsx
│   └── PizzaOfTheDay.jsx
├── hooks/           # Custom hooks
│   ├── useCurrency.jsx
│   └── usePizzaOfTheDay.js
├── App.jsx          # Main application component
├── contexts.jsx     # React contexts
└── routeTree.gen.ts # Generated route tree
```

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Component and utility function testing with Vitest
- **Integration Tests**: Testing component interactions
- **Browser Tests**: End-to-end testing with Playwright
- **Mocking**: API mocking capabilities with vitest-fetch-mock

Run tests:
```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run coverage
```

## 🎓 Learning Objectives

This project covers:

1. **Modern React Patterns**
   - Functional components and hooks
   - Custom hooks for shared logic
   - Context API for state management
   - Error boundaries

2. **Routing**
   - File-based routing with TanStack Router
   - Lazy loading for performance
   - Type-safe navigation

3. **Data Fetching**
   - Server state management with TanStack Query
   - Caching and synchronization
   - Loading and error states

4. **Developer Experience**
   - Fast development with Vite
   - Code quality with ESLint and Prettier
   - Hot module replacement

5. **Testing Strategy**
   - Unit testing components
   - Mocking external dependencies
   - Browser automation testing

6. **Performance**
   - Code splitting with lazy routes
   - Query optimization
   - React 19 features preparation

## 🚀 React 19 Upgrade Path

The project is structured to easily upgrade to React 19 features:
- Form actions for enhanced form handling
- Improved Suspense boundaries
- React Compiler optimizations
- Enhanced concurrent features

## 🤝 Contributing

This is a learning project. Feel free to:
- Experiment with new features
- Add additional components
- Improve test coverage
- Optimize performance

Built with ❤️ and React 