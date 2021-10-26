import * as React from "react";
import Image from "next/image";
import { Pricing } from "../interfaces";
import { HeadlineTwo, Card, Button, Details } from "./common";

type Props = {
  data: Pricing;
};

const PricingCard = ({ data }: Props) => (
  <Card>
    <aside>
      <Image
        src={"/img/user-img.jpg"}
        alt={data.name}
        width={230}
        height={230}
      />
      <h4>Escanor16</h4>
    </aside>
    <div>
      <HeadlineTwo>{data.name}</HeadlineTwo>
      <p>
        A recusandae eum ipsam ducimus, quidem qui accusantium illo soluta
        praesentium magni!
      </p>
      <Details>
        <Button>Stars:</Button>
        <Button>Issues:</Button>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit at
          culpa odio voluptatem similique doloribus.
        </span>
      </Details>
    </div>
  </Card>
);

export default PricingCard;
