import pandas as pd


df = pd.read_json('./src/data/egyptian_art.json')
# print(df.head())

# print(df["period"].unique())

period_list = df["period"].unique()

final_list = []

for period in period_list:
    dash_periods = period.split('-')
    for no_dash in dash_periods:
        comma_periods = no_dash.split(',')
        for no_comma in comma_periods:
            or_periods = no_comma.split('or')
            for item in or_periods:
                item = item.replace('(?)', '')
                item = item.replace('early', '')
                item = item.replace('Early', '')
                item = item.replace('period', '')
                item = item.replace('Period', '')
                item = item.replace('late', '')
                item = item.replace('Late', '')
                item = item.strip('?')
                item = item.strip()
                if item not in final_list:
                    final_list.append(item)


final_list.sort(key=str.lower)

single_period = df["period"].str.contains("Paleolithic")
period_filter = df[single_period]
print(period_filter[["objectID", "title", "period", "objectDate"]].count())


# Periods in order:
# Paleolithic:          300000-6900 BCE
# Neolithic:            6900-3900 BCE
# Predynastic:          3300-3100 BCE
# Early Dynastic:       3100-2650 BCE
# Old Kingdom:          2649-2100 BCE
# First Intermediate:   2100-2010 BCE
# Middle Kingdom:       2030-1640 BCE
# Second Intermediate:  1640-1550 BCE
# New Kingdom:          1550-1070 BCE
# Third Intermediate:   1070-664
# Napatan:              750-300 BCE         !!!
# Late:                 664-380 BCE
# Ptolemaic:            380 BCE-30 CE
# Meriotic:             300 BCE-250 CE      !!!
# Roman:                100 BCE-364 CE      !!!
# Coptic:               100-700 CE          !!!
# Islamic:              600-1600 CE         !!!
# Modern:               1900 CE ->