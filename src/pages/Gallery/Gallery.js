
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";
import car3 from "../../images/car3.jpg";
import car4 from "../../images/car4.jpg";
import car5 from "../../images/car5.jpg";
import CardsCollection from "./components/CardsCollection";

const data = [
    {name:"Card #1", text: "Some description for card #1",image:car1},
    {name:"Card #2", text: "Some description for card #1",image:car2},
    {name:"Card #3", text: "Some description for card #1",image:car3},
    {name:"Card #4", text: "Some description for card #1",image:car4},
    {name:"Card #5", text: "Some description for card #1",image:car5}
]
const Gallery = () =>
    {
        return (
            <div className="container my-3">
                <CardsCollection data={data}/>
            </div>
        )
    }
    export default Gallery;