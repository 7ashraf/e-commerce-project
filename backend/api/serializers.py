from rest_framework import serializers
from backend.models import *


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'price', 'slug')


class OrderItemSerializer(serializers.ModelSerializer):
    item = StringSerializer()

    class Meta:
        model = OrderItem
        fields = (
            'id',
            'item',
            'quantity'
        )


class OrderSerializer(serializers.ModelSerializer):
    order_items = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = (
            'id',
            'order_items'
        )

    def get_order_items(self, obj):
        return OrderItemSerializer(obj.orderItems.all(), many=True).data
