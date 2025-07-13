# Observability

You've heard about monitoring, logging, and metrics, but your current application is simple enough that you can usually figure out problems by looking at the code or asking users what went wrong. But as your application serves more users and becomes more complex, debugging production issues without proper observability becomes nearly impossible. You realize that while you can manage simple applications without observability, most professional environments require it. It's time to make your applications observable.

## Why it matters

Observability helps you move from being reactive to proactive. Instead of waiting for users to report a bug or for a system to crash, you can identify potential issues and slow parts before they impact the user experience. Imagine you've deployed a new feature for an e-commerce site. Suddenly, users are reporting that adding items to the cart is slow. Without observability, you'd be guessing the cause. Is it a slow front-end rendering component? A frozen UI thread in the mobile app? A network issue? A backend API? A database query?

Observability is crucial for both application and infrastructure monitoring. While DevOps teams focus on infrastructure observability (servers, networks, databases), the focus here is on application-level observability which helps you understand how the application behaves in production.

With good observability, you can look at the data your system is producing and find the exact part of the application, code, or infrastructure that is causing the slowdown. This practice is important for:

- Faster Debugging: Quickly find the root cause of problems in production, reducing downtime and user frustration.
- Better Performance: Understand how your code behaves under real-world load, allowing you to optimize resource usage and improve response times.
- Improved User Experience: By spotting and resolving issues before users notice them, you deliver a more reliable and satisfying product.
- Efficient Development: When you can see the impact of your changes immediately, the entire development cycle becomes faster and more efficient.

## What is expected from you

As a developer, you are at the heart of building observable systems. Your responsibility is to ensure that the application you write—whether it's front-end, back-end, or mobile—produces the necessary data, or ["telemetry"](https://www.logicmonitor.com/blog/what-is-telemetry) that allows you and your team to understand its behavior. This telemetry is typically broken down into three main pillars: Metrics, Logs, and Traces.

### Metrics

Metrics are numerical measurements of your system's health and performance over time. They are efficient to store and query, making them ideal for dashboards and alerting.

For backend services, the four "Golden Signals" are a classic starting point:

- **Latency:** The time it takes to serve an API request.
- **Traffic:** The number of requests per second a service is receiving.
- **Errors:** The rate of failed requests (like HTTP 500s).
- **Saturation:** How "full" a service is (like CPU or memory usage).

For front-end and mobile developers, the same principles apply, but the key metrics are different:

- **Web Vitals & App Performance:** For web, this includes Core Web Vitals like LCP and CLS. For mobile, this includes App Start-up Time (cold/warm), screen transition speed, and the rate of slow or frozen frames.
- **Client-Side Errors:** The rate of JavaScript errors or unhandled exceptions and crashes (including ANRs - Application Not Responding) in your mobile app.
- **Resource Usage:** How much memory or battery your application uses on a user's device.

### Logs

Logs are timestamped records of events. While metrics tell you _what_ is happening (like "the error rate is high"), logs provide the "why" with detailed, event-specific context. This is just as important for client-side applications as it is for the backend. Logs from a browser or mobile app can capture user interactions, device state (OS version, battery level), and network request details, helping you debug issues you could never reproduce on your own machine.

Modern applications rely on **structured logs**. Instead of writing plain text messages, you write logs in a consistent, machine-readable format like JSON.

An unstructured log might look like this: `[2025-06-27 10:30:00] ERROR: Failed to process payment for user 123. Order ID: 456.`

A structured log, on the other hand, would break this information down into key-value pairs (`"user_id": "123"`, `"order_id": "456"`), making it far more useful for querying and analysis, regardless of whether the log came from a Python server or a user's browser.

### Traces

A trace provides an end-to-end view of a request or user action as it travels through the different parts of your system. It allows you to see the entire journey, identify where slow parts occurred, and see how different services and components interact.

Each step in the journey is called a **span**. A trace is a collection of spans that form a complete story. For example, a trace for an online food order might look like this:

- Span A: User taps 'Place Order' in the mobile app.
- Span B: The app makes an API request to the Gateway (child of Span A).
- Span C: Authentication service validates the user (child of Span B).
- Span D: Order service creates the order (child of Span B).
- Span E: Database query to save the order (child of Span D).

