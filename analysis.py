# import pandas as pd

# def create_line()

# df = pd.read_json('./src/data/egyptian_art.json')
# df = df.loc[df["isTimelineWork"] == True]

# print(df["title"].head())

import json
import csv

def convert(json_file, csv_file, attributes):
    with open(json_file, 'r', encoding='utf-8', errors='replace') as f:
        data = json.load(f)

    filtered_data = [item for item in data if item.get("isTimelineWork", False)]

    with open(csv_file, 'w', newline='') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=attributes, extrasaction='ignore')
        csv_writer.writeheader()
        csv_writer.writerows(filtered_data)
    
    print(f"Converted {len(filtered_data)} items to {csv_file}")


attributes = ["objectBeginDate", "objectEndDate", "title", "primaryImage", "primaryImageSmall"]

convert('./src/data/egyptian_art.json', './src/data/timeline.csv', attributes)