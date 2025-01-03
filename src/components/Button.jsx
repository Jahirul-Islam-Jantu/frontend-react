const Button = ({ title, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className="custom-button">
                {title}
            </button>
        </div>
    );
};

export default Button;



// const Button = ({title, onClick}) => {
//     return (
//         <div>
//             <button onClick={onClick} className="custom-button">{title}</button>
//         </div>
//     );
// };
//
// export default Button;