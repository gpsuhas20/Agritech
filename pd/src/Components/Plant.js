import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Form, FormGroup, Label, Input,FormText, Button,Card,CardImg} from 'reactstrap'



import k1 from "./audio/kan/Pepper__bell___Bacterial_spot.mp3"
import k2 from "./audio/kan/Potato___Early_blight.mp3"
import k3 from "./audio/kan/Potato___Late_blight.mp3"
import k4 from "./audio/kan/Tomato_Bacterial_spot.mp3"
import k5 from "./audio/kan/Tomato_Early_blight.mp3"
import k6 from "./audio/kan/Tomato_Late_blight.mp3"
import k7 from "./audio/kan/Tomato_Leaf_Mold.mp3"
import k8 from "./audio/kan/Tomato_Septoria_leaf_spot.mp3"
import k9 from "./audio/kan/Tomato_Spider_mites_Two_spotted_spider_mite.mp3"
import k10 from "./audio/kan/Tomato__Target_Spot.mp3"
import k11 from "./audio/kan/Tomato__Tomato_mosaic_virus.mp3"
import k12 from "./audio/kan/Tomato__Tomato_YellowLeaf__Curl_Virus.mp3"
import k13 from "./audio/kan/healthy.mp3"

import h1 from "./audio/hindi/Pepper__bell___Bacterial_spot.mp3"
import h2 from "./audio/hindi/Potato___Early_blight.mp3"
import h3 from "./audio/hindi/Potato___Late_blight.mp3"
import h4 from "./audio/hindi/Tomato_Bacterial_spot.mp3"
import h5 from "./audio/hindi/Tomato_Early_blight.mp3"
import h6 from "./audio/hindi/Tomato_Late_blight.mp3"
import h7 from "./audio/hindi/Tomato_Leaf_Mold.mp3"
import h8 from "./audio/hindi/Tomato_Septoria_leaf_spot.mp3"
import h9 from "./audio/hindi/Tomato_Spider_mites_Two_spotted_spider_mite.mp3"
import h10 from "./audio/hindi/Tomato__Target_Spot.mp3"
import h11 from "./audio/hindi/Tomato__Tomato_mosaic_virus.mp3"
import h12 from "./audio/hindi/Tomato__Tomato_YellowLeaf__Curl_Virus.mp3"
import h13 from "./audio/hindi/healthy.mp3"


import e1 from "./audio/eng/Pepper__bell___Bacterial_spot.mp3"
import e2 from "./audio/eng/Potato___Early_blight.mp3"
import e3 from "./audio/eng/Potato___Late_blight.mp3"
import e4 from "./audio/eng/Tomato_Bacterial_spot.mp3"
import e5 from "./audio/eng/Tomato_Early_blight.mp3"
import e6 from "./audio/eng/Tomato_Late_blight.mp3"
import e7 from "./audio/eng/Tomato_Leaf_Mold.mp3"
import e8 from "./audio/eng/Tomato_Septoria_leaf_spot.mp3"
import e9 from "./audio/eng/Tomato_Spider_mites_Two_spotted_spider_mite.mp3"
import e10 from "./audio/eng/Tomato__Target_Spot.mp3"
import e11 from "./audio/eng/Tomato__Tomato_mosaic_virus.mp3"
import e12 from "./audio/eng/Tomato__Tomato_YellowLeaf__Curl_Virus.mp3"
import e13 from "./audio/eng/healthy.mp3"

