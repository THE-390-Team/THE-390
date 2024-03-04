from rest_framework import serializers
from .models import PropertyProfile, CondoUnit, ParkingUnit, StorageUnit, Unit

    
class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = ['id','location', 'purchase_price', 'rent_price']

class CondoUnitSerializer(serializers.ModelSerializer):
    class Meta(UnitSerializer.Meta):
        model = CondoUnit
        fields = UnitSerializer.Meta.fields + ['property']

class ParkingUnitSerializer(serializers.ModelSerializer):
        class Meta(UnitSerializer.Meta):
            model = ParkingUnit
            fields = UnitSerializer.Meta.fields + ['property']

class StorageUnitSerializer(serializers.ModelSerializer):
    class Meta(UnitSerializer.Meta):
        model = StorageUnit
        fields = UnitSerializer.Meta.fields + ['property']
        
class PropertyProfileSerializer(serializers.ModelSerializer):
    num_condo_units = serializers.IntegerField(read_only=True)
    num_parking_units = serializers.IntegerField(read_only=True)
    num_storage_units = serializers.IntegerField(read_only=True) 
    condo_units = CondoUnitSerializer(many=True, read_only=True)
    class Meta:
        model = PropertyProfile
        fields = ['id', 'company', 'num_condo_units', 'num_parking_units', 'num_storage_units', 'address', 'city', 'province', 'postal_code', 'condo_units']

def to_representation(self, instance):
    representation = self.super().to_representation(instance)
    # condo_units = instance.condo_units.all()
    representation['num_condo_units'] = instance.condo_units.count()
    representation['num_parking_units'] = instance.parking_units.count()
    representation['num_storage_units'] = instance.storage_units.count()
    return representation
    