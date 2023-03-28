import PropTypes from "prop-types";

const Toast = ({ toasts, deleteToast }) => {
  return (
    <div className="position-fixed bottom-0 end-0 p-2">
      {toasts.map((toast) => {
        return (
          <div
            key={toast.id}
            onClick={() => deleteToast(toast.id)}
            className={`cursor-pointer alert alert-${
              toast.type || "success"
            } m-0 py-2 mt-2`}
          >
            {toast.text}
          </div>
        );
      })}
    </div>
  );
};

// Toast.propTypes = {
//   toast: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string,
//       type: PropTypes.string,
//     })
//   ).isRequired,
// };

Toast.defaultProps = {
  toasts: [],
};

export default Toast;
