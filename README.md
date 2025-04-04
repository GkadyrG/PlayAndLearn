## Установка

### 1. Клонирование репозитория
```bash
git clone https://github.com/username/myproject.git
cd myproject
```
### 2. Настройка Django бэкенда

1. Перейди в папку бэкенда:

```bash
cd backend
```

2. Создай виртуальное окружение:

```bash
python -m venv venv
```
```bash
venv\Scripts\activate
```

3. Установи зависимости:

```bash
pip install -r requirements.txt
```

4. Примени миграции:

```bash
python manage.py migrate
```

5. Запусти сервер:

```bash
python manage.py runserver
```

### 3. Настройка Next.js фронтенда

1. Перейди в папку фронтенда:

```bash
cd frontend
```

2. Установи зависимости:

```bash
npm install
```

3. Запусти сервер:

```bash
npm run dev
```

### 4. Результат

Бэкенд: http://localhost:8000
Фронтенд: http://localhost:3000
