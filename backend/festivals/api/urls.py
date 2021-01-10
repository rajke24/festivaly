from django.urls import path
from .views import FestivalListAPIView, FestivalDetailAPIView

urlpatterns = [
    path('', FestivalListAPIView.as_view(), name="festival-list"),
    path('<int:pk>', FestivalDetailAPIView.as_view(),
         name="festival-detail"),
]
