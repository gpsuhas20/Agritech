#!/usr/bin/env python
# coding: utf-8

# 
# 

# #                             Plant disease detection

# In[5]:


import numpy as np
import matplotlib.pyplot as plt
import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
#technique that can be used to artificially expand the size of a training dataset by creating modified versions of images in the dataset
from tensorflow.keras.layers import Dense, Input, Dropout,Flatten, Conv2D # cnn 
#batch normaliztion is a technique to improve the learning rates of the model by normalizing the input layers.
#Normalization is a technique applied during data preparation so as to change the 
#values of numeric columns in the dataset to use a common scale.

#where one feature might be fractional and range between zero and one, and another might range between zero and a thousand.
#activation:function that is added into an artificial neural network in order to help the network learn complex patterns in the data.

# it reduces the number of parameters to learn and the amount of computation performed in the network. 
from tensorflow.keras.layers import BatchNormalization, Activation, MaxPooling2D
#it reduces the number of parameters to learn and the amount of 
# computation performed in the network. feature reduction.
#model represents the actual neural network model.
##A Sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor
from tensorflow.keras.models import Model, Sequential

#Adam is an optimization algorithm that can be used instead of the classical stochastic gradient descent procedure to update network weights iterative based in training data.
from tensorflow.keras.optimizers import Adam

from tensorflow.keras.callbacks import ModelCheckpoint, ReduceLROnPlateau
#ReduceLROnPlateau is a callback to reduce the learning rate when a metric has stopped improving.
# Converts a Keras model to dot format and save to a file.
from tensorflow.keras.utils import plot_model
from IPython.display import SVG, Image # to view 2d data to image.


# In[6]:


# For checking out that how many images are available in the train set we can use import OS
for types in os.listdir("PlantVillage/My Drive/train_set/"):
    print(str(len(os.listdir("PlantVillage/My Drive/train_set/"+ types)))+" "+ types+' images')


# In[7]:



# Complete Dataset images can be loaded using ImageDataGenerator function
img_size=48
batch_size=64 # per batch 64 images processed.
datagen_train=ImageDataGenerator(horizontal_flip=True) # loading of images.
train_generator=datagen_train.flow_from_directory("PlantVillage/My Drive/train_set",
target_size=(img_size,img_size),
batch_size=batch_size,
class_mode='categorical',
shuffle=True)

# testing data.
datagen_test=ImageDataGenerator(horizontal_flip=True)
validation_generator=datagen_test.flow_from_directory("PlantVillage/My Drive/test_data",
target_size=(img_size,img_size),
batch_size=batch_size,
class_mode='categorical',
shuffle=True)


# In[8]:


detection=Sequential()
# Sequential model
# adding various layers.
#1 -convolutional layer-1
#we are definig layers.
detection.add(Conv2D(64,(3,3),padding='same',input_shape=(48,48,3)))

#The padding tells us what happens when the kernels/filters don’t fit, for example because the input image has a width and height
#that do not match with the combination of kernel size and stride.

# conversion to 2d.

detection.add(BatchNormalization())
detection.add(Activation('relu'))
detection.add(MaxPooling2D(pool_size=(2,2)))
detection.add(Dropout(0.25))# to avoid overfitting.

#2 -convolutional layer-2
detection.add(Conv2D(128,(5,5),padding='same'))
detection.add(BatchNormalization())
detection.add(Activation('relu'))
detection.add(MaxPooling2D(pool_size=(2,2)))
detection.add(Dropout(0.25))

#3 -convolutional layer-3
detection.add(Conv2D(512,(3,3),padding='same'))
detection.add(BatchNormalization())
detection.add(Activation('relu'))
detection.add(MaxPooling2D(pool_size=(2,2)))
detection.add(Dropout(0.25))

#4 -convolutional layer-4
detection.add(Conv2D(1024,(3,3),padding='same'))
detection.add(BatchNormalization())
detection.add(Activation('relu'))
detection.add(MaxPooling2D(pool_size=(2,2)))
detection.add(Dropout(0.25))

detection.add(Flatten())# to op to 1d array
detection.add(Dense(256))# to collecting the op of one layer and passing it to the next layer.
detection.add(BatchNormalization())
detection.add(Activation('relu'))
detection.add(Dropout(0.25))

detection.add(Dense(512))
detection.add(BatchNormalization())
detection.add(Activation('relu'))
#The rectified linear activation function or ReLU for short is a piecewise linear function that will output the input directly 
#if it is positive, otherwise, it will output zero.used for inner layers.
detection.add(Dropout(0.25))

