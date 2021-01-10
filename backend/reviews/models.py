from django.db import models
from django.contrib.auth.models import User

from festivals.models import Festival

class Review(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    festival = models.ForeignKey(Festival, related_name='reviews', on_delete=models.CASCADE, null=True, blank=True)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    rating = models.PositiveSmallIntegerField(default=0)


    @property
    def author_name(self):
        return self.author.username


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name="likes")


class Dislike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name="dislikes")