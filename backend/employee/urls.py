from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ServiceRequestViewSet

router = DefaultRouter()
router.register(r"service-request", ServiceRequestViewSet, basename="service-requests")

urlpatterns = router.urls
