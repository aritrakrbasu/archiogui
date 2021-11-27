# Import files
from flask import Flask , jsonify
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from creds import serviceaccount

# Initialize flask app
app = Flask(__name__)


# Initialize firestore
cred = credentials.Certificate(serviceaccount)
firebase_admin.initialize_app(cred)

# Initialize firestore database
db = firestore.client()

# App routes
@app.route('/')
def index():
  return "<h1>Welcome to CodingX</h1>"

@app.route("/findplace", methods=["POST"] )
def findPlace():
    return jsonify({
        'status-code' : 200,
        'status' : 'success',
        'Name' : 'Red Fort',
        'Description':  'The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi.',
        'image-link':'https://www.google.com/maps/uv?pb=!1s0x390cfce26ec085ef:0x441e32f4fa5002fb!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOl2cgrCDJNWMv9n0HWFZQ1284mzzTeiNGBeQMO%3Dw568-h320-k-no!5sred+fort+description+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOl2cgrCDJNWMv9n0HWFZQ1284mzzTeiNGBeQMO&hl=en&sa=X&ved=2ahUKEwjf8ZT--5r0AhWIIbcAHZoGCnsQoip6BAhWEAM',
        'size': [10,20],
        'accuracy': 90})

@app.route("/getallplaces", methods=["GET"] )
def getallplaces():
    places_ref = db.collection(u'places').document(u'all_places')
    doc = places_ref.get()
    if doc.exists:
        return jsonify(doc.to_dict())