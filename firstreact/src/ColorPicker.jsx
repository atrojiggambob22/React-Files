
import React, {useState} from 'react'


const ColorPicker = () => {
    const [color, setColor] = useState("#FFFF");

    function handleColorPicker(event){
        setColor(event.target.value);

    }


  return (
    <div className='vbv'>
        <div className='olo' style={{backgroundColor: color}}>
            <p className='coo'>Selected Color: {color}</p>
        </div>

        <div className='props'>
            <label className='ppp' > Select a color</label>
            <input className='pp' type="color" value={color} onChange={handleColorPicker}/>
        </div>
        
    </div>
  )
}

export default ColorPicker