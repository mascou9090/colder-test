import * as C from './style';
import { useState } from 'react';

export const Posts = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleModel = () => {
    setIsOpen(!false);
  }

  return (
    <C.Container>
      <header>
        <h3>Titulo</h3>
        <div>
          <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.80087 20.75C1.80087 22.125 2.971 23.25 4.40115 23.25H14.8023C16.2324 23.25 17.4025 22.125 17.4025 20.75V5.75H1.80087V20.75ZM4.99921 11.85L6.83241 10.0875L9.6017 12.7375L12.358 10.0875L14.1912 11.85L11.4349 14.5L14.1912 17.15L12.358 18.9125L9.6017 16.2625L6.84541 18.9125L5.01221 17.15L7.76851 14.5L4.99921 11.85ZM14.1522 2L12.852 0.75H6.35136L5.05122 2H0.500732V4.5H18.7027V2H14.1522Z" fill="white"/>
          </svg>

          <svg onClick={() => handleModel()} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.10095 18.2663L11.8385 18.2475L24.3614 6.3225C24.8528 5.85 25.1233 5.2225 25.1233 4.555C25.1233 3.8875 24.8528 3.26 24.3614 2.7875L22.2994 0.805C21.3165 -0.14 19.6016 -0.135 18.6265 0.80125L6.10095 12.7288V18.2663ZM20.461 2.5725L22.5269 4.55125L20.4506 6.52875L18.3886 4.5475L20.461 2.5725ZM8.70123 13.7713L16.5411 6.305L18.6031 8.2875L10.7645 15.7513L8.70123 15.7575V13.7713Z" fill="white"/>
            <path d="M3.50067 23.25H21.7026C23.1367 23.25 24.3029 22.1288 24.3029 20.75V9.915L21.7026 12.415V20.75H7.6065C7.5727 20.75 7.5376 20.7625 7.50379 20.7625C7.46089 20.7625 7.41798 20.7513 7.37378 20.75H3.50067V3.25H12.4027L15.003 0.75H3.50067C2.06661 0.75 0.900391 1.87125 0.900391 3.25V20.75C0.900391 22.1288 2.06661 23.25 3.50067 23.25Z" fill="white"/>
          </svg>
        </div>
      </header>
      <div>
        <div>
          <h4>@Vini</h4>
          <p>4 minutes ago</p>
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus, architecto iure quo in minus, facere obcaecati sed reiciendis rerum, quasi ea libero expedita non deleniti. In magni obcaecati nihil!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus accusantium numquam nostrum ea recusandae omnis at corrupti alias cum deserunt odit, vero tempora obcaecati architecto asperiores minima atque qui!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim nobis quia blanditiis iusto iste obcaecati harum omnis voluptate, optio, incidunt voluptatum recusandae fuga rerum officiis sequi, beatae earum molestiae.
            <br/>
            <br/>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit repellat similique, vel delectus cupiditate quas, ullam pariatur cum blanditiis amet necessitatibus rem harum perspiciatis alias beatae ipsum sint! Voluptatibus.
        </div>
      </div>
    </C.Container>
  )
}
