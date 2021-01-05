from django.urls import path, include
from .views import FestivalListAPIView

urlpatterns = [
    path('list', FestivalListAPIView.as_view(), name="festival-list"),
]