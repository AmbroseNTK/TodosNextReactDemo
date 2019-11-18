import Link from 'next/link';
import Card from '@material-ui/core/Card';
import React from 'react';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        };
        this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }

    mouseEnterHandler(e) {
        this.setState({ isHover: true })
    }

    mouseLeaveHandler(e) {
        this.setState({ isHover: false })
    }

    render() {
        const style = {
            marginBottom: 20,
            padding: 50
        }
        return (
            <Card style={style} raised={this.state.isHover}
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}>
                {this.props.name}
            </Card>
        )
    };
}

export default function TaskList(props) {

    return (
        <ul>
            {props.tasks.map((task) => (
                <Link href={"/task?title=" + task.id}>
                    <MovieItem name={task.name} />
                </Link>
            ))}
        </ul>
    )
}