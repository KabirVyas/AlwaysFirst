from rest_framework import serializers
from api_app.models import CRUD

class CrudSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CRUD
        fields = ['employeeid','employeeno','gender','age','education','band','monthlyincome','totworkingyrs','department']