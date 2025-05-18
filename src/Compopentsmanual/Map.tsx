import React, { FC, useState } from 'react';
import { motion } from "framer-motion"


const Map: FC = () => {
    const [img ,setimg]=useState<string|null>()
  const data =[
    {src:'/public/vite.svg', data:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veritatis rerum possimus ratione quia quasi aliquid eaque nisi ab illo alias quos incidunt praesentium iure qui, aspernatur deleniti eveniet velit! "},

       {src:'/public/vite.svg', data:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veritatis rerum possimus ratione quia quasi aliquid eaque nisi ab illo alias quos incidunt praesentium iure qui, aspernatur deleniti eveniet velit!"},
           {src:'/public/vite.svg', data:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veritatis rerum possimus ratione quia quasi aliquid eaque nisi ab illo alias quos incidunt praesentium iure qui, aspernatur deleniti eveniet velit!"},
               {src:'/public/vite.svg', data:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veritatis rerum possimus ratione quia quasi aliquid eaque nisi ab illo alias quos incidunt praesentium iure qui, aspernatur deleniti eveniet velit!"},
                {src:'/public/vite.svg', data:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veritatis rerum possimus ratione quia quasi aliquid eaque nisi ab illo alias quos incidunt praesentium iure qui, aspernatur deleniti eveniet velit!"}, {src:'/public/vite.svg', data:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veritatis rerum possimus ratione quia quasi aliquid eaque nisi ab illo alias quos incidunt praesentium iure qui, aspernatur deleniti eveniet velit!"}, {src:'/public/vite.svg', data:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veritatis rerum possimus ratione quia quasi aliquid eaque nisi ab illo alias quos incidunt praesentium iure qui, aspernatur deleniti eveniet velit!"},
  ]


  return (
   <div className=' h-screen bg-white   gap-10  grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  justify-evenly '> 
{
    data.map((slice,index)=>(
        <motion.div
        whileHover={{x:10}}
        transition={{duration:0.3}}
        whileTap={{x:10}}
        className=' grid  mx-6 rounded-4xl hover:rounded-none   bg-linear-to-r from-slate-200 via-gray-100-300 to-slate-100  grid-cols-1 justify-evenly   mt-3 items-center ml-2 p-2 gap-2 '> 
        <div><motion.img  
        src={slice.src}
        initial={{scale:0}}
        transition={{duration:0.5}}
        whileInView={{scale:1}}
        exit={{scale:0}}
         onClick={()=>{
            setimg(slice.src)
         }}
        className='  mx-auto h-[200px]  w-[90%] rounded-2xl object-fill' />  </div>
        <div className=' flex felx-col justify-evenly '>
            <motion.div
            initial={{x:-100}}
            whileInView={{x:0}}
            transition={{duration:0.5}}
             className=' w-1/2 text-center text-sm ' >  {slice.data}</motion.div>
        </div>

         </motion.div>
    ))
}

       { img && (
            <div className='bg-black absolute z-50  h-[80vh] w-screen '>
                setimg(null)
            <img src={img}
            className='w-full h-full'
           onClick={() => setimg(null)}      
/>

            </div>
            
       )
    }
   </div>
  );
};

export default Map;
