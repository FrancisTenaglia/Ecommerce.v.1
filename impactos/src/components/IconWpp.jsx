import whatsapp from "./images/whatsapp.svg"

const IconWpp = () => {
    return(
        <div className="container">
           <a href="https://api.whatsapp.com/send?phone=2235446640&text=Hola, aqui te comunicaras con la tienda online"className="btn-wsp" target={"_blank"} rel="noreferrer"><img src={whatsapp} alt="whatsapp" width={24} /></a>
        </div>
    );
};

export default IconWpp;