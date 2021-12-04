import pandas as pd
from pprint import pprint
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json
f = open('data.json')
data = json.load(f)

# Use a service account
cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection(u'places').document(u'all_places')
doc_ref.set({"places":data })