If the order process is slow, the trace will visually show which span took the most time, immediately telling you whether to investigate the mobile app's UI thread, a specific micro-service, or the database.

### Instrumentation

Your application won't produce metrics, logs, and traces on its own. **Instrumentation** is the process of adding code to your application to generate this telemetry.

You can do this in two ways:

- **Manual Instrumentation:** You explicitly write code to record specific events, like when a user adds an item to a cart or a complex algorithm completes.
- **Automatic Instrumentation:** You use libraries that automatically wrap common frameworks (like HTTP servers, database clients, or front-end page loads and mobile app screen transitions) to generate telemetry for you.

[OpenTelemetry (OTel)](https://opentelemetry.io/) has become the industry standard for instrumentation. It's a vendor-neutral set of APIs and libraries that allows you to instrument your code once and send the data to any analysis tool (like [Jaeger](https://www.jaegertracing.io/), [Prometheus](https://prometheus.io/), or [Datadog](https://www.datadoghq.com/)) without being locked to one vendor.

### Alerting and Incident Response

Observability isn't just about having dashboards; it's about taking action when something goes wrong. **Alerting** is the process of automatically notifying the team when a metric crosses a critical threshold. This isn't just for the backend. An alert could be "CPU utilization is above 90%" or "Crash-free user rate for the new iOS version has dropped below 99.5%."

When an alert fires, it triggers an **incident**. As a developer, you will likely be part of the response team, especially if the issue is related to a service or application you own—be it a micro-service, a mobile app, or a web front-end.

The goal of incident response is to restore service as quickly as possible. Afterward, the team conducts a "blameless retrospective" to understand the root cause and prevent the issue from happening again. Your insights, informed by data from across the full stack, are very valuable in this process.

## Observability Platforms

While you can use separate tools for metrics, logs, and traces, many teams use observability platforms that combine everything in one place. These platforms make it easier to see the full picture of your application's health without jumping between different tools.

**[Grafana](https://grafana.com/)** is a popular open-source platform that excels at creating dashboards and visualizations. You can connect it to different data sources like Prometheus for metrics, Elasticsearch for logs, and Jaeger for traces. Grafana also provides alerting features, so you can get notified when something goes wrong. Many developers start with Grafana because it's free and has a large community.

**[Datadog](https://www.datadoghq.com/)** is a commercial platform that provides a complete observability solution. It can automatically collect metrics, logs, and traces from your applications with minimal setup. Datadog includes pre-built dashboards, intelligent alerting, and powerful search capabilities. While it costs money, it saves time because everything works together out of the box.

Both platforms help you implement the observability concepts we discussed without having to manage multiple separate tools. They provide the dashboards to visualize your metrics, the search capabilities to explore your logs, and the tracing views to understand your application's behavior.

## Resources

### English Resources

- [🎥 Observability vs. APM vs. Monitoring](https://youtu.be/CAQ_a2-9UOI?si=eGDon4VEACoVRnsz)
- [🎥 Introduction to Observability - Course by Datadog](https://learn.datadoghq.com/courses/introduction-to-observability)
- [🎥 Grafana for Beginners](https://youtube.com/playlist?list=PLDGkOdUX1Ujo27m6qiTPPCpFHVfyKq9jT&si=a9Y73o_tNq9nGkAR)
- [📚 Getting Started with Metrics](https://learn.datadoghq.com/courses/getting-started-metrics)

### Arabic Resources

- [🎥 Prometheus Monitoring Explained - شرح Prometheus](https://youtu.be/G6_PO6rQ-aM?si=yeGIE1EPdrqO0rey)
- [🎥 Monitoring & Observability - تيك بودكاست بالعربي](https://www.youtube.com/live/iNO1bNaYAAU?si=RCzvdXHQIDBKwmh6)
- [🎥 Observability (بالعربي)](https://youtu.be/yMaSzA1Zohk?si=vja_e9Ft-OU_wFml)
- [🎥 Introduction to observability (بالعربي)](https://youtu.be/YQreKGSTmdE?si=oL2vjsLDjGoB2mQg)
- **[📚 مقالات اقرأ-تك](https://eqraatech.com/tag/monitoring/)**
