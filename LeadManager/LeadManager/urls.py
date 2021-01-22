"""
Description: URL for LeadManager project
Version: 1
Author: Taki Guan
Date: 2021-01-21 21:45:48
LastEditors: Taki Guan
LastEditTime: 2021-01-21 22:52:29
"""
from django.urls import path, include

urlpatterns = [
    path("", include("Frontend.urls")),
    path("", include("Leads.urls")),
]
