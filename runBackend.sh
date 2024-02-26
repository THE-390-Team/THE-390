#!/bin/bash

# Define function to display error messages
print_error() {
    echo "Error: $1"
    exit 1
}
# Go into backend 
cd backend
echo "Enter the backend directory..."

# Check if virtual environment directory already exists
if [ -d "myenv" ]; then
    print_error "Virtual environment directory 'myenv' already exists. Please remove it before running this script."
fi

# Setting up Virtual Environment
echo "Setting up Virtual Environment..."
python -m venv myenv || print_error "Failed to create virtual environment."
source myenv/bin/activate || print_error "Failed to activate virtual environment."

# Installing Django
echo "Installing Django..."
python -m pip install Django || print_error "Failed to install Django."

# Installing Requirements
echo "Installing Django Rest Framework..."
pip install -r requirements.txt || print_error "Failed to install requirements."    

# Running the Django Development Server
echo "Starting the Django Development Server..."
python manage.py runserver || print_error "Failed to start Django development server."

echo "Preparing frontend server"

# Verify Installation
echo "Verify Installation"
echo "Open your terminal or command prompt."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Installing npm..."
    # Install npm
    curl -fsSL https://npmjs.org/install.sh | sudo sh || print_error "Failed to install npm."
fi

# Check npm version
npm_version=$(npm -v)
if [ -z "$npm_version" ]; then
    print_error "Failed to retrieve npm version."
else
    echo "npm version: $npm_version"
fi
echo ""

# Leaving backend directory and entering frontend directory
cd ..
echo "Leaving backend directory..."


