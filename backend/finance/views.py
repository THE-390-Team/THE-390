from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from user_profile.models import CompanyProfile
from properties.models import CondoUnit, ParkingUnit, PropertyProfile, StorageUnit
from rest_framework import status, reverse


class FinanceModelView(APIView):

    def get(self, request, *args, **kwargs):
        """
        -> property id -> fee's for the units associated to it
        """
        property_id = self.kwargs.get('property_id')
        property = PropertyProfile.objects.get(id=property_id)

        # get the total fees for condo units
        total_condo_fees = 0
        condo_revenue = []
        condos = CondoUnit.objects.filter(property=property, public_profile__isnull=False)
        for condo in condos:
            total_condo_fees += condo.property_fee
            condo_revenue.append({
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
                "storage": storage.location, 
                "fee": storage.property_fee
            })

        return Response({
            "condos": condo_revenue,
            "condo_total": total_condo_fees,
            "parkings": parking_revenue,
            "parking_total": total_parking_fees,
            "storages": storage_revenue,
            "storage_total": total_storage_fees,
            "total": total_condo_fees + total_parking_fees + total_storage_fees
        })

class CompanyFinanceView(APIView):
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
                "condos": condo_revenue,
                "condo_total": total_condo_fees,
                "parkings": parking_revenue,
                "parking_total": total_parking_fees,
                "storages": storage_revenue,
                "storage_total": total_storage_fees,
                "total": total_condo_fees + total_parking_fees + total_storage_fees
            }
            
        return Response(data={
            "data": data,
            "total": company_total
        }, status=status.HTTP_200_OK)