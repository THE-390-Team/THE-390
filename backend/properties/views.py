from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .models import PropertyProfile, CondoUnit, ParkingUnit, StorageUnit
from .serializers import PropertyProfileSerializer, CondoUnitSerializer, StorageUnitSerializer, ParkingUnitSerializer
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from user_profile.models import CompanyProfile


class PropertyProfileViewSet(ModelViewSet):
    """  
        View Set for Property Profile model 
    """
    queryset = PropertyProfile.objects.all()
    serializer_class = PropertyProfileSerializer
    
    
    def list(self, request, **kwargs):
        """  
            overriding the inherites .list() method 
            *
            * 2 possible listings
            *      1. profiles/company-profile/<int:company_id>/properties/
            *          - list property profiles related to this company profile
            *      2. properties/property-profile/
            *          - list all property profiles ModelViewSet base .list() method
            *
        """
        company_id = self.kwargs.get('company_id', None)
        if company_id:
            try:
                company = CompanyProfile.objects.get(user_id=company_id)
                properties = PropertyProfile.objects.filter(company=company)
                serializer = PropertyProfileSerializer(properties, many=True)
                return Response(serializer.data)
            except CompanyProfile.DoesNotExist:
                return Response({"details":"Company Profile does not exist"},status=status.HTTP_404_NOT_FOUND)
        return super().list(request)
    
class CondoUnitViewSet(ModelViewSet):
    """
        View Set for Condo Unit model 
        
        TODO: update for upcoming requirements/issues  
    """
    queryset = CondoUnit.objects.all()
    serializer_class = CondoUnitSerializer
    
        
class ParkingUnitViewSet(ModelViewSet):
    """
        View Set for Parking Unit model 
        
        TODO: update for upcoming requirements/issues  
    """
    queryset = ParkingUnit.objects.all()
    serializer_class = ParkingUnitSerializer

class StorageUnitViewSet(ModelViewSet):
    """
        View Set for Storage Unit model 
        
        TODO: update for upcoming requirements/issues  
    """
    queryset = StorageUnit.objects.all()
    serializer_class = StorageUnitSerializer