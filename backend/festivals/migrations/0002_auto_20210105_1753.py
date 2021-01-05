# Generated by Django 3.1.4 on 2021-01-05 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festivalreview',
            name='dislikes_count',
            field=models.PositiveSmallIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='festivalreview',
            name='likes_count',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]
