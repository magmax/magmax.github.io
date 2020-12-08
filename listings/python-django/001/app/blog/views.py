from django.views.generic.list import ListView

from . import models


class PostListView(ListView):
    model = models.Post
