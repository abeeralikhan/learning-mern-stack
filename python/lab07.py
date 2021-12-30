from flask import Flask
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)

courses = {
    'course1': {'title': 'DLD'},
    'course2': {'title': 'Intro to Software Engg.'},
    'course3': {'title': 'Data Comm Comp Networks'},
    'course4': {'title': 'Info Security'},
    'course5': {'title': 'Marketing'},
    'course6': {'title': 'Technical Bussiness Writing'},
    'course7': {'title': 'Data Struc & Algo'},
    'course8': {'title': 'Prob & Stats'},
    'course9': {'title': 'Calculas'},
    'course10': {'title': 'Multi Calculas'},
    'course11': {'title': 'Info Comm Technology'},
    'course12': {'title': 'Programming Fundamentals'},
    'course13': {'title': 'Economics'},
    'course14': {'title': 'Operating System'},
    'course15': {'title': 'Intro to DB'},
    'course16': {'title': 'Object Oriented Software Engg.'},
}

def abort_if_course_doesnt_exist(course_id):
    if course_id not in courses:
        abort(404, message=f"{course_id} doesn't exist")

parser = reqparse.RequestParser()
parser.add_argument('title')

class Show(Resource):
    def get(self, course_id):
        abort_if_course_doesnt_exist(course_id)
        return courses[course_id]

    def delete(self, course_id):
        abort_if_course_doesnt_exist(course_id)
        del courses[course_id]
        return '', 204

    def put(self, course_id):
        args = parser.parse_args()
        course = {'title': args['title']}
        courses[course_id] = course
        return course, 201

class ShowAll(Resource):
    def get(self):
        return courses

    def post(self):
        args = parser.parse_args()
        course_id = int(max(courses.keys()).lstrip('course')) + 1
        course_id = 'course%i' % course_id
        courses[course_id] = {'title': args['title']}
        return courses[course_id], 201

@app.route('/')
def welcomePage():
    return "Welcome to my APP"
    
api.add_resource(ShowAll, '/showall')
api.add_resource(Show, '/show/<course_id>')

app.run(debug=True)
