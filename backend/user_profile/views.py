from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import authentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserProfileSerializer
from .models import UserProfile


# User Profile Creation 
class UserProfileCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# view user details
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get(self, request, *args, **kwargs):
        user = request.user
        user_profile = UserProfile.objects.filter(email=user.email).first()

        if user_profile is None:
            user_data = {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'created_at': user.created_at,
                'is_staff': user.is_staff,
                'is_active': user.is_active,
            }
            return Response(user_data)

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
    

class BlackListTokenView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token=RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)