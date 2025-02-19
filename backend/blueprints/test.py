import logging
from flask import Blueprint, jsonify

logger = logging.getLogger('flaskapp')

test_bp = Blueprint('test', __name__)

@test_bp.route('', methods=['GET'])
def test():
    return jsonify({'message': 'Hello, World!'})
