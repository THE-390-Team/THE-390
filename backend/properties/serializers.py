from rest_framework import serializers

from finance.models import FinanceModel
from .models import PropertyProfile, CondoUnit, ParkingUnit, StorageUnit, Unit

    
class UnitSerializer(serializers.ModelSerializer):
    property_fee = serializers.DecimalField(decimal_places=2, max_digits=20)
    
    class Meta:
        model = Unit
        fields = ['id', 'public_profile','location', 'purchase_price', 'rent_price', 'property_fee', 'size', 'extra_information']
        
    # def get_property_fee(self, obj):
    #     return FinanceModel.calculate_fee(obj)
    
    def to_representation(self, instance):
        representation = self.super().to_representation(instance)
        representation['property_fee'] = FinanceModel.calculate_fee(instance)
        return representation

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
    parking_units = ParkingUnitSerializer(many=True, read_only=True)
    storage_units = StorageUnitSerializer(many=True, read_only=True)
    
    class Meta:
        model = PropertyProfile
        fields = ['id', 'company', 'fee_rate', 
                  'num_condo_units', 'num_parking_units',
                  'num_storage_units', 'address', 'city', 
                  'province', 'postal_code', 'condo_units',
                  'parking_units','storage_units']

def to_representation(self, instance):
    representation = self.super().to_representation(instance)
    representation['num_condo_units'] = instance.condo_units.count()
    representation['num_parking_units'] = instance.parking_units.count()
    representation['num_storage_units'] = instance.storage_units.count()
    return representation
    