# Single Page App Diagram

```mermaid
sequenceDiagram
  browser->>server: GET all resources needed
  Note right of server: receives the request
  server-->browser: return all the resources
  Note left of browser: display the ui
```