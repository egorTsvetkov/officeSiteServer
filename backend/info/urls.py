from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/<officeId>', views.getOfficeInfo, name='OfficeInfo'),
    path('api/all/', views.getStatus, name='getStatus'),
    path('view', views.userData, name='userData'),
]
