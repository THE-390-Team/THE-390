from rest_framework import serializers
from .models import User, PublicProfile, EmployeeProfile, CompanyProfile, Profile



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email', 'role', 'first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = [ 'user', 'address', 'city', 'province', 'postal_code', 'phone_number']

class PublicProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta(ProfileSerializer.Meta):
        model = PublicProfile
        fields = ProfileSerializer.Meta.fields + ['type']


class EmployeeProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta(ProfileSerializer.Meta):
        model = EmployeeProfile
        fields = ProfileSerializer.Meta.fields + ['position']
        read_only_fields = ['position']

class CompanyProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta(ProfileSerializer.Meta):
        model = CompanyProfile
        fields = ProfileSerializer.Meta.fields