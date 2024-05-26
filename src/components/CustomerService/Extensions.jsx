import "../../assets/styles/Extensions.css"

function Extensions(){
    return(
        <div>
            <div className = "extension-background">
                <label className = "greeting">Welcome to Amazon Customer Service, Vương</label>
                <label className = "question">What would you like help with today? 
                You can quickly take care of most things here, or connect with us when needed.
                </label>
            </div>

            <div className = "grid-box">
                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2.png" alt></img>
                    <label className = "describe">A delivery, order or return</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_AIS.png" alt></img>
                    <label className = "describe">International shopping</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2.png" alt></img>
                    <label className = "describe">Payment, charges or gift cards</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2.png" alt></img>
                    <label className = "describe">Login, address, security & privacy</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2.png" alt></img>
                    <label className = "describe">Kindle, Fire or Alexa device</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3.png" alt></img>
                    <label className = "describe">eBooks, Prime Videos, Music or Games</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2.png" alt></img>
                    <label className = "describe">Prime</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2.png" alt></img>
                    <label className = "describe">Memberships, subscriptions or communications</label>
                </div>

                <div className = "grid-box-child">
                    <img className = "image" src = "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3.png" alt></img>
                    <label className = "describe">Something else</label>
                </div>

            </div>
        </div>
    )
}

export default Extensions
