from django.contrib import admin
from django.urls import path
from App import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('opportunities/', views.opportunities, name="opportunities"),

    # Path to send frontend form
    path('email-frontend/', views.email_frontend, name="email_frontend"),

    # # Path to send backend form
    # path('email-backend/', views.email_backend, name="email_backend"),

    # # Path to send fullstack form
    # path('email-full-stack/', views.email_fullstack, name="email_fullstack"),
]
