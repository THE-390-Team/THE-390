from django.db import models

from finance.models import FinanceModel



class PropertyProfile(models.Model):
    company = models.ForeignKey('user_profile.CompanyProfile', on_delete=models.CASCADE, related_name='property_profiles')
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    province = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=12)
    fee_rate = models.DecimalField(decimal_places=2, max_digits=20)
    
    def __str__(self):
        return str(self.company)
    
    def get_condo_units(self):
        return CondoUnit.objects.filter(property=self)
    
    def get_parking_units(self):
        return ParkingUnit.objects.filter(property=self)
    
    def get_storage_units(self):
        return StorageUnit.objects.filter(property=self)
    
    @property
    def num_condo_units(self):
        return self.condo_units.count()

    @property
    def num_parking_units(self):
        return self.parking_units.count()

    @property
    def num_storage_units(self):
        return self.storage_units.count()
    

    
class Unit(models.Model):
    
    class Meta:
        abstract=True
    location = models.CharField(max_length=4)
    size = models.DecimalField(decimal_places=2, max_digits=20, default=0)    
    purchase_price = models.DecimalField(decimal_places=2, max_digits=20)
    rent_price = models.DecimalField(decimal_places=2, max_digits=20)
    extra_information = models.TextField(null=True)
    # fees = models.DecimalField(decimal_places=2, max_digits=20, default=property_fee)
    
    @property
    def property_fee(self):
        return FinanceModel.calculate_fee(self.objects.get(pk=self.pk))
    

    
    
class CondoUnit(Unit):
    property = models.ForeignKey('PropertyProfile', on_delete=models.CASCADE, related_name='condo_units')
    public_profile = models.ForeignKey('user_profile.PublicProfile', on_delete=models.SET_NULL, related_name='condo_units', null=True)
    
    def __str__(self):
        return str(self.property)

class ParkingUnit(Unit):
    property = models.ForeignKey('PropertyProfile', on_delete=models.CASCADE, related_name='parking_units')
    public_profile = models.ForeignKey('user_profile.PublicProfile', on_delete=models.SET_NULL, related_name='parking_units', null=True)
    
    def __str__(self):
        return str(self.property)

class StorageUnit(Unit):
    property = models.ForeignKey('PropertyProfile', on_delete=models.CASCADE, related_name='storage_units')
    public_profile = models.ForeignKey('user_profile.PublicProfile', on_delete=models.SET_NULL, related_name='storage_units', null=True)
        
    def __str__(self):
        return str(self.property)






