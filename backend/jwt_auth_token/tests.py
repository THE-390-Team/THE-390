from django.test import TestCase, client
from django.urls import reverse
from rest_framework import status
from user_profile.models import User
from rest_framework_simplejwt.tokens import RefreshToken


class TestJWTToken(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.client = client.Client()
        cls.user = User.objects.create_user(email='test@gmail.com', password='password', role='PUBLIC', first_name='test', last_name='test')
    
    def test_blacklist_token_success(self):
        # Create a user and obtain a refresh token
        refresh_token = RefreshToken.for_user(self.user)

        # Blacklist the token
        response = self.client.post(reverse('blacklist'), {'refresh_token': str(refresh_token)})

        self.assertEqual(response.status_code, status.HTTP_205_RESET_CONTENT)
        self.assertEqual(response.data, {'message': 'Tokens successfully blacklisted'})
        
    def test_blacklist_token_failure(self):
        # Create a user and obtain a refresh token


        # Blacklist the token
        response = self.client.post(reverse('blacklist'), {'refresh_token': 'invalid_token'})

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)