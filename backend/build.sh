#!/usr/bin/env bash
# Exit on error
set -o errexit

# Modify this line as needed for your package manager (pip, poetry, etc.)
pip install -r requirements.txt

# Apply any outstanding database migrations
python manage.py migrate

# Create a superuser in Django
echo "Creating superuser..."


# Provide specific information for the superuser
email="admin@example.com"
role="PUBLIC"
first_name="Admin"
last_name="User"
password="adminpassword123"


echo "Attempting to create superuser..."
if python manage.py createsuperuser --email "$email" --role "$role" --first_name "$first_name" --last_name "$last_name" --noinput; then
    echo "Superuser created successfully!"
else
    # Check if the error is due to the email already being in use
    if [[ $? -ne 0 ]] && [[ $(python manage.py shell -c "from django.contrib.auth.models import User; print(User.objects.filter(email='$email').exists())") == "True" ]]; then
        echo "Email '$email' is already in use. Skipping superuser creation."
    else
        # If the error is not due to email conflict, exit with error
        echo "Failed to create superuser."
        exit 1
    fi
fi