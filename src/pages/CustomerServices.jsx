import CustomerServicesHeader from "../components/CustomerService/CustomerServicesHeader.jsx";
import Extensions from "../components/CustomerService/Extensions.jsx";
import HelpTopic from "../components/CustomerService/HelpTopic.jsx";

function CustomerServies(){
    return(
       <div className="bg-cyan-800">
            <CustomerServicesHeader></CustomerServicesHeader>
            <Extensions></Extensions>
            <HelpTopic></HelpTopic>   
       </div>  
    )
}

export default CustomerServies
