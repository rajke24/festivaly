from django.urls import path
from .views import ReviewListAPIView, FestivalReviewsListAPIView, ReviewCreateAPIView, LikeCreateAPIView, DislikeCreateAPIView, LikeListAPIView, DislikeListAPIView

urlpatterns = [
    path('', ReviewListAPIView.as_view(), name="review-list"),
    path('<int:festival_id>', FestivalReviewsListAPIView.as_view(),
         name="festival-reviews"),
    path('create/', ReviewCreateAPIView.as_view(), name="review-create"),
    path('likes/<int:festival_id>', LikeListAPIView.as_view(), name="likes-list"),
    path('dislikes/<int:festival_id>', DislikeListAPIView.as_view(), name="dislikes-list"),
    path('likes/create/', LikeCreateAPIView.as_view(), name="like-create"),
    path('dislikes/create/', DislikeCreateAPIView.as_view(), name="dislike-create"),
]
