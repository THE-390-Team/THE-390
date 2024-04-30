from django.db import models

# Create your models here.



class ServiceRequest(models.Model):
    
    class Status(models.TextChoices):
        PENDING = 'PENDING'
        IN_PROGRESS = 'IN_PROGRESS'
        COMPLETED = 'COMPLETED'
        
    class Meta:
        ordering = ['request_date']
        abstract = True
        
        
    assigned_employee = models.ForeignKey('user_profile.EmployeeProfile', on_delete=models.DO_NOTHING)
    request_date = models.DateTimeField(auto_now_add=True)
    request_description = models.TextField()
    completed = models.BooleanField(default=False)
    completion_date = models.DateTimeField(null=True, blank=True)
    completion_information = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.PENDING)
    
class AccessRequest(ServiceRequest):
    public_profile = models.ForeignKey('user_profile.UserProfile', on_delete=models.CASCADE, related_name='access_requests')

class IntercomRequest(ServiceRequest):
    public_profile = models.ForeignKey('user_profile.UserProfile', on_delete=models.CASCADE, related_name='intercom_requests')


class MoveInRequest(ServiceRequest):
    public_profile = models.ForeignKey('user_profile.UserProfile', on_delete=models.CASCADE, related_name='move_in_requests')
    unit = models.ForeignKey('properties.CondoUnit', on_delete=models.CASCADE, related_name='move_in_requests')

class MoveOutRequest(ServiceRequest):
    public_profile = models.ForeignKey('user_profile.UserProfile', on_delete=models.CASCADE, related_name='move_out_requests')
    unit = models.ForeignKey('properties.CondoUnit', on_delete=models.CASCADE, related_name='move_out_requests')

class ViolationReport(ServiceRequest):
    public_profile = models.ForeignKey('user_profile.UserProfile', on_delete=models.CASCADE, related_name='violation_reports')


class DeficiencyReport(ServiceRequest):
    public_profile = models.ForeignKey('user_profile.UserProfile', on_delete=models.CASCADE, related_name='deficiency_reports')


class MiscelaniousRequest(ServiceRequest):
    public_profile = models.ForeignKey('user_profile.UserProfile', on_delete=models.CASCADE, related_name='miscelanious_requests')
