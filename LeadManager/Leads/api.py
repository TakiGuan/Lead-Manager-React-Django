"""
Description: API File
Version: 1
Author: Taki Guan
Date: 2021-01-21 22:45:55
LastEditors: Taki Guan
LastEditTime: 2021-01-25 11:07:09
"""

from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    # 启用身份认证
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
