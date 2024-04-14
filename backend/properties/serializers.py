from rest_framework import serializers

from finance.models import FinanceModel
from .models import PropertyProfile, CondoUnit, ParkingUnit, StorageUnit, Unit

# created serializers for these models. Include custom validation in the ReservationSerializer
# to prevent overlapping reservations.
class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

    def validate(self, data):
        # Example validation: Prevent overlapping reservations for the same facility
        overlapping_reservations = Reservation.objects.filter(
            facility=data['facility'],
            start_time__lt=data['end_time'],
            end_time__gt=data['start_time'],
            status='confirmed'
        ).exists()
        if overlapping_reservations:
            raise serializers.ValidationError("This time slot is already booked.")
        return data

    
class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = ['id', 'public_profile','location', 'purchase_price', 'rent_price', 'property_fee', 'operational_expense' ,'size', 'extra_information', 'image']

class CondoUnitSerializer(serializers.ModelSerializer):
    class Meta(UnitSerializer.Meta):
        model = CondoUnit
        fields = UnitSerializer.Meta.fields + ['property', 'image']

class ParkingUnitSerializer(serializers.ModelSerializer):
        class Meta(UnitSerializer.Meta):
            model = ParkingUnit
            fields = UnitSerializer.Meta.fields + ['property', 'image']

class StorageUnitSerializer(serializers.ModelSerializer):
    class Meta(UnitSerializer.Meta):
        model = StorageUnit
        fields = UnitSerializer.Meta.fields + ['property', 'image']
        
class PropertyProfileSerializer(serializers.ModelSerializer):
    num_condo_units = serializers.IntegerField(read_only=True)
    num_parking_units = serializers.IntegerField(read_only=True)
    num_storage_units = serializers.IntegerField(read_only=True) 
    condo_units = CondoUnitSerializer(many=True, read_only=True)
    parking_units = ParkingUnitSerializer(many=True, read_only=True)
    storage_units = StorageUnitSerializer(many=True, read_only=True)
    
    class Meta:
        model = PropertyProfile
        fields = ['id','name',  'company', 'fee_rate', 
                  'num_condo_units', 'num_parking_units',
                  'num_storage_units', 'address', 'city', 
                  'province', 'postal_code', 'condo_units',
                  'parking_units','storage_units', 'image']

def to_representation(self, instance):
    representation = self.super().to_representation(instance)
    representation['num_condo_units'] = instance.condo_units.count()
    representation['num_parking_units'] = instance.parking_units.count()
    representation['num_storage_units'] = instance.storage_units.count()
    return representation
    