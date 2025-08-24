import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function blogPostsPlugin() {
    return function (tree) {
        const blogDir = path.resolve(__dirname, "src/blog");
        const blogPosts = [];

        // Read all blog post files
        try {
            const files = fs.readdirSync(blogDir);

            files.forEach((file) => {
                if (file.endsWith(".html")) {
                    const filePath = path.join(blogDir, file);
                    const content = fs.readFileSync(filePath, "utf8");

                    // Extract metadata from meta tags
                    const titleMatch = content.match(/<meta name="blog:title" content="([^"]+)"/);
                    const summaryMatch = content.match(/<meta name="blog:summary" content="([^"]+)"/);
                    const dateMatch = content.match(/<meta name="blog:date" content="([^"]+)"/);
                    const authorMatch = content.match(/<meta name="blog:author" content="([^"]+)"/);
                    const tagsMatch = content.match(/<meta name="blog:tags" content="([^"]+)"/);
                    const readTimeMatch = content.match(/<meta name="blog:readTime" content="([^"]+)"/);

                    if (titleMatch && summaryMatch && dateMatch) {
                        blogPosts.push({
                            title: titleMatch[1],
                            summary: summaryMatch[1],
                            date: dateMatch[1],
                            author: authorMatch ? authorMatch[1] : "Unknown",
                            tags: tagsMatch ? tagsMatch[1].split(", ") : [],
                            readTime: readTimeMatch ? readTimeMatch[1] : "",
                            filename: file,
                            url: `blog/${file}`,
                        });
                    }
                }
            });
        } catch (error) {
            console.warn("Warning: Could not read blog directory:", error.message);
        }

        // Sort blog posts by date (newest first)
        blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Limit to latest 6 posts for the landing page
        const latestPosts = blogPosts.slice(0, 6);

        // Find the blog section and populate it
        tree.walk((node) => {
            if (node.tag === "div" && node.attrs && node.attrs.id === "blog-posts-container") {
                // Clear existing content and add blog posts
                node.content = latestPosts.map((post) => {
                    const tags = post.tags.map((tag) => ({
                        tag: "span",
                        attrs: {
                            class: "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded",
                        },
                        content: tag,
                    }));

                    return {
                        tag: "div",
                        attrs: { class: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4" },
                        content: [
                            {
                                tag: "div",
                                attrs: {
                                    class: "flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2",
                                },
                                content: [
                                    {
                                        tag: "span",
                                        content: new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }),
                                    },
                                    { tag: "span", content: "•" },
                                    { tag: "span", content: post.readTime },
                                ],
                            },
                            {
                                tag: "h3",
                                attrs: { class: "text-xl font-semibold text-gray-900 dark:text-white" },
                                content: post.title,
                            },
                            {
                                tag: "p",
                                attrs: { class: "text-gray-600 dark:text-gray-300 text-sm leading-relaxed" },
                                content: post.summary,
                            },
                            {
                                tag: "div",
                                attrs: { class: "flex flex-wrap gap-2 mb-4" },
                                content: tags,
                            },
                            {
                                tag: "a",
                                attrs: {
                                    href: post.url,
                                    class: "inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium",
                                },
                                content: "Read More →",
                            },
                        ],
                    };
                });
            }
            return node;
        });

        return tree;
    };
}
