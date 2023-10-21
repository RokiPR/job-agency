from django.shortcuts import render

# imports for sending emails
from django.http import HttpResponseRedirect # Redirect the page after submit
from django.contrib import messages # Return success messages or error messages
from django.core.mail import EmailMultiAlternatives # Required to send emails
from django.template import loader # Render templates on email body
from django.core.mail import send_mail

# Create your views here.
def home(request):
    return render(request, "home.html")

def opportunities(request):
    return render(request, "opportunities.html")

def email_frontend(request):
        if request.method == "POST":
            name = request.POST.get("name")
            age = request.POST.get("age")
            email = request.POST.get("email")
            phone = request.POST.get("phone")
            address = request.POST.get("address")
            experience = request.POST.get("experience")
            skills = request.POST.get("skills")
            template = loader.get_template("resume_form.txt")
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
            email = send_mail(
                "Frontend - Candidate", 
                message,
                from_email=email,
                recipient_list=["recipient@example.com"],
                fail_silently=False,
            )
            email.content_subtype = "html"
            file = request.FILES["file"]
            email.attach(file.name, file.read(), file.content_type)
            email.send()
            messages.success(request, "Backend resume send successfully!")
            return HttpResponseRedirect("/")


# # Function to send email for frontend candidates
# def email_frontend(request):
#     if request.method == "POST":
#         name = request.POST.get("name")
#         age = request.POST.get("age")
#         email = request.POST.get("email")
#         phone = request.POST.get("phone")
#         address = request.POST.get("address")
#         experience = request.POST.get("experience")
#         skills = request.POST.get("skills")
#         template = loader.get_template("resume_form.txt")
#         context = {
#             "name": name,
#             "age": age,
#             "email": email,
#             "phone": phone,
#             "address": address,
#             "experience": experience,
#             "skills": skills,
#         }
#         message = template.render(context)
#         email = EmailMultiAlternatives(
#             "Frontend - Candidate", message,
#             "Frontend Oppurtunity",
#             ["raonar.vokshi@gmail.com"]
#         )
#         email.content_subtype = "html"
#         file = request.FILES["file"]
#         email.attach(file.name, file.read(), file.content_type)
#         email.send()
#         messages.success(request, "Frontend resume send successfully!")
#         return HttpResponseRedirect("/")
    
# # Function to send email for backend candidates
# def email_backend(request):
#     if request.method == "POST":
#         name = request.POST.get("name")
#         age = request.POST.get("age")
#         email = request.POST.get("email")
#         phone = request.POST.get("phone")
#         address = request.POST.get("address")
#         experience = request.POST.get("experience")
#         skills = request.POST.get("skills")
#         template = loader.get_template("resume_form.txt")
#         context = {
#             "name": name,
#             "age": age,
#             "email": email,
#             "phone": phone,
#             "address": address,
#             "experience": experience,
#             "skills": skills,
#         }
#         message = template.render(context)
#         email = EmailMultiAlternatives(
#             "Backend - Candidate", message,
#             "Backend Oppurtunity",
#             ["raonar.vokshi@gmail.com", email]
#         )
#         email.content_subtype = "html"
#         file = request.FILES["file"]
        # email.attach(file.name, file.read(), file.content_type)
        # email.send()
        # messages.success(request, "Backend resume send successfully!")
        # return HttpResponseRedirect("/")
    
# # Function to send email for fullstack candidates
# def email_fullstack(request):
#     if request.method == "POST":
#         name = request.POST.get("name")
#         age = request.POST.get("age")
#         email = request.POST.get("email")
#         phone = request.POST.get("phone")
#         address = request.POST.get("address")
#         experience = request.POST.get("experience")
#         skills = request.POST.get("skills")
#         template = loader.get_template("resume_form.txt")
#         context = {
#             "name": name,
#             "age": age,
#             "email": email,
#             "phone": phone,
#             "address": address,
#             "experience": experience,
#             "skills": skills,
#         }
#         message = template.render(context)
#         email = EmailMultiAlternatives(
#             "FullStack - Candidate", message,
#             "FullStack Oppurtunity",
#             ["raonar.vokshi@gmail.com", email]
#         )
#         email.content_subtype = "html"
#         file = request.FILES["file"]
#         email.attach(file.name, file.read(), file.content_type)
#         email.send()
#         messages.success(request, "FullStack resume send successfully!")
#         return HttpResponseRedirect("/")