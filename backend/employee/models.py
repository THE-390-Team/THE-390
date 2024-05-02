from django.db import models

# Create your models here.


class ServiceRequest(models.Model):

    class Type(models.TextChoices):
        MOVE_IN = "MOVE_IN", "Move In"
        MOVE_OUT = "MOVE_OUT", "Move Out"
        REPAIR = "REPAIR", "Repair"
        ACCESS = "ACCESS", "Access"
        INTERCOM = "INTERCOM", "Intercom"
        VIOLATION = "VIOLATION", "Violation"
        DEFFIENCY = "DEFFIENCY", "Deffiency"
        MISCELANIOUS = "MISCELANIOUS", "Miscelanious"

    class Status(models.TextChoices):
        PENDING = 'PENDING','Pending'
        IN_PROGRESS = 'IN_PROGRESS','In_Progress'
        COMPLETED = 'COMPLETED','Completed'
        CANCELLED = 'CANCELLED', 'Cancelled'
        
    class Meta:
        ordering = ["request_date"]

    public_profile = models.ForeignKey(
        "user_profile.PublicProfile", on_delete=models.CASCADE, related_name="requests"
    )
    assigned_employee = models.ForeignKey(
        "user_profile.EmployeeProfile",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    request_date = models.DateTimeField(auto_now_add=True)
    request_description = models.TextField()
    completed = models.BooleanField(default=False)
    completion_date = models.DateTimeField(null=True, blank=True)
    completion_information = models.TextField(null=True, blank=True)
    status = models.CharField(
        max_length=20, choices=Status.choices, default=Status.PENDING
    )
    unit = models.ForeignKey(
        "properties.CondoUnit",
        on_delete=models.SET_NULL,
        related_name="requests",
        blank=True,
        null=True,
    )
    type = models.CharField(
        max_length=20, choices=Type.choices, default=Type.MISCELANIOUS
    )
