from django.contrib import admin
from django.urls import path, include                
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/auth/', include('accounts.api.urls')),
    path('api/festivals/', include('festivals.api.urls')),
    path('api/reviews/', include('reviews.api.urls')),
]
