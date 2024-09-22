import React from 'react'

const MapMethod2 = () => {
    let classMemebers =
    [
        "aaaaa1","aaaaa2","aaaa3","sssss3","dhdhd4","jdjdjdjd4",
        "aaaaa1","aaaaa2","aaaa3","sssss3","dhdhd4","jdjdjdjd4"
    ];
    const myMap = classMemebers.map((member) => <p>{member}</p>)
  return myMap
}

export default MapMethod2