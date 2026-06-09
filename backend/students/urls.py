from django.urls import path
from .views import (
    login_view,
    students_view,
    student_delete_update
)

urlpatterns = [
    path("login/", login_view),
    path("students/", students_view),
    path("students/<int:id>/", student_delete_update),
]