"use client"
import { fetechedpages } from '@/actions/data';
import React,{useEffect, useState} from 'react'
import Image from "next/image";
const Pagination = () => {

    const [products,setProducts] = useState([]);
    const [pages,setPages] = useState(1);

   const fetchdata = async () =>{
    const data = await fetechedpages();

    setProducts(data.products);
   }

    useEffect(() => {
       fetchdata()
    }, []);

  return (
    <>
    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">

      {
          products.slice(pages*10-10,pages*10).map((product) =>(
              <div className="flex relative cursor-pointer" >
            <Image src={product.thumbnail} alt="df" className='object-cover' width={300} height={300} />
                
          
    </div>
        ))
    }
    </div>
    <footer className='flex pt-10 pb-10  justify-between'>
        {
            pages !== 1 &&
        <button onClick={()=>
            
            
            setPages(pages-1)
            
        }>
    left
        </button>
    }
        {products.length>0 && [...Array(products.length/10)].map((key,i)=>{
        return<button className='text-white' onClick={()=>setPages(i+1)} >
            {i+1}
        </button>
        })

            
        }
        {
            products.length/10 > pages &&
        <button onClick={()=>
            
            
            setPages(pages+1)
            
        }>
    right
        </button>
    }
    </footer>
        </>
  )
}

export default Pagination
