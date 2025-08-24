# Blog System Documentation

This landing page now includes an automated blog section that automatically extracts and displays blog posts from the `src/blog/` directory.

## How It Works

1. **Blog Post Structure**: Each blog post should be an HTML file in the `src/blog/` directory
2. **Metadata Extraction**: The system automatically extracts metadata from HTML meta tags
3. **Automatic Population**: Blog posts are automatically displayed on the landing page
4. **Build Integration**: The blog section is populated during the webpack build process

## Creating a New Blog Post

1. Create a new HTML file in `src/blog/` with a descriptive filename (e.g., `2025-08-24-docker-rewrite.html`)

2. Include the required metadata in the `<head>` section:

```html
<!-- Blog Post Metadata -->
<meta name="blog:title" content="Your Blog Post Title">
<meta name="blog:summary" content="A brief summary of your blog post content.">
<meta name="blog:date" content="YYYY-MM-DD">
<meta name="blog:author" content="Author Name">
<meta name="blog:tags" content="Tag1, Tag2, Tag3">
<meta name="blog:readTime" content="5 min read">
```

3. Add your blog content in the `<body>` section

4. Run `npm run build` to rebuild the site

## Required Metadata

- **`blog:title`**: The title of your blog post
- **`blog:summary`**: A brief summary (will appear on the landing page)
- **`blog:date`**: Publication date in YYYY-MM-DD format

## Optional Metadata

- **`blog:author`**: Author name (defaults to "Unknown")
- **`blog:tags`**: Comma-separated list of tags
- **`blog:readTime`**: Estimated reading time

## Features

- **Automatic Sorting**: Blog posts are automatically sorted by date (newest first)
- **Landing Page Display**: Latest 6 blog posts are displayed on the landing page
- **Responsive Design**: Blog cards are responsive and match the site's design
- **Tag Display**: Tags are automatically displayed as colored badges
- **Read More Links**: Each blog post preview includes a "Read More →" link

## Technical Details

- Uses a custom PostHTML plugin (`posthtml-blog-posts.js`)
- Integrates with the existing webpack build process
- Automatically handles file reading and metadata extraction
- No manual configuration required - just add blog post files

## Example Blog Post Structure

See `src/blog/2025-08-24-docker-rewrite.html` for a complete example of a blog post with all metadata and content properly structured.

## Build Commands

- `npm run build` - Build the site with blog posts
- `npm run build:prod` - Build for production
- `npm run quality` - Run all quality checks
- `npm test` - Run tests
