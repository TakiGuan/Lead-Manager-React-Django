"""
Description: Lead Model
Version: 1
Author: Taki Guan
Date: 2021-01-21 21:48:53
LastEditors: Taki Guan
LastEditTime: 2021-01-21 22:11:48
"""
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.TextField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
