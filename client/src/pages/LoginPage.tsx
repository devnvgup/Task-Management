import { useState, useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, User, Auth } from "firebase/auth";
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);
    let user: User  |null
    if (authContext) {
        user = authContext.user
        if (user?.uid) {
            return <Navigate to="/" />;
        }
    }



    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Xử lý logic đăng nhập tại đây
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleLoginWithFacebook = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }


    return (
        <div className='login-page'>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>

                <div className="social-login">
                    <button className="facebook-button">
                        Login with Facebook
                    </button>
                    <button onClick={handleLoginWithFacebook} className="google-button">
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
