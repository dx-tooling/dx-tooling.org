---
title: "The DX·Tooling projects are switching from dxcli to mise"
description: "Our goal is to provide a consistent Developer Experience when interacting with all our projects, regardless of the programming languages or tools used on them. We found 'mise' to be a better fit for this than our own 'dxcli' solution."
author: "Manuel Kießling"
published_time: "2025-11-01T12:26:00+00:00"
tags: [tooling, dxcli, mise]
readTime: "2 min read"
---

# Background

The idea behind the DX·Tooling projects, and especially the *Enterprise Tooling for Symfony* (ETFS) offerings that we are currently working on, is to provide well-prepared, streamlined, very-opinionated, and very-batteries-included foundations for serious business software projects.

A central pillar for this is *streamlined developer tooling* — that is, tooling which provides a well-defined, approachable, and easy-to-explore interface for everyone working on any of our codebases, or codebases based on our offerings.

*Streamlined* means that we don't want to force developers to jump between tools, ecosystems, and commands when handling typical day-to-day tasks.

For example, even mundane movements like "verify and enforce code quality", "run the test suites", "connect to the local database", "build frontend asset", or "update dependencies" already require jumping through at least a dozen different hoops across half a dozen software ecosystems, like PHPStan, prettier, PHP CS Fixer, ESLint, tsc, NVM, Node/NPM, the MySQL client, PHPUnit, Pest, Tailwind, Asset Mapper, the Symfony console, and so on.

# Our own solution

We already achieved a good level of streamlining with the introduction of [dxcli](https://github.com/dx-tooling/dxcli), our centralized developer experience command line interface tool, as a modern replacement for the veteran [Make](https://en.wikipedia.org/wiki/Make_(software)), extending it with relevant functionality like stackable tasks, installation of tasks from git repositories, self-update, and more.

This allowed developers to simply run `dx frontend`, instead of `npm run build` followed by `php bin/console tailwind:build` followed by `php bin/console asset-map:compile`, and allowed teams to share task definitions across project. Overall, it did improve the developer experience and worked quite well.

# Our new approach

However, it smelled of not-invented-here syndrome, and some research revealed that [mise-en-place](https://mise.jdx.dev/) does 300% of what dxcli does, while being much better designed and battle-tested.

We thus swallowed our pride and have begun migrating our projects over to mise — some first steps can be seen with https://github.com/dx-tooling/etfs-shared-bundle/pull/3 and https://github.com/dx-tooling/maas-webapp/pull/14.

# Why mise-en-place is an upgrade

While dxcli is mostly a composable task runner, which mise is too, the latter also brings project-specific tool- and env-var-management to the table.

Check out the [mise demo page and documentation](https://mise.jdx.dev/demo.html) for more info.
