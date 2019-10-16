import requests

def send_telegram(text: str):
    token = "865294581:AAFJwpfRPvINmoVrpxS6_uXqsooodRenehY"
    url = "https://api.telegram.org/bot"
    channel_id = "192366638"
    
    url += token
    method = url + "/sendMessage"

    proxies = {
        'https': 'socks5://178.197.248.213:1080'
    }

    print(method)

    r = requests.post(method, data={
         "chat_id": channel_id,
         "text": text
          }, 
          proxies=proxies)

    if r.status_code != 200:
        raise Exception("post_text error")

    egor_id = "284332349"

    second = requests.post(method, data={
         "chat_id": egor_id,
         "text": text
          }, 
          proxies=proxies)

    if r.status_code != 200:
        raise Exception("egor_text error")

