"""
Description: Frontend
Version: 1
Author: Taki Guan
Date: 2021-01-21 23:34:44
LastEditors: Taki Guan
LastEditTime: 2021-01-22 09:01:11
"""
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "frontend/index.html")
