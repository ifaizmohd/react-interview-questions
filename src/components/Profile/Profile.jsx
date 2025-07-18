const Profile = () => (
  <form>
    <label htmlFor="name">Name:</label>
    <input type="text" placeholder="Please enter your name" />
    <label htmlFor="age">Age:</label>
    <input type="number" min={18} />
  </form>
);

export default Profile;
