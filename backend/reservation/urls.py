# urls.py

from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import FacilityViewSet, ReservationViewSet

router = DefaultRouter()
router.register(r'facilities', FacilityViewSet, basename='facilities')
router.register(r'reservations', ReservationViewSet, basename='reservations')

urlpatterns = [
    path('', include(router.urls)),
]
