from rest_framework import serializers

from reviews.models import Review, Like, Dislike


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class DislikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dislike
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField()
    
    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('date_posted', '')


class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('date_posted', 'id')


