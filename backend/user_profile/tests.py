from django.test import TestCase, client
from django.contrib.auth import get_user_model
from .models import CustomUserManager, User, PublicProfile, EmployeeProfile, CompanyProfile

UserModel = get_user_model()

class TestCustomUserManager(TestCase):
    
    @classmethod
    
    def setUpTestData(cls):
        cls.user = User.objects.create_superuser(         
            email='test@example.com',
            password='password',
            role='PUBLIC',
            first_name='Test',
            last_name='User'
        )
        cls.public = User.objects.create_user(
            email='public@example.com',
            password='password',
            role='PUBLIC',
            first_name='Test',
            last_name='User'
        )
        cls.employee = User.objects.create_user(
            email='employee@example.com',
            password='password',
            role='EMPLOYEE',
            first_name='Test',
            last_name='User'
        )

        cls.company = User.objects.create_user(
            email='company@example.com',
            password='password',
            role='COMPANY',
            first_name='Test',
            last_name='User'
        )

    def test_create_superuser_is_superuser(self):
        self.assertTrue(self.user.is_superuser)
        self.assertTrue(self.user.is_staff)
        self.assertTrue(self.user.is_active)

    def test_create_superuser_invalid(self):
        with self.assertRaises(ValueError) as err:
            User.objects.create_superuser(
                email='testuser1@gmail.com',
                first_name="test",
                last_name="user",
                password="password",
                role="PUBLIC",
                is_superuser=True,
                is_staff=False,
            )
        self.assertEqual(str(err.exception), 'Superuser must be assigned to is_staff=True.')
        with self.assertRaises(ValueError) as err:
            User.objects.create_superuser(
                email='testuser2@gmail.com',
                first_name="test",
                last_name="user",
                password="password",
                role="PUBLIC",
                is_superuser=False,
                is_staff=True,
            )
        self.assertEqual(str(err.exception), 'Superuser must be assigned to is_superuser=True.')

    def test_create_user_is_not_superuser(self):
        self.assertFalse(self.public.is_superuser)
        self.assertFalse(self.public.is_staff)
        self.assertTrue(self.public.is_active)

    def test_create_user_role_choices(self):
        self.assertEqual(self.user.role, 'PUBLIC')
        self.assertEqual(self.employee.role, 'EMPLOYEE')
        self.assertEqual(self.company.role, 'COMPANY')
        

    def test_public_profile_created(self):
        public_profile = PublicProfile.objects.get(user=self.public)
        self.assertIsInstance(public_profile, PublicProfile)

    def test_employee_profile_created(self):
        employee_profile = EmployeeProfile.objects.get(user=self.employee)
        self.assertIsInstance(employee_profile, EmployeeProfile)

    def test_company_profile_created(self):
        company_profile = CompanyProfile.objects.get(user=self.company)
        self.assertIsInstance(company_profile, CompanyProfile)
        
        
    def test_login_sucess(self):
        response = self.client.post('/api/token/', {
            'email': self.public.email,
            'password': 'password'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('access', response.json())
        self.assertIn('refresh', response.json())
        self.assertIn('id', response.json())
        self.assertEqual(response.json().get('id'), self.public.id)
        
    def test_login_failure_wrong_password(self):
        response = self.client.post('/api/token/', {
            'email': self.public.email,
            'password': 'wrongpassword'
        })
        self.assertEqual(response.status_code, 401)
        self.assertIn('No active account found with the given credentials', response.json()['detail'])
        
    def test_login_failure_wrong_email(self):
        response = self.client.post('/api/token/', {
            'email': 'aaaaa@gmail.com',
            'password': 'password'
        })
        self.assertEqual(response.status_code, 401)
        self.assertIn('No active account found with the given credentials', response.json()['detail'])

        