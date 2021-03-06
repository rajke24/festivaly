from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.db.models import Count
from festivals.models import Festival
from .serializers import FestivalSerializer, FestivalDetailSerializer

class FestivalListAPIView(ListAPIView):
    serializer_class = FestivalSerializer

    def get_queryset(self):
        queryset = Festival.objects.all().order_by('name')
        festival = self.request.query_params.get('festival', None)
        if festival is not None and festival != "":
            queryset = queryset.filter(name__icontains=festival)
        return queryset


class TopFestivalListAPIView(ListAPIView):
    serializer_class = FestivalSerializer
    queryset = Festival.objects.annotate(number_of_reviews=Count(
        'reviews')).order_by('-number_of_reviews')[:2]


class FestivalDetailAPIView(RetrieveAPIView):
    serializer_class = FestivalDetailSerializer
    queryset = Festival.objects.all()
