import { useState } from 'react';
import {Form, FormLabel} from 'react-bootstrap'
import './Converter.css';

const Converter=()=>{
    const [fromUnit, setFromUnit] = useState('Centimeter')
    const [toUnit, setToUnit] = useState('Meter')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [curretConversion, setCurrentConversion] = useState('1')

    const onSelectChange = (event)=>{
        console.log('event', event.target.value)
        const value=event.target.value
        setCurrentConversion(value)
        setValue('')
        setResult('')
        if(event.target.value=='1'){
            setFromUnit('Centimeter')
            setToUnit('Meter')
        }
        else if(value=='2'){
            setFromUnit('Centimeter')
            setToUnit('Inch')
        }
        else if(value=='3'){
            setFromUnit('Inch')
            setToUnit('Feet')
        }
        else if(value=='4'){
            setFromUnit('Meter')
            setToUnit('Kilometer')
        }
    }
    const onValueChange = (event)=>{
        setValue(event.target.value)
        if(event.target.value==''){
            setResult('')
        }
        else{
            if(curretConversion=='1'){
                setResult(parseFloat(event.target.value)*0.01)
            }
            else if(curretConversion=='2'){
                setResult(parseFloat(event.target.value)*0.393701)
            }
            else if(curretConversion=='3'){
                setResult(parseFloat(event.target.value)*0.0833333)
            }
            else if(curretConversion=='4'){
                setResult(parseFloat(event.target.value)*0.001)
            }

        }
       
    }
    const onResultChange=(event)=>{
        setResult(event.target.value)
        if(event.target.value==''){
            setValue('')
        }else{
            if(curretConversion=='1'){
                setValue (parseFloat(event.target.value)/0.01)
            }
            else if(curretConversion=='2'){
                setValue (parseFloat(event.target.value)/0.393701)
            }
            else if(curretConversion=='3'){
                setValue (parseFloat(event.target.value)/0.0833333)
            }
            else if(curretConversion=='4'){
                setValue (parseFloat(event.target.value)/0.001)
            }

        }
        
    }
    return (
        <Form>
           <Form.Group className='mb-3' controlId='conversion'>
                <Form.Label className='sc'>Select Conversion: </Form.Label>
                <Form.Select aria-label="Default select example" onChange={onSelectChange}>
                    <option value="1">Centimeter to Meter</option>
                    <option value="2">Centimeter to Inch</option>
                    <option value="3">Inch to Feet</option>
                    <option value="4">Meter to Kilometer</option>
                </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{fromUnit}: </Form.Label>
            <Form.Control type="number" placeholder="Enter number" value={value} onChange={onValueChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{toUnit}: </Form.Label>
            <Form.Control type="number" placeholder="Enter number" value={result} onChange={onResultChange}/>
          </Form.Group>
        </Form>
      );
}
export default Converter;