from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRouts, name='routs'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<str:id>/', views.getNote, name='note'),
    path('notes/<str:id>/update', views.updateNote, name='note-update'),
    path('notes/add',views.addNote,name='add-note')
]
