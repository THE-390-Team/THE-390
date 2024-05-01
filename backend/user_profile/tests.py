from django.test import TestCase, client
from django.contrib.auth import get_user_model
from rest_framework import status
from django.urls import reverse
from .serializers import UserSerializer
from .models import User, PublicProfile, EmployeeProfile, CompanyProfile
from properties.models import PropertyProfile, CondoUnit, ParkingUnit, StorageUnit
from rest_framework.test import APIClient
UserModel = get_user_model()


class TestProfileModels(TestCase):
    """Test User Profile Models"""

    @classmethod
    def setUpTestData(cls):
        # Set up test data to be used
        cls.user = User.objects.create_superuser(
            email="test@example.com",
            password="password",
            role="PUBLIC",
            first_name="Test",
            last_name="User",
        )
        cls.public = User.objects.create_user(
            email="public@example.com",
            password="password",
            role="PUBLIC",
            first_name="Test",
            last_name="User",
        )
        cls.employee = User.objects.create_user(
            email="employee@example.com",
            password="password",
            role="EMPLOYEE",
            first_name="Test",
            last_name="User",
        )
        cls.company = User.objects.create_user(
            email="company@example.com",
            password="password",
            role="COMPANY",
            first_name="Test",
            last_name="User",
        )

    """ Test superuser and is_staff """

    def test_create_superuser_is_superuser(self):
        self.assertTrue(self.user.is_superuser)
        self.assertTrue(self.user.is_staff)
        self.assertTrue(self.user.is_active)

    def test_create_superuser_invalid(self):
        with self.assertRaises(ValueError) as err:
            User.objects.create_superuser(
                email="testuser1@gmail.com",
                first_name="test",
                last_name="user",
                password="password",
                role="PUBLIC",
                is_superuser=True,
                is_staff=False,
            )
        self.assertEqual(
            str(err.exception), "Superuser must be assigned to is_staff=True."
        )
        with self.assertRaises(ValueError) as err:
            User.objects.create_superuser(
                email="testuser2@gmail.com",
                first_name="test",
                last_name="user",
                password="password",
                role="PUBLIC",
                is_superuser=False,
                is_staff=True,
            )
        self.assertEqual(
            str(err.exception), "Superuser must be assigned to is_superuser=True."
        )

    def test_create_user_is_not_superuser(self):
        self.assertFalse(self.public.is_superuser)
        self.assertFalse(self.public.is_staff)
        self.assertTrue(self.public.is_active)

    def test_created_user_role_choices(self):
        self.assertEqual(self.user.role, "PUBLIC")
        self.assertEqual(self.employee.role, "EMPLOYEE")
        self.assertEqual(self.company.role, "COMPANY")

    def test_public_profile_created(self):
        public_profile = PublicProfile.objects.get(user=self.public)
        self.assertIsInstance(public_profile, PublicProfile)

    def test_employee_profile_created(self):
        employee_profile = EmployeeProfile.objects.get(user=self.employee)
        self.assertIsInstance(employee_profile, EmployeeProfile)

    def test_company_profile_created(self):
        company_profile = CompanyProfile.objects.get(user=self.company)
        self.assertIsInstance(company_profile, CompanyProfile)


