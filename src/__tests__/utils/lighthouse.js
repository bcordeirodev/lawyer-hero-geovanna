const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const fs = require("fs");
const path = require("path");

/**
 * Run Lighthouse performance audit
 */
async function runLighthouse() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });

  const options = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
  };

  const runnerResult = await lighthouse("http://localhost:3000", options);

  // The gathered artifacts are typically available on the result
  const reportHtml = runnerResult.report;
  const scores = runnerResult.lhr.categories;

  // Save report
  const reportsDir = path.join(process.cwd(), "lighthouse-reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  fs.writeFileSync(
    path.join(reportsDir, `lighthouse-report-${timestamp}.html`),
    reportHtml
  );

  // Log scores
  console.log("Lighthouse Scores:");
  console.log("Performance:", scores.performance.score * 100);
  console.log("Accessibility:", scores.accessibility.score * 100);
  console.log("Best Practices:", scores["best-practices"].score * 100);
  console.log("SEO:", scores.seo.score * 100);

  // Fail if performance is below threshold
  const performanceScore = scores.performance.score * 100;
  if (performanceScore < 90) {
    console.error(
      `Performance score ${performanceScore} is below threshold of 90`
    );
    process.exit(1);
  }

  await chrome.kill();
}

if (require.main === module) {
  runLighthouse().catch(console.error);
}

module.exports = { runLighthouse };
