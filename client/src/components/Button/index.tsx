const Button = ({ children, loading, type, onClick, className }: Button) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...(loading && { disabled: true })}
      className={`bg-orange-500 transition-all ease-in-out text-xl text-white py-2 px-5 rounded-lg hover:bg-orange-600 ${className} ${
        loading && 'opacity-50'
      }`}
    >
      {loading && <i className='fas fa-spinner fa-spin mr-2'></i>}
      {children}
    </button>
  );
};

export default Button;
