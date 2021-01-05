from rest_framework import serializers
from django.contrib.auth.models import User

from festivals.models import  Festival
 

class FestivalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Festival
        fields = ('__all__')
