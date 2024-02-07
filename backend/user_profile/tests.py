from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import UserProfile, CustomProfileManager
from django.test import TestCase
from user_profile.models import UserProfile
from rest_framework.test import APIClient, APIRequestFactory, force_authenticate
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from django.contrib.auth import get_user_model
from . import views

class UserProfileCreationTest(TestCase):

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
            email="admin@example.com",
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
        user_profile = UserProfile.objects.get(email="admin@example.com")
        self.assertEqual(user_profile.first_name, "admin")
        self.assertEqual(user_profile.last_name, "Doe")
        self.assertEqual(user_profile.email, "admin@example.com")
        self.assertTrue(user_profile.password, "password123")
        self.assertEqual(user_profile.phone_number, "5144841243")
        self.assertEqual(user_profile.address, "17 Guy St")
        self.assertEqual(user_profile.city, "Montreal")
        self.assertEqual(user_profile.province, "Quebec")
        self.assertEqual(user_profile.postal_code, "H4C0T5")
        self.assertEqual(user_profile.registration_key, "regkey")
        self.assertEqual(user_profile.is_active, True)
        self.assertEqual(user_profile.is_staff, True)
        self.assertEqual(user_profile.is_superuser, True)
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
    def setUpTestData(cls):
        cls.user = UserProfile.objects.create(
            email="testuser@example.com",
            password="testpassword",
            first_name="John",
            last_name="Doe",
            registration_key="testregistrationkey",
            is_staff=False,
            is_active=True,
            address="123 Main St",
            city="Cityville",
            province="State",
            postal_code="12345",
            phone_number="1234567890",
        )

        cls.client = APIClient()
    
    # def test_authenticated_get_request(self):
    #     response = self.client.get('/user-profile/profile/')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     expected_data = {
    #         'email': self.user.email,
    #         'first_name': self.user.first_name,
    #         'last_name': self.user.last_name,
    #         'created_at': str(self.user_profile.created_at),
    #         'is_staff': self.user_profile.is_staff,
    #         'is_active': self.user_profile.is_active,
    #         'address': self.user_profile.address,
    #         'city': self.user_profile.city,
    #         'province': self.user_profile.province,
    #         'postal_code': self.user_profile.postal_code,
    #         'registration_key': self.user_profile.registration_key,
    #         'phone_number': self.user_profile.phone_number
    #     }
    #     self.assertEqual(response.data, expected_data)

    def test_get_with_no_user(self):

        
        response = self.client.get('/user-profile/profile/')
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