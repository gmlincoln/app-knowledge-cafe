import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center py-4 border-b-2 px-4 lg:px-0">
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={Profile} alt="" />

            </div>
        </>
    );
};

export default Header;