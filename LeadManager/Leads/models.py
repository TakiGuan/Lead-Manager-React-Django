"""
Description: Lead Model
Version: 1
Author: Taki Guan
Date: 2021-01-21 21:48:53
LastEditors: Taki Guan
LastEditTime: 2021-01-21 22:11:48
"""
from django.db import models

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
