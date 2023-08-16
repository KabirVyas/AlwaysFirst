from django.db import models

# Create your models here.

class CRUD(models.Model):
    employeeid = models.AutoField(primary_key=True)
    employeeno = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    age = models.IntegerField()
    education = models.CharField(max_length=100)
    band = models.IntegerField()
    monthlyincome = models.IntegerField()
    totworkingyrs = models.IntegerField()
    department = models.CharField(max_length=100)

    def __str__(self):
        return self.employeeno