from flask import Flask, render_template, request, jsonify, Response
from flask_restful import Api, Resource, reqparse, fields, marshal_with, abort
from wtforms import StringField, SubmitField, IntegerField
from flask_wtf import FlaskForm, CSRFProtect
from wtforms.validators import DataRequired

import json
with open("data.json","r") as data_read :
    data = json.load(data_read)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'KvyBCLPe7JpArQwo1jhdMQtmu3CYCx/2'
api = Api(app)

#Form
class EventForm(FlaskForm):
    title = StringField("What events?", validators=DataRequired)
    date = IntegerField("Please insert with YYYY-MM-DD", validators=DataRequired)
    time = IntegerField("What time? Please insert with HH:MM", validators=DataRequired)
    location = StringField("Set the location", validators=DataRequired)
    submit = SubmitField("Submit")

    @app.route('/create/', methods = ('GET', 'POST'))
    pass

class Home(Resource):
    def get(self):
        form = EventForm()
        if form.validate_on_submit():
            name = form.name.data
        return jsonify(data)

class Desc(Resource):
    def get(self, id):
        for d in data:
            if d["id"] == id:
                return jsonify(d)
        return abort(404, message = "Data not found")

api.add_resource(Home,"/events")
api.add_resource(Desc, "/events/<int:id>")

if __name__ == "__main__":
    app.run(debug = True)