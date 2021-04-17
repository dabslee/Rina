from django.shortcuts import render, redirect
from django.http import HttpResponse

def index(request):
    if request.user.is_authenticated:
        return redirect('splash')
    else:
        return render(request, 'index.html', {})

def splash(request):
    return render(request, 'splash.html', {})