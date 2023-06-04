from flask import Flask, render_template, request, jsonify, Response
from flask_restful import Api, Resource, reqparse, fields, marshal_with, abort
from flask_cors import CORS, cross_origin


import json
with open("data.json","r") as data_read :
    data = json.load(data_read)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'KvyBCLPe7JpArQwo1jhdMQtmu3CYCx/2'
cors = CORS(app)
api = Api(app)

class Home(Resource):
    @cross_origin()
    def get(self):
        return jsonify(data)

class Desc(Resource):
    @cross_origin()
    def get(self, id):
        for d in data:
            if d["id"] == id:
                return jsonify(d)
        return abort(404, message = "Data not found")

api.add_resource(Home,"/events")
api.add_resource(Desc, "/events/<int:id>")

if __name__ == "__main__":
    app.run(debug = True)
