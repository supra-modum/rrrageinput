import * as React from "react";
import '../styles/tailwind.css'
export interface HelloWorldProps {
  userName: string;
}
export const App = (props: HelloWorldProps) => (
  <div className={'container mx-auto'}>
    <h1>
      Hi {props.userName}!
    </h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit deleniti
      sapiente, corporis porro mollitia accusantium iste quia ex, deserunt
      soluta laboriosam debitis nihil modi velit? Animi impedit recusandae at
      temporibus?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit deleniti
      sapiente, corporis porro mollitia accusantium iste quia ex, deserunt
      soluta laboriosam debitis nihil modi velit? Animi impedit recusandae at
      temporibus?
    </p>
  </div>
);
