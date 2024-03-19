from django.db import models

# Create your models here.
class Note(models.Model):

    body = models.TextField(blank=True,null=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        try:
            return f'{self.body[:50]}---- id:{self.id} --- updated: {self.updated} --- created: {self.created}'
        # {self.body[:50]} id:
        except:
            return 'can not create __str__'
