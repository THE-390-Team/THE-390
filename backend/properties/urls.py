from django.urls import include, path
from rest_framework import routers
from .views import PropertyProfileViewSet, CondoUnitViewSet, ParkingUnitViewSet, StorageUnitViewSet 


"""  urls for the endpoints relating to the various models of this app  """
router = routers.SimpleRouter()
router.register(r'property-profile', PropertyProfileViewSet, basename='property-profiles')
""" upcomming requirements/issues """
router.register(r'condo-unit', CondoUnitViewSet, basename='condo-units')
router.register(r'parking-unit', ParkingUnitViewSet, basename='parking-units')
router.register(r'storage-unit', StorageUnitViewSet, basename='storage-units')


urlpatterns = router.urls