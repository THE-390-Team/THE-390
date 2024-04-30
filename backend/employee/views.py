from rest_framework.viewsets import ModelViewSet

from .serializers import AccessRequestSerializer, IntercomRequestSerializer, MoveInRequestSerializer, MoveOutRequestSerializer, ViolationReportSerializer, DeficiencyReportSerializer, MiscelaniousRequestSerializer
from .models import AccessRequest, IntercomRequest, MoveInRequest, MoveOutRequest, ViolationReport, DeficiencyReport, MiscelaniousRequest

class AccessRequestViewSet(ModelViewSet):
    queryset = AccessRequest.objects.all()
    serializer_class = AccessRequestSerializer
    

class IntercomRequestViewSet(ModelViewSet):
    queryset = IntercomRequest.objects.all()
    serializer_class = IntercomRequestSerializer
    

class MoveInRequestViewSet(ModelViewSet):
    queryset = MoveInRequest.objects.all()
    serializer_class = MoveInRequestSerializer

class MoveOutRequestViewSet(ModelViewSet):
    queryset = MoveOutRequest.objects.all()
    serializer_class = MoveOutRequestSerializer
    
class ViolationReportViewSet(ModelViewSet):
    queryset = ViolationReport.objects.all()
    serializer_class = ViolationReportSerializer
    
class DeficiencyReportViewSet(ModelViewSet):
    queryset = DeficiencyReport.objects.all()
    serializer_class = DeficiencyReportSerializer
    
class MiscelaniousRequestViewSet(ModelViewSet):
    queryset = MiscelaniousRequest.objects.all()
    serializer_class = MiscelaniousRequestSerializer
    