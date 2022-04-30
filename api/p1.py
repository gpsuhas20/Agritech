import numpy as np
from flask import Flask,request

#import os
#import tensorflow as tf
#from tensorflow.keras.preprocessing import image
#from tensorflow.keras.models import load_model
import pickle
from flask_cors import CORS,cross_origin
from werkzeug import secure_filename


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/plant',methods=['POST'])
@cross_origin()
def plant_disease():

    #detection=load_model('auto_chloro_model.h5')

    #with open('train_gen' , 'rb') as f:
        #classes = pickle.load(f)
    

    def upload_image():

      

        if request.method == 'POST':
            f = request.files['file']
            f.save(secure_filename(f.filename))
            return 'file uploaded successfully'
    upload_image()
