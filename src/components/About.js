import React from "react"
import Button from "./theme/Button"


const About = () => {
    return(
        <>
            <h1>hello</h1>
            <div>
        <div>
            <div>
            <Button primary>Primay</Button>
            </div>
            <div>
            <Button secondary>Secondary</Button>
            </div>
            <div>
            <Button warning>Warning</Button>
            </div>
            <div>
            <Button danger>Danger</Button>
            </div>

            <div>
            <Button success>Success</Button>
            </div>
        </div>
        </div>
        </>
    )
}

export default About