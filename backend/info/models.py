from django.db import models

# Create your models here.


class Room(models.Model):
    STATUS_CHOICES = [("none", "не сдаeтся"), 
                        ("free", "свободно"), 
                        ("notfree", "занято"), 
                        ("reserved", "резерв")]

    name = models.CharField(max_length=200)
    square = models.FloatField(default=0)
    status = models.CharField(choices=STATUS_CHOICES, default="free", max_length=15)
    price = models.CharField(default=0, max_length=200)
    type_room = models.IntegerField(default=1)
    more_info = models.CharField(default="", max_length=200, blank=True)

    def __str__(self):
        return self.name

class Client(models.Model):
    CONTACT_CHOICES = [ (1, "phone"),
                        (2, "email"),
                        (3, "WhatsApp"),
                        (4, "Telegram"),
                        (5, "Viber")]

    name = models.CharField(max_length=200)
    offices = models.CharField(max_length=100, default="")
    type_contact = models.CharField(max_length=100, choices=CONTACT_CHOICES)
    contact = models.CharField(max_length=100, default="")
    date = models.DateField(default='2019-01-01', blank=True)
    time = models.CharField(max_length=40, default="")

    def __str__(self):
        return name

class UnionOffices(models.Model):
    name = models.CharField(default="Блок офисов", max_length=200)
    room_1 = models.BooleanField(default=False)
    room_2 = models.BooleanField(default=False)
    room_3 = models.BooleanField(default=False)
    room_4 = models.BooleanField(default=False)
    room_5 = models.BooleanField(default=False)
    room_6 = models.BooleanField(default=False)
    room_7 = models.BooleanField(default=False)
    room_8 = models.BooleanField(default=False)
    room_9 = models.BooleanField(default=False)
    room_10 = models.BooleanField(default=False)
    room_11 = models.BooleanField(default=False)
    room_12 = models.BooleanField(default=False)
    room_13 = models.BooleanField(default=False)
    room_14 = models.BooleanField(default=False)
    room_15 = models.BooleanField(default=False)
    room_16 = models.BooleanField(default=False)
    room_17 = models.BooleanField(default=False)
    room_18 = models.BooleanField(default=False)
    room_19 = models.BooleanField(default=False)
    room_20 = models.BooleanField(default=False)
    room_21 = models.BooleanField(default=False)
    room_22 = models.BooleanField(default=False)
    room_23 = models.BooleanField(default=False)
    room_24 = models.BooleanField(default=False)
    room_25 = models.BooleanField(default=False)
    room_26 = models.BooleanField(default=False)
    room_27 = models.BooleanField(default=False)
    room_28 = models.BooleanField(default=False)
    room_29 = models.BooleanField(default=False)
    room_30 = models.BooleanField(default=False)
    room_31 = models.BooleanField(default=False)
    room_32 = models.BooleanField(default=False)
    room_33 = models.BooleanField(default=False)
    room_34 = models.BooleanField(default=False)
    room_35 = models.BooleanField(default=False)
    room_36 = models.BooleanField(default=False)
    room_37 = models.BooleanField(default=False)
    room_38 = models.BooleanField(default=False)
    room_39 = models.BooleanField(default=False)
    room_40 = models.BooleanField(default=False)
    room_41 = models.BooleanField(default=False)
    room_42 = models.BooleanField(default=False)
    room_43 = models.BooleanField(default=False)
    room_44 = models.BooleanField(default=False)
    room_45 = models.BooleanField(default=False)
    room_46 = models.BooleanField(default=False)
    room_47 = models.BooleanField(default=False)

    def __str__(self):
        if (self.name != "Блок офисов"):
            return self.name
        else:
            line = "Блок офисов "
            if self.room_1:
                line = line + "1 "
            if self.room_2:
                line = line + "2 "
            if self.room_3:
                line = line + "3 "
            if self.room_4:
                line = line + "4 "
            if self.room_5:
                line = line + "5 "
            if self.room_6:
                line = line + "6 "
            if self.room_7:
                line = line + "7 "
            if self.room_8:
                line = line + "8 "
            if self.room_9:
                line = line + "9 "
            if self.room_10:
                line = line + "10 "

            if self.room_11:
                line = line + "11 "
            if self.room_12:
                line = line + "12 "
            if self.room_13:
                line = line + "13 "
            if self.room_14:
                line = line + "14 "
            if self.room_15:
                line = line + "15 "
            if self.room_16:
                line = line + "16 "
            if self.room_17:
                line = line + "17 "
            if self.room_18:
                line = line + "18 "
            if self.room_19:
                line = line + "19 "
            if self.room_20:
                line = line + "20 " 

            if self.room_21:
                line = line + "21 "
            if self.room_22:
                line = line + "22 "
            if self.room_23:
                line = line + "23 "
            if self.room_24:
                line = line + "24 "
            if self.room_25:
                line = line + "25 "
            if self.room_26:
                line = line + "26 "
            if self.room_27:
                line = line + "27 "
            if self.room_28:
                line = line + "28 "
            if self.room_29:
                line = line + "29 "
            if self.room_30:
                line = line + "30 " 

            if self.room_31:
                line = line + "31 "
            if self.room_32:
                line = line + "32 "
            if self.room_33:
                line = line + "33 "
            if self.room_34:
                line = line + "34 "
            if self.room_35:
                line = line + "35 "
            if self.room_36:
                line = line + "36 "
            if self.room_37:
                line = line + "37 "
            if self.room_38:
                line = line + "38 "
            if self.room_39:
                line = line + "39 "
            if self.room_40:
                line = line + "40 "

            if self.room_41:
                line = line + "41 "
            if self.room_42:
                line = line + "42 "
            if self.room_43:
                line = line + "43 "
            if self.room_44:
                line = line + "44 "
            if self.room_45:
                line = line + "45 "
            if self.room_46:
                line = line + "46 "
            if self.room_47:
                line = line + "47 "
            
            return line
