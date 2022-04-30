import numpy as np
from flask import Flask,request,jsonify
import time
import os
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np
import pickle
from sklearn.neighbors import _dist_metrics
from utils.fertilizer import fertilizer_dict




from tensorflow.keras.models import load_model
import pickle
from flask_cors import CORS,cross_origin
from werkzeug import secure_filename
from werkzeug.datastructures import ImmutableMultiDict
UPLOAD_FOLDER = 'uploads/'


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


#app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@cross_origin()
def p():
     return jsonify({"saved"})


@app.route('/plant',methods=['POST'])
@cross_origin()
def plant_disease():
   
    detection=load_model('auto_chloro_model.h5')
    

    classes={'Pepper__bell___Bacterial_spot': 0, 'Pepper__bell___healthy': 1, 'Potato___Early_blight': 2,
             'Potato___Late_blight': 3, 'Potato___healthy': 4, 'Tomato_Bacterial_spot': 5, 
             'Tomato_Early_blight': 6, 'Tomato_Late_blight': 7, 'Tomato_Leaf_Mold': 8,
              'Tomato_Septoria_leaf_spot': 9, 'Tomato_Spider_mites_Two_spotted_spider_mite': 10, 
              'Tomato__Target_Spot': 11, 'Tomato__Tomato_YellowLeaf__Curl_Virus': 12,
               'Tomato__Tomato_mosaic_virus': 13, 'Tomato_healthy': 14}


  

    def upload_image():
        

      

        if request.method == 'POST':
           
            f = request.files['file']
            filename = "test.jpg"

            #f.save(secure_filename(f.filename))
            f.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
          
            
            test_img=image.load_img('uploads/test.jpg',target_size=(48,48))
            test_img=image.img_to_array(test_img)
            test_img=np.expand_dims(test_img,axis=0)
            result=detection.predict(test_img)
            a=result.argmax()
            
            
           


        category=[]
        for i in classes:
                category.append(i)
        for i in range(len(classes)):
                if(i==a):
                        output=category[i]
      
        return output
        
    output=upload_image()
    remedy=""
    disease=""


    if output == 'Pepper__bell___Bacterial_spot':
            disease="Bacterial spot disease of bell pepper / capsicum "

            remedy='''
            Biological control: Bacterial stain control is very complex and expensive. 
    If the disease occurs at the beginning of the season, it is better to destroy the entire crop. 
    Copper-rich antibacterial, forms a protective coating on fruits and petals. 
    Antibiotics for bacterial viruses (bacteriophages) are available on the market that kill certain bacteria. 
    Soak the seeds in 1.3% sodium hypochlorite solution for 1 minute or in hot water (50 C) for 25 minutes. 
    \n \n Chemical control:
    \n \n Always take preventive measures through biological control under integrated pest management as much as possible. 
    Only copper-containing antibacterial agents can prevent and partially control the disease. 
    Spray as soon as the disease appears, and apply every 10-14 days in warm and humid environment. 
    Mixed pesticides rich in mancozeb and copper may provide some protection.'''
            
    elif output == 'Potato___Early_blight':
            disease='Potato early blight disease'
            remedy='''
            Biological control: Bacillus subtilis composite material or copper-based.
    Recognized as an organic fungicide that can be applied against this disease.
    Chemical control:
    Prevent prevention through biological control under possible pest management. 
    There are different types of fungicides available in the market which can control potato blight. 
    Azoxitrobin, pyroclostrobin, diphenconazole, boscalid, chlorothalonil, phenamidone, maneb, mancozeb, trifloxistrobin,.
    And fungicides like germination etc. are used to control the disease. 
    It is recommended to use different types of chemical mixtures periodically. Finish all attendance on time in suitable weather. A
    After applying these ingredients, take a break before harvest to be safe for health.'''
            
    elif output == 'Potato___Late_blight':
            disease='Potato Nabi Dhwasa Rog '
            remedy='''
            Biological control: n nApply a copper based fungicide before the onset of dry weather. 
    Infection can also be prevented by spraying organic coating on the leaves. 
     Chemical control:
     Always take preventive measures through biological control under integrated pest management. A
    It is important to use fungicides to control nematodes everywhere in the field, especially in humid parts. A
    The corresponding fungicide that covers the leaves is very effective before infection and does not allow the fungus to develop resistance to the fungicide. A
    Mandipropamid, chlorothalonil, fluazinam, for preventive measures.
    Triphenyltin, or mancozeb fungicides can be used.
    It is also possible to purify the seeds with fungicides like Mancozeb before sowing.'''
            
    elif output == 'Tomato_Bacterial_spot':
            disease="Tomato Bacterial Disease"
            remedy='''
            Biological control: Bacterial spot control is very difficult and expensive. 
    If the disease attacks at the beginning of the season, it destroys the whole land. Bactericidal copper content.
    The leaves and fruit are used as an antidote. Bacteriophages (bacteriophages) that kill bacteria.
    It is available all the time. 1.3% sodium hypochlorite in one minute or in hot water (50 C) for 25 minutes.
    Soaking the seeds can reduce the spread of the disease. 
    \n \nChemical control:
    \n\nPrevent disease control through biological control under integrated pest management as much as possible. 
    Copper is used as a bactericidal and antiseptic.
    Can provide control. Apply bactericide as soon as the first symptoms appear and.
    Then apply warm [small spots / cold (spots)], 10 to 14 days in case of humid weather. 
    Since the constant use of copper builds up a bactericidal immune system, copper is a synthetic substance.
    It is recommended to use Mancozeb with bactericide.'''
            
    elif output == 'Tomato_Early_blight':
            disease="Tomato early blight"
            remedy='''
            Biological control: n nBacillus subtilis composite material or copper-based.
    Recognized as an organic fungicide that can be applied against this disease. A
    Chemical control:
    
    Prevent prevention through biological control under possible pest management. 
    There are different types of fungicides available in the market which can control potato blight. 
    Azoxitrobin, pyroclostrobin, diphenconazole, boscalid, chlorothalonil, phenamidone, maneb, mancozeb, trifloxistrobin,.
    And fungicides like germination etc. are used to control the disease. 
    It is recommended to use different types of chemical mixtures periodically. Finish all attendance on time in suitable weather. 
    After applying these ingredients, take a break before harvest to be safe for health.'''
            
            
    elif output == 'Tomato_Late_blight':
            disease="Tomato's nasal decay disease"
            remedy=''''
            Biological control:। n nThere are no known biological measures against nephritis to date. 
    To prevent the spread of the disease, immediately remove or destroy the crop from the infected area and the infected crop.
    Refrain from making organic manure. 
    Chemical control:
    Take integrated pest management to prevent disease through biological control. 
    Spray fungicides containing Mandipropamide, Chlorothalonil, Fluazineum, and Mancozeb Organized Ingredients to prevent neoplasms. 
    If watering is done from the top of the tree or during the rainy season of the year, it is necessary to apply fungicide.'''
            
    elif output == 'Tomato_Leaf_Mold':
            disease="Tomato Leaf Fungus Disease"
            remedy=''' 
            Biological control: Hot water for disinfection (25 minutes at 122 degrees Fahrenheit or 50 degrees Celsius).
    There are suggestions to purify the seeds with. Acronium strictum, Dysima palvinata, Trichoderma harzinum.
    Or Trichoderma viridi and Trichothesium rosium fungi Mycovelosila falvar are enemies and can be used to control them.
    In greenhouses Acremonium strictum, Trichoderma viridi strain 3 and Trichothesium rosium are 53, 6 and 64 percent respectively.
    Mycovelosila falwa of tomato is suppressed by rate application. On a small scale, mix apple cider, garlic or milk and vinegar.
    It can be used to control the fungus. 
    Chemical control:
    Always take preventive measures through biological control under integrated pest management as much as possible. If the weather is favorable for the disease to spread.
    Fungicide should be sprayed before infection. Chlorothalonil, maneb, mancozeb and.
    Copper fungicides are recommended for use in the field. Difenoconazole for greenhouses.
    Mandipropamid, cymoxanil, famoxadone and cyprodinil.
    Use is recommended.'''
            
        
    elif output == 'Tomato_Septoria_leaf_spot':
            disease='Septoria spot disease of tomatoes '
            remedy='''Biological control:
            Copper fungicides, such as Bordeaux mixture, copper hydroxide, copper sulphate,.
    Or copper oxychloride sulfate can help control the germs of the disease.
    Spray every 8 to 10 days throughout the season, especially during flowering and fruiting.
    Follow the rules written on the pesticide packaging before harvesting. A
    n nChemical control:
    n nPrevent prevention through biological control under possible integrated pest management. I mean, six.
    The fungicides Mancozeb and Chlorothalonil are effective in controlling tomato septoria. A
    Spray at intervals of 8 to 10 days throughout the season, especially during flowering and fruiting. A
    Follow the rules written on the pesticide packaging before harvesting.'''
            
    elif output == 'Tomato_Spider_mites_Two_spotted_spider_mite':
            disease='Normal Red Spider'
            remedy= '''
            Biological control: \n \n With a slight attack, just wash the spider off with water and remove the infected leaf. A
    Prepare a mixture of castor oil, basil, soybean and neem oil. Spray the leaves to reduce the reproduction of RTC. A
    Reproduction of spiders can also be reduced by using a solution of garlic tea, nettle leaf bark or insecticide soap. A
    Depending on the species of spider in the field, use predatory spiders with biological controllers (for example, Phytoceiulus persimilis).
    Or use the organic pesticide Bacillus thuringiensis. It is important to apply a second spray 2-3 days after the initial spray. A
    \n \n Chemical control:
    n \ nAlways take preventive measures through biological control under integrated pest management as much as possible. A
    These spiders are very difficult to control with poisonous substances because they have been used for several years in most generations.
    Resistance to various chemicals is developed. Carefully select the chemical controller to control the predators of this spider.
    It does not destroy indiscriminately. Examples are water-soluble sulfur (3 g / liter), spiromycin (1 ml / liter).
    Dicofol (5 ml / liter) or abamectin-rich fungicides can be used. Second time 2 to 3 days after initial spray.
    It is important to apply the spray.'''
            
    elif output == 'Tomato__Target_Spot':
            disease="Tomato Target Disease"
            remedy='''
            Watering in the morning so that the leaves of the tomato plant have time to dry. Water or dry the leaves at the base of the tree.
    Use a hose or drip system for. Apply a sesame to monitor the fruit from direct contact with the soil. '''
            
    elif output == 'Tomato__Tomato_mosaic_virus':
            disease="Tomato mosaic virus disease "
            remedy='''
            Biological control:  For 4 days or 72-75 ° C for 24 hours dry.
    Heating and purifying the seeds helps to keep the seeds virus free. Alternatively, 100 g / liter.
    Soak the seeds in a solution of trisodium phosphate for 15 minutes and rinse thoroughly with water.
    Even if it is dried later, it works. 
     Chemical control:
    Take preventive measures through biological control as much as possible under integrated pest management. A
    There is no effective chemical pest management for tomato mosaic virus.'''
            
    elif output == 'Tomato__Tomato_YellowLeaf__Curl_Virus':
            disease="Tomato yellow leaf curl virus disease"
            remedy='''
            Biological control: n nTome yellow tomato leaf curl virus (TYLCV) disease.
    No repression is known. Control whitefly breeding to avoid virus attacks. 
    \n \nChemical control:
    \n \n Once infected with the virus, no further control measures work against it. 
    Whitefly breeding needs to be controlled to avoid virus attacks. 
    Pyrethroids are a class of insecticides used by plants to fertilize plants or soil.
    Reproduction can be reduced. But excessive use of these can increase the immunity of simple fish.'''
            
    elif output == 'Pepper__bell___healthy' or output == 'Potato___healthy' or output == 'Tomato_healthy':
            remedy= 'healthy'
            disease="No Disease"
    print(output)
            
    return jsonify({"output":output,"disease":disease,"remedy":remedy})



