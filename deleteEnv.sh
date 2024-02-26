#!/bin/bash

# Define function to display error messages
print_error() {
    echo "Error: $1"
    exit 1
}

# Go into backend
cd backend
echo "Enter the backend directory..."

# Check if myenv directory exists
if [ ! -d "myenv" ]; then
    print_error "Virtual environment directory 'myenv' does not exist."
fi

# Delete myenv directory
echo "Deleting myenv directory..."
rm -rf myenv || print_error "Failed to delete myenv directory."

echo "myenv directory deleted successfully!"

