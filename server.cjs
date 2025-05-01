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

app.get("/explore-us/offers", (req, res) => {
  renderPage(req, res, "Offers", "IV Wellness Lounge is a premium wellness lounge offering aesthetic services and IV Infusion therapy with proven results, within your means.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips", (req, res) => {
  renderPage(req, res, "Drips | IV Wellness Lounge", "Tailored IV drip therapy for your well-being. Choose, schedule, consult, and rejuvenate. Feel your best with our personalized nutrient infusions.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/beauty-hub", (req, res) => {
  renderPage(req, res, "Beauty Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Enhance your well-being with Beauty Hub IV Drip at IV Wellness Lounge. Experience premium IV therapy in Dubai tailored for your health and vitality. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/boost-hub", (req, res) => {
  renderPage(req, res, "Boost Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Revitalize your energy levels with the Boost Hub IV Drip at IV Wellness Lounge. Experience tailored IV therapy in Dubai designed to enhance your vitality. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/cleanse-hub", (req, res) => {
  renderPage(req, res, "Cleanse Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Detoxify and rejuvenate with the Cleanse Hub IV Drip at IV Wellness Lounge. Personalized IV therapy in Dubai to support your body's natural cleansing processes. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/energy-hub", (req, res) => {
  renderPage(req, res, "Energy Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Boost your stamina and combat fatigue with the Energy Hub IV Drip at IV Wellness Lounge. Tailored IV therapy in Dubai to energize your day. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/fitness-hub", (req, res) => {
  renderPage(req, res, "Fitness Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Enhance your workout recovery with the Fitness Hub IV Drip at IV Wellness Lounge. Customized IV therapy in Dubai to support your fitness goals. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/glow-hub", (req, res) => {
  renderPage(req, res, "Glow Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Illuminate your skin from within with the Glow Hub IV Drip at IV Wellness Lounge. Experience radiant skin through personalized IV therapy in Dubai. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/hairfall-defense", (req, res) => {
  renderPage(req, res, "Hairfall Defense | IV Therapy Drips | IV Wellness Lounge Dubai", "Strengthen your hair and reduce hair fall with the Hairfall Defense IV Drip at IV Wellness Lounge. Tailored IV therapy in Dubai for healthier hair. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/immune-hub", (req, res) => {
  renderPage(req, res, "Immune Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Boost your immune system with the Immune Hub IV Drip at IV Wellness Lounge. Personalized IV therapy in Dubai to enhance your body's defenses. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/womens-health-hub", (req, res) => {
  renderPage(req, res, "Women's Health Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Support your hormonal balance and overall well-being with the Women's Health Hub IV Drip at IV Wellness Lounge. Customized IV therapy in Dubai for women's health. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/youth-hub", (req, res) => {
  renderPage(req, res, "Youth Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Rejuvenate your body and spirit with the Youth Hub IV Drip at IV Wellness Lounge. Tailored IV therapy in Dubai to promote vitality and youthfulness. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/zeus-drip", (req, res) => {
  renderPage(req, res, "Zeus Drip | IV Therapy Drips | IV Wellness Lounge Dubai", "Unleash your inner strength with the Zeus Drip at IV Wellness Lounge. Personalized IV therapy in Dubai designed for peak performance. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/queen-victoria-drip", (req, res) => {
  renderPage(req, res, "Queen Victoria Drip | IV Therapy Drips | IV Wellness Lounge Dubai", "Experience regal rejuvenation with the Queen Victoria Drip at IV Wellness Lounge. Tailored IV therapy in Dubai to enhance your vitality and wellness. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/chelation-therapy", (req, res) => {
  renderPage(req, res, "Chelation Therapy | IV Therapy Drips | IV Wellness Lounge Dubai", "Detoxify your body with Chelation Therapy at IV Wellness Lounge. Personalized IV therapy in Dubai to support your overall health. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/performance-support", (req, res) => {
  renderPage(req, res, "Performance Support | IV Therapy Drips | IV Wellness Lounge Dubai", "Enhance your performance with the Performance Support IV Drip at IV Wellness Lounge. Customized IV therapy in Dubai for optimal results. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/royal-cleanse", (req, res) => {
  renderPage(req, res, "Royal Cleanse | IV Therapy Drips | IV Wellness Lounge Dubai", "Purify your system with the Royal Cleanse IV Drip at IV Wellness Lounge. Tailored IV therapy in Dubai for a refreshed body. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/ramadan-hub", (req, res) => {
  renderPage(req, res, "Ramadan Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Stay energized during Ramadan with the Ramadan Hub IV Drip at IV Wellness Lounge. Personalized IV therapy in Dubai to support your fasting. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/recovery-hub", (req, res) => {
  renderPage(req, res, "Recovery Hub | IV Therapy Drips | IV Wellness Lounge Dubai", "Recover and rejuvenate with the Recovery Hub IV Drip at IV Wellness Lounge. Customized IV therapy in Dubai for your well-being. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/detox-drip", (req, res) => {
  renderPage(req, res, "Detox Drip | IV Therapy Drips | IV Wellness Lounge Dubai", "Detoxify your body with the Detox Drip at IV Wellness Lounge. Tailored IV therapy in Dubai to cleanse and revitalize. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/hydration-hub-express", (req, res) => {
  renderPage(req, res, "Hydration Hub Express | IV Therapy Drips | IV Wellness Lounge Dubai", "Quickly rehydrate with the Hydration Hub Express IV Drip at IV Wellness Lounge. Personalized IV therapy in Dubai for instant refreshment. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/nad-plus-100mg", (req, res) => {
  renderPage(req, res, "NAD+ 100mg | IV Therapy Drips | IV Wellness Lounge Dubai", "Boost your energy with NAD+ 100mg IV Drip at IV Wellness Lounge. Customized IV therapy in Dubai for enhanced vitality. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/nad-plus-250mg", (req, res) => {
  renderPage(req, res, "NAD+ 250mg | IV Therapy Drips | IV Wellness Lounge Dubai", "Elevate your wellness with NAD+ 250mg IV Drip at IV Wellness Lounge. Tailored IV therapy in Dubai for optimal health. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/drips/nad-plus-500mg", (req, res) => {
  renderPage(req, res, "NAD+ 500mg | IV Therapy Drips | IV Wellness Lounge Dubai", "Maximize your vitality with NAD+ 500mg IV Drip at IV Wellness Lounge. Personalized IV therapy in Dubai for peak performance. Book now!", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/iv-therapy/boosters", (req, res) => {
  renderPage(req, res, "Boosters | IV Wellness Lounge", "Elevate your well-being with our range of vitamin boosters. Choose from Vitamin C, Super B&#x27;s, CoQ10, MIC, and Vitamin D boosters to revitalize your body.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/aesthetic", (req, res) => {
  renderPage(req, res, "Aesthetic Services | IV Wellness Lounge", "Experience our skin, body, and wellness treatments for a radiant summer. From microneedling to facial treatments, discover a range of options.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
});

app.get("/contact-us", (req, res) => {
  renderPage(req, res, "Contact | IV Wellness Lounge", "Have questions or feedback? Feel free to contact us. Our team is here to assist you. Reach out today for prompt and friendly support.", `${res.locals.domain}/og.png`, `${res.locals.domain}/`);
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
