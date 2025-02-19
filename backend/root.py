import logging
import logging.config
from flask import Flask, session
from flask_cors import CORS
from config import Config
from database import db, migrate

# Blueprints
from blueprints.test import test_bp

# Set up configuration
logging.config.fileConfig('logging.conf')
logger = logging.getLogger('flaskapp')

logger.info("Logger started")
logger.info("Configuration loaded")

# Initialize app 
app = Flask(__name__)
app.config.from_object(Config)

CORS(app,
     origins=[app.config['FRONTEND_URL']],
     methods=["GET", "POST", "PATCH", "PUT", "DELETE"],
     allow_headers=["Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
     expose_headers=["Content-Type", "Authorization"],
     supports_credentials=True)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql+psycopg2://{app.config['DB_USER']}:{app.config['DB_PASSWORD']}@{app.config['DB_HOST']}:{app.config['DB_PORT']}/{app.config['DB_NAME']}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions with app
db.init_app(app)
migrate.init_app(app, db)

# Register blueprints
app.register_blueprint(test_bp, url_prefix='/api/test')

if __name__ == '__main__':
    logger.info('Starting the Flask application')
    app.run(host=app.config['FLASK_HOST'], port=app.config['FLASK_PORT'], debug=True)