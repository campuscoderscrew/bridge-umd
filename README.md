# BridgeUMD — Frontend Repository

Welcome to CCC's frontend codebase for the BridgeUMD website. This project is built using React, Vite, and Tailwind CSS to ensure fast performance, clean design, and a modern development experience.

## Tech Stack

- Frontend Framework: React (with JSX)
- Build Tool: Vite
- Styling: Tailwind CSS
- Routing: React Router DOM

## Local Setup Instructions

Follow these steps to run the project locally on your machine.

1. Clone the Repository

git clone https://github.com/campuscoderscrew/bridge-umd.git
cd fintech

2. Install Dependencies

npm install

3. Run the Development Server

npm run dev

The app will be live at http://localhost:5173

## Creating Your Page (For Assigned Task)

Each developer is assigned a page (for example: Officers, Calendar, etc.).

To create or edit your page:

1. Navigate to src/pages/
2. Open the file that matches your task (e.g., Projects.jsx)
3. Build your component using Tailwind CSS and React
4. Preview your changes at http://localhost:5173/[your-route]

Do not forget to import any shared components from src/components/ if needed.

## GitHub Workflow (Issues, Branches, and Pull Requests)

We use GitHub Issues, Branches, and Pull Requests to organize and review code contributions.

Step-by-step process:

1. Create a New Branch  
   Use the format: your-name/page-name  
   Example:  
   git checkout -b aymaan/education

2. Make Changes Locally  
   Work only on your assigned task. Follow the Figma designs and naming conventions.

3. Push to Your Branch  
   git add .  
   git commit -m "Added Education page layout"  
   git push aymaan/education

4. Create a Pull Request

- Go to GitHub
- Click "Compare & pull request"
- Add a descriptive title and summary
- Assign reviewer: @brthhule
- Submit the PR

6. Wait for Review  
   Your changes will be reviewed. If approved, they will be merged into the main branch. If changes are requested, make the edits and resubmit.

Important: Do not push directly to main. Always create a separate branch and submit a pull request.

## Best Practices

- Keep your commits small and descriptive
- Use Tailwind utility classes only (no inline or external CSS)
- Ensure mobile responsiveness
- Use semantic and accessible HTML
- Follow consistent component structure

## Questions?

Reach out on Discord, or comment on your GitHub pull request if you have any questions about setup, tasks, or coding style.
