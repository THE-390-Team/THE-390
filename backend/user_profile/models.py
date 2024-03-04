
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.dispatch import receiver
from django.db.models.signals import post_save
from properties.models import PropertyProfile


class CustomUserManager(BaseUserManager):
    
    def create_superuser(self, email, password,  **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser=True.')
        return self.create_user(email, password,  **other_fields)
    
    def create_user(self, email, password, **other_fields):
        if not email:
            raise ValueError('You must provide an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, **other_fields)
        user.set_password(password)
        user.save()
        return user
    
class User(AbstractBaseUser, PermissionsMixin):
    """
        Schema for User (authentication model)  
    """
    class Role(models.TextChoices):
        PUBLIC = 'PUBLIC', 'Public'
        EMPLOYEE = 'EMPLOYEE','Employee'
        COMPANY = 'COMPANY', 'Company'
        
    email = models.EmailField(_('email address'), unique=True)
    role = models.CharField(max_length=50, choices=Role.choices, default=Role.PUBLIC)    
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['role', 'first_name', 'last_name']
    
    def __str__(self):
        return self.first_name + " " + self.last_name
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """
        When User is created, an associated profile is created depending on the user role  
    """
    if created and instance.is_superuser:
        return
    elif created and instance.role == 'PUBLIC':
        PublicProfile.objects.create(user=instance)
    elif created and instance.role == 'EMPLOYEE':
        EmployeeProfile.objects.create(user=instance)
    elif created and instance.role == 'COMPANY':
        CompanyProfile.objects.create(user=instance)
    
class Profile(models.Model):
    """
        Abstract Profile Model whos propreties are inherited by Public, Employee and Company Profiles  
    """
    class Meta:
        abstract = True
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)    
    address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)
    province = models.CharField(max_length=100, blank=True)
    postal_code = models.CharField(max_length=10, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    avatar = models.ImageField(upload_to="avatar_images", default="avatar_images/pp.jpg")
    
    def __str__(self):
        return str(self.user)
    
class PublicProfile(Profile):
    class Type(models.TextChoices):
        OWNER = 'OWNER', 'Owner'
        RENTER = 'RENTER', 'Renter'
    type = models.CharField(max_length =100, choices=Type.choices, default=Type.OWNER)
    registration_key = models.CharField(max_length=50, null=True)

class EmployeeProfile(Profile):
    class Position(models.TextChoices):
        MANAGER = 'MANAGER', 'Manager'
        FINANCE = 'FINANCE', 'Finance'
        DAILY_OPERATIONS = 'DAILY_OPERATIONS', 'Daily_Operations'
    position = models.CharField(max_length =100, choices=Position.choices, default=Position.DAILY_OPERATIONS)
    
    
    
class CompanyProfileManager(models.Manager):
    def property_profiles(self):
        return PropertyProfile.objects.filter(company=self)
    
class CompanyProfile(Profile):
    
    def property_profiles(self):
        return PropertyProfile.objects.filter(company=self)