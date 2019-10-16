### Как запустить web-app

  `git clone (link)`
  
  `cd backend`

### Как создать роль "admin" в postgress
  `pip install —upgrade setuptools`

  `sudo apt install libpq-dev python3-dev`

  `sudo -u postgres psql`

  `create database infodb;`

  `create user admin with encrypted password 'Site2Do!'; `

  `grant all privileges on database infodb to admin;`

  `\q`

### Как создать пользователя admin для сайта
  `python manage.py createsuperuser`

  Затем вводим информацию как в файле backend/backend/settings.py


### Как запустить миграции

  `python manage.py makemigrations`
  
  `python manage.py migrate`

### Как зайти в БД впервые

Сначала пробуем это:

`psql -U admin -d infodb -W`

Затем вводим пароль! Если не работает, следуем по этим шагам, если запускается, то переходим к разделу "Как добавить элементы"

  `cd /etc/postgresql/<version-here>/main`
  
  `sudo vim pg_hba.conf`

Than put everywhere:

  `:i`
  
  `local   all     all     trust`
  
  `:wq`
  
Open Posgresql:
  
  `psql -U admin -d infodb`
  
### Как добавить элементы (инициализация)

`\i <full_path_to_file>/db_init.sql`
`\q`

### Как запустить сервер
  `python manage.py runserver`


