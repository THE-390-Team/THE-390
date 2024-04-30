from rest_framework import serializers
from .models import ServiceRequest, AccessRequest, IntercomRequest, MoveInRequest, MoveOutRequest, ViolationReport, DeficiencyReport, MiscelaniousRequest

class ServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceRequest
        fields = '__all__'
        
class AccessRequestSerializer(serializers.ModelSerializer):
    class Meta(ServiceRequestSerializer.Meta):
        model = AccessRequest
        fields = '__all__'
        
class IntercomRequestSerializer(serializers.ModelSerializer):
    class Meta(ServiceRequestSerializer.Meta):
        model = IntercomRequest
        fields = '__all__'
        
class MoveInRequestSerializer(serializers.ModelSerializer):
    class Meta(ServiceRequestSerializer.Meta):
        model = MoveInRequest
        fields = '__all__'

class MoveOutRequestSerializer(serializers.ModelSerializer):
    class Meta(ServiceRequestSerializer.Meta):
        model = MoveOutRequest
        fields = '__all__'

class ViolationReportSerializer(serializers.ModelSerializer):
    class Meta(ServiceRequestSerializer.Meta):
        model = ViolationReport
        fields = '__all__'

class DeficiencyReportSerializer(serializers.ModelSerializer):
    class Meta(ServiceRequestSerializer.Meta):
        model = DeficiencyReport
        fields = '__all__'
        
class MiscelaniousRequestSerializer(serializers.ModelSerializer):
    class Meta(ServiceRequestSerializer.Meta):
        model = MiscelaniousRequest
        fields = '__all__'