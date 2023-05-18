import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Image} from "react-bootstrap";

export default function PhotoBox({ image }) {
    const [open, setOpen] = useState(false);
    console.log(image);

    const slides = image.map((img) => ({ src: img }));

    return (
        <>
            <Image width={500} src={image[1]} onClick={() => setOpen(true)}/>
            <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
        </>
    );
}
