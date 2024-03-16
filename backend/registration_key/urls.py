from rest_framework.routers import DefaultRouter


from .views import CondoRegistrationKeyView, ParkingRegistrationKeyView, StorageRegistrationKeyView
router = DefaultRouter()

router.register(r'condo-registration-key', CondoRegistrationKeyView, basename="condo-registration-key" )
router.register(r'parking-registration-key', ParkingRegistrationKeyView, basename="parking-registration-key" )
router.register(r'storage-registration-key', StorageRegistrationKeyView, basename="storage-registration-key" )


urlpatterns = router.urls 