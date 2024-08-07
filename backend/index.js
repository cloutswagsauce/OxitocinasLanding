const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Handle API routes
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // Custom route to serve index.tsx
  server.get('/', (req, res) => {
    return app.render(req, res, '/index');
  });

  // Serve static files from the 'public' directory
  server.use(express.static(path.join(__dirname, '../public')));

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Server running on port ${PORT}`);
  });
});
