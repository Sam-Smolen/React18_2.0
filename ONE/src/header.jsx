const Header = () => {

    const getTheYear = () => {
        let newDate = new Date();
        return newDate.getFullYear()
    }

    return(
        <div>
            The year is {getTheYear()}
        </div>
    )
};

export default Header;