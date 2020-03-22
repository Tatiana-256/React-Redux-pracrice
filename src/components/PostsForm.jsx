import React from 'react';
import {setNewPost, showAlert, hideAlert} from "../redux/actions";
import {connect} from "react-redux";
import Alert from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if (!title.trim()) {
            return this.props.showAlert('Write your post')
        }

        const newPost = {title, id: Date.now().toString()}
        console.log(newPost)
        this.props.setNewPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = (event) => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }


    render() {
        return (<form onSubmit={this.submitHandler}>
                {
                    this.props.alert && <Alert text={this.props.alert}/>
                }
                <div className="form-group">
                    <label htmlFor="title">Your post</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name='title'
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className='btn btn-success' type='submit'>Add post</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    setNewPost,
    showAlert,
    hideAlert
}

const mapStateToProps = state => ({alert: state.loading.alert})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)