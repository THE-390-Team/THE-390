from django.db import models

from user_profile.models import User
from properties.models import Facility

# class Facility(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField(blank=True)
#     location = models.CharField(max_length=255, blank=True)

#     def __str__(self):
#         return self.name


class Reservation(models.Model):
    STATUS_CHOICES = (
        ("pending", "Pending"),
        ("confirmed", "Confirmed"),
        ("cancelled", "Cancelled"),
    )

    facility = models.ForeignKey(
        Facility, on_delete=models.CASCADE, related_name="reservations"
    )
    user = models.ForeignKey(
        "user_profile.PublicProfile",
        on_delete=models.CASCADE,
        related_name="reservations",
    )
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="pending")

    def __str__(self):
        return f"{self.facility.name} reservation for {self.user.username} from {self.start_time} to {self.end_time}"

    class Meta:
        ordering = ["start_time"]
