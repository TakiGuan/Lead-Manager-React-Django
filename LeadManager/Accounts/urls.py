"""
Description: Accounts Register URL
Version: 1
Author: Taki Guan
Date: 2021-01-25 13:18:33
LastEditors: Taki Guan
LastEditTime: 2021-01-25 14:44:18
"""

from django.urls import path, include
from .api import RegisterAPI, LoginAPI
from knox import views as knox_views

urlpatterns = [
    path("api/auth", include("knox.urls")),
    path("api/auth/register", RegisterAPI.as_view()),
    path("api/auth/login", LoginAPI.as_view()),
]