@app.route('/croprec',methods=['POST'])
def croprecommender():
        crop_recommendation_model_path = 'Crop_Recommendation.pkl'

        with open(crop_recommendation_model_path,'rb') as f:
                crop_recommendation_model  = pickle.load(f)
        #crop_recommendation_model = pickle.load(open('Crop_Recommendation.pkl','rb'))
        data = request.get_json(force=True)
        print(data)
        temperature=data["temperature"]
        humidity=data["humidity"]
        rainfall=data["rainfall"]
        nitrogen=data["nitrogen"]
        phosphorous=data["phosphorous"]
        potassium=data["potassium"]
        ph=data["ph"]
        

        ip = np.array([[nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall]],dtype=int)
        print(ip)




        my_prediction = crop_recommendation_model.predict(ip)
        result=str(my_prediction[0])
        
        return jsonify({"output":result})


@ app.route('/fertilizer-predict', methods=['POST'])
def fertilizer_recommend():

        df = pd.read_csv('data/Crop_NPK.csv')

        data = request.get_json(force=True)
        crop_name=data["crop_name"]
        N_filled = data["N_filled"]
        P_filled = data["P_filled"]
        K_filled = data["K_filled"]

        N_desired = df[df['Crop'] == crop_name]['N'].iloc[0]
        P_desired = df[df['Crop'] == crop_name]['P'].iloc[0]
        K_desired = df[df['Crop'] == crop_name]['K'].iloc[0]

        n = N_desired- N_filled
        p = P_desired - P_filled
        k = K_desired - K_filled

        if n < 0:
                key1 = "NHigh"
        elif n > 0:
                key1 = "Nlow"
        else:
                key1 = "NNo"

        if p < 0:
                key2 = "PHigh"
        elif p > 0:
                key2 = "Plow"
        else:
                key2 = "PNo"

        if k < 0:
                key3 = "KHigh"
        elif k > 0:
                key3 = "Klow"
        else:
                key3 = "KNo"

        abs_n = abs(n)
        abs_p = abs(p)
        abs_k = abs(k)

        response1 = (str(fertilizer_dict[key1]))
        response2 = (str(fertilizer_dict[key2]))
        response3 = (str(fertilizer_dict[key3]))


        print(response1 +" "+ response2+ " "+response3)

        result = response1 +" "+ response2+ " "+response3

        return jsonify({"output":result})



