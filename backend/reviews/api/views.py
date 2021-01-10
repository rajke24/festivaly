from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework import mixins, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from reviews.models import Review, Like, Dislike
from .serializers import ReviewSerializer, CreateReviewSerializer, LikeSerializer, DislikeSerializer


class ReviewListAPIView(ListAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all().order_by('-date_posted')


class FestivalReviewsListAPIView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        festival_id = self.kwargs['festival_id']
        return Review.objects.filter(festival=festival_id).order_by('-date_posted')


class ReviewCreateAPIView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = CreateReviewSerializer
    permission_classes = [
        IsAuthenticated
    ]


class LikeCreateAPIView(mixins.CreateModelMixin, APIView):
    serializer_class = LikeSerializer
    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request, format=None):
        serializer = LikeSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data.get('user')
            review = serializer.validated_data.get('review')
            like_found = Like.objects.filter(review=review).filter(user=user)
            dislike_found = Dislike.objects.filter(
                review=review).filter(user=user)
            if like_found or dislike_found:
                return Response(status=status.HTTP_409_CONFLICT
                                )
            else:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DislikeCreateAPIView(CreateAPIView):
    serializer_class = DislikeSerializer
    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request, format=None):
        serializer = DislikeSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data.get('user')
            review = serializer.validated_data.get('review')
            like_found = Like.objects.filter(review=review).filter(user=user)
            dislike_found = Dislike.objects.filter(
                review=review).filter(user=user)
            if like_found or dislike_found:
                return Response(status=status.HTTP_409_CONFLICT
                                )
            else:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LikeListAPIView(ListAPIView):
    serializer_class = LikeSerializer

    def get_queryset(self):
        festival_id = self.kwargs['festival_id']
        return Like.objects.filter(review__festival=festival_id)


class DislikeListAPIView(ListAPIView):
    serializer_class = LikeSerializer

    def get_queryset(self):
        festival_id = self.kwargs['festival_id']
        return Dislike.objects.filter(review__festival=festival_id)
