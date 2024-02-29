from django.test import TestCase, client
from django.contrib.auth import get_user_model
from .models import CustomUserManager, User, PublicProfile, EmployeeProfile, CompanyProfile
from rest_framework import status
from django.urls import reverse
from rest_framework.test import APITestCase
from .serializers import UserSerializer
UserModel = get_user_model()


class TestProfileModels(TestCase):
    
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

    """ Test superuser and is_staff """
     
    def test_create_superuser_is_superuser(self):
        self.assertTrue(self.user.is_superuser)
        self.assertTrue(self.user.is_staff)
        self.assertTrue(self.user.is_active)

    def test_create_user_is_not_superuser(self):
        self.assertFalse(self.public.is_superuser)
        self.assertFalse(self.public.is_staff)
        self.assertTrue(self.public.is_active)
   
    def test_created_user_role_choices(self):
        self.assertEqual(self.user.role, 'PUBLIC')
        self.assertEqual(self.employee.role, 'EMPLOYEE')
        self.assertEqual(self.company.role, 'COMPANY')

    """ Testing profiles creation with the user """
     
    def test_user_creation(self):
        public_profile_created = PublicProfile.objects.filter(user=self.public).exists()
        employee_profile_created = EmployeeProfile.objects.filter(user=self.employee).exists()
        company_profile_created = CompanyProfile.objects.filter(user=self.company).exists()
        self.assertTrue(public_profile_created)
        self.assertTrue(employee_profile_created)
        self.assertTrue(company_profile_created)
        
     
    def test_public_profile_created(self):
        public_profile = PublicProfile.objects.get(user=self.public)
        self.assertIsInstance(public_profile, PublicProfile)

     
    def test_employee_profile_created(self):
        employee_profile = EmployeeProfile.objects.get(user=self.employee)
        self.assertIsInstance(employee_profile, EmployeeProfile)

     
    def test_company_profile_created(self):
        company_profile = CompanyProfile.objects.get(user=self.company)
        self.assertIsInstance(company_profile, CompanyProfile)


class TestProfilesViews(TestCase):
    
    @classmethod
    def setUpTestData(cls):
    
        cls.user = User.objects.create_user(
            email='public@example.com',
            password='password',
            role='PUBLIC',
            first_name='Test',
            last_name='User'
        )
        
    def test_user_creation(self):
        respnse = self.client.post(reverse('users-list'),{
            "email": "test4@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "role": "PUBLIC",
            "password": "password"
        })
        
        self.assertEqual(respnse.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(email="test4@example.com").exists())
        
    def test_user_details(self):
        response = self.client.get(reverse('users-detail', args=[self.user.id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user_data = UserSerializer(self.user).data
        self.assertEqual(response.data, user_data)
    
    
    def test_user_list(self):
        response = self.client.get(reverse('users-list'))
        db_users = User.objects.all()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        if len(db_users) == 0:
            self.assertEqual(response.data, [])
        elif len(db_users) == 1:
            user_serializer = UserSerializer(db_users, many=False)
            self.assertEqual(response.data, user_serializer.data) 
        else:
            user_serializer = UserSerializer(db_users, many=True)
            self.assertEqual(response.data, user_serializer.data)
    
    def test_user_update(self):
        email  = "fake@example.com"
        first_name = "Fake"
        last_name = "User"
        password = "password"
        role = "PUBLIC"
        create_user_response = self.client.post(reverse('users-detail'),{
            "email" : email, 
            "first_name": first_name,
            "last_name" : last_name,
            "role": role,
            "password": password
        })
        self.assertEqual(create_user_response.status_code, status.HTTP_201_CREATED)
        
        response = self.client.patch(f'/profiles/user/{create_user_response.data.id}/', {
            "email": "publicaaa@example.com",
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertNotEqual(email, response.data.email)
        
        