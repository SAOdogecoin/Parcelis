# Parcelis - Self-Insurance Risk Calculator

A Next.js web application that helps merchants understand the hidden risks and regulatory penalties of self-insuring their shipments.

## Features

- **Interactive Risk Calculator**: Calculate potential penalty exposure based on state regulations
- **State-by-State Analysis**: View specific penalty information for all 50 US states
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and Lucide React icons

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SAOdogecoin/Parcelis.git
cd Parcelis
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts to complete deployment

### Option 3: Deploy via v0 by Vercel

If you're working with v0 by Vercel:

1. Make sure your project follows the Next.js 14 App Router structure (which this project does)
2. Push your code to GitHub
3. In v0, connect your GitHub repository
4. v0 will automatically detect the Next.js configuration and deploy

## Project Structure

```
Parcelis/
├── app/                      # Next.js App Router directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── RiskEducation.tsx   # Risk education section
│   ├── PenaltyCalculator.tsx # Interactive calculator
│   ├── WhyParcelis.tsx     # Benefits section
│   └── Footer.tsx          # Footer component
├── services/               # Service layer
│   └── penaltyService.ts  # Penalty data service
├── types.ts               # TypeScript type definitions
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── package.json           # Project dependencies
```

## Build for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## Environment Variables

This project doesn't require any environment variables for basic functionality. All state penalty data is currently mocked in the application.

## Customization

### Updating State Penalty Data

Edit `services/penaltyService.ts` to modify the penalty amounts for each state.

### Styling

- Colors and brand styling are configured in `tailwind.config.ts`
- Global styles are in `app/globals.css`

### Components

All components are located in the `components/` directory and can be modified independently.

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the Parcelis team.
