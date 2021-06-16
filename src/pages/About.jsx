import React from 'react';

const data = [
  {
    name: "Kyle",
    about: "Software Engineer",
    hobbies: ["cooking", "coffee"]
  },
  {
    name: "John",
    about: "Firefighter",
    hobbies: ["church", "home improvement"]
  }
]

class About extends React.Component {
 render() {
   return (
     <ul>
      {data.map((e) => {
        return (
          <li>
            {e.name}
            <ul>
              {e.hobbies.map((el) => {
                return (
                  <li>
                    {el}
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
     </ul>
   );
 }
}

export default About;