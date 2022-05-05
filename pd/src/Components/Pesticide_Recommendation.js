import axios from 'axios';
import React,{useState,useEffect} from 'react'

import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Select,Button, Card, CardHeader, CardBody } from 'reactstrap';

function Pesticide_Recommendation()
{
    const[pesticide,setPesticidename] = useState('Aphids');
 
    const[path1,setPath1]=useState(null);
    const[path2,setPath2]=useState(null);

    const[data,setData]=useState(null)

    const[data1,setData1]=useState(null);
    const[data2,setData2]=useState(null);
    const[data3,setData3]=useState(null);
    const[data4,setData4]=useState(null);
   

    const [isSuccessOpen, setSuccessOpen] = useState(false);
    
    
    const handleSubmit=async(e)=>{

        

        const {data}= await axios.post('http://localhost:5000/predict-pest', {pesticide})

         setData(data)
         setData1(data.image1)
         setData2(data.image2)
         setData3(data.dose1)
         setData4(data.dose2)
         setPath1(`${process.env.PUBLIC_URL}/images/pesticide/`+pesticide+'/'+data.image1+'.jpg')
         setPath2(`${process.env.PUBLIC_URL}/images/pesticide/`+ pesticide+'/'+data.image2+'.jpg')
        
         console.log(data)
        

        toggleSuccessModal()
       
        
        
     }
     
     function toggleSuccessModal() {


       
        setSuccessOpen(!isSuccessOpen);
        
    
       
      }



    
    return(
        <>

    
        <div className="container">
            <Modal className='success-modal ' isOpen = {isSuccessOpen} toggle={toggleSuccessModal}>
                <ModalHeader toggle={toggleSuccessModal} className='success-modal-text text-center'> <strong>Suitable to Grow 🌱</strong> </ModalHeader>
                <ModalBody>
                    <h1 className='crop-heading'> </h1>
                        
                        <p>{<img src={path1} className="crop-img" altext="notfound"/>}</p>  
                        <p>{<img src={path2} className="crop-img" altext="notfound"/>}</p>                               
                    
                </ModalBody>
            </Modal>
        </div>

        <div className='fertilizer_background'>
        <div className="container">
        <div className='col-12 offset-lg-2 col-lg-8'>
            <Card className='crop-card'>
                      
                        <h  style={{fontSize:'2rem'}} className="offset-1"><strong>Recommend Pesticide Based on Pests</strong></h>
                          
                   
                  
                       <Form>
                           <FormGroup>
                                <div className='row'>
                                        <div className='col-8 col-sm-8 offset-lg-4 offset-2  col-lg-8'>
                                            <Label htmlFor='name' className='crop-input'><strong>Select the pest</strong></Label>
                                        </div>

                                        <div className='col-8 col-sm-4 offset-lg-4 offset-2'>  

                                            <Input type='select'
                                                className='crop-input-box form-control col-12'
                                                id="crop"
                                                placeholder="Select a crop"
                                                value = {pesticide} 
                                                onChange={(e) => setPesticidename(e.target.value)}
                                                required
                                            >
                                            <option selected>Aphids</option>
                                            <option>Armyworm</option>
                                            <option>Beetle</option>
                                            <option>Bollworm</option>
                                            <option>Earthworm</option>
                                            <option>Grasshopper</option>
                                            <option>Mites</option>
                                            <option>Mosquito</option>
                                            <option>Sawfly</option>
                                            <option>Stem-borer</option>
                                    
                                            </Input>
                                        </div>
                                    </div>                        
                            </FormGroup>

                            <FormGroup>
                               <div className='row'>
                                   <div className='col-5 offset-4'>
                                   <Button className="button btn-feedback"  onClick={handleSubmit}>
                                       Recommend
                                    
                                   </Button>
                                   </div>
                               </div>
                           </FormGroup>

                        </Form>
            </Card>
            </div>
            </div>
            </div>
        
        </>
    )


}
export default Pesticide_Recommendation