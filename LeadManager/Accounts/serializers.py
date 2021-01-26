"""
Description: Accounts Serializers File
Version: 1
Author: Taki Guan
Date: 2021-01-25 11:49:20
LastEditors: Taki Guan
LastEditTime: 2021-01-25 15:02:43
"""
# 用户 Serializer
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email")


# 注册 Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_date):
        user = User.objects.create_user(
            validated_date["username"],
            validated_date["email"],
            validated_date["password"],
        )

        return user


# 登录 Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
