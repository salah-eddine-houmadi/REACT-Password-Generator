import  React, { useState } from 'react';
import { PasswordService } from '../services/PasswordService';


let PasswordGenerator = () => {

    let [state, setState] = useState ({
        generatedPassword : '',
        passwordLength : 20,
        Symbol: false,
        number:false,
        lower: false,
        upper : false
    });

    let updateInput = (event:any) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    };
    let updateCheck = (event:any) => {
        setState({
            ...state,
            [event.target.name] : event.target.checked
        })
    };

    let submit = (event : any) => {
        event.preventDefault();
        let passwordObj = PasswordService.getPasswordObj(state);
        let thePassword = PasswordService.generatePassword(passwordObj, state.passwordLength);
        setState({...state , generatedPassword:thePassword})
    };

    return (
        <React.Fragment>
          
            <div className='container mt-5'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning p-3">
                               <p className='h4'>Password Generator</p> 
                            </div>
                            <div className="card-body bg-warning">
                                <form onSubmit={submit}>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text'>Password</span>
                                            <input  name="generatedPassword" value={state.generatedPassword} onChange={updateInput} type="text" className='form-control' placeholder='Password Generator'/>
                                            <span className='input-group-text'><i className='fa fa-clipboard'></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <input  name="passwordLength" value={state.passwordLength} onChange={updateInput} type="Number" className='form-control' placeholder='Password Length' />
                                            <span className='input-group-text'>Password length</span>
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input onChange={updateCheck} name="symbol" type="checkbox" className='form-check-input'/>
                                            </span>
                                            <input type="text" disabled={true} className="form-control" placeholder='Symbols'/>

                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input  onChange={updateCheck} name="number" type="checkbox" className='form-check-input'/>
                                            </span>
                                            <input  type="text" disabled={true} className="form-control" placeholder='Numbers'/>

                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input onChange={updateCheck} name="lower"  type="checkbox" className='form-check-input'/>
                                            </span>
                                            <input disabled={true} className="form-control" placeholder='Lowercase Letters'/>

                                        </div>
                                    </div><div className='mb-2'>
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input onChange={updateCheck} name="upper" type="checkbox" className='form-check-input'/>
                                            </span>
                                            <input  type="text" disabled={true} className="form-control" placeholder='Uppercase Letters'/>

                                        </div>
                                    </div>
                                    <div className="mb-2 mt-2">
                                        <input type="submit" value="Generate" className='btn btn-outline-dark'/>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default PasswordGenerator;