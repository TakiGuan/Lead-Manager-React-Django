"""
Description: URL Configuration
Version: 1
Author: Taki Guan
Date: 2021-01-21 22:52:53
LastEditors: Taki Guan
LastEditTime: 2021-01-21 22:52:56
"""
from rest_framework import routers, urlpatterns
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register("api/leads", LeadViewSet, "Leads")

urlpatterns = router.urls
