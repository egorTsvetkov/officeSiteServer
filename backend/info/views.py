from django.http import HttpResponse, Http404
from django.template import loader
from django.shortcuts import render, render_to_response
from django.http import JsonResponse
from django.core import serializers
from django.core.mail import send_mail
from django.conf import settings
from .telegram_message import send_telegram

# Create your views here.

from .models import Room, UnionOffices, Client
from .forms import ClientForm

def index(request):
    rooms = Room.objects.all()
    return render(request, 'info/index.html', {
        'rooms' : rooms,
        })

def checkColomns(uni):
    union = []
    if uni[0].room_1:
        union.append(1)
    if uni[0].room_2:
        union.append(2)
    if uni[0].room_3:
        union.append(3)
    if uni[0].room_4:
        union.append(4)
    if uni[0].room_5:
        union.append(5)
    if uni[0].room_6:
        union.append(6)
    if uni[0].room_7:
        union.append(7)
    if uni[0].room_8:
        union.append(8)
    if uni[0].room_9:
        union.append(9)
    if uni[0].room_10:
        union.append(10)

    if uni[0].room_11:
        union.append(11)
    if uni[0].room_12:
        union.append(12)
    if uni[0].room_13:
        union.append(13)
    if uni[0].room_14:
        union.append(14)
    if uni[0].room_15:
        union.append(15)
    if uni[0].room_16:
        union.append(16)
    if uni[0].room_17:
        union.append(17)
    if uni[0].room_18:
        union.append(18)
    if uni[0].room_19:
        union.append(19)
    if uni[0].room_20:
        union.append(20)

    if uni[0].room_21:
        union.append(21)
    if uni[0].room_22:
        union.append(22)
    if uni[0].room_23:
        union.append(23)
    if uni[0].room_24:
        union.append(24)
    if uni[0].room_25:
        union.append(25)
    if uni[0].room_26:
        union.append(26)
    if uni[0].room_27:
        union.append(27)
    if uni[0].room_28:
        union.append(28)
    if uni[0].room_29:
        union.append(29)
    if uni[0].room_30:
        union.append(30)

    if uni[0].room_31:
        union.append(31)
    if uni[0].room_32:
        union.append(32)
    if uni[0].room_33:
        union.append(33)
    if uni[0].room_34:
        union.append(34)
    if uni[0].room_35:
        union.append(35)
    if uni[0].room_36:
        union.append(36)
    if uni[0].room_37:
        union.append(37)
    if uni[0].room_38:
        union.append(38)
    if uni[0].room_39:
        union.append(39)
    if uni[0].room_40:
        union.append(40)

    if uni[0].room_41:
        union.append(41)
    if uni[0].room_42:
        union.append(42)
    if uni[0].room_43:
        union.append(43)
    if uni[0].room_44:
        union.append(44)
    if uni[0].room_45:
        union.append(45)
    if uni[0].room_46:
        union.append(46)
    if uni[0].room_47:
        union.append(47)
    return union

def getNumberUnion(officeId):
    union = []
    uni = ''
    if int(officeId) == 1:
        uni = UnionOffices.objects.filter(room_1=True)
    if int(officeId) == 2:
        uni = UnionOffices.objects.filter(room_2=True)
    if int(officeId) == 3:
        uni = UnionOffices.objects.filter(room_3=True)
    if int(officeId) == 4:
        uni = UnionOffices.objects.filter(room_4=True)
    if int(officeId) == 5:
        uni = UnionOffices.objects.filter(room_5=True)
    if int(officeId) == 6:
        uni = UnionOffices.objects.filter(room_6=True)
    if int(officeId) == 7:
        uni = UnionOffices.objects.filter(room_7=True)
    if int(officeId) == 8:
        uni = UnionOffices.objects.filter(room_8=True)
    if int(officeId) == 9:
        uni = UnionOffices.objects.filter(room_9=True)
    if int(officeId) == 10:
        uni = UnionOffices.objects.filter(room_10=True)

    if int(officeId) == 11:
        uni = UnionOffices.objects.filter(room_11=True)
    if int(officeId) == 12:
        uni = UnionOffices.objects.filter(room_12=True)
    if int(officeId) == 13:
        uni = UnionOffices.objects.filter(room_13=True)
    if int(officeId) == 14:
        uni = UnionOffices.objects.filter(room_14=True)
    if int(officeId) == 15:
        uni = UnionOffices.objects.filter(room_15=True)
    if int(officeId) == 16:
        uni = UnionOffices.objects.filter(room_16=True)
    if int(officeId) == 17:
        uni = UnionOffices.objects.filter(room_17=True)
    if int(officeId) == 18:
        uni = UnionOffices.objects.filter(room_18=True)
    if int(officeId) == 19:
        uni = UnionOffices.objects.filter(room_19=True)
    if int(officeId) == 20:
        uni = UnionOffices.objects.filter(room_20=True)

    if int(officeId) == 21:
        uni = UnionOffices.objects.filter(room_21=True)
    if int(officeId) == 22:
        uni = UnionOffices.objects.filter(room_22=True)
    if int(officeId) == 23:
        uni = UnionOffices.objects.filter(room_23=True)
    if int(officeId) == 24:
        uni = UnionOffices.objects.filter(room_24=True)
    if int(officeId) == 25:
        uni = UnionOffices.objects.filter(room_25=True)
    if int(officeId) == 26:
        uni = UnionOffices.objects.filter(room_26=True)
    if int(officeId) == 27:
        uni = UnionOffices.objects.filter(room_27=True)
    if int(officeId) == 28:
        uni = UnionOffices.objects.filter(room_28=True)
    if int(officeId) == 29:
        uni = UnionOffices.objects.filter(room_29=True)
    if int(officeId) == 30:
        uni = UnionOffices.objects.filter(room_30=True)

    if int(officeId) == 31:
        uni = UnionOffices.objects.filter(room_31=True)
    if int(officeId) == 32:
        uni = UnionOffices.objects.filter(room_32=True)
    if int(officeId) == 33:
        uni = UnionOffices.objects.filter(room_33=True)
    if int(officeId) == 34:
        uni = UnionOffices.objects.filter(room_34=True)
    if int(officeId) == 35:
        uni = UnionOffices.objects.filter(room_35=True)
    if int(officeId) == 36:
        uni = UnionOffices.objects.filter(room_36=True)
    if int(officeId) == 37:
        uni = UnionOffices.objects.filter(room_37=True)
    if int(officeId) == 38:
        uni = UnionOffices.objects.filter(room_38=True)
    if int(officeId) == 39:
        uni = UnionOffices.objects.filter(room_39=True)
    if int(officeId) == 40:
        uni = UnionOffices.objects.filter(room_40=True)

    if int(officeId) == 41:
        uni = UnionOffices.objects.filter(room_41=True)
    if int(officeId) == 42:
        uni = UnionOffices.objects.filter(room_42=True)
    if int(officeId) == 43:
        uni = UnionOffices.objects.filter(room_43=True)
    if int(officeId) == 44:
        uni = UnionOffices.objects.filter(room_44=True)
    if int(officeId) == 45:
        uni = UnionOffices.objects.filter(room_45=True)
    if int(officeId) == 46:
        uni = UnionOffices.objects.filter(room_46=True)
    if int(officeId) == 47:
        uni = UnionOffices.objects.filter(room_47=True)
    
    if uni:
        union = checkColomns(uni)
    return union


