from django import forms
from .models import Client

class ClientForm(forms.Form):
    name = forms.CharField(label='Your name', max_length=100)
    offices = forms.CharField(max_length=100)
    type_contact = forms.CharField(max_length=100, required=False, widget=forms.Select(choices=Client.CONTACT_CHOICES))
    
    contact = forms.CharField(max_length=100)
    date = forms.DateField()
    time = forms.CharField(max_length=40)
