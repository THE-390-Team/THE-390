from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from .models import User, Profile, PublicProfile, EmployeeProfile, CompanyProfile
from .serializers import UserSerializer, PublicProfileSerializer, EmployeeProfileSerializer, CompanyProfileSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


"""
    ViewSets For CRUD Operations on the PublicProfile, CompanyProfile, EmployeeProfile and User models 
    
     * inherited methods: 
            .list(), .retrieve(), .create(), .update(),
            .partial_update(), and .destroy()
            
        https://www.django-rest-framework.org/api-guide/viewsets/ 
        
"""


class UserViewSet(ModelViewSet):
    """
        ViewSet for the User Model  
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    
class PublicProfileViewSet(ModelViewSet):
    """
        ViewSet for the Public Profile Model  
    """
    queryset = PublicProfile.objects.all()
    serializer_class = PublicProfileSerializer
    lookup_field = 'user'
    
class EmployeeProfileViewSet(ModelViewSet):
    """
        ViewSet for the Employee Profile  
    """
    queryset = EmployeeProfile.objects.all()
    serializer_class = EmployeeProfileSerializer
    lookup_field = 'user'
    
class CompanyProfileViewSet(ModelViewSet):
    """
        ViewSet for the Company Profile
    """
    queryset = CompanyProfile.objects.all()
    serializer_class = CompanyProfileSerializer
    lookup_field = 'user'
