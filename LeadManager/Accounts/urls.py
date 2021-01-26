"""
Description: Accounts Register URL
Version: 1
Author: Taki Guan
Date: 2021-01-25 13:18:33
LastEditors: Taki Guan
LastEditTime: 2021-01-26 08:18:31
"""

from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path("api/auth", include("knox.urls")),
    path("api/auth/register", RegisterAPI.as_view()),
    path("api/auth/login", LoginAPI.as_view()),
    path("api/auth/user", UserAPI.as_view()),
    path("api/auth/logout", knox_views.LogoutView.as_view(), name="knox_logout"),
]
