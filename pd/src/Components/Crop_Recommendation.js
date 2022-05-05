import axios from 'axios';
import React,{useState,useEffect} from 'react'


import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, Card, CardHeader, CardBody } from 'reactstrap';


function Crop_Recomendation()
{

    const[nitrogen,setNitrogen] = useState(null);
    const[phosphorous,setPhosphorous] = useState(null);
    const[potassium,setPotassium] = useState(null);
    const[temp,setTemp] = useState(null);
    const[ph,setPh] = useState(null);
    const[humidity,setHumidity] = useState(null);
    const[rainfall,setRainfall] = useState(null);
    const[data,setData] = useState("coconut");
    const [isSuccessOpen, setSuccessOpen] = useState(false);
    const[path,setPath]=useState(null);
    

    const handleSubmit=async(e)=>{
        
       console.log()
        const {data}= await axios.post('http://localhost:5000/croprec', {nitrogen,phosphorous,potassium,temp,ph,humidity,rainfall})
        setData(data.output)
        setPath(`${process.env.PUBLIC_URL}/images/crop/`+data.output+'.jpg')

        console.log((path))
        toggleSuccessModal()

        
    }


    function toggleSuccessModal() {
    
        setSuccessOpen(!isSuccessOpen)
      }

   

    
    return(
<>

        
    <div className='crop-background'>
        <div className="container">
        <Modal className='success-modal ' isOpen = {isSuccessOpen} toggle={toggleSuccessModal}>
                <ModalHeader toggle={toggleSuccessModal} className='success-modal-text text-center'> <strong>Suitable to Grow 🌱</strong> </ModalHeader>
                <ModalBody>
                    <h1 className='crop-heading'> {data}</h1>
                        
                        <p>{<img src={path} className="crop-img" altext="notfound"/>}</p>                                
                    
                </ModalBody>
        </Modal>
        </div>    
    
        <div className="container ">
        <div className='offset-3 col-6'>
              <Card className='crop-card '>
                      
                           <h  style={{fontSize:'2rem'}} className="pest-head mb-4 "><strong>Crop Recommendation</strong></h>
                          
                   
                  
                       <Form>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-3'>
                                       <Label htmlFor='name' className='crop-input'><strong>Nitrogen (in ratio)</strong></Label>
                                   </div>
                                   <div className='col-7 offset-3'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {nitrogen} onChange={(e) => setNitrogen(e.target.value)}></Input> 
                                   </div>
                                   
                               </div>
                           </FormGroup>
                   
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-3'>
                                       <Label htmlFor='name' className='crop-input'><strong>Phosphorus (in ratio)</strong></Label>
                                   </div>
                                   <div className='col-7 offset-3'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {phosphorous} onChange={(e) => setPhosphorous(e.target.value)}></Input>
                                   </div>
                               </div>
                           </FormGroup>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-3'>
                                       <Label htmlFor='name' className='crop-input'><strong>Potassium (in ratio)</strong></Label>
                                   </div>
                                   <div className='col-7 offset-3'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {potassium} onChange={(e) => setPotassium(e.target.value)}></Input>
                                   </div>
                               </div>
                           </FormGroup> 
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-3'>
                                       <Label htmlFor='name'className='crop-input'><strong>ph Level</strong></Label>
                                   </div>
                                   <div className='col-7 offset-3'>
                                        <Input type='number'  className="crop-input-box" placeholder='Enter the value' value = {ph} onChange={(e) => setPh(e.target.value)}  max={14}></Input>
                                   </div>
                               </div>
                           </FormGroup>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-3'>
                                       <Label htmlFor='name'className='crop-input' ><strong>Rainfall(in mm)</strong></Label>
                                   </div>
                                   <div className='col-7 offset-3'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {rainfall} onChange={(e) => setRainfall(e.target.value)}></Input>
                                   </div>
                                 
                               </div>
                           </FormGroup>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-3'>
                                       <Label htmlFor='name'className='crop-input'><strong>Temperature(in °C)</strong></Label>
                                   </div>
                                   <div className='col-7 offset-3'>
                                        <Input type='text'  className="crop-input-box" placeholder='Enter the value' value = {temp} onChange={(e) => setTemp(e.target.value)}></Input>
                                   </div>
                                 
                               </div>
                           </FormGroup>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-3'>
                                       <Label className='crop-input' htmlFor='name' ><strong>Relative Humidity(in %)</strong></Label>
                                   </div>
                                   <div className='col-7 offset-3'>
                                        <Input type='text' className="crop-input-box"  placeholder='Enter the value' value = {humidity} onChange={(e) => setHumidity(e.target.value)}></Input>
                                   </div>
                               </div>
                           </FormGroup>
                           <FormGroup>
                               <div className='row'>
                                   <div className='col-8 offset-4'>
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

export default Crop_Recomendation
    

    
