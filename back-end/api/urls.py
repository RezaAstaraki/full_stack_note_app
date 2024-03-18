from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRouts, name='routs'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<str:id>/', views.getNote, name='note'),
]
