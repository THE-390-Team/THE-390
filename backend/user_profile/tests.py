from django.test import TestCase
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

