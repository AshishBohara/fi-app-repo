import React from 'react'
import Lottie from 'react-lottie'

import StatusCard from '../StatusCard/StatusCard'
import { Xlink } from '../Xcomponent'
import NotFoundAnimation from '../../lottie/404.json'
import { Container } from "./NotFoundStyle"

const NotFound = props => {

    // variables
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: NotFoundAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <Container>
            <Lottie
                options={animationOptions}
                height={250}
                width={250}
            />
            <h1 style={{ color: "#fff" }} >Page not found</h1>
            <Xlink to="/" style={{ color: "#d9b34f" }} >Go to Home</Xlink>
        </Container>
    )
}

export default NotFound