from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from user_profile.models import CompanyProfile, PublicProfile
from .serializers import ServiceRequestSerializer
from .models import ServiceRequest

class ServiceRequestViewSet(ModelViewSet):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestSerializer

    def get_user_request(self, request,user_id,**kwargs):
        try:
            user = PublicProfile.objects.get(user_id = user_id)
            requests = ServiceRequest.objects.filter(public_profile = user)
            serializer = ServiceRequestSerializer(user.requests.all() , many = True)
            return Response(serializer.data)
        except PublicProfile.DoesNotExist:
            return Response({'details': 'User does not exist'}, status = status.HTTP_404_NOT_FOUND)
        
    
    def get_company_request(self, request, company_id, **kwargs):
        try:
            requests = []
            # properties = CompanyProfile.objects.get(user = requests.user).property_profiles
            properties = CompanyProfile.objects.get(user_id = company_id).property_profiles.all()
            for property in properties:
                for condo in property.get_condo_units():
                    if condo.public_profile is not None:
                        requests.extend(condo.public_profile.requests.all())

                for storage in property.get_storage_units():
                    if storage.public_profile is not None:
                        requests.extend(storage.public_profile.requests.all())

                for parking in property.get_parking_units():
                    if parking.public_profile is not None:
                        requests.extend(parking.public_profile.requests.all())

            serializer = ServiceRequestSerializer(requests, many=True)
            return Response(serializer.data)
        except CompanyProfile.DoesNotExist:
            return Response({'details': 'Company does not exist'}, status = status.HTTP_404_NOT_FOUND)
            