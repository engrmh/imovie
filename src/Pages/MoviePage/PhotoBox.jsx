import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image } from "react-bootstrap";

export default function PhotoBox({ image }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0); // Introduce index state

    const slides = image.map((img) => ({ src: img }));

    return (
        <>
            <Image rounded fluid width={500} src={image[1]} onClick={() => setOpen(true)} />
            {open && (
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                />
            )}
        </>
    );
}
