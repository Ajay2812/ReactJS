import React from "react";


export default function Main() {

    const [meme,setMeme]=React.useState(
        {
            topText:"One does not simple",
            bottomText:"Walk into Mordor",
            imageUrl:"https://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemes,setMemes]=React.useState([])

    React.useEffect(function(){
      fetch("https://api.imgflip.com/get_memes")
        .then(response=>response.json())
          .then(data=>setMemes(data.data.memes))
    },[])

    function handleChange(event){
        const {value,name}=event.currentTarget
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }
    function getMeme(){
      const randomNum=Math.floor(Math.random() * allMemes.length)
      const newUrl=allMemes[randomNum].url 
      console.log(newUrl)
      setMeme(prevMeme=>({
        ...prevMeme,
        imageUrl:newUrl
      })
      )
    }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" 
          placeholder="One does not simply" 
          name="topText" 
          onChange={handleChange}
          value={meme.topText}/>
        </label>
        <label>
          Bottom Text
          <input type="text" 
          placeholder="Walk into Mordor"
           name="bottomText"
           onChange={handleChange}
           value={meme.bottomText} />
        </label>

      </div>
      <button onClick={getMeme}>Get a new meme image</button>
      <div className="meme">
        <img src={meme.imageUrl}/>
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>

    </main>
  );
}
