from django.urls import path
from rest_framework import routers
from .views import PublicProfileViewSet, EmployeeProfileViewSet, CompanyProfileViewSet, UserViewSet
from properties.views import PropertyProfileViewSet

"""  urls for the endpoints relating to the various models of this app  """
router = routers.SimpleRouter()
router.register(r'user', UserViewSet, basename='users')
router.register(r'public-profile', PublicProfileViewSet, basename='public-profiles' )
router.register(r'company-profile', CompanyProfileViewSet, basename='company-profiles' )
""" upcomming requirements/issues """
router.register(r'employee-profile', EmployeeProfileViewSet, basename='employee-profiles' )


urlpatterns = [
    # endpoint for listing all properties related to a company
    path('company-profile/<int:company_id>/property-profiles/', PropertyProfileViewSet.as_view({'get': 'list', 'post':'create'})),
    # endpoint for listing all units related to a public profile
    path('public-profile/<int:user_id>/condo-units/', PublicProfileViewSet.as_view({'get': 'get_condo_units'})),
    path('public-profile/<int:user_id>/parking-units/', PublicProfileViewSet.as_view({'get':'get_parking_units'})),
    path('public-profile/<int:user_id>/storage-units/', PublicProfileViewSet.as_view({'get':'get_storage_units'})),
]

urlpatterns += router.urls