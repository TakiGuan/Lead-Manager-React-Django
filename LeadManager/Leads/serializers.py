"""
Description: Serializers
Version: 1
Author: Taki Guan
Date: 2021-01-21 22:37:51
LastEditors: Taki Guan
LastEditTime: 2021-01-21 22:39:56
"""
from rest_framework import serializers
from .models import Lead

# Lead Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"
