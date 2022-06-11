from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST

from backend.api.serializers import *
from backend.models import *
from rest_framework.permissions import AllowAny, IsAuthenticated


class ItemListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


class AddToCart(APIView):

    def post(self, request, *args, **kwargs):
        slug = request.data.get('slug', None)
        item = get_object_or_404(Item, slug=slug)
        orderItem, created = OrderItem.objects.get_or_create(
            item=item,
            user=request.user,
            ordered=False
        )
        orderQs = Order.objects.filter(user=request.user, ordered=False)
        if orderQs.exists():
            order = orderQs[0]
            # chck if item exists in order
            if order.orderItems.filter(item__slug=item.slug).exists():
                orderItem.quantity += 1
                orderItem.save()
                return Response(status=HTTP_200_OK)
            else:
                order.orderItems.add(orderItem)
                return Response(status=HTTP_200_OK)

        else:
            order = Order.objects.create(user=request.user)
            order.orderItems.add(orderItem)
            return Response(status=HTTP_200_OK)


class OrderView(RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_class = (IsAuthenticated,)

    def get_object(self):
        try:
            order = Order.objects.get(
                user=self.request.user,
                ordered=False
            )
            return order
        except ObjectDoesNotExist:
            return Response({'message': 'ObjectDoesNotExist'}, status=HTTP_400_BAD_REQUEST)
