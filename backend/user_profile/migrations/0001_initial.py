# Generated by Django 5.0.1 on 2024-02-29 18:53

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('role', models.CharField(choices=[('PUBLIC', 'Public'), ('EMPLOYEE', 'Employee'), ('COMPANY', 'Company')], default='PUBLIC', max_length=50)),
                ('first_name', models.CharField(blank=True, max_length=150)),
                ('last_name', models.CharField(blank=True, max_length=150)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='CompanyProfile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('address', models.CharField(blank=True, max_length=255)),
                ('city', models.CharField(blank=True, max_length=100)),
                ('province', models.CharField(blank=True, max_length=100)),
                ('postal_code', models.CharField(blank=True, max_length=10)),
                ('phone_number', models.CharField(blank=True, max_length=15)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='EmployeeProfile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('address', models.CharField(blank=True, max_length=255)),
                ('city', models.CharField(blank=True, max_length=100)),
                ('province', models.CharField(blank=True, max_length=100)),
                ('postal_code', models.CharField(blank=True, max_length=10)),
                ('phone_number', models.CharField(blank=True, max_length=15)),
                ('position', models.CharField(choices=[('MANAGER', 'Manager'), ('FINANCE', 'Finance'), ('DAILY_OPERATIONS', 'Daily_Operations')], default='DAILY_OPERATIONS', max_length=100)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PublicProfile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('address', models.CharField(blank=True, max_length=255)),
                ('city', models.CharField(blank=True, max_length=100)),
                ('province', models.CharField(blank=True, max_length=100)),
                ('postal_code', models.CharField(blank=True, max_length=10)),
                ('phone_number', models.CharField(blank=True, max_length=15)),
                ('type', models.CharField(choices=[('OWNER', 'Owner'), ('RENTER', 'Renter')], default='OWNER', max_length=100)),
                ('registration_key', models.CharField(max_length=50, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
