#!/bin/bash

# ============================================================================
# VERCEL ENVIRONMENT VARIABLES VERIFICATION
# ============================================================================
# Script para verificar se todas as variáveis de ambiente estão configuradas
# 
# @author Bruno Cordeiro
# @version 1.0.0
# ============================================================================

set -e

# ============================================================================
# CONFIGURATION
# ============================================================================

PROJECT_NAME="lawyer-hero"

# ============================================================================
# REQUIRED VARIABLES
# ============================================================================

# Basic Configuration
REQUIRED_BASIC=(
    "NEXT_PUBLIC_APP_NAME"
    "NEXT_PUBLIC_APP_VERSION"
    "NEXT_PUBLIC_APP_URL"
    "NODE_ENV"
    "NEXT_PUBLIC_DEBUG_MODE"
)

# Feature Flags
REQUIRED_FEATURES=(
    "NEXT_PUBLIC_ENABLE_DARK_MODE"
    "NEXT_PUBLIC_ENABLE_ANIMATIONS"
    "NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION"
)

# EmailJS (Critical for contact form)
REQUIRED_EMAILJS=(
    "NEXT_PUBLIC_EMAILJS_SERVICE_ID"
    "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"
    "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY"
    "NEXT_PUBLIC_CONTACT_EMAIL"
)

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

check_variable() {
    local var_name="$1"
    local category="$2"
    
    if vercel env ls | grep -q "$var_name"; then
        print_success "$var_name is configured"
        return 0
    else
        print_error "$var_name is MISSING"
        return 1
    fi
}

# ============================================================================
# MAIN SCRIPT
# ============================================================================

print_header "VERCEL ENVIRONMENT VARIABLES VERIFICATION"
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

print_step "Verifying environment variables for project: $PROJECT_NAME"
echo ""

# Variables status
missing_basic=0
missing_features=0
missing_emailjs=0

# Check Basic Configuration
print_header "BASIC CONFIGURATION"
for var in "${REQUIRED_BASIC[@]}"; do
    if ! check_variable "$var" "basic"; then
        ((missing_basic++))
    fi
done

echo ""

# Check Feature Flags
print_header "FEATURE FLAGS"
for var in "${REQUIRED_FEATURES[@]}"; do
    if ! check_variable "$var" "features"; then
        ((missing_features++))
    fi
done

echo ""

# Check EmailJS Configuration
print_header "EMAILJS CONFIGURATION (CRITICAL)"
for var in "${REQUIRED_EMAILJS[@]}"; do
    if ! check_variable "$var" "emailjs"; then
        ((missing_emailjs++))
    fi
done

echo ""

# Summary
print_header "VERIFICATION SUMMARY"

total_missing=$((missing_basic + missing_features + missing_emailjs))

if [ $total_missing -eq 0 ]; then
    print_success "All environment variables are configured!"
    echo ""
    print_step "Your application should work correctly in production"
    echo ""
    print_warning "Next steps:"
    echo "1. Deploy your application: vercel --prod"
    echo "2. Test the contact form in production"
    echo "3. Verify you receive emails when someone submits the form"
else
    print_error "Found $total_missing missing variables"
    echo ""
    
    if [ $missing_basic -gt 0 ]; then
        print_error "Missing $missing_basic basic configuration variables"
    fi
    
    if [ $missing_features -gt 0 ]; then
        print_warning "Missing $missing_features feature flag variables (non-critical)"
    fi
    
    if [ $missing_emailjs -gt 0 ]; then
        print_error "Missing $missing_emailjs EmailJS variables (CRITICAL - contact form won't work)"
    fi
    
    echo ""
    print_warning "To fix missing variables:"
    echo "1. Run: ./scripts/setup-vercel-env.sh"
    echo "2. Or configure manually in Vercel dashboard"
    echo "3. Check VERCEL_SETUP_GUIDE.md for detailed instructions"
fi

echo ""

# List all current environment variables
print_header "CURRENT ENVIRONMENT VARIABLES"
vercel env ls

echo ""

# Test EmailJS configuration if all variables are present
if [ $missing_emailjs -eq 0 ]; then
    print_header "EMAILJS QUICK TEST"
    echo ""
    print_step "Testing EmailJS configuration..."
    
    # Get the values to verify they look correct
    echo "📋 Checking EmailJS values format..."
    
    service_id=$(vercel env ls | grep "NEXT_PUBLIC_EMAILJS_SERVICE_ID" | awk '{print $2}' || echo "")
    template_id=$(vercel env ls | grep "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID" | awk '{print $2}' || echo "")
    public_key=$(vercel env ls | grep "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY" | awk '{print $2}' || echo "")
    
    if [[ $service_id =~ ^service_.+ ]]; then
        print_success "Service ID format looks correct"
    else
        print_warning "Service ID might be incorrect (should start with 'service_')"
    fi
    
    if [[ $template_id =~ ^template_.+ ]]; then
        print_success "Template ID format looks correct"
    else
        print_warning "Template ID might be incorrect (should start with 'template_')"
    fi
    
    if [[ ${#public_key} -gt 10 ]]; then
        print_success "Public Key length looks reasonable"
    else
        print_warning "Public Key seems too short"
    fi
fi

print_header "VERIFICATION COMPLETE"

if [ $total_missing -eq 0 ]; then
    print_success "🎉 All variables configured! Ready for deployment!"
    exit 0
else
    print_error "❌ Missing variables found. Please configure them before deploying."
    exit 1
fi