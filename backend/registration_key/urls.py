from rest_framework.routers import DefaultRouter
from .views import CondoRegistrationKeyView
router = DefaultRouter()

router.register(r'condo-registration-key', CondoRegistrationKeyView, basename="condo-registration-key" )


urlpatterns = router.urls 