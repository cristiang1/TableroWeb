from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns=[
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace="rest_framework")),
]