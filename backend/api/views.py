from rest_framework.generics import ListAPIView
from backend.api.serializers import ItemSerializer
from backend.models import *
from rest_framework.permissions import AllowAny


class ItemListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
