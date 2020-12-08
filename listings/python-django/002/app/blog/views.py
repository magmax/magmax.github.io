from django.views.generic.list import ListView
from django.views.generic.detail import DetailView

from . import models


class PostListView(ListView):
    model = models.Post
    paginate_by = 8


class PostDetailView(DetailView):
    model = models.Post
