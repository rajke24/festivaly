from rest_framework import serializers
from django.contrib.auth.models import User

from festivals.models import Festival
# from reviews.api.serializers import ReviewSerializer


class FestivalSerializer(serializers.ModelSerializer):
    reviews = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Festival
        fields = (
                    'id',
                    'name', 
                    'description', 
                    'img_url', 
                    'rating',
                    'reviews',
                    )

    
class FestivalDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Festival
        fields = '__all__'
