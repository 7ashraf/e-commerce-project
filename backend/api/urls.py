from django.urls import path
from .views import *

urlpatterns = [
    path('product-list/', ItemListView.as_view(), name='product-list'),
    path('add-to-cart/', AddToCart.as_view(), name='add-to-cart'),
    path('order-summary/', OrderView.as_view(), name='order-summary')

]