detection.add(Dense(15,activation='softmax'))# mathematical eq to get the op.
#It is mainly used to normalize neural networks output to fit between zero and one.
optimum=Adam(lr=0.005) # optimizer used to improve learning rate of the model
detection.compile(optimizer=optimum,loss='categorical_crossentropy',metrics=['accuracy'])


# In[9]:


detection.summary()


# In[15]:


ephocs=15 #no of times the model is trained.
steps_per_epoch=train_generator.n//train_generator.batch_size
steps_per_epoch
validation_steps=validation_generator.n//validation_generator.batch_size
validation_steps
detection.fit(x=train_generator,
                    steps_per_epoch=steps_per_epoch,
                    epochs=ephocs,
                    validation_data=validation_generator,
                    validation_steps=validation_steps)
detection.save('auto_chloro_model.h5') # saving the trained model,because training of model takes time.


# In[13]:


from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
detection=load_model('auto_chloro_model.h5')


# In[15]:


test_img=image.load_img("t-spot.jpg",target_size=(48,48))
# img on which model predicts.
plt.imshow(test_img)
test_img=image.img_to_array(test_img)
test_img=np.expand_dims(test_img,axis=0)
result=detection.predict(test_img)
a=result.argmax()
classes=train_generator.class_indices

category=[]
for i in classes:
          category.append(i)
for i in range(len(classes)):
           if(i==a):
                output=category[i]
print("Disease :-" + output)  


# In[ ]:



    


# In[16]:


if output == 'Pepper__bell___Bacterial_spot':
        print('''Bacterial spot disease of bell pepper / capsicum \n
         Biological control: n nBacterial stain control is very complex and expensive. 
If the disease occurs at the beginning of the season, it is better to destroy the entire crop. 
Copper-rich antibacterial, forms a protective coating on fruits and petals. 
Antibiotics for bacterial viruses (bacteriophages) are available on the market that kill certain bacteria. 
Soak the seeds in 1.3% sodium hypochlorite solution for 1 minute or in hot water (50 C) for 25 minutes. 
\n \n Chemical control:
 \n \n Always take preventive measures through biological control under integrated pest management as much as possible. 
Only copper-containing antibacterial agents can prevent and partially control the disease. 
Spray as soon as the disease appears, and apply every 10-14 days in warm and humid environment. 
Mixed pesticides rich in mancozeb and copper may provide some protection.''')
        
elif output == 'Potato___Early_blight':
        print( '''Potato early blight disease\n
        Biological control: n nBacillus subtilis composite material or copper-based.
Recognized as an organic fungicide that can be applied against this disease.
\n \nChemical control:
 \n\nPrevent prevention through biological control under possible pest management. 
There are different types of fungicides available in the market which can control potato blight. 
Azoxitrobin, pyroclostrobin, diphenconazole, boscalid, chlorothalonil, phenamidone, maneb, mancozeb, trifloxistrobin,.
And fungicides like germination etc. are used to control the disease. 
It is recommended to use different types of chemical mixtures periodically. Finish all attendance on time in suitable weather. A
After applying these ingredients, take a break before harvest to be safe for health.''')
        
elif output == 'Potato___Late_blight':
        print( '''Potato Nabi Dhwasa Rog \n
        Biological control: n nApply a copper based fungicide before the onset of dry weather. 
Infection can also be prevented by spraying organic coating on the leaves. 
\n \n Chemical control:
\n\n Always take preventive measures through biological control under integrated pest management. A
It is important to use fungicides to control nematodes everywhere in the field, especially in humid parts. A
The corresponding fungicide that covers the leaves is very effective before infection and does not allow the fungus to develop resistance to the fungicide. A
Mandipropamid, chlorothalonil, fluazinam, for preventive measures.
Triphenyltin, or mancozeb fungicides can be used.
It is also possible to purify the seeds with fungicides like Mancozeb before sowing.''')
        
elif output == 'Tomato_Bacterial_spot':
        print('''Tomato Bacterial Disease
        Biological control: \n \nBacterial spot control is very difficult and expensive. 
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
It is recommended to use Mancozeb with bactericide.''')
        
