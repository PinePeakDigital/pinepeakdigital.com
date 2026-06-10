import pa11y from "pa11y";

const routes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/pricing",
  "/404",
];

const BASE = process.env.BASE_URL || "http://localhost:4321";

let totalIssues = 0;
let scanErrors = 0;

for (const route of routes) {
  const url = `${BASE}${route}`;
  console.log(`\n--- ${url} ---`);
  try {
    const results = await pa11y(url, {
      runners: ["htmlcs"],
    });
    if (results.issues.length === 0) {
      console.log("  No issues found.");
    } else {
      for (const issue of results.issues) {
        console.log(`  [${issue.type}] ${issue.message}`);
        console.log(`    ${issue.selector}`);
      }
      totalIssues += results.issues.length;
    }
  } catch (err) {
    scanErrors += 1;
    console.error(`  Error: ${err.message}`);
  }
}

console.log(`\n=== Total issues: ${totalIssues} ===`);
if (scanErrors > 0) {
  console.error(`=== Total scan errors: ${scanErrors} ===`);
}
process.exit(totalIssues > 0 || scanErrors > 0 ? 1 : 0);
