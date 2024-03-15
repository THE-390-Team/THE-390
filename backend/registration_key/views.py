
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from properties.models import CondoUnit, ParkingUnit, StorageUnit
from .models import CondoRegistrationKey, ParkingRegistrationKey, StorageRegistrationKey
from user_profile.models import CompanyProfile, PublicProfile, User
from .Serializers import CondoRegistrationKeySerializer, ParkingRegistrationKeySerializer, StorageRegistrationKeySerializer
from rest_framework import status

from django.shortcuts import get_object_or_404

class CondoRegistrationKeyModelView(ModelViewSet):
    """
    Viewset for managing condo registration keys.
    """
    queryset = CondoRegistrationKey.objects.all()
    serializer_class = CondoRegistrationKeySerializer
    
    def create(self, request, *args, **kwargs):
        """
        Create a new condo registration key.
        
        Parameters:
        - request: The HTTP request object.
        
        Returns:
        - Response: The HTTP response object.
        """
        public_id = self.request.data.get('public_email')
        condo_id = self.request.data.get('unit_id')
        company_id = self.request.data.get('company_id')
        user = get_object_or_404(User, email=public_id)
        profile = get_object_or_404(PublicProfile, user=user)
        condo = get_object_or_404(CondoUnit, id=condo_id)
        company = get_object_or_404(CompanyProfile, user_id=company_id)
        key = CondoRegistrationKey.objects.create_key(profile.user, condo)
        serializer_data = {
            'id': key.id,
            'user': profile.user.id,
            'unit': condo.id,
            'key': key.key,
        }
        serializer = self.get_serializer(instance=key, data=serializer_data)
        serializer.is_valid(raise_exception=True)
        company.send_registration_key(key, profile.user)
        return Response(serializer.data)
    
class StorageRegistrationKeyModelView(ModelViewSet):
    """
    Viewset for managing storage registration keys.
    """
    queryset = StorageRegistrationKey.objects.all()
    serializer_class = StorageRegistrationKeySerializer
    
    def create(self, request, *args, **kwargs):
        """
        Create a new storage registration key.
        
        Parameters:
        - request: The HTTP request object.
        
        Returns:
        - Response: The HTTP response object.
        """
        public_id = self.request.data.get('public_email')
        storage_id = self.request.data.get('unit_id')
        company_id = self.request.data.get('company_id')
        user = get_object_or_404(User, email=public_id)
        profile = get_object_or_404(PublicProfile, user=user)
        storage = get_object_or_404(StorageUnit, id=storage_id)
        company = get_object_or_404(CompanyProfile, user_id=company_id)
        key = StorageRegistrationKey.objects.create_key(profile.user, storage)
        serializer_data = {
            'id': key.id,
            'user': profile.user.id,
            'unit': storage.id,
            'key': key.key,
        }
        serializer = self.get_serializer(instance=key, data=serializer_data)
        serializer.is_valid(raise_exception=True)
        company.send_registration_key(key, profile.user)
        return Response(serializer.data)
    
class ParkingRegistrationKeyModelView(ModelViewSet):
    """
    Viewset for managing parking registration keys.
    """
    queryset = ParkingRegistrationKey.objects.all()
    serializer_class = ParkingRegistrationKeySerializer
    
    def create(self, request, *args, **kwargs):
        """
        Create a new parking registration key.
        
        Parameters:
        - request: The HTTP request object.
        
        Returns:
        - Response: The HTTP response object.
        """
        public_id = self.request.data.get('public_email')
        parking_id = self.request.data.get('unit_id')
        company_id = self.request.data.get('company_id')
        user = get_object_or_404(User, email=public_id)
        profile = get_object_or_404(PublicProfile, user=user)
        parking = get_object_or_404(ParkingUnit, id=parking_id)
        company = get_object_or_404(CompanyProfile, user_id=company_id)
        key = ParkingRegistrationKey.objects.create_key(profile.user, parking)
        serializer_data = {
            'id': key.id,
            'user': profile.user.id,
            'unit': parking.id,
            'key': key.key,
        }
        serializer = self.get_serializer(instance=key, data=serializer_data)
        serializer.is_valid(raise_exception=True)
        company.send_registration_key(key, profile.user)
        return Response(serializer.data)
