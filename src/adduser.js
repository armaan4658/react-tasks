import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from '@material-ui/core/Input';
import {PostContext} from './App';
import { useContext } from "react";
export function AddUser(){
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        avatar: Yup.string().url('Enter a valid URL').required('Avatar is required')
    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validationSchema) });
    const onSubmit=(data)=>{
        postData(data);
    }
    const postData = useContext(PostContext);
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="adduser">
                <Input {...register("name")} placeholder="Enter a name"/>
                {errors.name && (<p>{errors.name.message}</p>)}<br/>
                <Input {...register("avatar")} placeholder="Enter avatar url"/>
                {errors.avatar && (<p>{errors.avatar.message}</p>)}<br/>
                <Input type='submit'/><br/>
            </form>
        </>
    )
}