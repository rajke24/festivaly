from django.db import models
# Create your models here.
class Festival(models.Model):
    name = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    description = models.TextField(default="Sorry, no description available yet. We are working on it :)")
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    category = models.CharField(max_length=150)
    img_url = models.URLField(default="https: // bigseventravel.com/wp-content/uploads/2019/10/def.jpg")
    
    def __str__(self):
        return self.name

    @property
    def rating(self):
        return self.reviews.aggregate(avg_rating=models.Avg('rating'))['avg_rating']