elif output == 'Tomato_Early_blight':
        print('''Tomato early blight
        Biological control: n nBacillus subtilis composite material or copper-based.
Recognized as an organic fungicide that can be applied against this disease. A
\n \nChemical control:
\n \n
Prevent prevention through biological control under possible pest management. 
There are different types of fungicides available in the market which can control potato blight. 
Azoxitrobin, pyroclostrobin, diphenconazole, boscalid, chlorothalonil, phenamidone, maneb, mancozeb, trifloxistrobin,.
And fungicides like germination etc. are used to control the disease. 
It is recommended to use different types of chemical mixtures periodically. Finish all attendance on time in suitable weather. 
After applying these ingredients, take a break before harvest to be safe for health.''')
        
        
elif output == 'Tomato_Late_blight':
        print( '''Tomato's nasal decay disease'
        Biological control:। n nThere are no known biological measures against nephritis to date. 
To prevent the spread of the disease, immediately remove or destroy the crop from the infected area and the infected crop.
Refrain from making organic manure. 
\n \n Chemical control:
 n \ n Take integrated pest management to prevent disease through biological control. 
Spray fungicides containing Mandipropamide, Chlorothalonil, Fluazineum, and Mancozeb Organized Ingredients to prevent neoplasms. 
If watering is done from the top of the tree or during the rainy season of the year, it is necessary to apply fungicide.''')
        
elif output == 'Tomato_Leaf_Mold':
        print('''Tomato Leaf Fungus Disease \n
        Biological control: \n \nHot water for disinfection (25 minutes at 122 degrees Fahrenheit or 50 degrees Celsius).
There are suggestions to purify the seeds with. Acronium strictum, Dysima palvinata, Trichoderma harzinum.
Or Trichoderma viridi and Trichothesium rosium fungi Mycovelosila falvar are enemies and can be used to control them.
In greenhouses Acremonium strictum, Trichoderma viridi strain 3 and Trichothesium rosium are 53, 6 and 64 percent respectively.
Mycovelosila falwa of tomato is suppressed by rate application. On a small scale, mix apple cider, garlic or milk and vinegar.
It can be used to control the fungus. 
\n \n Chemical control:
\n \nAlways take preventive measures through biological control under integrated pest management as much as possible. If the weather is favorable for the disease to spread.
Fungicide should be sprayed before infection. Chlorothalonil, maneb, mancozeb and.
Copper fungicides are recommended for use in the field. Difenoconazole for greenhouses.
Mandipropamid, cymoxanil, famoxadone and cyprodinil.
Use is recommended.''')
        
    
elif output == 'Tomato_Septoria_leaf_spot':
        print('''Biological control: n nSeptoria spot disease of tomatoes 
        Copper fungicides, such as Bordeaux mixture, copper hydroxide, copper sulphate,.
Or copper oxychloride sulfate can help control the germs of the disease.
Spray every 8 to 10 days throughout the season, especially during flowering and fruiting.
Follow the rules written on the pesticide packaging before harvesting. A
n nChemical control:
n nPrevent prevention through biological control under possible integrated pest management. I mean, six.
The fungicides Mancozeb and Chlorothalonil are effective in controlling tomato septoria. A
Spray at intervals of 8 to 10 days throughout the season, especially during flowering and fruiting. A
Follow the rules written on the pesticide packaging before harvesting.''')
        
elif output == 'Tomato_Spider_mites_Two_spotted_spider_mite':
        print('''Normal Red Spider \n
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
It is important to apply the spray.''')
        
elif output == 'Tomato__Target_Spot':
        print('''Tomato Target Disease \n
        Watering in the morning so that the leaves of the tomato plant have time to dry. Water or dry the leaves at the base of the tree.
Use a hose or drip system for. Apply a sesame to monitor the fruit from direct contact with the soil. ''')
        
elif output == 'Tomato__Tomato_mosaic_virus images':
        print('''Tomato mosaic virus disease \n
        Biological control: \n  for 4 days or 72-75 ° C for 24 hours dry.
Heating and purifying the seeds helps to keep the seeds virus free. Alternatively, 100 g / liter.
Soak the seeds in a solution of trisodium phosphate for 15 minutes and rinse thoroughly with water.
Even if it is dried later, it works. 
\n \n Chemical control:
 n \ nTake preventive measures through biological control as much as possible under integrated pest management. A
There is no effective chemical pest management for tomato mosaic virus.''')
        
elif output == 'Tomato__Tomato_YellowLeaf__Curl_Virus images':
        print('''Tomato yellow leaf curl virus disease
        Biological control: n nTome yellow tomato leaf curl virus (TYLCV) disease.
No repression is known. Control whitefly breeding to avoid virus attacks. 
\n \nChemical control:
\n \n Once infected with the virus, no further control measures work against it. 
Whitefly breeding needs to be controlled to avoid virus attacks. 
Pyrethroids are a class of insecticides used by plants to fertilize plants or soil.
Reproduction can be reduced. But excessive use of these can increase the immunity of simple fish.''')
        
elif output == 'Pepper__bell___healthy' or output == 'Potato___healthy' or output == 'Tomato_healthy':
        print( 'healthy')
        


# In[ ]:





# In[ ]:




