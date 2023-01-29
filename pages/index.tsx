import { Button, Htag, Ptag, Tag } from "@/components";
import Rating from "@/components/Rating/Rating";
import {  withLayout } from "../layout/Layout";
import { useState } from "react";

 function Home(): JSX.Element {
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
    </>
  );
}



export default withLayout(Home)