from django.db import models

# Create your models here.


class FinanceModel(models.Model):
    
    @staticmethod
    def calculate_fee( unit):
        return unit.size * unit.property.fee_rate
    