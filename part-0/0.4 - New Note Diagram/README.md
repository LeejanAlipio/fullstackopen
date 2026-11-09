# New Note Diagram
A sequence diagram to show what is happening when a user submits a new note.

```mermaid
sequenceDiagram
  browser->>server: user submits a new notes through form
  Note right of server: receives the request
  Note right of server: saves the new note in the notes
  server-->browser: redirects to /new-notes
  browser->>server: fetch the new html file
  server-->browser: returns the html file
  note left of browser: reload the page with the new notes
```