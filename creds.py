import os
from dotenv import load_dotenv

load_dotenv()

serviceaccount ={
  "type": os.getenv('TYPE',"service_account"),
  "project_id": os.getenv('PROJECTID',"archiogui"),
  "private_key_id": os.getenv('PRIVATEKEYID',"b33b702cc7de0b76e7adc4c808338a16be38bd28"),
  "private_key": os.getenv('PRIVATEKEY',"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDA/xtT+JUXu4Os\n1Sq5txFcDHw7g7DiOwlgnoabwqNWS16s7tgoqugjBwkCfu8OeOUyv0GVr9K0yIQ7\np7r4NcpWYgCF9BqFg9fWJJbCXvjFZkvklGZv+9Z7E4QxkdpgpTOTKveqJFRXSthB\nUNUXxI1z9Oqr7EbI9RutdJ/2MB/G5Ka1WUMGMDJodEcWNcxwyA9atNKWRyfnlLLD\nmKzsZazZxunHooCMsmAff+mvAi3a5nzeIypcbV9FYPZZjpMIg30Y1/g+YT/S+9UQ\ng+MujgnNoBne9CuyL6Lx9eUPLuq74BOCFihyyV9DIrRCKKOHsC7V0sUIzuSiyVx/\nVxLWUdmZAgMBAAECggEAFlIKu5Hu0FFX/7ehmtvwzogFIC7xWKDCS2HaKI6ArHzI\nBNEUv9NQSKjKIndCt5ZEz7Mt5x1wDYd5P5r89TLnZUktTVC3doSShEo0A2PPeqkD\nkvqUxFPIcPCHY+I98tp4VgdsoElWVcgqrZcnJfoN8AC92UdYwmoSmuN3kpXrPunE\nKayEY0fjuPeCGX6W+8G+00V1t6pXTyDTCx1rl6KZSu4CFLQdJwwvNo9Y+QbLArgM\nqLPgtpEamBEQVLP44eW78N/F2sNMfBFZMpT9d20sBbES1D/VneSSFvumM3e6qtx3\nYKuJZU0OqEzAZG6sPVpRzENvOhh9Z36oEhj0QqvbXwKBgQD20jbvicmjyzUl3EpP\nYixTffWjdnjxdXhQuk1UHafQ0NUn7Nt/cw/A08OybyQyC0ns12xGloKcXJwUsQvL\nsPMTo60i93+10PkoQY3anaSJuWBJpF1QfHsb3ET51FQ/70Rz3kfRgsNYrRJD3C06\nzq42WPiAtz4Dc09mRnN08eoEOwKBgQDILHiaYxxEprImPeYix+RZFfguKExL+oIK\ndX6pV8ugGYSUA6w1XKr5C6T+gt5NoZuJXS2P6S9E55k2pRKKWSXJ6pR5fcK+mbwc\nBBml3Es/cBBxXCgLQ66Mzs42deD+2Jf3wUt1QaSnJFiGpmxUvmSSlbQRO4DablA2\nmzVOolqgOwKBgQDldJv5qEC6culf3yF+FyhaHhlD85mP78MAWZIWBtPB/sKKsVmF\nbHRSsQuXUFd35qK8+bABF18o+bdoTQdIP6Jauaj1ft1NK47V68tyV2dlWd6314Og\nlXjld6rwDoKcRVV/2j8t+MCeKZd3WrL5nra6c4/iKXgPQR2pWQlwyIzjjQKBgQCO\nazWTgpiGL6PomXm3nUjWKU9eZ8WA+Ua0ckwf6Bs0WXN+a+6GONxcPPCzNCE+UpD6\n9pSII3xCJhVYT7IVRMAiHQhuOA/q1C6GMFSfMVFIXU8VmF/VQ95YyHrnPI9MQoY8\n/AXX81BWqwFhK98/nAaqVGC9MfzHbF0dvOf8fn7EKQKBgD2PAVSSLlmcuRKYgpsW\nQ19g7jPhoQTJhc+KTVFmQf75vJDnaO9FIjF/1x2WlJXImmzMa++hxgu8OADQHRPk\nHqEkbxafHDYufKbGW+XXjUOAJOKpe7CZGK2DPbcAwPMf9gMG30dHwWu0Sjy49sOV\nnfonXqFCyApQSVTXzifHHhAn\n-----END PRIVATE KEY-----\n"),
  "client_email": os.getenv('CLIENTEMAIL',"firebase-adminsdk-rlkc4@archiogui.iam.gserviceaccount.com"),
  "client_id": os.getenv('CLIENTID',"113272200718538835080"),
  "auth_uri": os.getenv('AUTHURI',"https://accounts.google.com/o/oauth2/auth"),
  "token_uri": os.getenv('TOKENURI',"https://oauth2.googleapis.com/token"),
  "auth_provider_x509_cert_url": os.getenv('AUTHPROVIDERCERT',"https://www.googleapis.com/oauth2/v1/certs"),
  "client_x509_cert_url": os.getenv('CLIENTCERT',"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rlkc4%40archiogui.iam.gserviceaccount.com")
}