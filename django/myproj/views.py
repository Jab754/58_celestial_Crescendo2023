from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def homePage(request):
    return render(request, "C:/Users/Jabir Khan/Desktop/Codes/django/Templates/index.html")