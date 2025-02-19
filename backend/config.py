import os

class Config:
    ENVIRONMENT = os.getenv('FLASK_ENV', 'development')
    FLASK_HOST = os.getenv('FLASK_HOST', 'localhost')
    FLASK_PORT = os.getenv('FLASK_PORT', 5000)
    SECRET_KEY = os.getenv('SECRET_KEY', 'supersecretkey')

    DB_USER = os.getenv('DB_USER', 'admin')
    DB_PASSWORD = os.getenv('DB_PASSWORD', 'password')
    DB_HOST = os.getenv('DB_HOST', 'localhost')
    DB_NAME = os.getenv('DB_NAME', 'db')
    DB_PORT = os.getenv('DB_PORT', 5432)
    
    # Frontend URL
    FRONTEND_URL = {
        # 'production': "",
        'development': "http://localhost:5173"
    }.get(ENVIRONMENT, "http://localhost:5173")

    # Other configuration variables...
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Lax'