class TestUserSignUp(TestCase):
    """Testing Sign up endpoints for public profile/user"""

    @classmethod
    def setUpTestData(cls):
        # create test data user
        cls.user = User.objects.create_user(
            email="public@example.com",
            password="password",
            role="PUBLIC",
            first_name="Test",
            last_name="User",
        )

    # sign up for public profile
    def test_user_creation(self):
        respnse = self.client.post(
            "/profiles/user/",
            {
                "email": "test4@example.com",
                "first_name": "John",
                "last_name": "Doe",
                "role": "PUBLIC",
                "password": "password",
            },
        )
        test_user = User.objects.get(email="test4@example.com")
        self.assertEqual(respnse.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(email="test4@example.com").exists())
        self.assertTrue(PublicProfile.objects.filter(user=test_user).exists())

    # sign up with email that is already in use
    def test_user_creation_existing_email(self):
        response = self.client.post(
            "/profiles/user/",
            {
                "email": "public@example.com",
                "first_name": "John",
                "last_name": "Doe",
                "role": "PUBLIC",
                "password": "password",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.data["email"], ["user with this email address already exists."]
        )

    # sign up with invalid email
    def test_user_creation_invalid_email(self):
        response = self.client.post(
            "/profiles/user/",
            {
                "email": "public",
                "first_name": "John",
                "last_name": "Doe",
                "role": "PUBLIC",
                "password": "password",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["email"], ["Enter a valid email address."])

    # sign up without password
    def test_user_creation_without_password(self):
        response = self.client.post(
            "/profiles/user/",
            {
                "email": "publhhic@example.com",
                "first_name": "John",
                "last_name": "Doe",
                "role": "PUBLIC",
                "password": "",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["password"],["This field may not be blank."])
        
        
        
class CompanyFinanceViewTestCase(TestCase):
    

    @classmethod
    def setUpTestData(cls):
    
        
        cls.company_user = User.objects.create_user(
            email='company@example.com',
            password='password',
            role=User.Role.COMPANY,
            first_name='John',
            last_name='Doe'
        )
        cls.company = CompanyProfile.objects.get(
            user=cls.company_user
        )
        
        cls.public_user = User.objects.create_user(
            email='public@example.com',
            password='password',
            role=User.Role.PUBLIC,
            first_name='Public',
            last_name='User'
        )
        cls.public = PublicProfile.objects.get(user=cls.public_user)
        
        cls.property = PropertyProfile.objects.create(
            company=cls.company,
            name='Property 1',
            address='123 Test St',
            city='Test City',
            province='Test Province',
            postal_code='T3S T1N',
            fee_rate=0.05
        )
        
        cls.condo = CondoUnit.objects.create(
            property=cls.property, 
            location='2',
            operational_expense=100,
            purchase_price=100000, 
            rent_price=1000,
            public_profile=cls.public,
            size=1000, 

        )
        cls.parking = ParkingUnit.objects.create(
            property=cls.property,
            location='2',
            operational_expense=50,
            purchase_price=100000, 
            rent_price=1000,
            public_profile=cls.public,
            size=1000

        )
        cls.storage = StorageUnit.objects.create(
            property=cls.property,
            location='2',
            operational_expense=75,
            purchase_price=100000, 
            rent_price=1000,
            public_profile=cls.public,
            size=1000, 

        )
        
  

    def test_get_company_finance(self):
        
        
        
        
        
        # TOTAL FOR CONDO 
        condo_budget = []
        total_condo_expenses = 0
        total_condo_fees = 0
        
        total_condo_expenses += self.condo.operational_expense
        condo_data ={
            "id": self.condo.id,
            "condo": self.condo.location,
            "expense": self.condo.operational_expense,
            "fee": self.condo.property_fee
        }
        total_condo_fees += self.condo.property_fee
        condo_budget.append(condo_data)
        
        
        # TOTAL FOR PARKING
        total_parking_expenses = 0
        total_parking_fees = 0
        parking_budget = []
        
        total_parking_expenses += self.parking.operational_expense
        parking_data ={
            "id": self.parking.id,
            "parking": self.parking.location,
            "expense": self.parking.operational_expense,
            "fee": self.parking.property_fee
        }
        total_parking_fees += self.parking.property_fee 
        parking_budget.append(parking_data)
        
        # TOTAL FOR STORAGE
        total_storage_expenses = 0
        total_storage_fees = 0
        storage_budget = []
        storage_data = {
            "id": self.storage.id,
            "storage": self.storage.location,
            "expense": self.storage.operational_expense,
            "fee": self.storage.property_fee
        }
        total_storage_fees += self.storage.property_fee
        total_storage_expenses += self.storage.operational_expense
        storage_budget.append(storage_data)
        
           
        
        
        company_total_fees = total_condo_fees + total_parking_fees + total_storage_fees
        company_total_expenses = total_condo_expenses + total_parking_expenses + total_storage_expenses
        data = {
            f'{self.property.id}': {
              "property_name": self.property.name,
                "condos": condo_budget,
                "parkings": parking_budget,
                "storages": storage_budget,
                "condo_fee": total_condo_fees,
                "parking_fee": total_parking_fees,
                "storage_fee": total_storage_fees,
                "condo_expense": total_condo_expenses,
                "parking_expense": total_parking_expenses,
                "storage_expense": total_storage_expenses,
                "fee": total_condo_fees + total_parking_fees + total_storage_fees,
                "expenses": total_condo_expenses + total_parking_expenses + total_storage_expenses
            }
        }
        
        expected_response = {
            "properties": data, 
            "expenses": company_total_expenses,
            "fee": company_total_fees, 
            "total": company_total_fees - company_total_expenses
        }
        url = reverse('company-finance', kwargs={'company_id': self.company.user_id})
        response = self.client.get(url)
        self.assertDictEqual(response.data, expected_response)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
