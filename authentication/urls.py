from django.urls import path

from . import views
from django.contrib.auth.views import LoginView, LogoutView

app_name = 'authentication'
urlpatterns = [
    path('login', LoginView.as_view(template_name="login.html", redirect_authenticated_user=True), name='login'),
    path('signup', views.signup, name='signup'),
    path('logout', LogoutView.as_view(next_page='splash'), name='logout'),
]
