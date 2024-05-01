from django.contrib import admin

from django.db import models

from .models import User, PublicProfile, EmployeeProfile, CompanyProfile
    
admin.site.register(User)
admin.site.register(PublicProfile)
admin.site.register(EmployeeProfile)
admin.site.register(CompanyProfile)