#!/usr/bin/env node

/**
 * Local EmailJS Configuration Test
 * Tests if EmailJS is configured correctly in the local environment
 */

const fs = require("fs");
const path = require("path");

// ============================================================================
// CONFIGURATION
// ============================================================================

const ENV_FILE = ".env.local";
const REQUIRED_VARS = [
  "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
  "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
  "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
  "NEXT_PUBLIC_CONTACT_EMAIL",
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

function print(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function printHeader(title) {
  console.log("\n" + "=".repeat(70));
  print(title, "bold");
  console.log("=".repeat(70));
}

function printStep(message) {
  print(`📋 ${message}`, "blue");
}

function printSuccess(message) {
  print(`✅ ${message}`, "green");
}

function printError(message) {
  print(`❌ ${message}`, "red");
}

function printWarning(message) {
  print(`⚠️  ${message}`, "yellow");
}

// ============================================================================
// MAIN FUNCTIONS
// ============================================================================

function checkEnvFile() {
  printStep("Checking for .env.local file...");

  if (!fs.existsSync(ENV_FILE)) {
    printError(`.env.local file not found`);
    printWarning("Create .env.local file with your EmailJS credentials");
    return null;
  }

  printSuccess(".env.local file found");
  return true;
}

function loadEnvironmentVariables() {
  printStep("Loading environment variables...");

  try {
    const envContent = fs.readFileSync(ENV_FILE, "utf8");
    const envVars = {};

    envContent.split("\n").forEach((line) => {
      const [key, ...values] = line.split("=");
      if (key && values.length > 0) {
        envVars[key.trim()] = values.join("=").trim().replace(/['"]/g, "");
      }
    });

    printSuccess("Environment variables loaded");
    return envVars;
  } catch (error) {
    printError(`Failed to load environment variables: ${error.message}`);
    return null;
  }
}

function validateEmailJSConfig(envVars) {
  printStep("Validating EmailJS configuration...");

  const missing = [];
  const invalid = [];

  REQUIRED_VARS.forEach((varName) => {
    const value = envVars[varName];

    if (!value || value.includes("your_") || value.includes("example")) {
      missing.push(varName);
    } else {
      // Validate format
      if (
        varName === "NEXT_PUBLIC_EMAILJS_SERVICE_ID" &&
        !value.startsWith("service_")
      ) {
        invalid.push(`${varName} should start with 'service_'`);
      } else if (
        varName === "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID" &&
        !value.startsWith("template_")
      ) {
        invalid.push(`${varName} should start with 'template_'`);
      } else if (
        varName === "NEXT_PUBLIC_CONTACT_EMAIL" &&
        !value.includes("@")
      ) {
        invalid.push(`${varName} should be a valid email address`);
      } else {
        printSuccess(`${varName} is configured`);
      }
    }
  });

  return { missing, invalid };
}

function generateSampleEnvFile() {
  printStep("Generating sample .env.local file...");

  const sampleContent = `# ============================================================================
# LAWYER HERO - LOCAL ENVIRONMENT VARIABLES
# ============================================================================
# Copy this template and fill in your EmailJS credentials
# Get these from: https://emailjs.com
# ============================================================================

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com

# App Configuration (Optional - has defaults)
NEXT_PUBLIC_APP_NAME=LawyerHero
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Development Configuration
NODE_ENV=development
NEXT_PUBLIC_DEBUG_MODE=true

# Feature Flags
NEXT_PUBLIC_ENABLE_DARK_MODE=true
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION=true

# ============================================================================
# INSTRUCTIONS:
# 1. Replace all "your_xxx_here" values with your actual EmailJS credentials
# 2. Get credentials from https://emailjs.com dashboard
# 3. Save this file as .env.local (remove .sample from filename)
# 4. Run: npm run dev
# ============================================================================
`;

  try {
    fs.writeFileSync(".env.local.sample", sampleContent);
    printSuccess("Sample .env.local.sample file created");
    printWarning(
      "Copy .env.local.sample to .env.local and fill in your credentials"
    );
  } catch (error) {
    printError(`Failed to create sample file: ${error.message}`);
  }
}

function showHelpInstructions(missing, invalid) {
  printHeader("CONFIGURATION HELP");

  if (missing.length > 0) {
    printError(`Missing variables: ${missing.join(", ")}`);
    console.log("\nTo get EmailJS credentials:");
    console.log("1. Go to https://emailjs.com");
    console.log("2. Create an account and login");
    console.log("3. Create an Email Service (Gmail, Outlook, etc.)");
    console.log("4. Create an Email Template");
    console.log("5. Get your Public Key from Account > General");
    console.log("6. Add these values to your .env.local file");
  }

  if (invalid.length > 0) {
    printError("Invalid variable formats:");
    invalid.forEach((issue) => printError(`  ${issue}`));
  }

  console.log("\nExample .env.local configuration:");
  console.log("NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123");
  console.log("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789");
  console.log("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=pk_abcdef123456");
  console.log("NEXT_PUBLIC_CONTACT_EMAIL=your@email.com");
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

function main() {
  printHeader("EMAILJS LOCAL CONFIGURATION TEST");

  // Check if .env.local exists
  if (!checkEnvFile()) {
    generateSampleEnvFile();
    return;
  }

  // Load environment variables
  const envVars = loadEnvironmentVariables();
  if (!envVars) {
    return;
  }

  // Validate EmailJS configuration
  const { missing, invalid } = validateEmailJSConfig(envVars);

  // Show results
  printHeader("TEST RESULTS");

  if (missing.length === 0 && invalid.length === 0) {
    printSuccess("🎉 EmailJS configuration looks good!");
    console.log("\nNext steps:");
    console.log("1. Run: npm run dev");
    console.log("2. Test the contact form");
    console.log("3. Check if you receive emails");

    // Show current values (masked for security)
    console.log("\nCurrent configuration:");
    REQUIRED_VARS.forEach((varName) => {
      const value = envVars[varName];
      if (value) {
        const masked =
          value.length > 10
            ? value.substring(0, 8) + "..." + value.slice(-4)
            : value.substring(0, 4) + "...";
        console.log(`  ${varName}: ${masked}`);
      }
    });
  } else {
    printError(`Found ${missing.length + invalid.length} configuration issues`);
    showHelpInstructions(missing, invalid);
  }

  console.log("\n");
}

// Run the test
main();
