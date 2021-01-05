from rest_framework.generics import ListAPIView

from festivals.models import Festival
from .serializers import FestivalSerializer

class FestivalListAPIView(ListAPIView):
    serializer_class = FestivalSerializer

    def get_queryset(self):
        queryset = Festival.objects.all()
        festival = self.request.query_params.get('festival', None)
        if festival is not None and festival != "":
            queryset = queryset.filter(name__icontains=festival)
        return queryset