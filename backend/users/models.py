from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    name = models.CharField(null=True, blank=True, max_length=255,)
    new = models.BigIntegerField(null=True, blank=True,)
    neww = models.ForeignKey(
        "home.CustomText",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="user_neww",
    )
    newww = models.ForeignKey(
        "home.HomePage",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="user_newww",
    )
    newwww = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="user_newwww",
    )

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
