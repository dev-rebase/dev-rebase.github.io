---
description: Understand how web applications communicate over networks and handle HTTP requests.
---

# Web

You've always focused on writing good code. You build beautiful components, create smooth user experiences, or develop clean APIs. Your current job keeps things simple: you build features, someone else handles deployment, and if there are network issues, the backend team deals with them.

But as you work on larger applications or work with distributed teams, you need to understand how your code communicates over the network. This is important whether you're a frontend, mobile, or backend developer. You realize that you can avoid learning about the web in some environments, but you can't avoid it forever if you want to grow your career. It's time to learn how the web really works.

## Why it matters

Web knowledge changes how you solve problems. Instead of saying "the API is broken" when something fails, you can check if it's a network timeout, a server error, or a client-side issue. You can look at browser developer tools and understand what the numbers mean. You can read server logs and know what went wrong.

This knowledge also changes how you build applications. You start thinking about what happens when the network is slow, when servers are far away, or when users have poor internet connections. You design your app to handle these real-world situations instead of just assuming everything will work perfectly.

Most importantly, you become more independent. You don't need to wait for other teams to tell you what's wrong. You can investigate issues yourself, suggest solutions, and make decisions about how to build features that work well on the internet.

## What is expected from you

As a developer, you should have a clear understanding of how a user's action (like clicking a link) results in a fully loaded application on their screen. This means you should be able to:

- Explain the lifecycle of a web request.
- Describe different ways to host and deploy a simple web project.
- Understand how a client application (web or mobile) connects to a backend.
- Define what an API is and what it's used for.
- Explain how a CDN helps improve application performance.

### Internet Fundamentals

Understanding the web's **request-response model** is one of the most important skills for a developer. It's the foundation for all communication over the network. Understanding this cycle is essential for finding issues, improving performance, and building secure applications.

The process involves a few key technical parts working in sequence:

- **DNS (Domain Name System):** The process starts with a DNS lookup. This changes a human-readable domain name (like `roadmap.sh`) into a server's IP address.
- **HTTP/S Request:** The client (like a browser or mobile app) sends an **HTTP** request to that IP address. This request includes a method (`GET`, `POST`, etc.), headers (containing extra information), and an optional body (containing data).
- **HTTP/S Response:** The server processes the request and returns an HTTP response. This includes a **[status code](https://httpstatuses.com/)** (`200 OK`, `404 Not Found`, `500 Internal Server Error`, etc.), headers, and an optional body containing the requested resource (like HTML or JSON).

For a developer, mastering this flow is very important. When an application fails, is it a DNS issue? A bad client request? A server-side bug returning a `500` error? Or a network problem? By using your browser's [Developer Tools](https://developer.chrome.com/docs/devtools), you can see this entire cycle in action, analyze headers, check status codes, and find exactly where things went wrong. This knowledge also allows you to improve performance by reducing request payloads or to add security features by changing HTTP headers.

### Hosting & Deployment

Code on your local machine is invisible to the world. The important skill of **deployment** is what makes your application public. As a developer, you need to understand how to take a project from your computer to a live, accessible server.

A great starting point is using modern deployment platforms like **[Netlify](https://www.netlify.com/)**, **[Vercel](https://vercel.com/)**, or **[GitHub Pages](https://pages.github.com/)**. These services are excellent for a few reasons:

- They teach you the important, modern workflow of deploying directly from a Git repository.
- They handle the complex parts for you, allowing you to get your projects online quickly and build confidence.

However, it's important to know that these platforms intentionally **hide the details**. As you advance, you must look inside this "black box". A good developer should eventually understand the concepts that these platforms manage automatically:

- What a Web Server is (like [Nginx](https://nginx.org/) or [Apache](https://httpd.apache.org/)) and how it handles requests.
- The basics of a Linux server environment.
- How SSL certificates are created and renewed for HTTPS.
- How to set up a build pipeline to compile your code on a server. More on this in the [CI/CD](./ci-cd.md) section.

Think of it as a learning journey. Start with the automated platforms to master the modern deployment _workflow_. As you grow, the next step is to manually deploy a project to understand what's happening underneath. This is where you'll encounter the traditional hosting options: from basic Shared Hosting, to a more hands-on VPS (Virtual Private Server), and eventually the powerful environments offered by Cloud Hosting providers like [AWS](https://aws.amazon.com/), [Google Cloud](https://cloud.google.com/), and [Azure](https://azure.microsoft.com/).

### The Backend & APIs

For many client-side developers, the backend can feel like a black box. You send a request and get a response, but what happens in between? Understanding the server's inner workings is a superpower. It helps you debug issues faster, work better with others, and build stronger applications without having to "wait for the backend team".

The relationship starts with the **client-server architecture**. Your frontend or mobile app is the **client**, responsible for the user interface. The **backend** is the main server that handles the heavy lifting. This separation is powerful because it allows multiple different clients (web, iOS, Android) to connect to a single, consistent source of logic and data.

The bridge between these two worlds is the **API (Application Programming Interface)**. It's a formal contract that defines the rules of communication. Most modern APIs are **[REST APIs](https://restfulapi.net/)**, which use standard HTTP methods and **[JSON](https://www.json.org/)** to create, retrieve, update, or delete data.

So, when your app sends an API request, what's actually happening inside that "black box"? Typically, a few things:

1. **Authentication & Authorization:** The first thing the backend often does is check _who you are_ and _what you're allowed to do_. It looks at the request, often looking for an `Authorization` header containing a token (like a [JWT](https://jwt.io/)). This step determines if the request should continue or be rejected with a `401 Unauthorized` or `403 Forbidden` error.

2. **Business Logic Execution:** This is the "brain" of the backend. It's the code that receives your request and performs the main task. For example, if you're building an e-commerce app, the business logic might check that an item is in stock, calculate the total price with taxes, and apply a discount code.

3. **Database Interaction:** Business logic almost always needs to interact with a database. The backend code will run queries to fetch the data you requested (like a user's profile) or write new data that you sent (like a new comment on a post).

As a client-side developer, you don't need to _write_ this backend code, but knowing it exists is very important. When you get a `400 Bad Request` error, you can guess that your app sent invalid data that failed the business logic validation. If you get a `500 Internal Server Error`, you know the problem is likely on the server itself—perhaps a database connection failed. This understanding allows you to read API documentation (like [Swagger/OpenAPI specs](https://swagger.io/specification/)) effectively and handle responses well, making you a far more independent and capable developer.

## Resources

### English Resources

- [🎥 Hussein Nasser Youtube Channel](https://youtube.com/@hnasr)
- [🎥 Web Dev Simplified Youtube Channel](https://youtube.com/@WebDevSimplified)
- [🎥 freeCodeCamp.org Youtube Channel](https://youtube.com/@freecodecamp)
- [📚 How does the Internet Work?](https://cs.fyi/guide/how-does-internet-work)

### Arabic Resources

- [🎥 غريب الشيخ || Ghareeb Elshaikh Youtube Channel](https://www.youtube.com/@GhareebElshaikh)
- [🎥 أكاديمية ترميز Youtube Channel](https://www.youtube.com/@tarmeez)
- [🎥 Elzero Web School Youtube Channel](https://youtube.com/@ElzeroWebSchool)
