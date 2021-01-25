"""
Description: URL File
Version: 1
Author: Taki Guan
Date: 2021-01-21 21:45:48
LastEditors: Taki Guan
LastEditTime: 2021-01-25 13:20:21
"""
from django.urls import path, include

urlpatterns = [
    path("", include("Frontend.urls")),
    path("", include("Leads.urls")),
    path("", include("Accounts.urls")),
]
