import axios from 'axios';
import React,{useState,useEffect} from 'react'

import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Select,Button, Card, CardHeader, CardBody } from 'reactstrap';


function Fertilizer_Recommendation() {

    const[nitrogen,setNitrogen] = useState(null);
    const[phosphorous,setPhosphorous] = useState(null);
    const[potassium,setPotassium] = useState(null);
    const[crop_name,setCropname]= useState("apple")
    const[data1,setData1]=useState(null)
    const[data2,setData2]=useState(null)
    const[data3,setData3]=useState(null)
    const [isSuccessOpen, setSuccessOpen] = useState(false);
    
    const handleSubmit=async(e)=>{
        
        console.log()
         const {data}= await axios.post('http://localhost:5000/fertilizer-predict', {nitrogen,phosphorous,potassium,crop_name})
         setData1(data.output1)
         console.log(data1)
         setData2(data.output2)
         setData3(data.output3)

         toggleSuccessModal()
     }
     
     function toggleSuccessModal() {
    
        setSuccessOpen(!isSuccessOpen)
      }


    return(
        <>

        <div className="container">
            <Modal className='fertilizer-modal modal-lg' isOpen = {isSuccessOpen} toggle={toggleSuccessModal}>
                    <ModalHeader toggle={toggleSuccessModal} > Recommended Solution! 🌱 </ModalHeader>
                    <ModalBody>
                            <p className='fertilizer-data'>{data1}</p>   

                            <p className='fertilizer-data'>{data2}</p> 
                                                       
                            <p className='fertilizer-data'>{data3}</p>
                    </ModalBody>
            </Modal>
        </div>

        <div className='fertilizer_background'>
        <div className="container">
        <div className='col-12 offset-lg-2 col-lg-8'>
            <Card className='crop-card'>
                      
                        <h  style={{fontSize:'2rem'}} className="pest-head"><strong>Fertilizer Recommendation</strong></h>
                          
                   
                  
                       <Form>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 col-sm-8 offset-lg-4 offset-2 mt-4 col-lg-8'>
                                       <Label htmlFor='name' className='crop-input'><strong>Nitrogen (in ratio)</strong></Label>
                                   </div>
                                   <div className='col-8 col-sm-4 offset-lg-4 offset-2'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {nitrogen} onChange={(e) => setNitrogen(e.target.value)}></Input> 
                                   </div>
                                   
                               </div>
                           </FormGroup>
                   
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 col-sm-8 offset-lg-4 offset-2  col-lg-8'>
                                       <Label htmlFor='name' className='crop-input'><strong>Phosphorus (in ratio)</strong></Label>
                                   </div>
                                   <div className='col-8 col-sm-4 offset-lg-4 offset-2'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {phosphorous} onChange={(e) => setPhosphorous(e.target.value)}></Input>
                                   </div>
                               </div>
                           </FormGroup>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 col-sm-8 offset-lg-4 offset-2  col-lg-8'>
                                       <Label htmlFor='name' className='crop-input'><strong>Potassium (in ratio)</strong></Label>
                                   </div>
                                   <div className='col-8 col-sm-4 offset-lg-4 offset-2'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {potassium} onChange={(e) => setPotassium(e.target.value)}></Input>
                                   </div>
                               </div>
                           </FormGroup> 
                           <FormGroup>
                              
                           
                                <div className='row'>
                                        <div className='col-8 col-sm-8 offset-lg-4 offset-2  col-lg-8'>
                                            <Label htmlFor='name' className='crop-input'><strong>Crop you want to grow</strong></Label>
                                        </div>

                                        <div className='col-8 col-sm-4 offset-lg-4 offset-2'>  

                                            <Input type='select'
                                                className='crop-input-box form-control col-12'
                                                id="crop"
                                                placeholder="Select a crop"
                                                value = {crop_name} 
                                                onChange={(e) => setCropname(e.target.value)}
                                                required
                                            >
                                            <option selected>Apple</option>
                                            <option>Banana</option>
                                            <option>Blackgram</option>
                                            <option>Chickpea</option>
                                            <option>Coconut</option>
                                            <option>Coffee</option>
                                            <option>Cotton</option>
                                            <option>Grapes</option>
                                            <option>Groundnut</option>
                                            <option>Jute</option>
                                            <option>Kidneybeans</option>
                                            <option>Lentil</option>
                                            <option>Maize</option>
                                            <option>Mango</option>
                                            <option>Mothbeans</option>
                                            <option>Mungbean</option>
                                            <option>Muskmelon</option>
                                            <option>Mustard</option>
                                            <option>Orange</option>
                                            <option>Paddy</option>
                                            <option>Papaya</option>
                                            <option>Pearlmillet</option>
                                            <option>Pigeonpea</option>
                                            <option>Pomegranate</option>
                                            <option>Rapeseed</option>
                                            <option>Rice</option>
                                            <option>Sorghum</option>
                                            <option>Sugarcane</option>
                                            <option>Watermelon</option>
                                            <option>Wheat</option>
                                    
                                            </Input>
                                        </div>
                                    </div>                        
                            </FormGroup>

                            <FormGroup>
                               <div className='row'>
                                   <div className='col-6 offset-5'>
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

export default Fertilizer_Recommendation