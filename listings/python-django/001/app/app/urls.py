from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from blog import views


urlpatterns = patterns('',
    url(r'^$', views.PostListView.as_view(), name='home'),
    url(r'^admin/', include(admin.site.urls)),
)
