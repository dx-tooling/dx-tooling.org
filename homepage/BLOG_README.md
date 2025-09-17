# Blog System Documentation (Markdown-based)

This landing page now includes an automated blog system that sources posts from Markdown files in `src/blog/` using front matter for metadata. During the webpack build, Markdown is converted to HTML pages and the landing page sections are populated automatically.

## How It Works

1. **Blog Post Files**: Each blog post is a Markdown file in `src/blog/` with a `.md` extension.
2. **Front Matter Metadata**: Posts include YAML front matter for title, date, tags, etc.
3. **Build Integration**: A custom loader renders Markdown to HTML and wraps it in our blog template. The PostHTML plugin reads front matter to populate the lists.
4. **Backward Compatibility**: The system also supports existing HTML blog posts for seamless migration.

## Creating a New Blog Post

1. Create a new Markdown file in `src/blog/`, e.g., `2025-09-16-awesome-update.md`.
2. Add YAML front matter at the top:

```md
---
title: Awesome Update Title
description: A short summary of what changed and why it matters.
author: Your Name
published_time: 2025-09-16T00:00:00+00:00
tags: [Feature, Infra]
readTime: 5 min read
---

Your Markdown content starts here...
```

3. Write your post in standard Markdown. You can use code blocks, lists, headings, and inline HTML if needed.
4. Run `npm run build` to regenerate pages.

## Required Fields (Front Matter)

- **title**: String
- **description**: String (used as preview summary)
- **published_time**: ISO 8601 date string

## Optional Fields

- **author**: String (defaults to `Unknown`)
- **tags**: Array of strings or comma-separated string
- **readTime**: String, e.g., `4 min read`

## Features

- **Automatic Sorting**: Posts are sorted by `published_time` (newest first)
- **Landing Page Display**: Latest 6 posts shown on the landing page
- **Responsive HTML**: Generated pages use the same Tailwind classes and partials
- **SEO/Open Graph**: Pages include meta tags rendered from front matter
- **Backward Compatibility**: Supports both Markdown and HTML blog posts
- **Rich Markdown**: Full markdown-it support with typography, links, and code highlighting

## Technical Details

- Markdown is rendered by a custom loader at `loaders/markdown-to-html.js` using `gray-matter` + `markdown-it`.
- Webpack discovers `src/blog/*.md` and emits `dist/blog/<slug>.html` via `HtmlWebpackPlugin`.
- `posthtml-blog-posts.js` reads both `.md` files' front matter and `.html` files' metadata to build the homepage sections.
- Uses `@tailwindcss/typography` for beautiful prose styling.

## Migration from HTML to Markdown

The system supports both formats during migration:

1. **Existing HTML posts** continue to work with metadata extraction
2. **New Markdown posts** use front matter for cleaner authoring
3. **Mixed content** is fully supported - you can have both types in the same blog

## Example Blog Post Structure

### Markdown Format (Recommended)
```md
---
title: "MCP as a Service Just Got Better"
description: "MCP as a Service is now more reliable, faster, and easier to use thanks to our recent infrastructure improvements."
author: "Manuel Kießling"
published_time: "2025-08-25T00:00:00+00:00"
tags: [MCP, Playwright, VNC, Infrastructure]
readTime: "3 min read"
---

We've completed a major infrastructure upgrade that makes MCP as a Service more reliable, faster, and easier to use than ever before.

## What's Better Now

### 🎯 More Reliable
Your MCP instances are now much more stable...
```

### HTML Format (Legacy Support)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta property="og:title" content="Your Blog Post Title">
    <meta property="og:description" content="A brief summary...">
    <!-- ... other metadata ... -->
</head>
<body>
    <!-- Your content -->
</body>
</html>
```

## Build Commands

- `npm run build` - Build the site
- `npm run build:prod` - Production build
- `npm run quality` - Prettier + ESLint + Type checks
- `npm test` - Run tests
