from django.shortcuts import render

# imports for sending emails
from django.http import HttpResponseRedirect # Redirect the page after submit
from django.contrib import messages # Return success messages or error messages
from django.core.mail import EmailMultiAlternatives # Required to send emails
from django.template import loader # Render templates on email body
from .models import Registered_emails

# Create your views here.
def home(request):
    return render(request, "home.html")

def opportunities(request):
    return render(request, "opportunities.html")


# # Function to send email for frontend candidates
def email_frontend(request):
    if request.method == "POST":

        # Check if email exists in DB
        email = request.POST["email"]
        email_exists = Registered_emails.objects.filter(email=email).exists()
        if email_exists:
            messages.error(request, "We already have your resume")
            return HttpResponseRedirect("/opportunities")

        else:
            name = request.POST.get("name")
            age = request.POST.get("age")
            email = request.POST.get("email")
            phone = request.POST.get("phone")
            address = request.POST.get("address")
            experience = request.POST.get("experience")
            skills = request.POST.get("skills")
            template = loader.get_template("resume_form.txt")

            # REGISTER EMAIL INSIDE DB
            contact = Registered_emails()
            contact.email = email
            contact.save()

            context = {
                "name": name,
                "age": age,
                "email": email,
                "phone": phone,
                "address": address,
                "experience": experience,
                "skills": skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Frontend - Candidate", message,
                "Frontend Oppurtunity",
                ["raonar.vokshi@gmail.com"]
            )
            email.content_subtype = "html"
            file = request.FILES["file"]
            email.attach(file.name, file.read(), file.content_type)
            email.send()
            messages.success(request, "Frontend resume sent successfully!")
            return HttpResponseRedirect("/")
    
# # Function to send email for backend candidates
def email_backend(request):
    if request.method == "POST":
        # Check if email exists in DB
        email = request.POST["email"]
        email_exists = Registered_emails.objects.filter(email=email).exists()
        if email_exists:
            messages.error(request, "We already have your resume")
            return HttpResponseRedirect("/opportunities")
        
        else:
            name = request.POST.get("name")
            age = request.POST.get("age")
            email = request.POST.get("email")
            phone = request.POST.get("phone")
            address = request.POST.get("address")
            experience = request.POST.get("experience")
            skills = request.POST.get("skills")
            template = loader.get_template("resume_form.txt")

            # REGISTER EMAIL INSIDE DB
            contact = Registered_emails()
            contact.email = email
            contact.save()

            context = {
                "name": name,
                "age": age,
                "email": email,
                "phone": phone,
                "address": address,
                "experience": experience,
                "skills": skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Backend - Candidate", message,
                "Backend Oppurtunity",
                ["raonar.vokshi@gmail.com", email]
            )
            email.content_subtype = "html"
            file = request.FILES["file"]
            email.attach(file.name, file.read(), file.content_type)
            email.send()
            messages.success(request, "Backend resume sent successfully!")
            return HttpResponseRedirect("/")
    
# # Function to send email for fullstack candidates
def email_fullstack(request):
    if request.method == "POST":

        # Check if email exists in DB
        email = request.POST["email"]
        email_exists = Registered_emails.objects.filter(email=email).exists()
        if email_exists:
            messages.error(request, "We already have your resume")
            return HttpResponseRedirect("/opportunities")

        name = request.POST.get("name")
        age = request.POST.get("age")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        address = request.POST.get("address")
        experience = request.POST.get("experience")
        skills = request.POST.get("skills")
        template = loader.get_template("resume_form.txt")

        # REGISTER EMAIL INSIDE DB
        contact = Registered_emails()
        contact.email = email
        contact.save()

        context = {
            "name": name,
            "age": age,
            "email": email,
            "phone": phone,
            "address": address,
            "experience": experience,
            "skills": skills,
        }
        message = template.render(context)
        email = EmailMultiAlternatives(
            "FullStack - Candidate", message,
            "FullStack Oppurtunity",
            ["raonar.vokshi@gmail.com", email]
        )
        email.content_subtype = "html"
        file = request.FILES["file"]
        email.attach(file.name, file.read(), file.content_type)
        email.send()
        messages.success(request, "FullStack resume sent successfully!")
        return HttpResponseRedirect("/")