from allauth.account.signals import user_signed_up
from django.dispatch import receiver

@receiver(user_signed_up)
def populate_profile(request, user, **kwargs):
    socialaccount = user.socialaccount_set.first()
    if socialaccount and not user.email and 'email' in socialaccount.extra_data:
        user.email = socialaccount.extra_data['email']
        user.save()
