import pandas as pd
from pprint import pprint
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

sheet_name = 'aritra' #Update sheet name
file_name = 'records.xlsx'
df = pd.read_excel(file_name, sheet_name=sheet_name, usecols =['name_en','states_name_en','Image'])

place_names = df.name_en.tolist()
place_area = df.states_name_en.tolist()
places_image = df.Image.tolist()

all_place_det =[]

for i in range(0,len(place_names)):
    all_place_det.append({
        "name" : place_names[i],
        "location" : place_area[i],
        "image" : places_image[i]
    })

# Use a service account
cred = credentials.Certificate('serviceAccount.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection(u'places').document(u'all_places')
doc_ref.set({"places": all_place_det})
