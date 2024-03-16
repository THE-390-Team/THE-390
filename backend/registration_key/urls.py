from rest_framework.routers import DefaultRouter


from .views import CondoRegistrationKeyView, ParkingRegistrationKeyView
router = DefaultRouter()

router.register(r'condo-registration-key', CondoRegistrationKeyView, basename="condo-registration-key" )
router.register(r'parking-registration-key', ParkingRegistrationKeyView, basename="parking-registration-key" )


urlpatterns = router.urls 