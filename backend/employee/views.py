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
        # if not request.user.is_authenticated:
        #     return Response({'details': 'user is not authenticated'}, status = status.HTTP_403_FORBIDDEN)
        user = PublicProfile.objects.get(user_id = user_id)
        requests = ServiceRequest.objects.filter(user = user)
        serializer = ServiceRequestSerializer(requests , many = True)
        return Response(serializer.data)
    
    def get_company_request(self, request, **kwargs):
        requests = []
        properties = CompanyProfile.objects.get(user = requests.user).property_profiles
        for property in properties:
            for condo in property.get_condo_units():
                if condo.public_profile is not None:
                    requests+condo.public_profile.requests

            for storage in property.get_storage_units():
                if storage.public_profile is not None:
                    request+storage.public_profile.requests

            for parking in property.get_parking_units():
                if parking.public_profile is not None:
                    request+parking.public_profile.requests

        serializer = ServiceRequestSerializer(requests, many=True)
        return Response(serializer.data)
            