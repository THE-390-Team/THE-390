from rest_framework.response import Response
from rest_framework.views import APIView
from user_profile.models import CompanyProfile
from properties.models import CondoUnit, ParkingUnit, PropertyProfile, StorageUnit
from rest_framework import status, reverse

# Create your views here.

class CompanyFinanceView(APIView):
    """
    API view for retrieving company finance information.
    This view retrieves the finance information for a company, including the total fees for condo units, parking units, and storage units associated with the company's properties.
    Attributes:
        - company_id (int): The ID of the company.
    Methods:
        - get(request, *args, **kwargs): Retrieves the finance information for the company.
    Returns:
        - Response: The finance information for the company, including the properties, total fees, and revenue breakdown for each unit type.
    """
    def get(self, request, *args, **kwargs):
        company_id = self.kwargs.get('company_id', None)

        company = CompanyProfile.objects.get(user_id=company_id)    
        properties = PropertyProfile.objects.filter(company=company)
        data = {}
        company_total = 0
        for property in properties:
            # get the total fees for condo units
            total_condo_fees = 0
            condo_revenue = []
            condos = CondoUnit.objects.filter(property=property, public_profile__isnull=False)
            for condo in condos:
                total_condo_fees += condo.property_fee
                condo_revenue.append({
                    "id": condo.id,
                    "condo": condo.location, 
                    "fee": condo.property_fee
                })

            # get the total fees for parking units
            total_parking_fees = 0
            parking_revenue = []
            parkings = ParkingUnit.objects.filter(property=property, public_profile__isnull=False)
            for parking in parkings:
                total_parking_fees += parking.property_fee
                parking_revenue.append({
                    "id": parking.id,
                    "parking": parking.location, 
                    "fee": parking.property_fee
                })

            # get the total fees for storage units
            total_storage_fees = 0
            storage_revenue = []
            storages = StorageUnit.objects.filter(property=property, public_profile__isnull=False)
            for storage in storages:
                total_storage_fees += storage.property_fee
                storage_revenue.append({
                    "id": storage.id,
                    "storage": storage.location, 
                    "fee": storage.property_fee
            })

            company_total += total_condo_fees + total_storage_fees + total_parking_fees
            data[f'{property.id}'] = {
                "property_name": property.name,
                "condos": condo_revenue,
                "condo_total": total_condo_fees,
                "parkings": parking_revenue,
                "parking_total": total_parking_fees,
                "storages": storage_revenue,
                "storage_total": total_storage_fees,
                "total": total_condo_fees + total_parking_fees + total_storage_fees
            }

        return Response(data={
            "properties": data,
            "total": company_total
        }, status=status.HTTP_200_OK)