import { useNavigate } from "react-router-dom";

// Define a functional component for a grid of buttons
const ButtonGrid = ({categoryName, buttons}) => {
    const navigate = useNavigate();

    return (
        <div className="container mb-5 center">
            <div className="box justify-content-center">
                <h2 className="text-xl page-header mt-3 mb-3">{categoryName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className="btn btn-primary mt-4"
                            onClick={() => navigate(button.route)}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ButtonGrid; // Export the ButtonGrid component
