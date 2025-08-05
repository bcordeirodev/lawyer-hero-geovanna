#!/bin/bash

# ============================================================================
# VERCEL ENVIRONMENT VARIABLES SETUP
# ============================================================================
# Script para configurar variáveis de ambiente na Vercel
# 
# @author Bruno Cordeiro
# @version 1.0.0
# ============================================================================

set -e

# ============================================================================
# CONFIGURATION
# ============================================================================

PROJECT_NAME="lawyer-hero"
ENVIRONMENT="production"

# ============================================================================
# ENVIRONMENT VARIABLES
# ============================================================================

# App Configuration
NEXT_PUBLIC_APP_NAME="LawyerHero"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_APP_URL="https://geovannanery.com"

# Development
NODE_ENV="production"
NEXT_PUBLIC_DEBUG_MODE="false"

# Feature Flags
NEXT_PUBLIC_ENABLE_DARK_MODE="true"
NEXT_PUBLIC_ENABLE_ANIMATIONS="true"
NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION="true"

# ============================================================================
# FUNCTIONS
# ============================================================================

print_header() {
    echo "============================================================================"
    echo "$1"
    echo "============================================================================"
}

print_step() {
    echo "📋 $1"
}

print_success() {
    echo "✅ $1"
}

print_error() {
    echo "❌ $1"
}

print_warning() {
    echo "⚠️  $1"
}

# ============================================================================
# MAIN SCRIPT
# ============================================================================

print_header "VERCEL ENVIRONMENT VARIABLES SETUP"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI is not installed. Please install it first:"
    echo "npm install -g vercel"
    exit 1
fi

print_step "Checking Vercel CLI installation..."
vercel --version
print_success "Vercel CLI is installed"

echo ""

print_step "Setting up environment variables for project: $PROJECT_NAME"
echo "Environment: $ENVIRONMENT"
echo ""

# Set environment variables
print_step "Setting APP configuration..."

vercel env add NEXT_PUBLIC_APP_NAME production <<< "$NEXT_PUBLIC_APP_NAME"
vercel env add NEXT_PUBLIC_APP_VERSION production <<< "$NEXT_PUBLIC_APP_VERSION"
vercel env add NEXT_PUBLIC_APP_URL production <<< "$NEXT_PUBLIC_APP_URL"

print_success "APP configuration set"

print_step "Setting development configuration..."

vercel env add NODE_ENV production <<< "$NODE_ENV"
vercel env add NEXT_PUBLIC_DEBUG_MODE production <<< "$NEXT_PUBLIC_DEBUG_MODE"

print_success "Development configuration set"

print_step "Setting feature flags..."

vercel env add NEXT_PUBLIC_ENABLE_DARK_MODE production <<< "$NEXT_PUBLIC_ENABLE_DARK_MODE"
vercel env add NEXT_PUBLIC_ENABLE_ANIMATIONS production <<< "$NEXT_PUBLIC_ENABLE_ANIMATIONS"
vercel env add NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION production <<< "$NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION"

print_success "Feature flags set"

echo ""

print_step "Listing current environment variables..."
vercel env ls

echo ""

print_header "SETUP COMPLETE"
print_success "Environment variables have been configured for production"
echo ""
print_warning "Next steps:"
echo "1. Deploy your application: vercel --prod"
echo "2. Verify the environment variables in the Vercel dashboard"
echo "3. Test the application in production"
echo ""
print_warning "Note: You can also configure these variables manually in the Vercel dashboard:"
echo "   - Go to your project dashboard"
echo "   - Navigate to Settings > Environment Variables"
echo "   - Add each variable manually"
echo ""

# ============================================================================
# MANUAL CONFIGURATION GUIDE
# ============================================================================

print_header "MANUAL CONFIGURATION GUIDE"
echo ""
echo "If the automatic setup fails, you can configure manually:"
echo ""
echo "1. Go to https://vercel.com/dashboard"
echo "2. Select your project: $PROJECT_NAME"
echo "3. Go to Settings > Environment Variables"
echo "4. Add the following variables:"
echo ""

cat << 'EOF'
NEXT_PUBLIC_APP_NAME=LawyerHero
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_APP_URL=https://geovannanery.com
NODE_ENV=production
NEXT_PUBLIC_DEBUG_MODE=false
NEXT_PUBLIC_ENABLE_DARK_MODE=true
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION=true
EOF

echo ""
print_success "Setup complete!" 