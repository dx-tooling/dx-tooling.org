---
title: "Introducing SiteBuilder: AI-Powered Content Editing for Teams"
description: "SiteBuilder bridges the gap between ease of use and engineering control, letting non-technical teams edit web content through natural language while maintaining Git workflows and code review."
author: "Manuel Kießling"
published_time: "2026-01-25T10:00:00+00:00"
tags: [SiteBuilder, AI, Content Editing, Git, Symfony]
readTime: "4 min read"
---

# The Problem We're Solving

If you're an engineer on a team with marketing, content, or product people, you've probably experienced this: someone needs to update a headline, fix a typo, or add a new testimonial to a landing page. It's a 30-second change, but it requires you to context-switch, make the edit, commit, push, and deploy.

Multiply that by dozens of requests per week, and suddenly you're spending significant time being a human content proxy instead of building features.

The obvious solutions have obvious problems:

- **Give everyone access to the codebase?** Security risk, potential for breaking changes, and most non-technical folks don't want to learn Git anyway.
- **Use a traditional CMS?** You lose version control, code review, and the ability to maintain your site as code.
- **Use a headless CMS?** Complex setup, another system to maintain, and you're still coupling your content to a third-party service.

# Enter SiteBuilder

SiteBuilder takes a different approach: it lets non-technical users describe content changes in natural language, while keeping everything in Git with proper review workflows.

Here's how it works:

1. **Connect your repository.** SiteBuilder works with your existing GitHub repositories. No migration needed.

2. **Users describe changes in chat.** Instead of learning HTML or a CMS interface, content editors simply describe what they want: "Update the hero headline to 'Ship Faster with AI'" or "Add a new testimonial from Acme Corp."

3. **AI makes the changes in isolation.** Each editing session happens in a Docker-isolated workspace with its own Git branch. No risk of affecting production.

4. **Review and merge via GitHub.** When changes are ready, SiteBuilder creates a Pull Request. Your existing review process applies—engineers can review, comment, and approve just like any other code change.

# Why This Matters

## For Content Teams

- Edit content without learning code or complex CMS interfaces
- See changes immediately with live preview
- No waiting for engineering bandwidth for simple updates
- Transparent process—you can see exactly what changed

## For Engineering Teams

- Stay in control with Git-backed workflows
- Review all changes before they go live
- No new systems to maintain—it's just Git
- Remove yourself as the bottleneck for content updates

## For Organizations

- Faster content iteration without sacrificing quality
- Clear audit trail of all changes
- No vendor lock-in—your content stays in your repository
- Transparent AI costs and usage tracking

# Technical Architecture

SiteBuilder is built with:

- **Symfony 7.4** on the backend with a clean vertical slice architecture
- **Docker** for workspace isolation—each editing session runs in its own container
- **AI agents** powered by LLMs that understand code and can make precise edits
- **GitHub integration** for seamless PR workflows

The application follows our philosophy of providing well-prepared, streamlined, and batteries-included foundations for serious software projects.

# What's Next

SiteBuilder is currently in active development. We're working on:

- Support for more Git providers (GitLab, Bitbucket)
- Team collaboration features with role-based permissions
- Custom AI agent configurations for different project types
- Self-hosted deployment options

# Try It Out

SiteBuilder is open source and available on GitHub. We'd love your feedback as we continue to develop this tool.

- [View on GitHub](https://github.com/dx-tooling/sitebuilder-webapp)
- [SiteBuilder Homepage](https://sitebuilder.dx-tooling.org)

If you're tired of being the content bottleneck for your team, give SiteBuilder a try. And if you have ideas for how we can make it better, open an issue or reach out—we're building this for teams like yours.
