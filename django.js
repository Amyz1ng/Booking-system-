from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    # Other restaurant details

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    guests = models.IntegerField()
    # Other booking details

class Menu(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    # Other menu item details
