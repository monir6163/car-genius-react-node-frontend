import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setSuccess("");
        }, 5000);
    }, [success]);
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res) {
                    setSuccess('Service Added SuceessFully');
                    reset();
                }
            })
    };
    return (
        <div className="mt-2">
            <h2>Add Some Service Your Website</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-success">{success}</h2>
                <>
                    <label htmlFor="name">Name : </label>
                    <input {...register("name", { required: true })} id="name" placeholder="Type Service Name" />
                </>
                <>
                    <label htmlFor="description">Description : </label>
                    <textarea {...register("description")} id="description" placeholder="Type Service Description" />
                </>
                <>
                    <label htmlFor="price">Price : </label>
                    <input type="number" {...register("price")} id="price" placeholder="Type Service Price" />
                </>
                <>
                    <label htmlFor="img">Image Url : </label>
                    <input {...register("img", { required: true })} id="img" placeholder="Paste Service Image Url" />
                </>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddServices;