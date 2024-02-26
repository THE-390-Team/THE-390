# Open the app directory
echo "Opening the frontend directory..."
cd frontend || print_error "Failed to change directory to 'frontend'."

# Install Dependencies
echo "Installing Dependencies..."
npm install || print_error "Failed to install dependencies."

# Start the App
echo "Starting the App..."
npm start || print_error "Failed to start the app."

echo "Access the app at http://localhost:3000"

chmod +x runFrontEnd.sh