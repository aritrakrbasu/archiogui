from bing_image_downloader import downloader
import pandas as pd
sheet_name = 'aritra'
file_name = 'records.xlsx'
df = pd.read_excel(file_name, sheet_name=sheet_name)
place_names = df.name_en.tolist()

for place in place_names:
    downloader.download(place, limit=5,  output_dir='dataset/Train', adult_filter_off=True, force_replace=False, timeout=60) 