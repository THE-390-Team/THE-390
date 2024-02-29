from django.test import TestCase, client
from user_profile.models import User


class TestAuthentication(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            email="test@example.com",
            first_name="John",
            last_name="Doe",
            role="PUBLIC",
            password="password"
            
        )
        
    def test_log_in(self):
        response = self.client.post(
            '/api/token/', {
                "email": self.user.email, 
                "password": "password"
            }
            
        )
        
        