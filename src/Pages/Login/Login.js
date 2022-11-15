import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data);
    }


    return (
        <div className='h-[800px] flex justify-center justify-items-center'>
            <div className='w-96 p-7' >
                <h2 className='text-xl'>Login Now</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    {/* Just Form */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <input type="submit" className="btn btn-accent w-full" value="login" />
                </form>
                <p className='mt-2 '>New to Doctors Portal? <Link className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;