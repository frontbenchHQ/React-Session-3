import { Project } from "../../common/Project";

export const Button = () => {
    return(
        Project.map(item => {
            return (
                <a href={item.link}>
                    <div style={{border : "1px solid red"}}>
                        <h4> {item.name} </h4>
                        <p> {item.desc} </p>
                    </div>
                </a>
            )
        })
    )
};

