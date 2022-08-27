import Cards from "../cards/Cards";
import './Divs.css'


const Divs = ({prips}) => {

    return(
        <div className='apparence'>
            {prips.map((e , index) => {
                return <Cards crds={prips} key={index} {...e} />
            })}
        </div>
    )
}
export default Divs;