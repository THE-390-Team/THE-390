
from django.contrib import admin
from django.urls import path, include
from .views import UserProfileCreate, BlackListTokenView, UserProfileView

app_name = 'user_profile'

urlpatterns = [
    path('register/', UserProfileCreate.as_view(), name='create-user-profile'),
    path('profile/', UserProfileView.as_view(), name='user-profile-view' ),
    path('logout/blacklist/', BlackListTokenView.as_view(), name='blacklist')
]