import React, {useEffect} from 'react'
import Select from 'react-select'
import {createOnCollection} from "../lib/pocketbase";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";

const FormGenerate = ({config, defaultData = null, activityName = null}) => {
    const [form, setForm] = React.useState(null);
    const [formData, setFormData] = React.useState(defaultData);
    const [requiredValidation, setRequiredValidation] = React.useState(false);
    const options = []
    const [errorText, setErrorText] = React.useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        if (activityName != null) {
            setForm({label: activityName, value: config.forms.find((item) => item.name === activityName)})
        }
        setFormData(formData => {
            return {
                ...formData,
                student: Cookies.get('userId')
            }
        })
    }, [activityName])

    useEffect(() => {
        if (formData && form) {
            setRequiredValidation(true);
            form.value.fields.forEach((item) => {
                if (item.required && formData[item.name] === "") {
                    setRequiredValidation(false);
                }
            })
        }
    }, [formData])
    config.forms.forEach((item, index) => {
        options.push({value: item, label: item.name});
    })

    console.log(form)
    return (
        <div style={{display: "flex"}}>
            <div style={{width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "center", justifyContent: "center"}}>
                <div style={{width: "20%", marginLeft: "auto", marginRight: "auto"}}>
                    <Select isDisabled={defaultData != null} defaultValue={
                        activityName != null ? {value: config.forms.find((item) => item.name === activityName), label: activityName} : null
                    } options={options} onChange={(newValue) => { setForm(newValue) }} />
                </div>
            {form && form.value.fields.map((item, index) => {
                switch (item.type) {
                    case "textarea":
                        return (
                            <div key={index} style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>
                                <label>{item.name}</label>
                                {item.required && <span style={{color: "red"}}>*</span>}
                                <textarea style={{width: "100%", height: "100px"}} value={formData ? formData[item.name] : ""} onChange={(event) => {
                                    setFormData(formData => {
                                        return {
                                            ...formData,
                                            [item.name]: event.target.value
                                        }
                                        });
                                }}>
                                </textarea>
                            </div>
                        )
                    case "select":
                        return (
                            <div key={index} style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>
                                <label>{item.name}</label>
                                {item.required && <span style={{color: "red"}}>*</span>}
                                <select style={{width: "100%"}} value={formData ? formData[item.name] : ""} onChange={(event) => {
                                    setFormData(formData => {
                                        return {
                                            ...formData,
                                            [item.name]: event.target.value
                                        }
                                    });
                                }}>
                                    {item.options.choices.map((choice, index) => {
                                        return (
                                            <option key={index} value={choice.value}>{choice.value}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        )
                    case "bool":
                        return (
                            <div key={index} style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>
                                <label>{item.name} </label>
                                {item.required && <span style={{color: "red"}}>*</span>}
                                <input type="checkbox" checked={formData ? formData[item.name] : false} onChange={(event) => {
                                    setFormData(formData => {
                                        return {
                                            ...formData,
                                            [item.name]: event.target.checked
                                        }
                                    });
                                }}/>
                            </div>
                        )
                    default:
                        return (
                            <div key={index} style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>
                                <label>{item.name}</label>
                                {item.required && <span style={{color: "red"}}>*</span>}
                                <input type={item.type} style={{width: "100%"}} value={formData ? formData[item.name] : ""} onChange={(event) => {
                                    setFormData(formData => {
                                        return {
                                            ...formData,
                                            [item.name]: event.target.value
                                        }
                                    });
                                }} >

                                </input>
                            </div>
                        )
                }
            })}
            {errorText && <p style={{color: "red"}}>{errorText}</p>}
            {requiredValidation && form &&
                <button onClick={() => {
                    console.log(formData)
                    setFormData(formData => {
                        return {
                            ...formData,
                            student: Cookies.get('userId')
                        }
                    })
                    createOnCollection(form.value.name, formData)
                        .then((res) => {
                            console.log(res)
                            navigate('/dashboard');
                        })
                        .catch((error) => {
                            setErrorText("Erreur lors de la création de l'activité (champs invalide ou manquants)");
                            console.error(error);
                        })
                }}>Submit
                </button>
            }
            </div>
        </div>
    )
}

export default FormGenerate;