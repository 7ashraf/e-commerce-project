from django.db import models
from django.conf import settings


class Item(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()

    def __str__(self):
        return self.name


class OrderItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    orderItems = models.ManyToManyField(OrderItem)
