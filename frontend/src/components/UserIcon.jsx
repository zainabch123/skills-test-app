const UserIcon = ({ userInfo }) => {
  return (
    <>
      {userInfo && (
        <div className="user-icon">
          <div
            className="user-img"
            style={{ backgroundColor: `${userInfo.favouriteColour}` }}
          >
            {`${userInfo.firstName[0]}${userInfo.lastName[0]}`}
          </div>
        </div>
      )}
    </>
  );
};

export default UserIcon;
