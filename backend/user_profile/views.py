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
"""
class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    
class PublicProfileViewSet(ModelViewSet):
    queryset = PublicProfile.objects.all()
    serializer_class = PublicProfileSerializer

    lookup_field = 'user'
    
class EmployeeProfileViewSet(ModelViewSet):
    queryset = EmployeeProfile.objects.all()
    serializer_class = EmployeeProfileSerializer

    lookup_field = 'user'
    
class CompanyProfileViewSet(ModelViewSet):
    queryset = CompanyProfile.objects.all()
    serializer_class = CompanyProfileSerializer
    lookup_field = 'user'
    
    

class BlackListTokenView(APIView):
    """
        Black List Used JWT tokens 
        * Post Method
        * data: refresh_token 
        * anyone can access this view
        https://django-rest-framework-simplejwt.readthedocs.io/en/latest/blacklist_app.html
        
    """
    permission_classes = [AllowAny]
    
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token=RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Tokens successfully blacklisted"}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)