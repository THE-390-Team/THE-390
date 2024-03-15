from rest_framework import serializers

from properties.serializers import CondoUnitSerializer, ParkingUnitSerializer, StorageUnitSerializer
from user_profile.serializers import UserSerializer
from .models import RegistrationKey, CondoRegistrationKey, ParkingRegistrationKey, StorageRegistrationKey 

class RegistrationKeySerializer(serializers.ModelSerializer):
    """
    Serializer for the RegistrationKey model.
    """
    user = UserSerializer()
    class Meta:
        model = RegistrationKey
        fields = ['key', 'user', 'owner', 'is_activate']


class CondoRegistrationKeySerializer(serializers.ModelSerializer):
    """
    Serializer for the CondoRegistrationKey model.
    Inherits from RegistrationKeySerializer.
    """
    unit = CondoUnitSerializer
    
    class Meta:
        model = CondoRegistrationKey
        fields = RegistrationKeySerializer.Meta.fields + ['unit']

class ParkingRegistrationKeySerializer(serializers.ModelSerializer):
    """
    Serializer for the ParkingRegistrationKey model.
    Inherits from RegistrationKeySerializer.
    """
    unit = ParkingUnitSerializer
    
    class Meta:
        model = ParkingRegistrationKey
        fields = RegistrationKeySerializer.Meta.fields + ['unit']
        
class StorageRegistrationKeySerializer(serializers.ModelSerializer):
    """
    Serializer for the StorageRegistrationKey model.
    Inherits from RegistrationKeySerializer.
    """
    unit = StorageUnitSerializer
    
    class Meta:
        model = StorageRegistrationKey
        fields = RegistrationKeySerializer.Meta.fields + ['unit']