from django.urls import path

from .views import CondoRegistrationKeyModelView, ParkingRegistrationKeyModelView, StorageRegistrationKeyModelView

from rest_framework.routers import SimpleRouter, DefaultRouter


router = DefaultRouter()

router.register(r'condo-registration-key', CondoRegistrationKeyModelView, basename='condo-registration-key')
router.register(r'parking-registration-key', ParkingRegistrationKeyModelView, basename='parking-registration-key')
router.register(r'storage-registration-key', StorageRegistrationKeyModelView, basename='storage-registration-key')

urlpatterns = router.urls