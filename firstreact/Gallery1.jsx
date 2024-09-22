
// import Pic from '/image/London Tipps.jpg'
export function getImageUrl(imageID, size = "l"){
    return "https://i.imgur.com/" + imageID + size + ".jpg";
}

function Profile({imageID,name,profession,awards,discovery,imageSize = 70}) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img style={{borderRadius: "50%"}} className="avatar" src={getImageUrl(imageID)} alt={name} width={imageSize} height={imageSize} />
            <ul>
                <li>
                    <b>Profession: </b> {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>({awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b> {discovery}
                </li>
            </ul>
            {/* <img src="{Pic}" alt="" /> */}
        </section>
    )
}

export default function Gallery1(){
    return(
        <div>
            <h1>Notable Scientists</h1>
            <Profile 
            imageID="YfeOqp2"
            name="Maria Sklodowska-Curie"
            profession="physicist and chemist"
            discovery="polonium (chemical element)"
            awards={[
                "Nobel Price in Physics",
                "Nobel Price in Chemistry",
                "Davy Medal",
                "Matteuci Medal"
            ]}/>
            <Profile 
            imageID=""
            name="Katsuko Saruhashi"
            profession="geochemist"
            discovery="a method for measuring carbon dioxide in seawater"
            awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}/>
        </div>
    )
}