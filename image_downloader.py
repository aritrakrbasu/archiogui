from google_images_download import google_images_download
import pandas as pd
import os

response = google_images_download.googleimagesdownload()

def moveImages(st, end, dir, place):
    currentDirImageIndex = 1
    for i in range(st, end):
        os.rename("Dataset/Download/" + place + "/Image_"+ str(i+1) + ".jpg", "Dataset/"+ dir +  "/" + place + '/Image_'+ str(currentDirImageIndex) + ".jpg")
        currentDirImageIndex += 1

def renameImages(place):
    for count, filename in enumerate(os.listdir("downloads/" + place)):
        dst = "Image_" + str(count+1) + ".jpg"
        src = "downloads/" + place + "/" + filename
        dst = "Dataset/Download/" + place + "/" + dst

        os.rename(src, dst)


sheet_name = 'SoH' #Update sheet name
file_name = 'records.xlsx'
df = pd.read_excel(file_name, sheet_name=sheet_name)
place_names = df.name_en.tolist()

for place in place_names:
    current_dir = [{
        "name": 'Train',
        "lim": 200
    }, {
        "name": "Validation",
        "lim": 100
    }]
    try:
        os.mkdir("Dataset/Download/" + place)
    except:
        print("Already exists")
    for dir in current_dir:
        os.mkdir("Dataset/" + dir['name'] + "/" + place)
    index = 0
    lim = 300
    arguments = {"keywords": place, "limit": lim, "print_urls": True, "format": "jpg"}
    absolute_image_paths = response.download(arguments)
    renameImages(place)
    # downloader.download(place, limit=lim,  output_dir='Dataset/Download', adult_filter_off=True, force_replace=False, timeout=60)
    # for i in range(0, lim, lim // 3):
    #     moveImages(i, i + lim//3, current_dir[index], place)
    #     index += 1
    start = 0
    for index in range(0, 2):
        moveImages(start, start + current_dir[index]['lim'], current_dir[index]['name'], place)
        start += current_dir[index]['lim']

    os.rmdir('Dataset/Download/' + place)