from rest_framework import serializers
from backend.models import *


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('name', 'price')
