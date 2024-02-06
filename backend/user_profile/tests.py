from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import UserProfile, CustomProfileManager
from django.test import TestCase
from user_profile.models import UserProfile
from rest_framework.test import APIClient
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model


class TestUserProfile(TestCase):

    @classmethod
    def setUpTestData(cls) -> None:
        cls.user_profile = UserProfile.objects.create(
            first_name="John",
            last_name="Doe",
            email="john@email.com",
            password="password123",
            phone_number="5144841243",
            address="17 Guy St",
            city="Montreal",
            province="Quebec",
            postal_code="H4C0T5",
            registration_key="regkey",
        )

        cls.super_user = get_user_model().objects.create_superuser(
            first_name="admin",
            last_name="Doe",
            email="admin@example2.com",
            password="password123",
            phone_number="5144841243",
            address="17 Guy St",
            city="Montreal",
            province="Quebec",
            postal_code="H4C0T5",
            registration_key="regkey",
        )

    # Test user profile creation
    def test_create_user_profile(self):
        user_profile = UserProfile.objects.get(id=1)
        self.assertEqual(user_profile.first_name, "John")
        self.assertEqual(user_profile.last_name, "Doe")
        self.assertEqual(user_profile.email, "john@email.com")
        self.assertTrue(user_profile.password, "password123")
        self.assertEqual(user_profile.phone_number, "5144841243")
        self.assertEqual(user_profile.address, "17 Guy St")
        self.assertEqual(user_profile.city, "Montreal")
        self.assertEqual(user_profile.province, "Quebec")
        self.assertEqual(user_profile.postal_code, "H4C0T5")
        self.assertEqual(user_profile.registration_key, "regkey")
        self.assertEqual(user_profile.is_active, True)
        self.assertEqual(str(user_profile), "John Doe")

    # test super user creation
    def test_create_superuser_profile(self):
        user_profile = UserProfile.objects.get(email="admin@example2.com")
        self.assertEqual(user_profile.first_name, "admin")
        self.assertEqual(user_profile.last_name, "Doe")
        self.assertEqual(user_profile.email, "admin@example2.com")
        self.assertTrue(user_profile.password, "password123")
        self.assertEqual(user_profile.phone_number, "5144841243")
        self.assertEqual(user_profile.address, "17 Guy St")
        self.assertEqual(user_profile.city, "Montreal")
        self.assertEqual(user_profile.province, "Quebec")
        self.assertEqual(user_profile.postal_code, "H4C0T5")
        self.assertEqual(user_profile.registration_key, "regkey")
        self.assertEqual(user_profile.is_active, True)
        self.assertEqual(user_profile.is_staff, True)
        self.assertEqual(str(user_profile), "admin Doe")

    """
        TODO: Test errors when no email given, or is_staff || is_superuser is False  
    """


class UserProfileSerializerTest(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        # Set up any necessary data or configuration for the tests
        cls.client = APIClient()

    def test_create_user_profile(self):
        # Data for creating a user profile
        data = {
            "email": "test@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "password": "password123",
            "address": "123 Main St",
            "city": "Cityville",
            "province": "State",
            "postal_code": "12345",
            "registration_key": "registration_key_value",
            "phone_number": "1234567890",
        }

        # Send a POST request to create a user profile
        response = self.client.post(
            "http://localhost:8000/user-profile/register/", data, format="json"
        )

        # Assert that the response status code is 201 (Created)
        self.assertEqual(response.status_code, 201)

        # Assert that a user profile with the given email exists
        self.assertTrue(UserProfile.objects.filter(email="test@example.com").exists())

    def test_create_user_profile_with_invalid_data(self):
        # Data with missing required fields
        invalid_data = {
            "password": "password123",
        }

        # Send a POST request with invalid data
        response = self.client.post(
            "http://localhost:8000/user-profile/register/", invalid_data, format="json"
        )

        # Assert that the response status code is 400 (Bad Request) due to missing fields
        self.assertEqual(response.status_code, 400)

        # Assert that no user profile is created with invalid data
        self.assertFalse(UserProfile.objects.filter(email="test@example.com").exists())


class UserProfileViewTest(TestCase):

    @classmethod
    def setUpTestData(cls) -> None:
        # Create a test user
        cls.user = get_user_model().objects.create_user(
            email="testuser1@example.com",
            password="testpassword",
            first_name="John",
            last_name="Doe",
            registration_key="mkdmCDGVcdsmlcs",
            is_staff=False,
            is_active=True,
        )

        # Create a UserProfile for the test user
        cls.user_profile = UserProfile.objects.create(
            email="testuser2@example.com",
            password="testpassword",
            first_name="John",
            last_name="Doe",
            is_staff=False,
            is_active=True,
            address="123 Main St",
            city="Cityville",
            province="State",
            postal_code="12345",
            registration_key="registration_key_value",
            phone_number="1234567890",
        )

        # Set up the test client
        cls.client = APIClient()

    # Testing get()
    # def test_get_with_user(self):
    #     # Log in the test user
    #     self.client.force_authenticate(user=self.user)

    #     # Make a GET request to the UserProfileView
    #     response = self.client.get('http://localhost:8000/user-profile/profile/')  # Replace with the actual endpoint

    #     # Assert that the response status code is 200 (OK)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    #     # Assert that the expected user profile data is present in the response
    #     self.assertEqual(response.data['email'], self.user.email)
    #     # Add more assertions for other fields as needed

    def test_get_with_no_user(self):
        # Make a GET request to the UserProfileView without authentication
        response = self.client.get(
            "http://localhost:8000/user-profile/profile/"
        )  # Replace with the actual endpoint

        # Assert that the response status code is 401 (Unauthorized) for unauthenticated users
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class BlackListTokenViewTest(TestCase):

    @classmethod
    def setUpTestData(cls) -> None:
        # Create a test user and obtain a refresh token
        cls.user = get_user_model().objects.create_user(
            first_name="John",
            last_name="Doe",
            email="john@email.com",
            password="password123",
            phone_number="5144841243",
            address="17 Guy St",
            city="Montreal",
            province="Quebec",
            postal_code="H4C0T5",
            registration_key="regkey",
        )
        cls.refresh_token = str(RefreshToken.for_user(cls.user))
        
        
    # def test_blacklist_token(self):
        # # Endpoint for BlackListTokenView
        # endpoint = 'http://localhost:8000/user-profile/logout/blacklist/'  # Replace with the actual endpoint

        # # Make a POST request to the BlackListTokenView with a valid refresh token
        # response = self.client.post(endpoint, {'refresh_token': self.refresh_token})

        # # Assert that the response status code is 200 (OK)
        # self.assertEqual(response.status_code, status.HTTP_200_OK)

        # # Assert that the refresh token has been blacklisted
        # # You may need to adjust this based on your actual implementation
        # self.assertTrue(RefreshToken(self.refresh_token).blacklisted)

    def test_blacklist_token_invalid_request(self):
        # Endpoint for BlackListTokenView
        endpoint = 'http://localhost:8000/user-profile/logout/blacklist/'  # Replace with the actual endpoint

        # Make a POST request to the BlackListTokenView without a refresh token
        response = self.client.post(endpoint, {"refresh": "ffcdscs"})

        # Assert that the response status code is 400 (Bad Request)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)