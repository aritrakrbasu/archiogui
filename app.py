# Import files
from flask import Flask , jsonify,request
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
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def findplace():
    places_ref = db.collection(u'places').document(u'all_places')
    searched = request.json
    doc = places_ref.get()
    if doc.exists:
        places = doc.to_dict()["places"]
        desiredPlace={}
        for place in places:
            
            if(searched['place_name'] in place["place_name"]):
              desiredPlace = place
              break
        
        if(bool(desiredPlace)):
          response = jsonify(desiredPlace)
          return response
        else:
          return "Record not found", 400

if __name__ == "__main__":
  app.run(debug=True)