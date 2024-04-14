# views.py

from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Facility, Reservation
from .serializers import FacilitySerializer, ReservationSerializer
from rest_framework.decorators import action

class FacilityViewSet(viewsets.ModelViewSet):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            facility = serializer.validated_data['facility']
            start_time = serializer.validated_data['start_time']
            end_time = serializer.validated_data['end_time']

            # Check for overlapping reservations
            overlapping_reservations = Reservation.objects.filter(
                facility=facility,
                start_time__lt=end_time,
                end_time__gt=start_time
            ).exists()

            if overlapping_reservations:
                return Response({'error': 'This time slot is already booked.'}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
