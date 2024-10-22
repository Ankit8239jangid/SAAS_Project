
import React from 'react'
import User from './funComp/FunComp'


export default function About() {
    return (
        <>
            <div className="bg-zinc-100 text-black max-w-sm mx-auto rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                    <h1 className='font-semibold text-lg'>About</h1>

                </div>
            </div>

            <User name={"Ankit janid"}/>
            {/* <UserClass/> */}
        </>
    )
}
