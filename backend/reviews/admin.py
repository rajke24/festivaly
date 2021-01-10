from django.contrib import admin

from .models import Review, Like, Dislike

admin.site.register(Review)
admin.site.register(Like)
admin.site.register(Dislike)