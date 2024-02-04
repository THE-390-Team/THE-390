from django.contrib import admin
from .models import UserProfile
from django.contrib.auth.admin import UserAdmin
from django.db import models

class UserProfileConfig(UserAdmin):
    model= UserProfile
    search_fields = ('email', 'first_name', 'last_name', )
    list_filter = ('email', 'first_name', 'last_name', 'is_active', 'is_staff', )
    list_display=('email', 'id', 'first_name', 'last_name', 'is_active', 'is_staff', )
    ordering = ('-created_at', )
    
    
admin.site.register(UserProfile, UserProfileConfig)