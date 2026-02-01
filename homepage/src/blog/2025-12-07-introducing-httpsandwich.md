---
title: "Introducing httpSandwich: A Transparent HTTP Proxy for Debugging"
description: "httpSandwich is a lightweight HTTP monitor-in-the-middle tool that sits between your client and server, capturing and displaying all HTTP traffic in real-time. Perfect for debugging API integrations and troubleshooting network issues."
author: "Manuel Kießling"
published_time: "2025-12-07T22:00:00+00:00"
tags: [tooling, http, debugging, cli, proxy]
readTime: "3 min read"
---

# The Problem

When debugging HTTP-based integrations — whether it's a frontend talking to a backend API, a microservice communicating with another service, or a mobile app connecting to your server — you often need to see exactly what's going over the wire.

Existing solutions like browser DevTools only work for browser-based clients. Tools like Wireshark are powerful but complex. And heavyweight proxies like Charles or mitmproxy require significant setup and configuration.

What if you just want to quickly see what HTTP requests are being made, without changing your code or spending time on configuration?


# Enter httpSandwich

[httpSandwich](https://github.com/dx-tooling/httpSandwich) is our answer to this problem. It's a zero-config, terminal-native HTTP proxy that you can drop in between any client and server to monitor traffic in real-time.

The name says it all: your HTTP traffic gets "sandwiched" between the proxy, giving you full visibility into requests and responses.


# Key Features

## Zero Configuration

Just tell httpSandwich what port to listen on and where to forward traffic:

```bash
npx httpsandwich between 8000 and localhost:3000
```

That's it. Point your client to port 8000 instead of 3000, and you're monitoring traffic.


## Six Detail Levels

Not every debugging session needs the same amount of information. httpSandwich offers six detail levels, from minimal dots (just to confirm traffic is flowing) to full headers and bodies:

| Level | Output |
|-------|--------|
| 1 | Dots only (minimal) |
| 2 | Timestamp + status code |
| 3 | Timestamp + status + method + path (default) |
| 4 | Level 3 + headers (truncated) |
| 5 | Level 4 + full headers + body preview |
| 6 | Full headers + complete body |

Use `+` and `-` keys to adjust the level in real-time while the proxy is running.


## Interactive TUI

httpSandwich provides a beautiful terminal UI that adapts to your terminal size. Use arrow keys to navigate through captured requests, and press `i` to open any request in your browser for detailed inspection.

The browser inspect view includes:
- Complete request and response headers
- Formatted JSON bodies with syntax highlighting
- Status code with semantic coloring
- Request duration and timing information


## Automatic Persistence

All captured exchanges are automatically saved as JSON files, so you can analyze past sessions or share them with colleagues for debugging.


# Quick Start

Prerequisites: Node.js 20 or higher.

```bash
# Monitor traffic to a local API server
npx httpsandwich between 8080 and localhost:3000

# Proxy to a remote service
npx httpsandwich between 9000 and api.example.com:443

# Start with minimal output
npx httpsandwich between 8000 and 5009 --level 1
```


# Why We Built This

At DX·Tooling, we believe that developer tools should be simple, focused, and get out of your way. httpSandwich embodies this philosophy:

- **No installation required** — just `npx` and go
- **No configuration files** — sensible defaults that work
- **No GUI overhead** — terminal-native for developers who live in the terminal
- **No dependencies on external services** — everything runs locally

Whether you're debugging a flaky API integration, understanding how a third-party service works, or just curious about what your application is doing on the network, httpSandwich is there to help.

Check out the [GitHub repository](https://github.com/dx-tooling/httpSandwich) for more details, and let us know what you think!
