import React from 'react';
import './style.css';
function TheForm() {
    return ( 
       <div className="container-lg">
        <div className="text-center my-5">
            <h2>BMI CALCULATOR</h2>
        </div>
        <div className="row justify-content-center my-5">
            <div className="col-lg-6">
                <form>
                <p>
                    <input type="text" className='form-control' id='weight' placeholder='Enter weieht in KG' />
                </p>
                <p>
                    <input type="text" className="form-control" id='height' placeholder='Enter heigt in meters' />
                </p>
                <div className="mb-4 text-center">
                    <button type='submit' className="btn btn-primary">Check BMI</button>
                </div>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default TheForm;