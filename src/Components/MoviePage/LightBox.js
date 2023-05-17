import React from 'react';

export default class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    openLightbox = () => {
        this.setState({
            isOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        const { isOpen } = this.state;
        const { src, alt } = this.props;

        return (
            <div>
                <img src={src} alt={alt} onClick={this.openLightbox} />

                {isOpen && (
                    <div className="lightbox-overlay" onClick={this.closeLightbox}>
                        <div className="lightbox-content">
                            <img src={src} alt={alt} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

