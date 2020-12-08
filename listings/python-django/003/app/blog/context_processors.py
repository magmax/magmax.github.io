from . import models


def tags(request):
    return {
        'tags': models.Tag.objects.order_by('name')
    }
