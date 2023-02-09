import { Button, Htag, Ptag, Tag, Input } from "@/components";
import Rating from "@/components/Rating/Rating";
import {  withLayout } from "../layout/Layout";
import { useState } from "react";
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '@/interfaces/menu.interface';
import { Textarea } from '@/components/Textarea/Textarea';


 function Home({ menu }: HomeProps): JSX.Element {
   const [rating, setRating] = useState<number>(4);

   return (
     <>
       <Htag tag="h1">Текст</Htag>
       <Button arrow="right" appearence="primary">
         Btn
       </Button>
       <Button appearence="ghost">Btn</Button>
       <Ptag size="s">aaav</Ptag>
       <Ptag size="l">aaav</Ptag>
       <Ptag>aaav</Ptag>
       <Tag size="m" color="primary">
         22323{" "}
       </Tag>
       <Tag size="m" color="red">
         Средний
       </Tag>
       <Tag size="s" color="ghost">
         маленьки
       </Tag>
       <Tag size="s" color="gray">
         маленьки
       </Tag>
       <Tag size="s" href="./sds" color="green">
         маленьки
       </Tag>
       <Rating isEditable rating={rating} setRating={setRating} />
       <ul>
         {menu.map((m, i) => (
           <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
         ))}
       </ul>
       <Input placeholder='Текст'></Input>
       <Textarea placeholder='sadasda'/>
     </>
   );
 }



export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async ()=>{
  const firstCategory = 0;
  const { data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
    firstCategory
  })
  return {
    props:{
      menu,
      firstCategory
    }
  }
};

interface HomeProps extends Record<string,unknown>{
  menu: MenuItem[];
  firstCategory: number
}