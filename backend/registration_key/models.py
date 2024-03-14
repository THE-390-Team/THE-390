import hashlib
from django.db import models
import random

from user_profile.models import PublicProfile
from properties.models import CondoUnit, ParkingUnit, StorageUnit, PropertyProfile
from properties.models import CondoUnit, ParkingUnit, StorageUnit
from django.db import models


class RegistrationKeyManager(models.Manager):
    
    def get_queryset(self):
        return super().get_queryset().filter(is_activate=True)
    
    def create_key(self, user, unit):
        key = self.model(user=user, unit=unit)
        key.generate_key(user, unit)
        key.save(using=self._db)

class RegistrationKey(models.Model):
    class Meta:
        abstract = True
        
    key = models.CharField(max_length=20, unique=True)
    user = models.ForeignKey('user_profile.User', on_delete=models.CASCADE, null=False, blank=False)
    owner = models.BooleanField(default=True)
    is_activate = models.BooleanField(default=True)

    objects = RegistrationKeyManager()
    
    def __str__(self):
        return self.key
    
    def generate_key(self, user, unit):
        email = user.email
        unit_id = unit.id
        
        salt = hashlib.sha256(str(random.random()).encode()).hexdigest()[:5]
        email = email.encode('utf-8')
        unit_id = str(unit_id).encode('utf-8')
        self.key = hashlib.sha256(salt.encode() + email + unit_id).hexdigest()
        return self.key
    
    def deactivate(self):
        self.is_activate = False

    
class CondoRegistrationKey(RegistrationKey):
    unit = models.ForeignKey(CondoUnit, on_delete=models.CASCADE, blank=False)
    objects = RegistrationKeyManager()

class ParkingRegistrationKey(RegistrationKey):
    unit = models.ForeignKey(ParkingUnit, on_delete=models.CASCADE, blank=False)
    objects = RegistrationKeyManager()
class StorageUnitRegistrationKey(RegistrationKey):
    unit = models.ForeignKey(StorageUnit, on_delete=models.CASCADE, blank=False)
    objects = RegistrationKeyManager()
    