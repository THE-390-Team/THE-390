from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView

from rest_framework import status

from .serializers import UserProfileSerializer
from .models import UserProfile


"""
    User Profile Creation -> sign up user
"""
class UserProfileCreate(APIView):
    
    # Everyone can access this view 
    permission_classes = [AllowAny] 
    
    
    # create the user profile and save to database
    def post(self, request: Request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""
    User Profile Retrieval and Updating
"""
class UserProfileView(APIView):
    
    # Only authenticated users can access this view  
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    # retrieve user information 
    def get(self, request: Request , *args, **kwargs):
        
        # get current 
        user = request.user
        user_profile = UserProfile.objects.filter(email=user.email).first()

        # error if it does not exist
        if user_profile is None:
            return Response({"error": "User profile not found"})

        
        user_data = {
            'email': user_profile.email,
            'first_name': user_profile.first_name,
            'last_name': user_profile.last_name,
            'created_at': user_profile.created_at,
            'is_staff': user_profile.is_staff,
            'is_active': user_profile.is_active,
            'address': user_profile.address,
            'city': user_profile.city,
            'province': user_profile.province,
            'postal_code': user_profile.postal_code,
            'registration_key': user_profile.registration_key,
            'phone_number': user_profile.phone_number
        }
        
        return Response(user_data)
    

"""
    Black List Used JWT tokens ( the same token cannot be generated more than once )
"""
class BlackListTokenView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request: Request):
        try:
            refresh_token = request.data['refresh_token']
            token=RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Tokens successfully blacklisted"}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)