import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import FeatureCard from "../components/FeatureCard";
import Card from "../components/Card";
import Header from "../components/Header";
import SideWidgets from "../components/SideWidgets";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      <div class="container">
        <div class="row">
          {user && <UserInfo user={user} />}
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <SideWidgets />
              </div>
            </div>
          </div>

          <FeatureCard />
          <Card imageSrc="https://dummyimage.com/700x350/dee2e6/000000.jpg" />
          <Card imageSrc="https://dummyimage.com/700x350/dee2e6/000000.jpg" />
          <Card imageSrc="https://dummyimage.com/700x350/dee2e6/000000.jpg" />
          <Card imageSrc="https://dummyimage.com/700x350/dee2e6/000000.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
