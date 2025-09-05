# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages portfolio website designed to showcase multiple projects in a single, centralized location. The site serves as a landing page that links to individual project repositories and their respective GitHub Pages deployments.

## Important: User is New to Claude Code

The user is new to Claude Code and may make common mistakes. Be extra patient and provide clear guidance:

1. **Always use absolute paths** (e.g., `/mnt/d/GithubWebSite/index.html`) not relative paths
2. **Read files before editing** - Use the Read tool first, then Edit tool
3. **Use TodoWrite tool** for multi-step tasks to avoid missing steps
4. **Be explicit about commands** - Show exact commands needed
5. **Explain file structure** when making changes across multiple files

## Architecture

### Core Structure
- **Static Website**: Pure HTML, CSS, and vanilla JavaScript - no build process needed
- **Single Page Application**: All content on one page with smooth scrolling navigation
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **GitHub Pages Integration**: Automatic deployment via GitHub Actions on push to main

### File Organization
- `index.html`: Main HTML structure with semantic markup
- `styles.css`: Complete styling with CSS Grid/Flexbox layouts and responsive breakpoints
- `script.js`: Interactive features including smooth scrolling, intersection observers, and animations
- `.github/workflows/pages.yml`: GitHub Actions workflow for automatic deployment
- `README.md`: User documentation for customization and setup (Korean language)

### Design System
- **Typography**: Inter font family from Google Fonts
- **Color Scheme**: Primary blue (#2563eb), gradients, and neutral grays
- **Components**: Reusable card-based layout for projects
- **Animations**: CSS transitions with JavaScript-triggered effects

## Development Commands

### Local Development
```bash
# Serve locally (use any static server)
python -m http.server 8000
# or
npx serve .
# or simply open index.html in browser
```

### Git and Deployment
```bash
# Basic git workflow for this repository
git add .
git commit -m "Update portfolio content"
git push origin main

# Check GitHub Actions deployment status
# Visit: https://github.com/username/username.github.io/actions
```

### Deployment
- Automatic deployment via GitHub Actions when pushing to `main` branch
- No build process required - direct static file deployment
- Site will be available at `https://username.github.io` after first push

## Customization Guidelines

### Adding New Projects
1. Copy existing `.project-card` div structure in `index.html`
2. Update project details: title, description, tech stack, and links
3. Ensure links follow pattern: `https://username.github.io/project-name`
4. Add appropriate tech tags using existing `.tech-tag` classes

### Styling Modifications
- Primary colors defined in CSS custom properties context
- Responsive breakpoints: 480px (mobile), 768px (tablet), 1200px (desktop)
- CSS Grid for project layout with `auto-fit` and `minmax()` for responsiveness

### Content Updates
Key sections to modify for personalization (always use Read tool first, then Edit):
- **Hero section (index.html:42-53)**: Replace "Your Name" with actual name
- **About section (index.html:55-82)**: Update bio and skills in `.skill-tag` spans
- **Projects section (index.html:84-154)**: Replace example projects with real ones
- **Contact section (index.html:156-175)**: Update email, GitHub, LinkedIn URLs

### Common Personalization Tasks
```html
<!-- Replace placeholder content in index.html -->
1. Search for "Your Name" → Replace with real name
2. Search for "your.email@example.com" → Replace with real email
3. Search for "https://github.com/username" → Replace with real GitHub URL
4. Update each .project-card with real project information
```

## Integration with Multiple Repositories

### Portfolio Hub Pattern
This repository serves as the central hub linking to other project repositories. Each linked project should:
1. Have its own GitHub Pages setup
2. Follow URL pattern: `username.github.io/project-name`
3. Include a "Back to Portfolio" link to the main site

### Project Repository Requirements
For optimal integration, each project repository should:
- Enable GitHub Pages in repository settings
- Include project screenshots and documentation
- Have consistent README structure
- Use descriptive repository names that work well as URLs

## Common Beginner Mistakes to Avoid

### File Path Errors
- ❌ Wrong: `Edit("styles.css")` 
- ✅ Correct: `Edit("/mnt/d/GithubWebSite/styles.css")`

### Editing Without Reading
- ❌ Wrong: Directly editing files without reading first
- ✅ Correct: Use `Read("/mnt/d/GithubWebSite/index.html")` first, then `Edit()`

### Multi-Step Tasks
- ❌ Wrong: Trying to do everything at once without planning
- ✅ Correct: Use `TodoWrite()` to break down tasks into steps

## Performance Considerations

- Images loaded via placeholder service (replace with actual project screenshots)
- CSS and JavaScript are minified for production use  
- Fonts loaded with `preconnect` for performance optimization
- Intersection Observer used for efficient scroll-based animations

## GitHub Pages Setup Checklist

1. Repository must be named `username.github.io` for user site
2. Enable GitHub Pages in Settings > Pages
3. Set Source to "GitHub Actions"
4. Push to `main` branch triggers automatic deployment
5. Site available at `https://username.github.io` after deployment