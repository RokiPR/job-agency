from django.contrib import admin
from .models import Registered_emails

# Register your models here.
class Registered_emailsAdmin(admin.ModelAdmin):
    list_display = ['email']
    search_fields = ["email"]
    list_per_page = 10

admin.site.register(Registered_emails, Registered_emailsAdmin)