import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateService = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setSuccess("");
        }, 5000);
    }, [success]);
    const { servicesID } = useParams();
    const [service, setService] = useState({ name: "", description: "", price: "", img: "" });
    useEffect(() => {
        const url = `https://floating-waters-81140.herokuapp.com/services/${servicesID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [servicesID]);
    // update data 
    const onSubmit = (data) => {
        axios.put(`https://floating-waters-81140.herokuapp.com/services/${servicesID}`, data)
            .then(res => {
                if (res) {
                    setSuccess('Service Updated SuceessFully');
                    setService({});
                }
            })
    }

    return (
        <div>
            <h2>Update: {service.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-success">{success}</h2>
                <>
                    <label htmlFor="name">Name : </label>
                    <input {...register("name", { required: true })} id="name" defaultValue={service.name} />
                </>
                <>
                    <label htmlFor="description">Description : </label>
                    <textarea {...register("description")} id="description" defaultValue={service.description} />
                </>
                <>
                    <label htmlFor="price">Price : </label>
                    <input type="number" {...register("price")} id="price" defaultValue={service.price} />
                </>
                <>
                    <label htmlFor="img">Image Url : </label>
                    <input {...register("img", { required: true })} id="img" defaultValue={service.img} />
                </>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateService;