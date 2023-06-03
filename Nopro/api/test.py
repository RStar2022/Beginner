import json
with open("data.json","r") as data_r :
    data = json.load(data_r)

todos = {}

for i, j in enumerate(data):
    todos = todos[data[j]]
