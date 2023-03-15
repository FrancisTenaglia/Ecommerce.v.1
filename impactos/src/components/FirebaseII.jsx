import { useState } from "react"

const FirebaseII = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const generarOrden =() =>{
        const buyer ={
            name:name,
            email:email,
            phone:phone
        }
        const items= [
            {id: 1, title: "coca", price: 550 },
            {id:2,  title: "pepsi", price: 500 }
        ]
        const total = 1070;
        const order = {
            buyer: buyer,
            items: items,
            total: total
        }
        console.log(order)
    };

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <h1>firebaseII</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" onInput={(e) => {setName(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="phone" onInput={(e) => {setPhone(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden} >Generar Orden</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FirebaseII;