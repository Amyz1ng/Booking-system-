from django.db import models

class Reservation(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number_of_people = models.IntegerField()
    date = models.DateField()
    time = models.TimeField()
    booking_information = models.TextField()

    # Optionally, you can add additional fields as needed

    def __str__(self):
        return self.name  # Customize how the object is displayed in the admin panel