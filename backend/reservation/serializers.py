# serializers.py

from rest_framework import serializers
from .models import Reservation

# class FacilitySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Facility
#         fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