classifier = load_model('Trained_model.h5')


def pred_pest(pest):
    
        test_image = image.load_img(pest, target_size=(64, 64))
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis=0)
       
        result = classifier.predict(test_image)
        res=np.argmax(result,axis=1)
       
        
        return res
   



@app.route("/predict-pest", methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        file = request.files['image']  # fetch input
        filename = file.filename

        file_path = os.path.join('static/user uploaded', filename)
        file.save(file_path)

        pred = pred_pest(pest=file_path)
        if pred == 'x':
            return jsonify({"output":"error"})
        if pred[0] == 0:
            pest_identified = 'aphids'
        elif pred[0] == 1:
            pest_identified = 'armyworm'
        elif pred[0] == 2:
            pest_identified = 'beetle'
        elif pred[0] == 3:
            pest_identified = 'bollworm'
        elif pred[0] == 4:
            pest_identified = 'earthworm'
        elif pred[0] == 5:
            pest_identified = 'grasshopper'
        elif pred[0] == 6:
            pest_identified = 'mites'
        elif pred[0] == 7:
            pest_identified = 'mosquito'
        elif pred[0] == 8:
            pest_identified = 'sawfly'
        elif pred[0] == 9:
            pest_identified = 'stem borer'

        return jsonify({"output":pest_identified})