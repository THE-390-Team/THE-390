from rest_framework import routers
from .views import PublicProfileViewSet, EmployeeProfileViewSet, CompanyProfileViewSet, UserViewSet

router = routers.SimpleRouter()
router.register(r'user', UserViewSet, basename='users')
router.register(r'public-profile', PublicProfileViewSet, basename='public-profiles' )
router.register(r'employee-profile', EmployeeProfileViewSet, basename='employee-profiles' )
router.register(r'company-profile', CompanyProfileViewSet, basename='company-profiles' )


urlpatterns = router.urls