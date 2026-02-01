---
title: "Deep Dive: Introducing SiteBuilder"
description: "A detailed introduction covering motivation, features, and technical architecture of SiteBuilder."
author: "DX·Tooling"
published_time: "2026-01-25T14:00:00+00:00"
tags: [SiteBuilder, Introduction, Architecture]
readTime: "1 min read"
---

![SiteBuilder: content editor, landing page result, and GitHub PR for the changes.](https://dx-tooling.org/sitebuilder-assets/webapp-screenshots/web-versions/SiteBuilder-content-editor-landing-page-preview-and-GitHub-PR-for-changes-1600x987.png)

*Describe in chat → see the result → changes land in a GitHub PR. The full loop.*

*SiteBuilder is the content management tool that creators love to use and engineering loves to support.*

SiteBuilder is an open-source tool that lets non-technical teams edit web content through chat while engineers keep Git workflows and full control. Marketing describes changes in plain language; an AI agent makes the edits; every change goes through a pull request for review.

Our contributor Manuel Kießling has published a detailed introduction to SiteBuilder on his personal blog.

The article covers:

- **The motivation**: Why content changes often become engineering bottlenecks, and the limitations of traditional solutions like CMSes
- **How SiteBuilder works**: Chat-based editing, Git integration, and PR workflows
- **Key features**: Isolated workspaces, configurable environments, real-time preview, and cost transparency
- **Technical architecture**: Symfony 7.4, two-layer workspace isolation, and the vertical architecture approach

The post also includes a demo video showing a real editing session.

**[Read the full article on manuel.kiessling.net →](https://manuel.kiessling.net/2026/01/25/introducing-sitebuilder/)**

Whether you're considering SiteBuilder for your team or want to understand the design decisions behind it, this is a comprehensive starting point.
