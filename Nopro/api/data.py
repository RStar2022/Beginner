import json
import datetime
from json import JSONEncoder

Events = [
    {
        "id" : 0,
        "Title": "Fukui Anniversary",
        "Date" : datetime.date(2023, 7, 10),
        "Time" : datetime.time(15, 0),
        "Location" : "Fukui",
        "Description" : ""
    },
    {
        "id" : 1,
        "Title": "Fukui Shinkansen Celebration",
        "Date" : datetime.date(2023, 7, 11),
        "Time" : datetime.time(13,0),
        "Location" : "Fukui",
        "Description" : ""
    },
    {
        "id" : 2, 
        "Title": "Rotary Club",
        "Date" : datetime.date(2023,7,20),
        "Time" : datetime.time(10,0),
        "Location" : "Fukui",
        "Description" : ""
    }
]

class DateTimeEncoder(JSONEncoder):
    def default(self,obj):
        if isinstance(obj, (datetime.date,datetime.date)):
            return obj.isoformat()

EventsEncode = DateTimeEncoder().encode(Events)
print(EventsEncode)
