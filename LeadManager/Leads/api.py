"""
Description: API File
Version: 1
Author: Taki Guan
Date: 2021-01-21 22:45:55
LastEditors: Taki Guan
LastEditTime: 2021-01-21 22:45:58
"""
from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LeadSerializer
