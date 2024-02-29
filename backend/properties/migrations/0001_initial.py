# Generated by Django 5.0.1 on 2024-02-29 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CondoUnit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.IntegerField()),
                ('purchase_price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('rent_price', models.DecimalField(decimal_places=2, max_digits=20)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ParkingUnit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.IntegerField()),
                ('purchase_price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('rent_price', models.DecimalField(decimal_places=2, max_digits=20)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PropertyProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('province', models.CharField(max_length=100)),
                ('postal_code', models.CharField(max_length=12)),
            ],
        ),
        migrations.CreateModel(
            name='StorageUnit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.IntegerField()),
                ('purchase_price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('rent_price', models.DecimalField(decimal_places=2, max_digits=20)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
