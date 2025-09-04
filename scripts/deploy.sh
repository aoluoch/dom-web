#!/bin/bash

# DOM Web Application Deployment Script
# This script handles the deployment process for the DOM web application

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    print_success "All dependencies are available"
}

# Run tests
run_tests() {
    print_status "Running tests..."
    
    if npm run test:ci; then
        print_success "All tests passed"
    else
        print_error "Tests failed"
        exit 1
    fi
}

# Build application
build_app() {
    print_status "Building application..."
    
    if npm run build; then
        print_success "Build completed successfully"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Deploy to Netlify
deploy_netlify() {
    print_status "Building for Netlify deployment..."

    if [ -d "dist" ]; then
        print_success "Build ready for Netlify deployment"
        print_status "Upload the 'dist' directory to Netlify manually or connect your Git repository"
        print_status "Netlify will automatically build and deploy on Git pushes"
    else
        print_error "Build directory not found. Run build first."
        exit 1
    fi
}

# Deploy to Vercel
deploy_vercel() {
    print_status "Building for Vercel deployment..."

    if [ -d "dist" ]; then
        print_success "Build ready for Vercel deployment"
        print_status "Upload the project to Vercel manually or connect your Git repository"
        print_status "Vercel will automatically build and deploy on Git pushes"
    else
        print_error "Build directory not found. Run build first."
        exit 1
    fi
}

# Main deployment function
main() {
    print_status "Starting deployment process..."
    
    # Parse command line arguments
    PLATFORM=${1:-"build"}
    
    case $PLATFORM in
        "netlify")
            check_dependencies
            run_tests
            build_app
            deploy_netlify
            ;;
        "vercel")
            check_dependencies
            run_tests
            build_app
            deploy_vercel
            ;;
        "build")
            check_dependencies
            run_tests
            build_app
            print_success "Build completed. Files are in ./dist directory"
            ;;
        "test")
            check_dependencies
            run_tests
            ;;
        *)
            echo "Usage: $0 [netlify|vercel|build|test]"
            echo ""
            echo "Options:"
            echo "  netlify  - Deploy to Netlify"
            echo "  vercel   - Deploy to Vercel"
            echo "  build    - Build for production (default)"
            echo "  test     - Run tests only"
            exit 1
            ;;
    esac
    
    print_success "Deployment process completed!"
}

# Run main function with all arguments
main "$@"
