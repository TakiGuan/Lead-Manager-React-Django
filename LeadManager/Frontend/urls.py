"""
Description: URL Redirect for Frontend
Version: 1
Author: Taki Guan
Date: 2021-01-22 09:30:50
LastEditors: Taki Guan
LastEditTime: 2021-01-22 09:30:52
"""
from django.urls import path
from . import views

urlpatterns = [path("", views.index)]
