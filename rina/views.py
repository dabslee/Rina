from django.shortcuts import render, redirect
from django.http import HttpResponse

def splash(request):
    if request.user.is_authenticated:
        return redirect('index')
    else:
        return render(request, 'splash.html', {})

def index(request):
    return render(request, 'index.html', {})