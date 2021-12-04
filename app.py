# Import files
from flask import Flask , jsonify
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask_cors import CORS,cross_origin


# Initialize flask app
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/getallplaces": {"origins": "*"}})



# Initialize firestore
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# Initialize firestore database
db = firestore.client()

# App routes
@app.route('/')
def index():
  return "<h1>Welcome to Archiogui</h1>"

@app.route("/getallplaces", methods=["GET"] )
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def getallplaces():
    places_ref = db.collection(u'places').document(u'all_places')
    doc = places_ref.get()
    if doc.exists:
        response = jsonify(doc.to_dict())
        return response
    

@app.route("/findplace", methods=["POST"] )
def findPlace():
    if request.method == 'POST':
      placename = request.json['placename']
      doc_ref = db.collection(u'places').document(u'all_places')
      doc = doc_ref.get()
      if doc.exists:
        return jsonify({doc.to_dict())