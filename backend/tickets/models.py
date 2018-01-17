from django.db import models


class Ticket(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    body = models.TextField()
    haveRead = models.BooleanField
