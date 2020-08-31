import React, {useState, useRef, useEffect} from 'react';

const Entry = (props) => {
    // props.history.push('/Admin');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const c = canvas.getContext('2d');

        const animate = () => {
            requestAnimationFrame(animate);
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            c.beginPath();
            c.moveTo(0, canvas.height - canvas.height * 0.4);
            c.lineTo(canvas.width, canvas.height - canvas.height * 0.8);
            c.lineTo(canvas.width, canvas.height);
            c.lineTo(0, canvas.height);
            c.fillStyle = '#222323' // 9c9c9c
            c.fill();
        }

        animate();
    })
      

    return (
        <div>
            <h1 className='logo-nav'>La'Bore</h1>
            <hr />
            <canvas 
                style={{position: "fixed"}}
                ref={canvasRef}
            />
            <div className='container'>
                <div className='login'>
                    <h1 className='login-title'>Log in</h1>
                    <p>Welcome back! Login to access La'Bore admin page.</p>
                    <p>Did you <i>forget your password?</i></p>
                    <form>
                        <div>
                            <input type='text' placeholder='Username' value={username} onChange={({target}) => setUsername(target.value)} />
                        </div>
                        <div>
                            <input type='password' placeholder='Password' value={password} onChange={({target}) => setPassword(target.value)} />
                        </div>
                    </form>
                    <button>Login</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Entry;