from django.urls import path
from .views import FestivalListAPIView, FestivalDetailAPIView, TopFestivalListAPIView

urlpatterns = [
    path('', FestivalListAPIView.as_view(), name="festival-list"),
    path('top/', TopFestivalListAPIView.as_view(), name="top-festival-list"),
    path('<int:pk>', FestivalDetailAPIView.as_view(),
         name="festival-detail"),
]
