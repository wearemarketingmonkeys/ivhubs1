const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();

const buildPath = path.resolve(__dirname, "./dist"); // Use `dist` if you used Vite default



// Serve static assets
app.use(express.static(buildPath, {
  index: false, // prevent Express from auto-serving index.html
  maxAge: 0, // cache busting handled by hashed filenames
}));

// Helper to render HTML with dynamic replacements
function renderPage(req, res, title, description, image, url) {
  const indexFile = path.resolve(buildPath, "index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading index.html:", err);
      return res.status(500).send("Internal Server Error");
    }

    const updatedHtml = data
      .replace(/TITLE/g, title)
      .replace(/DESCRIPTION/g, description)
      .replace(/IMG/g, image)
      .replace(/URL/g, url);



    res.send(updatedHtml);
  });
}

app.use((req, res, next) => {
  res.locals.domain = `${req.protocol}://${req.get('host')}`;
  next();
});


// Route handlers with dynamic meta
app.get("/", (req, res) => {
  renderPage(req, res, "IV Wellness Lounge | Premium IV Therapy & Aesthetic Services Dubai", "IV Wellness Lounge is a premium wellness lounge offering aesthetic services and IV Infusion therapy with proven results, within your means.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/about-us", (req, res) => {
  renderPage(req, res, "Who We Are", "Your partner for safe and effective beauty &amp; wellness. We demystify cosmetic dermatology through medically-tested procedures for natural results.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/packages", (req, res) => {
  renderPage(req, res, "Explore Packages", "IV Wellness Lounge is a premium wellness lounge offering aesthetic services and IV Infusion therapy with proven results, within your means.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

// Fallback for all other SPA routes
app.use((req, res) => {
  renderPage(req, res, "IV Wellness Lounge | Premium IV Therapy & Aesthetic Services Dubai", "IV Wellness Lounge is a premium wellness lounge offering aesthetic services and IV Infusion therapy with proven results, within your means.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

// Start server
const server = app.listen(PORT, () => {
  const actualPort = server.address().port;
  console.log(`✅ Server running at http://localhost:${actualPort}`);
});
