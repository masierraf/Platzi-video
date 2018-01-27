import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import '../../css/components/media.css'


class Media extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.setState({
            ...this.props
        });
    }

    componentDidCatch() {}

    handleTitleClick = event => {
        alert(this.state.title);
    };

    render() {
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img
                        src={this.state.cover}
                        alt={this.state.title}
                        className="Media-image"
                        width={240}
                        height={160}
                        onClick={this.props.handleOpenModal}
                    />
                    <h3 className="Media-title" onClick={this.handleTitleClick}>
                        {this.state.title}
                    </h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        );
    }
}

Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Media;
