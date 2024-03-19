# Generated by Django 5.0.1 on 2024-03-19 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='propertyprofile',
            name='fee_rate',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='propertyprofile',
            name='propertyImage',
            field=models.ImageField(default='property_images/defaultProperty.jpg', upload_to='property_images'),
        ),
    ]
