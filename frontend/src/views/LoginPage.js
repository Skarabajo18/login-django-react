import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Welcome Back!</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter Username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <hr />
                <a href="index.html" className="btn btn-google btn-user btn-block">
                  <i className="fab fa-google fa-fw"></i> Login with Google
                </a>
                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                  <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
