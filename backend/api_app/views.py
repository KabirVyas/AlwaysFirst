from django.shortcuts import render
from rest_framework import viewsets
from api_app.models import CRUD
from api_app.serializers import CrudSerializer

# Create your views here.

class CrudViewSet(viewsets.ModelViewSet):
    queryset = CRUD.objects.all()
    serializer_class = CrudSerializer 