from django.db import models
import random
import string
from user_profile.models import PublicProfile

class generateKeys(models.Model):
    
    #There is no need to check keys from a table because probability of overlapping keys is negligible
    #Each key has 9 random characters chosen from all 26 alphabet letters and 10 digits
    #This means there are 36^9 or 10^14 possible combination of keys for any user type

    user = models.OneToOneField('User', ...)
    # Owners will have a key that start with 1
    @staticmethod
    def generate_key_owner() -> str:
        return '1'.join(random.choices(string.ascii.uppercase + string.digits, k=9))
    
    # Renters will have a key that start with 2
    @staticmethod
    def generate_key_renter() -> str:
        return '2'.join(random.choices(string.ascii.uppercase + string.digits, k=9))
    
    # Take a string "owner" or "renter" and generate key with corresponding prefix
    @staticmethod
    def generate_key(user):
        if (user.type == 'Owner'):
            return generateKeys.generate_key_owner()
        elif (user.type == 'Renter'):
            return generateKeys.generate_key_renter()
        else:
            return '-1'

