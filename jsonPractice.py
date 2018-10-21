import json
data = {}
data["emily"] = "evan"
data['evan'] = 'birthday'
#data = json.dumps(data)

with open('file.json', 'w') as jsonFile:
    json.dump(data, jsonFile)
