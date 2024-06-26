import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    // jehutu home route er vetor services dekhabo tai
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-7">
            <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold text-orange-500">Our Services</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* map kore potita service er jonno ekta kore service card dekhabo and fetch er maddhome paua data service er maddhome pathai debo */}
                {services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;