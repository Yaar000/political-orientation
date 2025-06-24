# Political Orientation Test

## Overview

This is a multilingual political orientation test web application that helps users discover their political leanings through a simple questionnaire. The application presents 15 randomly selected questions from a pool of 30 questions and categorizes users into one of 5 political orientation types based on their responses.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: No frameworks used, vanilla web technologies for maximum compatibility
- **Static Site**: Served using Python's built-in HTTP server
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Progressive Enhancement**: Works without JavaScript for basic functionality

### Internationalization (i18n)
- **3 Language Support**: Korean (default), English, and Japanese
- **Modular Translation System**: Separate JavaScript files for each language in `/i18n/` directory
- **Dynamic Language Switching**: Real-time language changes without page reload
- **Fallback Mechanism**: Defaults to Korean if translation missing

### UI/UX Features
- **Dark/Light Mode Toggle**: CSS-based theme switching with user preference persistence
- **Progressive Web App Ready**: Responsive design optimized for mobile devices
- **Accessibility**: Semantic HTML structure with ARIA labels and keyboard navigation support

## Key Components

### Pages Structure
1. **index.html**: Landing page with introduction and name input
2. **test.html**: Question presentation and answering interface
3. **result.html**: Results display and social sharing options

### Data Layer
- **questions.js**: Contains 30+ political orientation questions with multilingual support
- **results.js**: Defines 5 political orientation categories with detailed descriptions
- **Scoring System**: 0-2 point scale per question (Conservative=0, Moderate=1, Progressive=2)

### Styling System
- **style.css**: Main stylesheet with light theme
- **dark.css**: Dark theme overrides
- **CSS Custom Properties**: Used for theme switching and color management
- **Animation System**: Smooth transitions and hover effects

### JavaScript Modules
- **script.js**: Main application logic and state management
- **Translation System**: Dynamic content switching based on selected language
- **Local Storage**: Persists user preferences and test progress

## Data Flow

1. **User Journey**:
   - Landing page → Name input (optional) → Question sequence → Results display
   - 15 questions randomly selected from 30-question pool
   - Each answer contributes 0-2 points to final score
   - Score ranges determine political orientation category

2. **State Management**:
   - Current language stored in localStorage
   - Theme preference persisted across sessions
   - Test progress maintained during session
   - User answers accumulated for final calculation

3. **Result Calculation**:
   - Total score (0-30 points) determines orientation
   - 5 categories: Conservative Authoritarian, Conservative Liberal, Moderate, Progressive Liberal, Progressive Authoritarian

## External Dependencies

### CDN Resources
- **Font Awesome 6.0.0**: Icon library for UI elements
- **Google Fonts**: Typography enhancement (loaded via CSS)

### Social Sharing Integration
- **KakaoTalk**: Korean messaging platform integration
- **LINE**: Japanese messaging platform
- **WhatsApp**: International messaging
- **WeChat**: Chinese social platform
- **Native Share API**: Fallback for modern browsers

## Deployment Strategy

### Current Setup
- **Python HTTP Server**: Simple static file serving on port 5000
- **Replit Hosting**: Cloud-based development and hosting environment
- **Hot Reload**: Automatic refresh during development

### Production Considerations
- **Static Hosting Ready**: Can be deployed to any static hosting service
- **CDN Optimization**: External resources loaded from CDN for performance
- **Caching Strategy**: Static assets with long cache headers recommended
- **HTTPS Required**: For social sharing APIs and modern browser features

## Changelog

- June 23, 2025. Initial setup
- June 23, 2025. Design updates: Removed background gradients for simple white design, updated theme and language controls, removed result type previews from main page and other results from result page
- June 23, 2025. Database removal: Removed PostgreSQL database, statistics functionality, and Node.js server. Switched to simple Python HTTP server for static file serving only
- June 23, 2025. Back button functionality: Changed back button to go to previous question instead of home screen, with proper progress tracking
- June 23, 2025. UI improvements: Changed KakaoTalk sharing from Story to Messenger, removed name input from first screen
- June 23, 2025. Language support: Removed Chinese language support, now supports Korean, English, and Japanese only
- June 23, 2025. Cloudflare optimization: Added headers, redirects, SEO meta tags, relative paths, offline handling, and performance optimizations for Cloudflare Pages deployment
- June 24, 2025. Language support fixes: Fixed "[object Object]" display issue by properly handling multilingual question/answer data structure, implemented complete language switching across all pages (questions, answers, results)

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Simple white background, no gradients, clean minimal design
UI preferences: Language selection using button abbreviations (KO, EN, JP, CN), no score display on result page, no dark mode functionality, no database or statistics features