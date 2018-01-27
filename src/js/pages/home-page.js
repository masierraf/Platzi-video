import React, { Component } from "react";
import HomeLayout from "../layouts/home-layout";
import Categories from "../components/base/categories";
import Related from "../components/base/related";
import ModalContainer from "../widgets/modal-container";
import Modal from "../widgets/modal";
import HandleError from "../components/errors/handle-error";
import VideoContainer from  '../widgets/videoPlayer/video-container'

class Home extends Component {
    state = {
        modalVisible: false
    };

    handleCloseModal = event => {
        this.setState({
            modalVisible: false
        });
    };

    handleOpenModal = () => {
        this.setState({
            modalVisible: true
        });
    };

    render() {
        return (
            <HomeLayout>
                <Related />
                <VideoContainer autoplay={false} />
                <HandleError>
                    <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal} />
                </HandleError>
                {this.state.modalVisible && (
                    <ModalContainer>
                        <Modal handleClick={this.handleCloseModal}>
                            <h1>esto es un modal</h1>
                        </Modal>
                    </ModalContainer>
                )}
            </HomeLayout>
        );
    }
}

export default Home;
