import React from 'react';

const Form = (props) => {

    const renderField = () =>{
        const formArray = [];
        for(let elementName in props.data){
            formArray.push(
                {
                    id:elementName,
                    settings: props.data[elementName]
                }
            )
        }
        return formArray.map( (item,i)=>(
            <div key = {i}>
                {renderTemplates(item)}
            </div>
        ) )
    }
   const renderTemplates = (data) =>{
        let formTemplate = "";
        let values = data.settings;
        switch(values.element){
            case('input'):
                break;
            default:
                formTemplate = null
        }
        return formTemplate;
    }

    return (
     
        <form onSubmit = {props.onSubmit}>   
           { renderField() } 
      
            <button>{props.buttonName}</button>
      </form>
    );
};

export default Form;