def getOfficeInfo(request, officeId):
    room = Room.objects.filter(id=officeId)
    status =room[0].status
    title = room[0].name
    price = room[0].price
    square = room[0].square
    type_room = room[0].type_room
    more_info = room[0].more_info
    full_price = price
    if (price != 'По договоренности'):
        price = float(price) 
        full_price = price * square

    union = getNumberUnion(officeId)
    print(len(union))
    uni_arr = []
    if len(union) != 0:
        title = 'Блок офисов: '
        for elem in union:
            uni_arr.append(str(elem))
            title += Room.objects.filter(id=elem)[0].name + ', '
        title = title[:-2]

    print(uni_arr)
    print(title)
    
    data = {'ID': officeId, 'TITLE': title, 'METER_PRICE': price, 'FULL_PRICE': full_price ,'OFFICE_SQUARE': square,'OFFICE_STATUS': status, 'TYPE': type_room, 'UNION': uni_arr, 'INFO': more_info}
    return JsonResponse(data)

def getStatus(request):
    rooms = Room.objects.all()
    data = {}

    for elem in rooms:
        id = elem.id
        name = elem.name
        price = float(elem.price)
        square = elem.square
        status = elem.status
        type_room = elem.type_room
        more_info = elem.more_info
        full_price = price
        if (price != 'По договоренности'):
            price = float(price) 
            full_price = price * square

        union = getNumberUnion(id)
        uni_arr = []

        for elem in union:
            uni_arr.append(str(elem))

        title = name
        tmp = {'ID': id-1, 'TITLE': title, 'METER_PRICE': price, 'FULL_PRICE': full_price,'OFFICE_SQUARE': square,'OFFICE_STATUS': status, 'TYPE': type_room, 'UNION': uni_arr, 'INFO': more_info}
        data[id] = tmp
    
    return JsonResponse(data)

def userData(request):
    #print("Hello")
    if request.method == 'POST':
        #print("post")
        form = ClientForm(request.POST)
        if form.is_valid():
            #print("valid")
            name = form.cleaned_data.get('name', None)
            offices = form.cleaned_data.get('offices', None)
            contact = form.cleaned_data.get('contact', None)
            date = form.cleaned_data.get('date', None)
            type_contact = form.cleaned_data.get('type_contact', None)
            time = form.cleaned_data.get('time', None)
            #print("type_contact", type_contact)
            #print("name", name, "offices", offices, "contact", contact, "date", date, "time", time)
            elem = Client(name=name, offices=offices, contact=contact, date=date, time=time, type_contact=type_contact)
            elem.save()
            send_mail('Запрос клиента:'+name, 'Клиент: '+name+'\nКонтактные данные: ('+type_contact+') '+contact+'\nОфисы на просмотр: '+offices+'\nЖелаемая дата: '+str(date)+"\nЖелаемое время: "+str(time), settings.EMAIL_HOST_USER,['bashnya-59@yandex.ru'], fail_silently=False)
            try :
                send_telegram('Клиент: '+name+'\nКонтактные данные: ('+type_contact+') '+contact+'\nОфисы на просмотр: '+offices+'\nЖелаемая дата: '+str(date)+"\nЖелаемое время: "+str(time))
            except Exception:
                print("Problems with telegram proxy")
            return JsonResponse({"1": 1})
        else:
            print(form.errors)
    else:
        form = ClientForm()

    return JsonResponse({"1": 1})