let song=null
function Plant(props)
{
    const defaultImage = ''
    const [data, setData]= useState(null);
    const [src, setSrc]= useState(null);
    const [text, setText]= useState('');
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState('');
    const [img1, setImg1] = useState({file:defaultImage});
    const [lang, setLang] = useState('eng');
    let[disease,setDisease]=useState('')
    const[remedy,setRemedy]=useState('')


 
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);  };
   
     
      const [state, setState]= useState( {

        // Get audio file in a variable
        audio: new Audio(e1),
    
        // Set initial state of song
        isPlaying: false,
      });
    var bodyFormData = new FormData();
     const upload_image=async(event)=>
     {

        
        bodyFormData.append('file', event.target.files[0]);

        setImg1({
            file: URL.createObjectURL(event.target.files[0])
          })
          console.log(event.target.files[0])

         handleToggle()
        
          HandleSubmit()

       
    
       

     }
    

    
      
   
    const HandleSubmit=async(e)=>{
       

        
         
            if(1>0)
            
            {
              
           
    
        

        axios({
            method: "post",
            url: "http://localhost:5000/plant",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function async (response) {
              //handle success
             

              setData(response.data);
              console.log(response.data)
              if(lang=="kan")
              {
               
              
              
                if (response.data.output == 'Pepper__bell___Bacterial_spot')
                {
                    
                  
                    
              
           setDisease('ಪೆಪ್ಪರ್__ಬೆಲ್___ಬ್ಯಾಕ್ಟೀರಿಯಲ್_ಸ್ಪಾಟ್')
           setRemedy( `ಜೈವಿಕ ನಿಯಂತ್ರಣ:  ಬ್ಯಾಕ್ಟೀರಿಯಾದ ಕಲೆ ನಿಯಂತ್ರಣವು ತುಂಬಾ ಸಂಕೀರ್ಣ ಮತ್ತು ದುಬಾರಿಯಾಗಿದೆ.
   ಋತುವಿನ ಆರಂಭದಲ್ಲಿ ರೋಗ ಬಂದರೆ ಸಂಪೂರ್ಣ ಬೆಳೆಯನ್ನು ನಾಶಪಡಿಸುವುದು ಉತ್ತಮ. 
   ತಾಮ್ರ-ಸಮೃದ್ಧ ಆಂಟಿಬ್ಯಾಕ್ಟೀರಿಯಲ್, ಹಣ್ಣುಗಳು ಮತ್ತು ದಳಗಳ ಮೇಲೆ ರಕ್ಷಣಾತ್ಮಕ ಲೇಪನವನ್ನು ರೂಪಿಸುತ್ತದೆ.
   ಕೆಲವು ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳನ್ನು ಕೊಲ್ಲುವ ಬ್ಯಾಕ್ಟೀರಿಯಾದ ವೈರಸ್‌ಗಳಿಗೆ (ಬ್ಯಾಕ್ಟೀರಿಯೊಫೇಜಸ್) ಪ್ರತಿಜೀವಕಗಳು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಲಭ್ಯವಿದೆ. 
   ಬೀಜಗಳನ್ನು 1.3% ಸೋಡಿಯಂ ಹೈಪೋಕ್ಲೋರೈಟ್ ದ್ರಾವಣದಲ್ಲಿ 1 ನಿಮಿಷ ಅಥವಾ ಬಿಸಿ ನೀರಿನಲ್ಲಿ (50 ಸೆಲ್ ಸಿ) 25 ನಿಮಿಷಗಳ ಕಾಲ ನೆನೆಸಿಡಿ.
    ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
   ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ಯಾವಾಗಲೂ ಸಾಧ್ಯವಾದಷ್ಟು ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. 
   ತಾಮ್ರ-ಒಳಗೊಂಡಿರುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ ವಿರೋಧಿ ಏಜೆಂಟ್‌ಗಳು ಮಾತ್ರ ರೋಗವನ್ನು ತಡೆಗಟ್ಟಬಹುದು ಮತ್ತು ಭಾಗಶಃ ನಿಯಂತ್ರಿಸಬಹುದು. 
   ರೋಗ ಕಾಣಿಸಿಕೊಂಡ ತಕ್ಷಣ ಸಿಂಪಡಿಸಿ ಮತ್ತು ಬೆಚ್ಚಗಿನ ಮತ್ತು ಆರ್ದ್ರ ವಾತಾವರಣದಲ್ಲಿ ಪ್ರತಿ 10-14 ದಿನಗಳಿಗೊಮ್ಮೆ ಅನ್ವಯಿಸಿ. 
   ಮ್ಯಾಂಕೋಜೆಬ್ ಮತ್ತು ತಾಮ್ರದಲ್ಲಿ ಸಮೃದ್ಧವಾಗಿರುವ ಮಿಶ್ರಿತ ಕೀಟನಾಶಕಗಳು ಸ್ವಲ್ಪ ರಕ್ಷಣೆ ನೀಡಬಹುದು `)
   setState({audio:new Audio(k1)})
  
   
   }
   else if (response.data.output == 'Potato___Early_blight')
   {
       
   
         setDisease('ಆಲೂಗಡ್ಡೆ___ಆರಂಭಿಕ_ಬ್ಲೈಟ್')
         setRemedy( `ಜೈವಿಕ ನಿಯಂತ್ರಣ:ಬ್ಯಾಸಿಲಸ್ ಸಬ್ಟಿಲಿಸ್ ಸಂಯುಕ್ತ ವಸ್ತು ಅಥವಾ ತಾಮ್ರ ಆಧಾರಿತ.
         ಈ ರೋಗದ ವಿರುದ್ಧ ಅನ್ವಯಿಸಬಹುದಾದ ಸಾವಯವ ಶಿಲೀಂಧ್ರನಾಶಕ ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ. 
          ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
         ಸಂಭಾವ್ಯ ಕೀಟ ನಿರ್ವಹಣೆಯ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ತಡೆಗಟ್ಟುವಿಕೆ ತಡೆಗಟ್ಟುವಿಕೆ. 
         ಆಲೂಗೆಡ್ಡೆ ರೋಗವನ್ನು ನಿಯಂತ್ರಿಸುವ ವಿವಿಧ ರೀತಿಯ ಶಿಲೀಂಧ್ರನಾಶಕಗಳು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಲಭ್ಯವಿವೆ. 
         ಅಜೋಕ್ಸಿಟ್ರೋಬಿನ್, ಪೈರೋಕ್ಲೋಸ್ಟ್ರೋಬಿನ್, ಡಿಫೆನ್ಕೊನಜೋಲ್, ಬೋಸ್ಕಲಿಡ್, ಕ್ಲೋರೋಥಲೋನಿಲ್, ಫೆನಾಮಿಡೋನ್, ಮಾನೆಬ್, ಮ್ಯಾಂಕೋಜೆಬ್, ಟ್ರೈಫ್ಲೋಕ್ಸಿಸ್ಟ್ರೋಬಿನ್,.
         ಮತ್ತು ರೋಗವನ್ನು ನಿಯಂತ್ರಿಸಲು ಮೊಳಕೆಯೊಡೆಯಲು ಮುಂತಾದ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ. 
         ನಿಯತಕಾಲಿಕವಾಗಿ ವಿವಿಧ ರೀತಿಯ ರಾಸಾಯನಿಕ ಮಿಶ್ರಣಗಳನ್ನು ಬಳಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ. ಸೂಕ್ತವಾದ ಹವಾಮಾನದಲ್ಲಿ ಸಮಯಕ್ಕೆ ಎಲ್ಲಾ ಹಾಜರಾತಿಯನ್ನು ಮುಗಿಸಿ. ಎ
         ಈ ಪದಾರ್ಥಗಳನ್ನು ಅನ್ವಯಿಸಿದ ನಂತರ, ಆರೋಗ್ಯಕ್ಕೆ ಸುರಕ್ಷಿತವಾಗಿರಲು ಕೊಯ್ಲು ಮಾಡುವ ಮೊದಲು ವಿರಾಮ ತೆಗೆದುಕೊಳ್ಳಿ`)
         setState({audio:new Audio(k2)})
        }
       
   else if (response.data.output == 'Potato___Late_blight')
   {
        setDisease('ಆಲೂಗಡ್ಡೆ ನಬಿ ಧ್ವಸ ರೋಗ')
       setRemedy(`ಜೈವಿಕ ನಿಯಂತ್ರಣ: ಒಣ ಹವಾಮಾನದ ಆರಂಭದ ಮೊದಲು ತಾಮ್ರ ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ.
       ಎಲೆಗಳ ಮೇಲೆ ಸಾವಯವ ಲೇಪನವನ್ನು ಸಿಂಪಡಿಸುವ ಮೂಲಕ ಸೋಂಕನ್ನು ತಡೆಯಬಹುದು. 
       ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ಯಾವಾಗಲೂ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.
       ನೆಮಟೋಡ್‌ಗಳನ್ನು ಹೊಲದಲ್ಲಿ ಎಲ್ಲೆಡೆ, ವಿಶೇಷವಾಗಿ ಆರ್ದ್ರ ಭಾಗಗಳಲ್ಲಿ ನಿಯಂತ್ರಿಸಲು ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸುವುದು ಮುಖ್ಯವಾಗಿದೆ.
       ಎಲೆಗಳನ್ನು ಆವರಿಸುವ ಅನುಗುಣವಾದ ಶಿಲೀಂಧ್ರನಾಶಕವು ಸೋಂಕಿನ ಮೊದಲು ಬಹಳ ಪರಿಣಾಮಕಾರಿಯಾಗಿದೆ ಮತ್ತು ಶಿಲೀಂಧ್ರವು ಶಿಲೀಂಧ್ರನಾಶಕಕ್ಕೆ ಪ್ರತಿರೋಧವನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಅನುಮತಿಸುವುದಿಲ್ಲ. ಎ
       ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳಿಗಾಗಿ ಮಂಡಿಪ್ರೊಪಮೈಡ್, ಕ್ಲೋರೊಥಲೋನಿಲ್, ಫ್ಲುಜಿನಮ್.
       ಟ್ರಿಫೆನಿಲ್ಟಿನ್ ಅಥವಾ ಮ್ಯಾಂಕೋಜೆಬ್ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಬಹುದು. 
       ಬಿತ್ತನೆ ಮಾಡುವ ಮೊದಲು ಬೀಜಗಳನ್ನು ಮ್ಯಾಂಕೋಜೆಬ್‌ನಂತಹ ಶಿಲೀಂಧ್ರನಾಶಕಗಳಿಂದ ಶುದ್ಧೀಕರಿಸಲು ಸಹ ಸಾಧ್ಯವಿದೆ.` )
       setState({audio:new Audio(k3)})
   }
       
       
   else if (response.data.output == 'Tomato_Bacterial_spot')
   {
       setDisease('ಟೊಮ್ಯಾಟೊ ಬ್ಯಾಕ್ಟೀರಿಯಾ ರೋಗ') 
       setRemedy (`ಜೈವಿಕ ನಿಯಂತ್ರಣ: ಬ್ಯಾಕ್ಟೀರಿಯಾ ಸ್ಪಾಟ್ ನಿಯಂತ್ರಣವು ತುಂಬಾ ಕಷ್ಟಕರ ಮತ್ತು ದುಬಾರಿಯಾಗಿದೆ. ಎ
       ಋತುವಿನ ಆರಂಭದಲ್ಲಿ ರೋಗವು ದಾಳಿ ಮಾಡಿದರೆ, ಅದು ಇಡೀ ಭೂಮಿಯನ್ನು ನಾಶಪಡಿಸುತ್ತದೆ. ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕ ತಾಮ್ರದ ಅಂಶ.
       ಎಲೆಗಳು ಮತ್ತು ಹಣ್ಣುಗಳನ್ನು ಪ್ರತಿವಿಷವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ. ಬ್ಯಾಕ್ಟೀರಿಯಾವನ್ನು ಕೊಲ್ಲುವ ಬ್ಯಾಕ್ಟೀರಿಯೊಫೇಜಸ್ (ಬ್ಯಾಕ್ಟೀರಿಯೊಫೇಜಸ್).
       ಇದು ಎಲ್ಲಾ ಸಮಯದಲ್ಲೂ ಲಭ್ಯವಿದೆ. 1.3% ಸೋಡಿಯಂ ಹೈಪೋಕ್ಲೋರೈಟ್ ಒಂದು ನಿಮಿಷದಲ್ಲಿ ಅಥವಾ ಬಿಸಿ ನೀರಿನಲ್ಲಿ (50 ಸಿ) 25 ನಿಮಿಷಗಳ ಕಾಲ.
       ಬೀಜಗಳನ್ನು ನೆನೆಸುವುದರಿಂದ ರೋಗ ಹರಡುವುದನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು. 
        ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಸಾಧ್ಯವಾದಷ್ಟು ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ರೋಗ ನಿಯಂತ್ರಣವನ್ನು ತಡೆಗಟ್ಟಿ. 
       ತಾಮ್ರವನ್ನು ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕ ಮತ್ತು ನಂಜುನಿರೋಧಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.
       ನಿಯಂತ್ರಣವನ್ನು ಒದಗಿಸಬಹುದು. ಮೊದಲ ರೋಗಲಕ್ಷಣಗಳು ಕಾಣಿಸಿಕೊಂಡ ತಕ್ಷಣ ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕವನ್ನು ಅನ್ವಯಿಸಿ ಮತ್ತು.
       ನಂತರ ಬೆಚ್ಚಗಿನ [ಸಣ್ಣ ಕಲೆಗಳು / ಶೀತ (ಮಚ್ಚೆಗಳು)], ಆರ್ದ್ರ ವಾತಾವರಣದ ಸಂದರ್ಭದಲ್ಲಿ 10 ರಿಂದ 14 ದಿನಗಳವರೆಗೆ ಅನ್ವಯಿಸಿ. 
       ತಾಮ್ರದ ನಿರಂತರ ಬಳಕೆಯು ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕ ಪ್ರತಿರಕ್ಷಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ಮಿಸುವುದರಿಂದ, ತಾಮ್ರವು ಸಂಶ್ಲೇಷಿತ ವಸ್ತುವಾಗಿದೆ.
       ಮ್ಯಾಂಕೋಜೆಬ್ ಅನ್ನು ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕದೊಂದಿಗೆ ಬಳಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ ` )
       setState({audio:new Audio(k4)})
   }
       
       
   else if (response.data.output== 'Tomato_Early_blight')
   {

       setDisease('ಟೊಮ್ಯಾಟೊ ಆರಂಭಿಕ ರೋಗ')
       setRemedy (`ಜೈವಿಕ ನಿಯಂತ್ರಣ:ಬ್ಯಾಸಿಲಸ್ ಸಬ್ಟಿಲಿಸ್ ಸಂಯುಕ್ತ ವಸ್ತು ಅಥವಾ ತಾಮ್ರ ಆಧಾರಿತ.
       ಈ ರೋಗದ ವಿರುದ್ಧ ಅನ್ವಯಿಸಬಹುದಾದ ಸಾವಯವ ಶಿಲೀಂಧ್ರನಾಶಕ ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ. ಎ
       n ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಸಂಭಾವ್ಯ ಕೀಟ ನಿರ್ವಹಣೆಯ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ತಡೆಗಟ್ಟುವಿಕೆ ತಡೆಗಟ್ಟುವಿಕೆ. ಎ
       ಆಲೂಗೆಡ್ಡೆ ರೋಗವನ್ನು ನಿಯಂತ್ರಿಸುವ ವಿವಿಧ ರೀತಿಯ ಶಿಲೀಂಧ್ರನಾಶಕಗಳು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಲಭ್ಯವಿವೆ. ಎ
       ಅಜೋಕ್ಸಿಟ್ರೋಬಿನ್, ಪೈರೋಕ್ಲೋಸ್ಟ್ರೋಬಿನ್, ಡಿಫೆನ್ಕೊನಜೋಲ್, ಬೋಸ್ಕಲಿಡ್, ಕ್ಲೋರೋಥಲೋನಿಲ್, ಫೆನಾಮಿಡೋನ್, ಮಾನೆಬ್, ಮ್ಯಾಂಕೋಜೆಬ್, ಟ್ರೈಫ್ಲೋಕ್ಸಿಸ್ಟ್ರೋಬಿನ್,.
       ಮತ್ತು ರೋಗವನ್ನು ನಿಯಂತ್ರಿಸಲು ಮೊಳಕೆಯೊಡೆಯಲು ಮುಂತಾದ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ. ಎ
       ನಿಯತಕಾಲಿಕವಾಗಿ ವಿವಿಧ ರೀತಿಯ ರಾಸಾಯನಿಕ ಮಿಶ್ರಣಗಳನ್ನು ಬಳಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ. ಸೂಕ್ತವಾದ ಹವಾಮಾನದಲ್ಲಿ ಸಮಯಕ್ಕೆ ಎಲ್ಲಾ ಹಾಜರಾತಿಯನ್ನು ಮುಗಿಸಿ. ಎ
       ಈ ಪದಾರ್ಥಗಳನ್ನು ಅನ್ವಯಿಸಿದ ನಂತರ, ಆರೋಗ್ಯಕ್ಕೆ ಸುರಕ್ಷಿತವಾಗಿರಲು ಕೊಯ್ಲು ಮಾಡುವ ಮೊದಲು ವಿರಾಮ ತೆಗೆದುಕೊಳ್ಳಿ ` )
       setState({audio:new Audio(k5)})
   }
       
       
   else if(response.data.output == 'Tomato_Late_blight')
   {
       setDisease('ಟೊಮೆಟೋಸ್ ಮೂಗು ಕೊಳೆಯುವ ರೋಗ')
       setRemedy(`ಜೈವಿಕ ನಿಯಂತ್ರಣ:  ಇಲ್ಲಿಯವರೆಗೆ ಅಪಸ್ಮಾರದ ವಿರುದ್ಧ ಯಾವುದೇ ಜೈವಿಕ ಕ್ರಮಗಳಿಲ್ಲ. 
       ರೋಗ ಹರಡುವುದನ್ನು ತಡೆಗಟ್ಟಲು, ತಕ್ಷಣವೇ ಸೋಂಕಿತ ಪ್ರದೇಶ ಮತ್ತು ಸೋಂಕಿತ ಬೆಳೆಯಿಂದ ಬೆಳೆ ತೆಗೆಯಿರಿ ಅಥವಾ ನಾಶಮಾಡಿ.
       ಸಾವಯವ ಗೊಬ್ಬರ ತಯಾರಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ. 
       ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
        ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ರೋಗವನ್ನು ತಡೆಗಟ್ಟಲು ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. 
       ನಿಯೋಪ್ಲಾಮ್‌ಗಳನ್ನು ತಡೆಗಟ್ಟಲು ಮ್ಯಾಂಡಿಪ್ರೊಪಮೈಡ್, ಕ್ಲೋರೋಥಲೋನಿಲ್, ಫ್ಲುಜಿನಿಯಮ್ ಮತ್ತು ಮ್ಯಾಂಕೋಜೆಬ್ ಸಂಘಟಿತ ಪದಾರ್ಥಗಳನ್ನು ಹೊಂದಿರುವ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಸಿಂಪಡಿಸಿ. ಎ
       ಮರದ ಮೇಲಿನಿಂದ ಅಥವಾ ವರ್ಷದ ಮಳೆಗಾಲದಲ್ಲಿ ನೀರುಹಾಕುವುದು ಮಾಡಿದರೆ, ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಅನ್ವಯಿಸುವುದು ಅವಶ್ಯಕ.` )  
       setState({audio:new Audio(k6)})
   } 
      
       
   else if (response.data.output == 'Tomato_Leaf_Mold') 
   { 
       setDisease('ಟೊಮೆಟೋ ಲೀಫ್ ಫಂಗಸ್ ಡಿಸೀಸ್ ಎನ್')
       setRemedy(`ಜೈವಿಕ ನಿಯಂತ್ರಣ: ಸೋಂಕುಗಳೆತಕ್ಕಾಗಿ  ಬಿಸಿ ನೀರು (122 ಡಿಗ್ರಿ ಫ್ಯಾರನ್‌ಹೀಟ್ ಅಥವಾ 50 ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್‌ನಲ್ಲಿ 25 ನಿಮಿಷಗಳು).
       ಬೀಜಗಳನ್ನು ಶುದ್ಧೀಕರಿಸಲು ಸಲಹೆಗಳಿವೆ. ಅಕ್ರೋನಿಯಮ್ ಸ್ಟ್ರಿಕ್ಟಮ್, ಡೈಸಿಮಾ ಪಾಲ್ವಿನಾಟಾ, ಟ್ರೈಕೋಡರ್ಮಾ ಹಾರ್ಜಿನಮ್.
       ಅಥವಾ ಟ್ರೈಕೋಡರ್ಮಾ ವಿರಿಡಿ ಮತ್ತು ಟ್ರೈಕೋಥೀಸಿಯಮ್ ರೋಸಿಯಂ ಶಿಲೀಂಧ್ರಗಳು ಮೈಕೊವೆಲೋಸಿಲಾ ಫಲ್ವರ್ ಶತ್ರುಗಳಾಗಿದ್ದು, ಅವುಗಳನ್ನು ನಿಯಂತ್ರಿಸಲು ಬಳಸಬಹುದು.
       ಹಸಿರುಮನೆಗಳಲ್ಲಿ ಅಕ್ರೆಮೋನಿಯಮ್ ಸ್ಟ್ರಿಕ್ಟಮ್, ಟ್ರೈಕೋಡರ್ಮಾ ವಿರಿಡಿ ಸ್ಟ್ರೈನ್ 3 ಮತ್ತು ಟ್ರೈಕೋಥೀಸಿಯಮ್ ರೋಸಿಯಂ ಕ್ರಮವಾಗಿ 53, 6 ಮತ್ತು 64 ಪ್ರತಿಶತ.
       ಟೊಮೇಟೊದ ಮೈಕೊವೆಲೋಸಿಲಾ ಫಲ್ವಾವನ್ನು ದರದ ಅನ್ವಯದಿಂದ ನಿಗ್ರಹಿಸಲಾಗುತ್ತದೆ. ಸಣ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ, ಸೇಬು ಸೈಡರ್, ಬೆಳ್ಳುಳ್ಳಿ ಅಥವಾ ಹಾಲು ಮತ್ತು ವಿನೆಗರ್ ಮಿಶ್ರಣ ಮಾಡಿ.
       ಇದನ್ನು ಶಿಲೀಂಧ್ರವನ್ನು ನಿಯಂತ್ರಿಸಲು ಬಳಸಬಹುದು. 
        ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ಯಾವಾಗಲೂ ಸಾಧ್ಯವಾದಷ್ಟು ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. ರೋಗ ಹರಡಲು ಹವಾಮಾನ ಅನುಕೂಲಕರವಾಗಿದ್ದರೆ.
       ಸೋಂಕಿನ ಮೊದಲು ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಸಿಂಪಡಿಸಬೇಕು. ಕ್ಲೋರೊಥಲೋನಿಲ್, ಮನೆಬ್, ಮ್ಯಾಂಕೋಜೆಬ್ ಮತ್ತು.
       ತಾಮ್ರದ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಕ್ಷೇತ್ರದಲ್ಲಿ ಬಳಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ. ಹಸಿರುಮನೆಗಳಿಗೆ ಡಿಫೆನೊಕೊನಜೋಲ್.
       ಮಂಡಿಪ್ರೊಪಮೈಡ್, ಸೈಮೋಕ್ಸಾನಿಲ್, ಫಾಮೊಕ್ಸಡೋನ್ ಮತ್ತು ಸೈಪ್ರೊಡಿನಿಲ್.
       ಬಳಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.` )
       setState({audio:new Audio(k7)})
   }

   
   else if (response.data.output == 'Tomato_Septoria_leaf_spot')
   { 
       setDisease('ಟೊಮೆಟೊಗಳ ಸೆಪ್ಟೋರಿಯಾ ಸ್ಪಾಟ್ ರೋಗ')
       setRemedy(`ಬೋರ್ಡೆಕ್ಸ್ ಮಿಶ್ರಣ, ತಾಮ್ರದ ಹೈಡ್ರಾಕ್ಸೈಡ್, ತಾಮ್ರದ ಸಲ್ಫೇಟ್ ಮುಂತಾದ ತಾಮ್ರದ ಶಿಲೀಂಧ್ರನಾಶಕಗಳು.
       ಅಥವಾ ಕಾಪರ್ ಆಕ್ಸಿಕ್ಲೋರೈಡ್ ಸಲ್ಫೇಟ್ ರೋಗದ ಸೂಕ್ಷ್ಮಾಣುಗಳನ್ನು ನಿಯಂತ್ರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
       ಋತುವಿನ ಉದ್ದಕ್ಕೂ, ವಿಶೇಷವಾಗಿ ಹೂಬಿಡುವ ಮತ್ತು ಫ್ರುಟಿಂಗ್ ಸಮಯದಲ್ಲಿ ಪ್ರತಿ 8 ರಿಂದ 10 ದಿನಗಳಿಗೊಮ್ಮೆ ಸಿಂಪಡಿಸಿ.
       ಕೊಯ್ಲು ಮಾಡುವ ಮೊದಲು ಕೀಟನಾಶಕ ಪ್ಯಾಕೇಜಿಂಗ್‌ನಲ್ಲಿ ಬರೆದ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸಿ. ಎ
       n ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಎನ್ n ಸಂಭಾವ್ಯ ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ತಡೆಗಟ್ಟುವಿಕೆ. ಅಂದರೆ, ಆರು.
       ಮ್ಯಾಂಕೋಜೆಬ್ ಮತ್ತು ಕ್ಲೋರೋಥಲೋನಿಲ್ ಎಂಬ ಶಿಲೀಂಧ್ರನಾಶಕಗಳು ಟೊಮೆಟೊ ಸೆಪ್ಟೋರಿಯಾವನ್ನು ನಿಯಂತ್ರಿಸುವಲ್ಲಿ ಪರಿಣಾಮಕಾರಿ. ಎ
       ಋತುವಿನ ಉದ್ದಕ್ಕೂ, ವಿಶೇಷವಾಗಿ ಹೂಬಿಡುವ ಮತ್ತು ಫ್ರುಟಿಂಗ್ ಸಮಯದಲ್ಲಿ 8 ರಿಂದ 10 ದಿನಗಳ ಮಧ್ಯಂತರದಲ್ಲಿ ಸಿಂಪಡಿಸಿ. ಎ
       ಕೊಯ್ಲು ಮಾಡುವ ಮೊದಲು ಕೀಟನಾಶಕ ಪ್ಯಾಕೇಜಿಂಗ್‌ನಲ್ಲಿ ಬರೆದ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸಿ. `)
       setState({audio:new Audio(k8)})
   }
       
   else if (response.data.output == 'Tomato_Spider_mites_Two_spotted_spider_mite')
   { 
       setDisease('ಸಾಮಾನ್ಯ ಕೆಂಪು ಜೇಡ')
       setRemedy(`ಜೈವಿಕ ನಿಯಂತ್ರಣ: n n ಸ್ವಲ್ಪ ದಾಳಿಯೊಂದಿಗೆ, ಜೇಡವನ್ನು ನೀರಿನಿಂದ ತೊಳೆಯಿರಿ ಮತ್ತು ಸೋಂಕಿತ ಎಲೆಯನ್ನು ತೆಗೆದುಹಾಕಿ. ಎ
       ಕ್ಯಾಸ್ಟರ್ ಆಯಿಲ್, ತುಳಸಿ, ಸೋಯಾಬೀನ್ ಮತ್ತು ಬೇವಿನ ಎಣ್ಣೆಯ ಮಿಶ್ರಣವನ್ನು ತಯಾರಿಸಿ. RTC ಯ ಸಂತಾನೋತ್ಪತ್ತಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಎಲೆಗಳನ್ನು ಸಿಂಪಡಿಸಿ. ಎ
       ಬೆಳ್ಳುಳ್ಳಿ ಚಹಾ, ಗಿಡದ ಎಲೆ ತೊಗಟೆ ಅಥವಾ ಕೀಟನಾಶಕ ಸೋಪ್ ದ್ರಾವಣವನ್ನು ಬಳಸುವುದರ ಮೂಲಕ ಜೇಡಗಳ ಸಂತಾನೋತ್ಪತ್ತಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು. ಎ
       ಕ್ಷೇತ್ರದಲ್ಲಿ ಜೇಡದ ಜಾತಿಗಳನ್ನು ಅವಲಂಬಿಸಿ, ಜೈವಿಕ ನಿಯಂತ್ರಕಗಳೊಂದಿಗೆ ಪರಭಕ್ಷಕ ಜೇಡಗಳನ್ನು ಬಳಸಿ (ಉದಾಹರಣೆಗೆ, ಫೈಟೊಸಿಯುಲಸ್ ಪರ್ಸಿಮಿಲಿಸ್).
       ಅಥವಾ ಸಾವಯವ ಕೀಟನಾಶಕ ಬ್ಯಾಸಿಲಸ್ ತುರಿಂಜಿಯೆನ್ಸಿಸ್ ಅನ್ನು ಬಳಸಿ. ಆರಂಭಿಕ ಸ್ಪ್ರೇ ಮಾಡಿದ 2-3 ದಿನಗಳ ನಂತರ ಎರಡನೇ ಸ್ಪ್ರೇ ಅನ್ನು ಅನ್ವಯಿಸುವುದು ಮುಖ್ಯ. ಎ
        ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ಯಾವಾಗಲೂ ಸಾಧ್ಯವಾದಷ್ಟು ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. 
       ಈ ಜೇಡಗಳು ವಿಷಕಾರಿ ಪದಾರ್ಥಗಳೊಂದಿಗೆ ನಿಯಂತ್ರಿಸಲು ತುಂಬಾ ಕಷ್ಟ ಏಕೆಂದರೆ ಅವುಗಳು ಹೆಚ್ಚಿನ ತಲೆಮಾರುಗಳಲ್ಲಿ ಹಲವಾರು ವರ್ಷಗಳಿಂದ ಬಳಸಲ್ಪಟ್ಟಿವೆ.
       ವಿವಿಧ ರಾಸಾಯನಿಕಗಳಿಗೆ ಪ್ರತಿರೋಧವನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ. ಈ ಜೇಡದ ಪರಭಕ್ಷಕಗಳನ್ನು ನಿಯಂತ್ರಿಸಲು ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಕವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಆಯ್ಕೆಮಾಡಿ.
       ಅದು ವಿವೇಚನೆಯಿಲ್ಲದೆ ನಾಶಪಡಿಸುವುದಿಲ್ಲ. ಉದಾಹರಣೆಗೆ ನೀರಿನಲ್ಲಿ ಕರಗುವ ಸಲ್ಫರ್ (3 ಗ್ರಾಂ / ಲೀಟರ್), ಸ್ಪಿರೊಮೈಸಿನ್ (1 ಮಿಲಿ / ಲೀಟರ್).
       ಡೈಕೋಫಾಲ್ (5 ಮಿಲಿ / ಲೀಟರ್) ಅಥವಾ ಅಬಾಮೆಕ್ಟಿನ್-ಭರಿತ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಬಳಸಬಹುದು. ಆರಂಭಿಕ ಸ್ಪ್ರೇ ನಂತರ 2 ರಿಂದ 3 ದಿನಗಳ ನಂತರ ಎರಡನೇ ಬಾರಿ.
       ಸ್ಪ್ರೇ ಅನ್ನು ಅನ್ವಯಿಸುವುದು ಮುಖ್ಯ. `)
       setState({audio:new Audio(k9)})
   }
       
   else if (response.data.output == 'Tomato__Target_Spot')
   { 
       setDisease('ಟೊಮೆಟೋ ಟಾರ್ಗೆಟ್ ಡಿಸೀಸ್')
       setRemedy(`ಬೆಳಿಗ್ಗೆ ನೀರುಣಿಸುವುದು ಇದರಿಂದ ಟೊಮೆಟೊ ಗಿಡದ ಎಲೆಗಳು ಒಣಗಲು ಸಮಯವಿರುತ್ತದೆ. ಮರದ ಬುಡದಲ್ಲಿರುವ ಎಲೆಗಳಿಗೆ ನೀರು ಹಾಕಿ ಅಥವಾ ಒಣಗಿಸಿ.
       ಮೆದುಗೊಳವೆ ಅಥವಾ ಹನಿ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಳಸಿ. ಮಣ್ಣಿನೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕದಿಂದ ಹಣ್ಣುಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಎಳ್ಳನ್ನು ಅನ್ವಯಿಸಿ. `)
       setState({audio:new Audio(k10)})
   }
       
   else if (response.data.output == 'Tomato__Tomato_mosaic_virus')
   { 
       setDisease('ಟೊಮ್ಯಾಟೊ ಮೊಸಾಯಿಕ್ ವೈರಸ್ ರೋಗ')
       setRemedy(`'ಜೈವಿಕ ನಿಯಂತ್ರಣ: ದಿನ 4 C 4 ದಿನಗಳವರೆಗೆ ಅಥವಾ 72-75 ° C 24 ಗಂಟೆಗಳವರೆಗೆ ಶುಷ್ಕವಾಗಿರುತ್ತದೆ.
       ಬೀಜಗಳನ್ನು ಬಿಸಿಮಾಡುವುದು ಮತ್ತು ಶುದ್ಧೀಕರಿಸುವುದು ಬೀಜಗಳನ್ನು ವೈರಸ್ ಮುಕ್ತವಾಗಿಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಪರ್ಯಾಯವಾಗಿ, 100 ಗ್ರಾಂ / ಲೀಟರ್.
       ಬೀಜಗಳನ್ನು ಟ್ರೈಸೋಡಿಯಂ ಫಾಸ್ಫೇಟ್ ದ್ರಾವಣದಲ್ಲಿ 15 ನಿಮಿಷಗಳ ಕಾಲ ನೆನೆಸಿ ಮತ್ತು ನೀರಿನಿಂದ ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ.
       ನಂತರ ಒಣಗಿಸಿದರೂ ಅದು ಕೆಲಸ ಮಾಡುತ್ತದೆ. 
        ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯಡಿಯಲ್ಲಿ ಸಾಧ್ಯವಾದಷ್ಟು ಜೈವಿಕ ನಿಯಂತ್ರಣದ ಮೂಲಕ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. 
       ಟೊಮೆಟೊ ಮೊಸಾಯಿಕ್ ವೈರಸ್‌ಗೆ ಯಾವುದೇ ಪರಿಣಾಮಕಾರಿ ರಾಸಾಯನಿಕ ಕೀಟ ನಿರ್ವಹಣೆ ಇಲ್ಲ. `)
       setState({audio:new Audio(k11)})
   }
       
   else if (response.data.output=='Tomato__Tomato_YellowLeaf__Curl_Virus')
   {
       setDisease('ಟೊಮೆಟೋ ಹಳದಿ ಎಲೆ ಸುರುಳಿ ವೈರಸ್ ರೋಗ')
       setRemedy(`ಜೈವಿಕ ನಿಯಂತ್ರಣ: ಹಳದಿ ಟೊಮೆಟೊ ಎಲೆ ಸುರುಳಿ ವೈರಸ್ (TYLCV) ರೋಗ.
       ಯಾವುದೇ ದಬ್ಬಾಳಿಕೆ ತಿಳಿದಿಲ್ಲ. ವೈರಸ್ ದಾಳಿಯನ್ನು ತಪ್ಪಿಸಲು ಬಿಳಿನೊಣಗಳ ಸಂತಾನೋತ್ಪತ್ತಿಯನ್ನು ನಿಯಂತ್ರಿಸಿ. ಎ
        ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ:
       ಮತ್ತು ಒಮ್ಮೆ ವೈರಸ್ ಸೋಂಕಿಗೆ ಒಳಗಾದ ನಂತರ, ಯಾವುದೇ ಹೆಚ್ಚಿನ ನಿಯಂತ್ರಣ ಕ್ರಮಗಳು ಅದರ ವಿರುದ್ಧ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ. ಎ
       ವೈರಸ್ ದಾಳಿಯನ್ನು ತಪ್ಪಿಸಲು ಬಿಳಿ ನೊಣಗಳ ಸಂತಾನೋತ್ಪತ್ತಿಯನ್ನು ನಿಯಂತ್ರಿಸುವ ಅಗತ್ಯವಿದೆ. ಎ
       ಪೈರೆಥ್ರಾಯ್ಡ್‌ಗಳು ಸಸ್ಯಗಳು ಅಥವಾ ಮಣ್ಣನ್ನು ಫಲವತ್ತಾಗಿಸಲು ಸಸ್ಯಗಳು ಬಳಸುವ ಕೀಟನಾಶಕಗಳಾಗಿವೆ.
       ಸಂತಾನೋತ್ಪತ್ತಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು. ಆದರೆ ಇವುಗಳ ಅತಿಯಾದ ಬಳಕೆಯು ಸರಳ ಮೀನುಗಳ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ `)
       setState({audio:new Audio(k12)})
   }

       
   else if (response.data.output == 'Pepper__bell___healthy' || data.output == 'Potato___healthy ' || data.output == 'Tomato_healthy')
       
   {setDisease('ಆರೋಗ್ಯಕರ')
    
setRemedy(" ")
setState({audio:new Audio(k13)})
   }
}
   



else if(lang=="hindi")
{
    if (response.data.output == 'Pepper__bell___Bacterial_spot')
    { 
        setDisease('काली मिर्च __बेल __बैक्टीरियल_स्पॉट')
        setRemedy(`जैविक नियंत्रण: एन एन बैक्टीरियल दाग नियंत्रण बहुत जटिल और महंगा है।
   यदि रोग जल्दी मौसम में हो तो पूरी फसल को नष्ट कर देना सबसे अच्छा है।
   कॉपर से भरपूर जीवाणुरोधी फल और पंखुड़ियों पर एक सुरक्षात्मक कोटिंग बनाता है।
   बाजार में कुछ जीवाणुओं को मारने वाले जीवाणु विषाणु (बैक्टीरियोफेज) के लिए एंटीबायोटिक्स उपलब्ध हैं। ए
   बीजों को 1.3% सोडियम हाइपोक्लोराइट घोल में 1 मिनट या 25 मिनट के लिए गर्म पानी (50 C) में भिगोएँ।
   एन रासायनिक नियंत्रण:
   व्यापक कीट प्रबंधन के तहत हमेशा जैविक नियंत्रण के माध्यम से निवारक उपाय करें। ए
   केवल कॉपर युक्त एंटी-बैक्टीरियल एजेंट ही रोग को रोक सकते हैं और आंशिक रूप से नियंत्रित कर सकते हैं। ए
   रोग के प्रकट होने के तुरंत बाद स्प्रे करें और इसे हर 10-14 दिनों में गर्म और आर्द्र जलवायु में लगाएं। ए
   मैन्कोज़ेब और तांबे से भरपूर मिश्रित कीटनाशक कुछ सुरक्षा प्रदान कर सकते हैं `)
   setState({audio:new Audio(h1)})
   
   }
   else if (response.data.output == 'Potato___Early_blight')
  
   {
       
   
         setDisease ('आलू ___ open_blight')
        setRemedy(`जैविक नियंत्रण: बैसिलस सबटिलिस मिश्रित सामग्री या तांबा आधारित)।
         इसे एक जैविक कवकनाशी के रूप में पहचाना गया है जिसे इस बीमारी के खिलाफ लगाया जा सकता है। ए
         एन रासायनिक नियंत्रण:
         संभावित कीट प्रबंधन के तहत जैविक नियंत्रण के माध्यम से निवारक रोकथाम। ए
         आलू रोग को नियंत्रित करने के लिए विभिन्न प्रकार के कवकनाशी बाजार में उपलब्ध हैं। ए
         एज़ोक्सिट्रोबिन, पायरोक्लोस्ट्रोबिन, डिफेनकोनाज़ोल, बोस्कलिड, क्लोरोथालोनिल, फेनामिडोन, मानेब, मैनकोज़ेब, ट्राइफ्लोक्सिस्ट्रोबिन,।
         और रोग को नियंत्रित करने के लिए अंकुरण जैसे कवकनाशी का उपयोग किया जाता है। ए
         समय-समय पर विभिन्न प्रकार के रासायनिक मिश्रणों का उपयोग करने की सिफारिश की जाती है। आदर्श मौसम में सभी उपस्थिति समय पर समाप्त करें। ए
         इन सामग्रियों को लगाने के बाद, सुरक्षित रहने के लिए कटाई से पहले एक ब्रेक लें `)
         setState({audio:new Audio(h2)})
        }
       
    else if (response.data.output == 'Potato___Late_blight')
   
   {
        setDisease('आलू का प्रचार')
       setRemedy (`जैविक नियंत्रण: n शुष्क मौसम की शुरुआत से पहले तांबे पर आधारित कवकनाशी का प्रयोग करें।
       पत्तियों पर जैविक लेप का छिड़काव करके संक्रमण को रोका जा सकता है।
       रासायनिक नियंत्रण:
       व्यापक कीट प्रबंधन के तहत हमेशा जैविक नियंत्रण के माध्यम से निवारक उपाय करें।
       विशेष रूप से गीले क्षेत्रों में, हर जगह नेमाटोड को नियंत्रित करने के लिए कवकनाशी का उपयोग करना महत्वपूर्ण है।
       संबंधित कवकनाशी जो पत्तियों को ढकता है, संक्रमण से पहले बहुत प्रभावी होता है और कवक को कवकनाशी के लिए प्रतिरोध विकसित करने की अनुमति नहीं देता है। ए
       निवारक उपायों के लिए मैंडीप्रोपामाइड, क्लोरोथालोनिल, फ्लुजेनम।
       ट्राईफेनिलटिन या मैंकोजेब फफूंदनाशकों का उपयोग किया जा सकता है।
       मैन्कोजेब जैसे फफूंदनाशकों से बुवाई से पहले बीजों को शुद्ध करना भी संभव है।`)
       setState({audio:new Audio(h3)})
   }
       
   else if (response.data.output == 'Tomato_Bacterial_spot')     
   
   {
       setDisease ('टमाटर जीवाणु रोग')
       setRemedy( `जैविक नियंत्रण: बैक्टीरियल स्पॉट नियंत्रण बहुत कठिन और महंगा है। A
       यदि यह रोग ऋतु में जल्दी आक्रमण करता है, तो यह पूरी भूमि को नष्ट कर देगा। जीवाणुरोधी तांबे की सामग्री।
       पत्तियों और फलों का उपयोग विषनाशक के रूप में किया जाता है। बैक्टीरियोफेज (बैक्टीरियोफेज) जो बैक्टीरिया को मारते हैं।
       यह हर समय उपलब्ध रहता है। 1.3% सोडियम हाइपोक्लोराइट गर्म पानी (50C) में एक मिनट या 25 मिनट के लिए।
       बीजों को भिगोने से रोग के प्रसार को कम किया जा सकता है।
        रासायनिक नियंत्रण:
       सबसे व्यापक कीट प्रबंधन में जैविक नियंत्रण के माध्यम से रोग नियंत्रण को रोकें।
       कॉपर का उपयोग एक जीवाणुरोधी और एंटीसेप्टिक के रूप में किया जाता है।
       नियंत्रण प्रदान कर सकता है। पहले लक्षण दिखाई देने के तुरंत बाद एंटीबायोटिक्स लगाएं और।
       फिर गर्म [छोटे धब्बे / ठंड (धब्बे)], गीले मौसम में 10 से 14 दिनों के लिए आवेदन करें।
       कॉपर एक सिंथेटिक सामग्री है, जो जीवाणुरोधी प्रतिरक्षा प्रणाली के निर्माण के लिए तांबे के निरंतर उपयोग के कारण है।
       मंकोज़ेब के साथ एंटीबायोटिक के साथ प्रयोग के लिए अनुशंसित `)
       setState({audio:new Audio(h4)})
   }
       
   else if (response.data.output== 'Tomato_Early_blight')
   
   {
       setDisease('टर अर्ली डिजीज')
       setRemedy(`जैविक नियंत्रण: बैसिलस सबटिलिस मिश्रित सामग्री या तांबा आधारित)।
       इसे एक जैविक कवकनाशी के रूप में पहचाना गया है जिसे इस बीमारी के खिलाफ लगाया जा सकता है। ए
       एन रासायनिक नियंत्रण:
       संभावित कीट प्रबंधन के तहत जैविक नियंत्रण के माध्यम से निवारक रोकथाम। ए
       आलू रोग को नियंत्रित करने के लिए विभिन्न प्रकार के कवकनाशी बाजार में उपलब्ध हैं। ए
       एज़ोक्सिट्रोबिन, पायरोक्लोस्ट्रोबिन, डिफेनकोनाज़ोल, बोस्कलिड, क्लोरोथालोनिल, फेनामिडोन, मानेब, मैनकोज़ेब, ट्राइफ्लोक्सिस्ट्रोबिन,।
       और रोग को नियंत्रित करने के लिए अंकुरण जैसे कवकनाशी का उपयोग किया जाता है। ए
       समय-समय पर विभिन्न प्रकार के रासायनिक मिश्रणों का उपयोग करने की सिफारिश की जाती है। आदर्श मौसम में सभी उपस्थिति समय पर समाप्त करें। ए
       इन सामग्रियों को लगाने के बाद, सुरक्षित रहने के लिए कटाई से पहले एक ब्रेक लें `)
       setState({audio:new Audio(h5)})
   }
    
   else if(response.data.output == 'Tomato_Late_blight')   
   
   {
       setDisease('टमाटर नाक रोग')
       setRemedy (`जैविक नियंत्रण: एन एन अब तक मिर्गी के खिलाफ कोई जैविक उपाय नहीं हैं। ए
       रोग को फैलने से रोकने के लिए संक्रमित क्षेत्र और संक्रमित फसल से फसल को तुरंत हटा दें या नष्ट कर दें।
       जैविक खाद बनाने से बचें। ए
       रासायनिक नियंत्रण:
        जैविक नियंत्रण के माध्यम से रोग को रोकने के लिए व्यापक कीट प्रबंधन करें। ए
       नियोप्लाज्म को रोकने के लिए मैंडीप्रोपामाइड, क्लोरोथेलोनिल, फ्लुजिनियम और मैंकोजेब संयुग्म युक्त फफूंदनाशकों का छिड़काव करें। ए
       यदि आप पेड़ को पानी दे रहे हैं या वर्ष के बरसात के मौसम में, कवकनाशी का प्रयोग करना आवश्यक है।`)
       setState({audio:new Audio(h6)})
   }
      
   else if (response.data.output == 'Tomato_Leaf_Mold')  
  
   {
       setDisease ('टमाटर का पत्ता कवक रोग एन')
       setRemedy (` जैविक नियंत्रण: n n कीटाणुशोधन के लिए गर्म पानी (122 डिग्री फ़ारेनहाइट या 50 डिग्री सेल्सियस पर 25 मिनट))।
       यहां बीज को साफ करने के टिप्स दिए गए हैं। एक्रोनियम स्ट्रिएटम, डाइसेमा पाल्विनटा, ट्राइकोडर्मा हार्गिनम।
       या ट्राइकोडर्मा विरिडी और ट्राइकोथेसियम रोसियम कवक माइकोवोलोसिला फुलवार दुश्मन हैं जिनका उपयोग उन्हें नियंत्रित करने के लिए किया जा सकता है।
       ग्रीनहाउस में एक्रेमोनियम स्ट्रिएटम, ट्राइकोडर्मा विरिडी स्ट्रेन 3 और ट्राइकोथेशियम रोसियम क्रमशः 53, 6 और 64 प्रतिशत थे।
       टमाटर के माइकोवोलोसिला फुलवा को दर लगाने से दबा दिया जाता है। छोटी मात्रा में सेब साइडर, लहसुन या दूध और सिरका मिलाएं।
       इसका उपयोग कवक को नियंत्रित करने के लिए किया जा सकता है। ए
       एन रासायनिक नियंत्रण:
       व्यापक कीट प्रबंधन के तहत हमेशा जैविक नियंत्रण के माध्यम से निवारक उपाय करें। यदि मौसम रोग फैलाने के लिए अनुकूल है।
       संक्रमण से पहले कवकनाशी का छिड़काव करना चाहिए। क्लोरोथालोनिल, मानेब, मैनकोजेब और.
       क्षेत्र में उपयोग के लिए कॉपर कवकनाशी की सिफारिश की जाती है। ग्रीनहाउस के लिए डिफेनोकोनाज़ोल।
       मैंडिप्रोपामाइड, सिमोक्सानिल, फैमोक्साडोन और साइप्रोडिनिल।
       उपयोग के लिए अनुशंसित।`)
       setState({audio:new Audio(h7)})
   }

   
   else if (response.data.output == 'Tomato_Septoria_leaf_spot')
   
   {
       setDisease ('टमाटर का सेप्टोरिया स्पॉट रोग')
       setRemedy (`  कॉपर कवकनाशी जैसे बोर्डो मिश्रण, कॉपर हाइड्रॉक्साइड, कॉपर सल्फेट)।
       या कॉपर ऑक्सीक्लोराइड सल्फेट रोग के कीटाणुओं को नियंत्रित करने में मदद करता है।
       पूरे मौसम में हर 8 से 10 दिनों में स्प्रे करें, खासकर फूल आने और फलने के दौरान।
       कटाई से पहले कीटनाशक पैकेजिंग पर लिखे नियमों का पालन करें। ए
       एन रासायनिक नियंत्रण:
       संभावित एकीकृत कीट प्रबंधन के तहत जैविक नियंत्रण के माध्यम से रोकथाम। यानी छह।
       टमाटर सेप्टोरिया को नियंत्रित करने में मैनकोजेब और क्लोरोथेलोनिल नामक कवकनाशी प्रभावी हैं। ए
       पूरे मौसम में 8 से 10 दिनों के अंतराल पर छिड़काव करें, खासकर फूल आने और फलने के दौरान। ए
       कटाई से पहले कीटनाशक पैकेजिंग पर लिखे नियमों का पालन करें। इ`)
       setState({audio:new Audio(h8)})
   }
   else if (response.data.output == 'Tomato_Spider_mites_Two_spotted_spider_mite')
  
   {
       setDisease ('आम लाल मकड़ी')
       setRemedy(` जैविक नियंत्रण: एन एन थोड़ा हमले के साथ, मकड़ी को पानी से कुल्ला और संक्रमित पत्ती को हटा दें। ए
       अरंडी का तेल, तुलसी, सोयाबीन और नीम के तेल का मिश्रण तैयार करें। आरटीसी के प्रजनन को कम करने के लिए पत्तियों का छिड़काव करें। ए
       लहसुन की चाय, पौधे की पत्ती की छाल या कीटनाशक साबुन के घोल का उपयोग करके मकड़ियों के प्रजनन को कम किया जा सकता है। ए
       क्षेत्र में मकड़ी की प्रजातियों के आधार पर, जैविक नियंत्रकों के साथ शिकारी मकड़ियों का उपयोग करें (उदाहरण के लिए, फाइटोसीयुलस पर्सिमिलिस)।
       या जैविक कीटनाशक बैसिलस थुरिंजिएन्सिस का प्रयोग करें। प्रारंभिक स्प्रे के 2-3 दिन बाद दूसरा स्प्रे लगाना महत्वपूर्ण है। ए
       एन रासायनिक नियंत्रण:
       व्यापक कीट प्रबंधन के तहत हमेशा जैविक नियंत्रण के माध्यम से निवारक उपाय करें। ए
       इन मकड़ियों को जहरीले पदार्थों से नियंत्रित करना बहुत मुश्किल होता है क्योंकि इनका उपयोग अधिकांश पीढ़ियों में कई वर्षों से किया जाता रहा है।
       विभिन्न रसायनों के लिए प्रतिरोध विकसित किया गया है। इन मकड़ी शिकारियों को नियंत्रित करने के लिए सावधानी से एक रासायनिक नियंत्रक चुनें।
       यह तर्कसंगत रूप से नष्ट नहीं होता है। जैसे पानी में घुलनशील सल्फर (3 ग्राम/लीटर), स्पिरोमाइसिन (1 मिली/लीटर)।
       डाइकोफोल (5 मिली/लीटर) या एबामेक्टिन युक्त फफूंदनाशकों का उपयोग किया जा सकता है। दूसरी बार शुरुआती स्प्रे के 2 से 3 दिन बाद है।
       स्प्रे लगाना जरूरी है। इ`)
       setState({audio:new Audio(h9)})
   }
   else if (response.data.output == 'Tomato__Target_Spot')
  
   {
       setDisease ('टमाटर लक्ष्य रोग')
       setRemedy (`सुबह पानी देना ताकि टमाटर के पौधे की पत्तियों को सूखने का समय मिले। पेड़ के आधार पर पत्तियों को पानी दें या सुखाएं)।
       एक नली या ड्रिप सिस्टम का प्रयोग करें। मिट्टी के साथ सीधे संपर्क के साथ फल की निगरानी के लिए तिल लगाएं। इ`)
       setState({audio:new Audio(h10)})
   }
   else if (response.data.output == 'Tomato__Tomato_mosaic_virus')
   
   {
       setDisease ('टमाटर मोज़ेक वायरस रोग')
       setRemedy( `  नियंत्रण: दिन 4 सी 4 दिनों के लिए या 72-75 डिग्री सेल्सियस 24 घंटे के लिए सूखा है।
       बीजों को गर्म करने और शुद्ध करने से बीजों को विषाणु मुक्त रखने में मदद मिलती है। वैकल्पिक रूप से, 100 ग्राम / लीटर।
       15 मिनट के लिए ट्राइसोडियम फॉस्फेट के घोल से बीज को धो लें और पानी से अच्छी तरह धो लें।
       फिर यह सूख जाने पर भी काम करता है।
        रासायनिक नियंत्रण:
       व्यापक कीट प्रबंधन के तहत जहां संभव हो जैविक नियंत्रण के माध्यम से निवारक उपाय करें।
       टमाटर मोज़ेक वायरस का कोई प्रभावी रासायनिक कीट प्रबंधन नहीं है। इ`)
       setState({audio:new Audio(h11)})
   }
   else if (response.data.output=='Tomato__Tomato_YellowLeaf__Curl_Virus')
   
   {
       setDisease ('टमाटर पीली पत्ती विषाणु रोग')
       setRemedy(`जैविक नियंत्रण: पीला टमाटर पत्ती सर्पिल वायरस (TYLCV) रोग।
       कोई अत्याचार ज्ञात नहीं है। वायरस के हमलों से बचने के लिए सफेद मक्खियों के प्रजनन को नियंत्रित करें। 
        रासायनिक नियंत्रण:
       और एक बार वायरस से संक्रमित हो जाने के बाद, इसके खिलाफ कोई और नियंत्रण उपाय काम नहीं कर सकता है। 
       वायरस के हमले से बचने के लिए सफेद मक्खियों के प्रजनन को नियंत्रित करना आवश्यक है। ए
       पाइरेथ्रोइड्स कीटनाशक हैं जिनका उपयोग पौधों द्वारा पौधों या मिट्टी को उर्वरित करने के लिए किया जाता है।
       प्रजनन को कम कर सकता है। लेकिन इनके अति प्रयोग से साधारण मछलियों की रोग प्रतिरोधक क्षमता बढ़ जाती है`)
       setState({audio:new Audio(h12)})
   }

   else if (response.data.output == 'Pepper__bell___healthy' || data.output == 'Potato___healthy ' || data.output == 'Tomato_healthy')
   
   {
       setDisease('स्वस्थ')
    
        setRemedy ("")
        setState({audio:new Audio(h13)})
   }

}
else
              {
                setDisease(response.data.disease);
              
                setRemedy(response.data.remedy);

                if (response.data.output == 'Pepper__bell___Bacterial_spot')
                { 
                   
               setState({audio:new Audio(e1)})
               
               }
               else if (response.data.output == 'Potato___Early_blight')
              
               {
                   
               
                     setState({audio:new Audio(e2)})
                    }
                   
                else if (response.data.output == 'Potato___Late_blight')
               
               {
                   setState({audio:new Audio(e3)})
               }
                   
               else if (response.data.output == 'Tomato_Bacterial_spot')     
               
               {
                   
                   setState({audio:new Audio(e4)})
               }
                   
               else if (response.data.output== 'Tomato_Early_blight')
               
               {
                   
                   setState({audio:new Audio(e5)})
               }
                
               else if(response.data.output == 'Tomato_Late_blight')   
               
               {
                   setState({audio:new Audio(e6)})
               }
                  
               else if (response.data.output == 'Tomato_Leaf_Mold')  
              
               {
                   setState({audio:new Audio(e7)})
               }
            
               
               else if (response.data.output == 'Tomato_Septoria_leaf_spot')
               
               {
                   
                   setState({audio:new Audio(e8)})
               }
               else if (response.data.output == 'Tomato_Spider_mites_Two_spotted_spider_mite')
              
               {
                  
                   setState({audio:new Audio(e9)})
               }
               else if (response.data.output == 'Tomato__Target_Spot')
              
               {
                  
                   setState({audio:new Audio(e10)})
               }
               else if (response.data.output == 'Tomato__Tomato_mosaic_virus')
               
               {
                  
                   setState({audio:new Audio(e11)})
               }
               else if (response.data.output=='Tomato__Tomato_YellowLeaf__Curl_Virus')
               
               {
                  
                   setState({audio:new Audio(e12)})
               }
            
               else if (response.data.output == 'Pepper__bell___healthy' || data.output == 'Potato___healthy ' || data.output == 'Tomato_healthy')
               
               {
                  
                    setState({audio:new Audio(e13)})
               }


              }
              
             
             
              
              console.log(response.data);
            })
            .catch(function (response) {
              
              console.log(response);
            });
        
        
        
    }
    
           
    }





      let play=(e) =>{

        
        state.audio.play();
        
        e.preventDefault();

      }
  
      let pause=(e) =>{

        state.audio.pause();
        

       
        e.preventDefault();

      }

    
    
     
          
   
    
    return(
        <>
        <div className='movie-background'>
            <div className='movie-head'>
               Plant Disease Detection
            </div>
            
                <div className="row">
                   
          
                    
                        
                        <div className=" offset-1 mt-3 col-8">
                        
                           
                                <div className='row ml-1 mb-5'>
                                    
                                <div className="sel-lang-head mr-5">Select Langauage</div>
                            
                               <div className='sel-lang'>
                                <Input
                                    type="radio"
                                    name="lang"
                                   
                                    id="eng" onClick={(e) => setLang('eng') }></Input>
                                     <Label htmlFor="lang" className='mr-5'>English</Label>
                                
                                
                                <Input
                                    type="radio"
                                    name="lang"
                                   
                                    id="kan" onClick={(e) => setLang('kan') }></Input>
                                    <Label htmlFor="lang"  className='mr-5'>Kannada</Label>
                              
                                
                                <Input
                                    type="radio"
                                    name="lang"
                                   
                                    id="hindi" onClick={(e) => setLang('hindi') }></Input>
                                    <Label htmlFor="lang"  className='mr-5'>Hindi</Label>
                                    </div>

</div>
                                  
                                
                           
                           
                               
                     <div className='row'>
                         <div className='col-4'>
                                   
                               
                              
                                <Label htmlFor="image" className="btn btn-default btn-file">Choose and Submit
                                <input type='file' classname="file-style" onChange={(e) => upload_image(e)} ></input>
                                </Label>
                                </div>
                                
                                
                                
                                <div className= "ml-3 mt-2 col-4 image-css" >
                                    <div>

                                    {img1.file && <img src={img1.file}/>}
                                         
                                    </div>

                               
                                </div>
                                </div>
                                </div> 
                                </div>
                                
                             <div className='row mt-4'>
                             <div className='offset-1  col-2 audio'>Audio Controls</div>
                             </div>
                             <div className='row offset-1 mt-4'>
                             
                                   <div className='col-5'>
                             <button type="button" className='mr-2 play-btn' onClick={(e) => play(e)}>
                            Play ▶
                            </button>
                            <button type="button"  className='play-btn' onClick={(e) => pause(e)}>Pause ⏸️</button>
                            </div>
                            </div> 
  
                                
                                
                        <div className="disease offset-7 mt-0 col-5 ">
                           Predicted Disease and Remedy
                        <Input type='text' className="movie-input mt-2 "  name="prediction" value={disease} placeholder='Disease'></Input>
                        <Input type="textarea" rows={8} cols={60}  className="movie-input mt-2 "  name="prediction" value={remedy} placeholder='Remedy'></Input>
                        </div>
                    </div>
               
               
            
      
        </>

    )
    
}

export default Plant;






