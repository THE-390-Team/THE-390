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


# Create the superuser
python manage.py createsuperuser --email "$email" --role "$role" --first_name "$first_name" --last_name "$last_name"  --noinput
