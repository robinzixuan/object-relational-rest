from django.db import models
from rest_framework import serializers, viewsets
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls import url
from rest_framework.documentation import include_docs_urls

class Classroom(models.Model):
    grade_level = models.CharField(max_length=100, blank=True)

class ClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classroom
        fields = '__all__'

class ClassroomViewSet(viewsets.ModelViewSet):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer

class Student(models.Model):
    name = models.CharField(max_length=100, blank=False)
    age = models.IntegerField()
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

router = DefaultRouter()
router.register(r'classrooms', ClassroomViewSet)
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    url(r'^docs/', include_docs_urls(title='Object Relational REST')),
]