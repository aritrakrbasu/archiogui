import os
from dotenv import load_dotenv

load_dotenv()

serviceaccount ={
  "type": os.getenv('TYPE'),
  "project_id": os.getenv('PROJECTID'),
  "private_key_id": os.getenv('PRIVATEKEYID'),
  "private_key": os.getenv('PRIVATEKEY'),
  "client_email": os.getenv('CLIENTEMAIL'),
  "client_id": os.getenv('CLIENTID'),
  "auth_uri": os.getenv('AUTHURI'),
  "token_uri": os.getenv('TOKENURI'),
  "auth_provider_x509_cert_url": os.getenv('AUTHPROVIDERCERT'),
  "client_x509_cert_url": os.getenv('CLIENTCERT')
}