# Schema

A minimalist drawing tool for local use.

## About

Schema is a fork of Excalidraw, rebranded for minimal, privacy-focused local use. All analytics, tracking, collaboration features, and external service integrations have been removed.

## Features

- Hand-drawn style sketching
- Export to PNG, SVG, and JSON
- Offline capable
- No tracking or analytics
- No collaboration features
- Dark mode UI
- Electron desktop app for macOS

## Getting Started

### Prerequisites

- Node.js 18.x - 22.x
- Yarn 1.22.22

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn start
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the web application
yarn build

# Build Electron app for macOS
yarn electron:build

# The Electron app will be in dist-electron/
```

### Running the Electron App

```bash
# Run in development mode
yarn electron:dev

# Package for macOS (no installer)
yarn electron:pack
```

## License

MIT License - This project is a fork of [Excalidraw](https://github.com/excalidraw/excalidraw)

## Changes from Excalidraw

- Removed all analytics and tracking (Sentry, Simple Analytics, etc.)
- Removed social media links and external service integrations
- Removed Excalidraw+ workspace features
- Removed live collaboration features
- Rebranded to "Schema"
- Simplified for local use only
- Added Electron desktop app support
- Implemented true dark mode with dark grey UI
- Frameless window design on Electron
