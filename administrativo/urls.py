from django.urls import path
from .views import viewIndex;

urlpatterns = [
    path('', viewIndex.as_view(), name="index"),
]