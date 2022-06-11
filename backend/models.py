from django.db import models
from django.conf import settings


class Item(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    slug = models.SlugField()

    def __str__(self):
        return self.name


class OrderItem(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return self.item.name


class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )
    orderItems = models.ManyToManyField(OrderItem)
    ordered = models.BooleanField(default=False)
